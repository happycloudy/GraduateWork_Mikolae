import {Roles} from "../../../modules/Login/enums/loginType.enum";

export interface ILoginStudentResponse {
    name: string
    group: string
    course: number
    role: Roles
    access_token: string
}