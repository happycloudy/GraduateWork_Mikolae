import {client} from "../client";
import {IAutocompleteGroupResponse} from "./interfaces/IAutocompleteGroupResponse";
import {useMutation} from "react-query";
import {HTTPError} from "ky";

export const groupsService = {
    autocompleteGroup: async (text: string): Promise<IAutocompleteGroupResponse> => {
        if(text.length){
            const result = await client.get(`autocomplete/group/${text}`)
            return result.json()
        } else {
            return {groups: []}
        }
    }
}


// Hooks
export const useAutocompleteGroup = () => useMutation<
    IAutocompleteGroupResponse,
    HTTPError,
    string
>(groupsService.autocompleteGroup)