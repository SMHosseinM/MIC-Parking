
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