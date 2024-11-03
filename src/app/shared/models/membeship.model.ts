import exp from "constants"

export interface NewMembershipForm {
    firstName: string,
    lastName: string,
    email: string,
    transactionReference: string,
    transactionDate: string
}

export interface RenewMembershipForm {
    email: string,
    transactionReference: string,
    transactionDate: string
}

export interface ReissueQRCodeForm {
    email: string
}