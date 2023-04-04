import {create} from "zustand";
import {devtools, persist} from "zustand/middleware";
import {IUsersStore} from "./interfaces/users-store.interface";
import {getUUIDAsync} from "../../helpers/getUUIDAsync";

export const useUsersStore = create<IUsersStore>()(
    devtools(
        persist(
            (set,get) => ({
                uuid: '',
                name: '',
                password: '',
                accessToken: '',
                setUUID: async () => {
                    const uuid = await getUUIDAsync() as string
                    set(() => ({uuid: uuid}))
                },
                setAccessToken: (access_token: string) => set(() => ({accessToken: access_token}))
            }),
            {
                name: 'students-store'
            }
        )
    )
)