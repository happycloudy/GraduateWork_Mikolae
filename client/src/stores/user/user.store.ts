import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {IUserStore} from "./interfaces/user-store.interface";
import {getUUIDAsync} from "../../helpers/getUUIDAsync";
import {UserStudentDto} from "./interfaces/user-student-dto";
import {Roles} from "../../modules/Login/enums/loginType.enum";

export const useUserStore = create<IUserStore>()(
    devtools(
        persist(
            (set,get) => ({
                uuid: '',
                name: '',
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
                }))
            }),
            {
                name: 'students-store'
            }
        )
    )
)