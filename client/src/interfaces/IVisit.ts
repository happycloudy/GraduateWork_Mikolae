import {ILesson} from "./ILesson";

export interface IVisit {
    id: string
    key: string
    date: string
    lesson: ILesson
    // TODO: Дописать остальные поля
}