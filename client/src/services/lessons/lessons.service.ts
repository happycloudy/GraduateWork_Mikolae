import {useMutation} from "react-query";
import {client} from "../client";
import {HTTPError} from "ky";

const lessonsService = {
    autocompleteLesson: async (text: string): Promise<{lessons: string[]}> => {
        if(text.length){
            const result = await client.get(`autocomplete/lesson/${text}`)
            return result.json()
        } else {
            return {
                lessons: []
            }
        }
    }
}


// Hooks
export const useAutocompleteLesson = () => useMutation<
    {lessons: string[]},
    HTTPError,
    string
>(lessonsService.autocompleteLesson)