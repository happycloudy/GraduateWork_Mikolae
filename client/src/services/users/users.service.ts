import {client} from "../client";
import {useMutation} from "react-query";
import {ILoginStudentResponse} from "./interfaces/LoginStudentResponse.interface";
import {HTTPError} from "ky";
import {IRegisterStudentRequest} from "./interfaces/RegisterStudentRequest.interface";
import {IRegisterStudentResponse} from "./interfaces/RegisterStudentResponse.interface";

const usersService = {
    loginStudent: async (uuid: string): Promise<ILoginStudentResponse> => {
        const result = await client.post('students/signin', {
            json: {
                uuid
            },
        })
        return result.json()
    },

    registerStudent: async (req: IRegisterStudentRequest): Promise<IRegisterStudentResponse> => {
        const result = await client.post('students/create', {
            json: req,
        })
        return result.json()
    }
}


// Hooks
export const useLoginStudentMutation = () => useMutation<ILoginStudentResponse, HTTPError, string>(usersService.loginStudent)
