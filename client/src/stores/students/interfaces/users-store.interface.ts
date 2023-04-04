export interface IUsersStore {
    uuid: string
    name: string
    accessToken: string
    setUUID: () => void
    setAccessToken: (access_token: string) => void
}