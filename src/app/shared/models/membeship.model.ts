
export interface MembershipForm {
    firstName: string;
    lastName: string;
    email: string;
    transactionReference: string;
    transactionDate: string;
    registrationNumber: string;
    phoneNumber: string;
    isActive: boolean;
}

export interface RenewMembershipForm {
    email: string,
    transactionReference: string,
    transactionDate: string
}

export interface ReissueQRCodeForm {
    email: string
}

export interface Member {
    id?: string
    first_name: string
    last_name: string
    email: string
    registration_number: string
    phone_number: string
    transaction_reference: string
    transaction_date: Date | string
    is_active?: boolean
    created_at?: Date | string
  }