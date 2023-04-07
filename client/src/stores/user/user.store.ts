import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {IUserStore} from "./interfaces/user-store.interface";
import {getUUIDAsync} from "../../helpers/getUUIDAsync";
import {UserStudentDto} from "./interfaces/user-student-dto";
import {Roles} from "../../modules/Login/enums/loginType.enum";
import {UserTeacherDto} from "./interfaces/user-teacher-dto";

export const useUserStore = create<IUserStore>()(
    devtools(
        persist(
            (set,get) => ({
                id: '',
                uuid: '',
                name: '',
                username: '',
                group: '',
                course: -1,
                role: Roles.Student,
                accessToken: '',


                setUUID: async () => {
                    const uuid = await getUUIDAsync() as string
                    set(() => ({uuid: uuid}))
                },
                setAccessToken: (access_token: string) => set(() => ({accessToken: access_token})),
                setStudent: (studentDto: UserStudentDto) => set(() => ({
                    name: studentDto.name,
                    role: studentDto.role,
                    group: studentDto.group,
                    course: studentDto.course,
                    accessToken: studentDto.access_token
                })),
                setTeacher: (studentDto: UserTeacherDto) => set(() => ({
                    name: studentDto.name,
                    username: studentDto.username,
                    id: studentDto.id,
                    role: studentDto.role,
                    accessToken: studentDto.access_token
                })),
                logout: () => set({
                    id: '',
                    uuid: '',
                    name: '',
                    username: '',
                    group: '',
                    course: -1,
                    role: Roles.Student,
                    accessToken: '',
                })
            }),
            {
                name: 'user-store'
            }
        )
    )
)