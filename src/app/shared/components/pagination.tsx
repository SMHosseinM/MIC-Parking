import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { PaginationProps } from "../models/page.model";

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPageNumbers = () => {
        const pageNumbers = []
        if (totalPages <= 7) {
          for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i)
          }
        } else {
          if (currentPage <= 3) {
            pageNumbers.push(1, 2, 3, 4, '...', totalPages)
          } else if (currentPage >= totalPages - 2) {
            pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
          } else {
            pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
          }
        }
        return pageNumbers
      }

    return (
        <nav className="flex items-center justify-center space-x-2 mt-4" aria-label="Pagination">
            <Button
                variant="outline"
                size="icon"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                <span className="sr-only">Previous page</span>
                <ChevronLeft className="h-4 w-4" />
            </Button>

            { getPageNumbers().map((number, index) => (
                number === '...' ? (
                <Button key={`ellipsis-${index}`} variant="outline" size="icon" disabled>
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
                ) : (
                <Button 
                key={number}
                variant={currentPage === number ? "default" : "outline"}
                size="icon"
                onClick={() => onPageChange(number as number)}
                > 
                    {number} 
                </Button>
            )))}

            <Button
            variant="outline"
            size="icon"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            >
                <span className="sr-only">Next page</span>
                <ChevronRight className="h-4 w-4" />
            </Button>
        </nav>
    )
}