import axios, { AxiosInstance } from "axios";
import { Member } from "../../models/membeship.model";
import { toast } from 'react-toastify'
import { Page } from "../../models/page.model";

export class MemberService {

    private axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            },
        }) 
    }

    public async getMemberPage(limit: number, offset: number) {
        try {
            return await this.axiosInstance.get<Page<Member>>(`/dashboard/member/page?limit=${limit}&offset=${offset}`);
          } catch (error: any) {
            toast.error(error.response.data.message);
            throw new Error(error.response?.data?.message || "Error fetching member page");
          }
        
    }
}