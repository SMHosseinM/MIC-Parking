import axios, { AxiosInstance, AxiosResponse } from "axios";
import { MembershipForm } from "../models/membeship.model";
import { toast } from 'react-toastify'


export class MembershipService {

    private axiosInstance: AxiosInstance

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://localhost:3000/membership',
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            },
        }) 
    }

    public async saveNewMembership(endpoint: string, body: MembershipForm): Promise<void>{
        try {
            await this.axiosInstance.post<void>(endpoint, body)
            toast.success(
                <div>
                    Thanks for your membership!
                    <br />
                    QR Code will be emailed shortly.
                </div>
            )
          } catch (error: any) {
            toast.error(error.response.data.message)
          }
        
    }
}