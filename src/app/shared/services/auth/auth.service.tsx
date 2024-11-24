import axios, { AxiosInstance } from "axios";
import { toast } from 'react-toastify'
import { LoginForm, SignUpForm } from "../../models/auth.model";


export class AuthService {

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

    public async saveNewMembership(endpoint: string, body: SignUpForm): Promise<void>{
        try {
            await this.axiosInstance.post<void>(endpoint, body)
            toast.success(
                <div>
                    We will review and verify your account soon!
                </div>
            )
          } catch (error: any) {
            toast.error(error.response.data.message)
          }
        
    }

    public async login(endpoint: string, body: LoginForm): Promise<void> {
        try {
            await this.axiosInstance.post<void>(endpoint, body, {withCredentials: true});
        } catch (error: any) {
            toast.error(error.response.data.message)
        }
    }
}