import {createAsyncThunk} from "@reduxjs/toolkit";

export const createUserUUID = createAsyncThunk(
    'createUserUUID',
    async (): Promise<string> => new Promise((resolve) => {
        import('@fingerprintjs/fingerprintjs')
            .then(FingerprintJS => FingerprintJS.load())
            .then(fp => fp.get())
            .then(result => {
                const visitorId = result.visitorId
                resolve(visitorId)
            })
    })
)