
import {ILoginResponse} from "./LoginResponse";
import { Roles } from '../../../modules/Auth';

export interface ILoginStudentResponse extends ILoginResponse{
    name: string
    group: string
    course: number
    role: Roles
}