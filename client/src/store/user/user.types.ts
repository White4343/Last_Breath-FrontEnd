import {IResPayment} from "../../utils/api/types";

export interface UserState {
    id: number
    username: string
    first_name: string
    last_name: string
    birth_date: string
    role: string
    email: string
    isLoading: boolean
    error: string
    payment: IResPayment[]
}
