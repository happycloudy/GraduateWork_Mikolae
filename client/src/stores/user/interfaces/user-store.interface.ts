import {UserStudentDto} from "./user-student-dto";
import {Roles} from "../../../modules/Login/enums/loginType.enum";
import {UserTeacherDto} from "./user-teacher-dto";
import {ILesson} from "../../../interfaces/ILesson";
import {IVisit} from "../../../interfaces/IVisit";

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

    lessons: ILesson[]
    visits: IVisit[]

    setUUID: () => void
    setAccessToken: (access_token: string) => void
    setStudent: (studentData: UserStudentDto) => void
    setTeacher: (studentData: UserTeacherDto) => void
    logout: () => void
    initVisits: (visits: IVisit[]) => void
}