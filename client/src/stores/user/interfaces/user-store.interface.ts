import {UserStudentDto} from "./user-student-dto";
import {Roles} from "../../../modules/Login/enums/loginType.enum";

export interface IUserStore {
    uuid: string
    name: string
    group: string
    course: number
    role: Roles
    accessToken: string
    setUUID: () => void
    setAccessToken: (access_token: string) => void
    setStudent: (studentData: UserStudentDto) => void
}