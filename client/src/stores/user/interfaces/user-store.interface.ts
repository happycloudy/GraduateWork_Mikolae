import {UserStudentDto} from "./user-student-dto";
import {UserTeacherDto} from "./user-teacher-dto";
import {ILesson} from "../../../interfaces/ILesson";
import {IVisit} from "../../../interfaces/IVisit";
import { Roles } from '../../../modules/Auth';

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
    isLocationAccessed: boolean

    lessons: ILesson[]
    visits: IVisit[]

    setUUID: () => void
    setAccessToken: (access_token: string) => void
    setStudent: (studentData: UserStudentDto) => void
    setTeacher: (studentData: UserTeacherDto) => void
    logout: () => void
    initVisits: (visits: IVisit[]) => void
    setLocationAccess: (isLocationAccessed: boolean) => void
}