import {client} from "../client";
import {useMutation} from "react-query";
import {ILoginStudentResponse} from "./interfaces/LoginStudentResponse.interface";
import {HTTPError} from "ky";
import {IRegisterStudentRequest} from "./interfaces/RegisterStudentRequest.interface";
import {IRegisterStudentResponse} from "./interfaces/RegisterStudentResponse.interface";
import {ILoginTeacherRequest} from "./interfaces/LoginTeacherRequest.interface";
import {ILoginTeacherResponse} from "./interfaces/LoginTeacherResponse.interface";
import {ISubscribeVisitRequest} from "./interfaces/SubscribeVisitRequest.interface";
import {ISubscribeVisitResponse} from "./interfaces/SubscribeVisitResponse.interface";

export const usersService = {
    loginStudent: async (uuid: string): Promise<ILoginStudentResponse> => {
        const result = await client.post('students/signin', {
            json: {
                uuid
            },
        })

        return result.json()
    },

    registerStudent: async (req: IRegisterStudentRequest): Promise<IRegisterStudentResponse> => {
        const result = await client.post('students', {
            json: req,
        })

        return result.json()
    },

    loginTeacher: async (req: ILoginTeacherRequest): Promise<ILoginTeacherResponse> => {
        const result = await client.post('teachers/signin', {
            json: req,
        })

        return result.json()
    },

    subscribeVisit: async (req: ISubscribeVisitRequest): Promise<ILoginTeacherResponse> => {
        const result = await client.patch('visits/subscribeStudent', {
            json: req,
        })

        return result.json()
    },

    checkAuth: async (): Promise<ILoginTeacherResponse> => {
        const result = await client.get('auth')

        return result.json()
    },
}


// Hooks
export const useLoginStudentMutation = () => useMutation<ILoginStudentResponse, HTTPError, string>(usersService.loginStudent)
export const useRegisterStudentMutation = () => useMutation<
    IRegisterStudentResponse,
    HTTPError,
    IRegisterStudentRequest
>(usersService.registerStudent)
export const useLoginTeacherMutation = () => useMutation<
    ILoginTeacherResponse,
    HTTPError,
    ILoginTeacherRequest
>(usersService.loginTeacher)
export const useSubscribeVisitMutation = () => useMutation<
    ISubscribeVisitResponse,
    HTTPError,
    ISubscribeVisitRequest
>(usersService.subscribeVisit)
