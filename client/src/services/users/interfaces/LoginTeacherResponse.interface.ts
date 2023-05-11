import {ILoginResponse} from "./LoginResponse";
import { Roles } from '../../../modules/Auth';

export interface ILoginTeacherResponse extends ILoginResponse{
    name: string
    username: string
    id: string
    role: Roles
}