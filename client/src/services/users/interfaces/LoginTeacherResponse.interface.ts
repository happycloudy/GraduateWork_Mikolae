import {ILoginResponse} from "./LoginResponse";
import {Roles} from "../../../modules/Login/enums/loginType.enum";

export interface ILoginTeacherResponse extends ILoginResponse{
    name: string
    username: string
    id: string
    role: Roles
}