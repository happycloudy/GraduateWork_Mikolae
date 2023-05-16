export interface IRoute {
    name?: string
    path: string
    element: JSX.Element
    children?: IRoute[]
}