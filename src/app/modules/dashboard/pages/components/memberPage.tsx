import { Pagination } from "@/app/shared/components/pagination";
import { Member } from "@/app/shared/models/membeship.model";
import { Page } from "@/app/shared/models/page.model";
import { MemberService } from "@/app/shared/services/member/member.service";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { useEffect, useState } from "react";

const members: (limit: number, offset: number) => Promise<Page<Member>> = async (limit, offset) => {
    const response = await new MemberService().getMemberPage(limit, offset);
    return response.data; // Assuming `response` has a `data` property containing the `Page<Member>` structure.
};

export default function MemberPage() {
    const [membersData, setMembersData] = useState<Member[]>([]);
    const [offset, setOffset] = useState(0);
    const fetchLimit = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0);
  
    const handlePageChange = (page: number) => {
      setCurrentPage(page)
      setOffset((page-1)*fetchLimit);
    }

    useEffect(() => {
        const fetchData = async () => {
            console.log('use effect activated - offset: ', offset);
            const data = await members(fetchLimit, offset);
            setMembersData(data.data);
            setTotalPages(Math.ceil(data.totalCount / fetchLimit));
        };

        fetchData();
    }, [offset]);

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Registration Number</TableHead>
                        <TableHead>Active</TableHead>
                        <TableHead className="w-[100px]">More</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {membersData.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{`${item.first_name} ${item.last_name}`}</TableCell>
                            <TableCell>{item.registration_number}</TableCell>
                            <TableCell>{`${item.is_active}`}</TableCell>
                            <TableCell>
                                <Button 
                                variant="outline" 
                                size="icon"
                                className="h-9 w-9 rounded-lg border-gray-200 hover:bg-gray-50 hover:border-gray-200"
                                >
                                    <MoreHorizontal/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    <TableRow></TableRow>
                </TableBody>
            </Table>
            <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages}
            onPageChange={handlePageChange}></Pagination>
        </div>
    )
}