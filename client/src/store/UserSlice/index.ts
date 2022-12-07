import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createUserUUID} from "./createUserUUID";

export interface CounterState {
    uuid: string | undefined
}

const initialState: CounterState = {
    uuid: undefined,
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserUUID: (state, action: PayloadAction<string>) => {
            state.uuid = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(createUserUUID.fulfilled, (state, action: PayloadAction<string>) => {
            state.uuid = action.payload
        })
    }
})


export const {setUserUUID} = userSlice.actions
export default userSlice.reducer