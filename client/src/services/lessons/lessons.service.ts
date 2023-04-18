import {useMutation} from "react-query";
import {client} from "../client";
import {HTTPError} from "ky";
import {IAutocompleteLessonResponse} from "./interfaces/AutocompleteLessonResponse.interface";

const lessonsService = {
    autocompleteLesson: async (text: string): Promise<IAutocompleteLessonResponse[]> => {
        if(text.length){
            const result = await client.get(`autocomplete/lesson/${text}`)
            return result.json()
        } else {
            return []
        }
    }
}


// Hooks
export const useAutocompleteLesson = () => useMutation<
    IAutocompleteLessonResponse[],
    HTTPError,
    string
>(lessonsService.autocompleteLesson)