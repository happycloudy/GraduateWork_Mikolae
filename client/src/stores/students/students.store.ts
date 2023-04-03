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
                setUUID: async () => {
                    const uuid = await getUUIDAsync() as string
                    set(() => ({uuid: uuid}))
                }
            }),
            {
                name: 'students-store'
            }
        )
    )
)