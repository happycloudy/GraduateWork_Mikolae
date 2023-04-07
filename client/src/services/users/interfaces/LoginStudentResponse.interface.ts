import {Roles} from "../../../modules/Login/enums/loginType.enum";
import {ILoginResponse} from "./LoginResponse";

export interface ILoginStudentResponse extends ILoginResponse{
    name: string
    group: string
    course: number
    role: Roles
}