export interface Student{
    id: number,
    name: string,
    nickname: string,
    birthdate: Date,
    age: number,
    imgURL: string,
    points: number,
    idGroup: number,
    countryCode: Country,
    GroupName?: string,
    linkedin?: string,
    imgs?: Img[]
    type: CategoryEnum

}
interface Img{
    url: string
}
export interface Mentor{
    id: number
    name: string,
    imgURL: string
    topics?: string[]
    type: CategoryEnum
}

export interface Notification{
    id: number
    title: string
    description: string
}

export interface Course{
    id: number
    name: string,
    imgURL: string
    type: CategoryEnum
}


export interface User{
    name: string,
    imgURL: string
}

export enum Country{
    brazil = 'BR',
    ucrania = 'UA',
    albania = 'AL',
    spain = 'ES',
    venezuela = 'VE',
    bolivia = 'BO',
    peru = 'PE',
    colombia = 'CO'
}

export enum CategoryEnum {
    'none',
    'students',
    'education',
    'mentors'
  }