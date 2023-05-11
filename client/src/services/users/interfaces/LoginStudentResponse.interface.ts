import {Roles} from "../../../modules/OLD_Login/enums/loginType.enum";
import {ILoginResponse} from "./LoginResponse";

export interface ILoginStudentResponse extends ILoginResponse{
    name: string
    group: string
    course: number
    role: Roles
}