import {ILoginResponse} from "./LoginResponse";

export interface IRegisterStudentResponse extends ILoginResponse{
    access_token: string
}
