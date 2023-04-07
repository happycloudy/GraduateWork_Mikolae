import {UserStudentDto} from "./user-student-dto";
import {Roles} from "../../../modules/Login/enums/loginType.enum";
import {UserTeacherDto} from "./user-teacher-dto";

export interface IUserStore {
    id: string
    uuid: string
    name: string
    username: string
    group: string
    course: number
    role: Roles
    accessToken: string
    isAuth: boolean
    setUUID: () => void
    setAccessToken: (access_token: string) => void
    setStudent: (studentData: UserStudentDto) => void
    setTeacher: (studentData: UserTeacherDto) => void
    logout: () => void
}