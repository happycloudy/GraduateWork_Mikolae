import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {IUserStore} from "./interfaces/user-store.interface";
import {getUUIDAsync} from "../../helpers/getUUIDAsync";
import {UserStudentDto} from "./interfaces/user-student-dto";
import {Roles} from "../../modules/Login/enums/loginType.enum";
import {UserTeacherDto} from "./interfaces/user-teacher-dto";
import {IVisit} from "../../interfaces/IVisit";

export const useUserStore = create<IUserStore>()(
    devtools(
        persist(
            (set, get) => ({
                id: '',
                uuid: '',
                name: '',
                username: '',
                group: '',
                course: -1,
                role: Roles.Student,
                accessToken: '',
                isAuth: false,
                isLocationAccessed: false,

                lessons: [],
                visits: [],

                setUUID: async () => {
                    const uuid = await getUUIDAsync() as string
                    set(() => ({uuid: uuid}))
                },
                setAccessToken: (access_token: string) => set(() => ({accessToken: access_token})),
                setStudent: (dto: UserStudentDto) => set(() => ({
                    name: dto.name,
                    role: dto.role,
                    group: dto.group,
                    course: dto.course,
                    accessToken: dto.access_token,
                    id: dto.id,
                    isAuth: true
                })),
                setTeacher: (dto: UserTeacherDto) => set(() => ({
                    name: dto.name,
                    username: dto.username,
                    id: dto.id,
                    role: dto.role,
                    accessToken: dto.access_token,
                    isAuth: true
                })),
                logout: () => set({
                    id: '',
                    name: '',
                    username: '',
                    group: '',
                    course: -1,
                    role: Roles.Student,
                    accessToken: '',
                    isAuth: false,
                    visits: []
                }),
                initVisits: (visits: IVisit[]) => set({visits}),
                setLocationAccess: (isLocationAccessed) => set({isLocationAccessed})
            }),
            {
                name: 'user-store'
            }
        )
    )
)