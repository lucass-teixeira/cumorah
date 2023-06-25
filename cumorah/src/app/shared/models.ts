export interface Student{
    id: number,
    name: string,
    nickname: string,
    birthdate: Date,
    age: number,
    imgUrl: string,
    points: number,
    idGroup: number,
    countryCode: Country,
    GroupName?: string
}

export interface Mentor{
    name: string,
    imgURL: string
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