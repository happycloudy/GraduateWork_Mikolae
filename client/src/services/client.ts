import {QueryClient} from "react-query";
import ky from "ky";
import {useUserStore} from "../stores/user/user.store";

export const queryClient = new QueryClient()


const baseUrl = 'http://localhost:3001/api'

export const client = ky.create({
    prefixUrl: baseUrl,
    hooks: {
        beforeRequest: [
            request => {
                const token = useUserStore.getState().accessToken
                return request.headers.set('Authorization', `Bearer ${token}`)
            }
        ],
        beforeError: [
            error => {
                const {response} = error;
                if (response && response.body) {
                    if(response.status === 401) {
                        error.name = 'Ошибка авторизации';
                        if (typeof error.options.body === "string") {
                            const body = JSON.parse(error.options.body)

                            if(body.uuid !== undefined) {
                                error.message = 'Такого студента в базе нету'
                            } else {
                                error.message = 'Неправильный логин/пароль'
                            }
                        }
                    }
                }

                return error;
            }
        ]
    }
})