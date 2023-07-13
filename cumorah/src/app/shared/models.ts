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
    hobbies?: string[]
    englishLevel: EnglishLevel,
    mainCourse?: MainCourse

}

export enum EnglishLevel{
    a1 = 'A1',
    a2 = 'A2',
    b1 = 'B1',
    b2 = 'B2',
    c1 = 'C1',
    c2 = 'C2',
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
    classes: [{title: string, isDone: boolean}]
}

export enum MainCourse{
    business = 'business',
    english = 'english',
    workfocus = 'work-focus',
    coding = 'coding',
    sales = 'sales'
    
}

export interface User{
    name: string,
    imgURL: string
    groupName: string
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