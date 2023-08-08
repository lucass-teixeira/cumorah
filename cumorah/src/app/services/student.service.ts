import { Injectable } from '@angular/core';
import { CategoryEnum, Notification, Country, Course, Mentor, Student, EnglishLevel, MainCourse } from '../shared/models';
import { Group } from '../shared/enums';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public isBusy = false;

  public notifications: Notification[] = [
    { id: 1, title: 'Notification 1', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur sit provident nostrum, in odit sint ratione minima qui et voluptate vel fuga ut veritatis illum architecto perferendis dicta magni nam voluptates neque! Maiores qui blanditiis fugiat iste perferendis, nisi ducimus debitis laborum sint odit.' },
    { id: 2, title: 'Notification 2', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur sit provident nostrum, in odit sint ratione minima qui et voluptate vel fuga ut veritatis illum architecto perferendis dicta magni nam voluptates neque! Maiores qui blanditiis fugiat iste perferendis, nisi ducimus debitis laborum sint odit.' },
    { id: 3, title: 'Notification 3', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur sit provident nostrum, in odit sint ratione minima qui et voluptate vel fuga ut veritatis illum architecto perferendis dicta magni nam voluptates neque! Maiores qui blanditiis fugiat iste perferendis, nisi ducimus debitis laborum sint odit.' },
    { id: 4, title: 'Notification 4', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores pariatur sit provident nostrum, in odit sint ratione minima qui et voluptate vel fuga ut veritatis illum architecto perferendis dicta magni nam voluptates neque! Maiores qui blanditiis fugiat iste perferendis, nisi ducimus debitis laborum sint odit.' },
  ]
  public mentors: Mentor[] = [
    { id: 1, name: 'Oscar & Susan', imgURL: 'https://user-images.githubusercontent.com/54940494/245154028-4bb47e21-acfc-458c-8dde-69fd8dd0ceb5.jpg', type: CategoryEnum.mentors, topics: ['Susan & Oscar Bluth mainly live in Chandler, Arizona.', 'Since 2005, they have owned a business consulting firm where Susan coaches and trains leaders and professionals in emotional intelligence, they also own and develop real estate', 'Susan attended BYU, graduating in 1979 with a degree in Health Science'] },
    { id: 2, name: 'Seth & Amber', imgURL: 'https://user-images.githubusercontent.com/54940494/245153999-34cdcc05-8abd-4196-9e79-7fd8ab15e70b.jpg', type: CategoryEnum.mentors },
    {
      id: 3, name: 'Shad & Mindi', imgURL: 'https://user-images.githubusercontent.com/54940494/245379714-9b7cccd5-6bd3-4328-9958-0ccc36394405.jpg', type: CategoryEnum.mentors, topics: ['Mindi began her career in healthcare as a dental hygienist before co-founding Benches&camp; Blackboards, an organization that donate school supplies to underprivileged school in developing countries.','Mindi also runs a small real estate business and coaches the Arrowhead Ski Team during the winter months.', 'Shad has worked for the International Finance Corporation of the World Bank in Serbia, Management Systems International in Bulgaria, Alcoa Corporation in the United States, and as a foundling member of Samsung’s SKK Graduate School of Business in Seoul, Korea.']
    },
    { id: 4, name: 'Russell & Samantha', imgURL: 'https://user-images.githubusercontent.com/54940494/245379945-40bdf2bc-bb43-41a1-bb43-0ed79096f48c.jpg', type: CategoryEnum.mentors },
    { id: 5, name: 'Brian & karen', imgURL: 'https://user-images.githubusercontent.com/54940494/248585227-f2501f4d-6f0e-4a1f-9a28-ca3243b7a39d.jpg', type: CategoryEnum.mentors },
    { id: 6, name: 'Ralph & Nancy', imgURL: 'https://user-images.githubusercontent.com/54940494/250957981-6fbb7209-c9e2-4e24-8f46-8fe160a26120.jpg', type: CategoryEnum.mentors, topics: ['In 1986 Ralph Little was named to the INC 500 list as one of “Fastest Growing Private Companies in America”', 'In the twenty years he owned Little & Company, Ralph started several other businesses including a software development company, a truck tire recapping plant, storage units, a marketing company, and an electrical wiring and device company.', 'He was referred to a course of instruction at Harvard specifically for CEOs of small businesses.'] },
    { id: 7, name: 'Melissa', imgURL: 'https://user-images.githubusercontent.com/54940494/250957436-c6731f9d-0da9-4d0d-b294-48f4861885a0.jpg', type: CategoryEnum.mentors, topics: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus voluptatem dolorum nulla pariatur eos accusamus dolores delectus quos eius. Ipsa amet consequatur maiores cupiditate itaque rem illum, quo adipisci consectetur nemo, mollitia et libero odio. Veritatis nobis placeat, aliquid ea iure et dignissimos perferendis.', '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus voluptatem dolorum nulla pariatur eos accusamus dolores delectus quos eius. Ipsa amet consequatur maiores cupiditate itaque rem illum, quo adipisci consectetur nemo, mollitia et libero odio.'] },
    { id: 8, name: 'Matt & Celeste', imgURL: 'https://user-images.githubusercontent.com/54940494/253373338-05451268-f8fc-466d-9454-dd381ea3c850.jpg', type: CategoryEnum.mentors, topics: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus voluptatem dolorum nulla pariatur eos accusamus dolores delectus quos eius. Ipsa amet consequatur maiores cupiditate itaque rem illum, quo adipisci consectetur nemo, mollitia et libero odio. Veritatis nobis placeat, aliquid ea iure et dignissimos perferendis.', '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus voluptatem dolorum nulla pariatur eos accusamus dolores delectus quos eius. Ipsa amet consequatur maiores cupiditate itaque rem illum, quo adipisci consectetur nemo, mollitia et libero odio.'] },
    { id: 9, name: 'Adam & Chealse', imgURL: 'https://user-images.githubusercontent.com/54940494/252316313-e23986e6-0f34-4950-8880-c30a098c7179.jpg', type: CategoryEnum.mentors, topics: ['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, iure quisquam. Illum explicabo doloremque ad voluptate veniam molestiae ut molestias tempora, quaerat facilis mollitia odit.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, iure quisquam. Illum explicabo doloremque ad voluptate veniam molestiae ut molestias tempora, quaerat facilis mollitia odit.', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, iure quisquam. Illum explicabo doloremque ad voluptate veniam molestiae ut molestias tempora, quaerat facilis mollitia odit.'] },
  ]

  public courses: Course[] = [
    { id: 1, name: 'Leadership', imgURL: 'https://my.cumorahacademy.org/_files/categories/42_6Yzw2TUM.jpg?fit=770x200', type: CategoryEnum.education, classes: [{ title: 'Givers vs Takers', isDone: true }, {title: 'Designing your life', isDone: true}, {title: 'Honesty & Integrity', isDone: false}] },
    { id: 2, name: 'Business', imgURL: 'https://my.cumorahacademy.org/_files/categories/43_UOXJp1M6.png?fit=770x200', type: CategoryEnum.education, classes: [{ title: 'givers', isDone: true }] },
    { id: 3, name: 'Soft Skills & Finding a Job', imgURL: 'https://my.cumorahacademy.org/_files/categories/41_jmIiKgaO.jpg?fit=770x200', type: CategoryEnum.education, classes: [{ title: 'Givers vs Takers', isDone: true }] },
    { id: 4, name: 'The student Guide', imgURL: 'https://my.cumorahacademy.org/_files/categories/49_cECWYtGx.jpg?fit=370x208', type: CategoryEnum.education, classes: [{ title: 'Givers vs Takers', isDone: true }] },
  ]
  public items: Student[] = [
    { id: 1, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Lucas Teixeira', nickname: 'Lucas', points: 5, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946413-256ce257-0b45-4994-9f18-a604db4e70c0.jpg', idGroup: Group.Esther, countryCode: Country.brazil, hobbies: ['Basketball', 'Running', 'dance'], linkedin: 'https://www.linkedin.com/in/lucasteixeira20/', mainCourse: MainCourse.business },
    { id: 2, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Aitor', nickname: 'Aitor', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946223-798d53b0-a1e1-4f7e-8824-76f4aded1db1.jpg', idGroup: Group.Nephi, countryCode: Country.spain },
    { id: 3, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Cami', nickname: 'Camila', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946266-009b7f70-e9ad-49b2-9ea8-9ce334ed6eed.jpg', idGroup: Group.Nephi, countryCode: Country.brazil },
    { id: 4, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Emy', nickname: 'Emy', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946288-0c4c2887-8ea0-4c9d-8246-8b9797a7bf37.jpg', idGroup: Group.Esther, countryCode: Country.peru, hobbies: ['dance', 'read', 'watch movies'], mainCourse: MainCourse.english },
    { id: 5, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Vladyslava', nickname: 'Vlada', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946446-aaf3162d-2db1-45cc-bd11-5b86abbc5e12.jpg', idGroup: Group.Esther, countryCode: Country.ucrania, mainCourse: MainCourse.english, linkedin: 'https://www.linkedin.com/in/vladyslava-tyshchenko-1b9a531ab/' },
    { id: 6, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Gabriel', nickname: 'Gabe', points: 0, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946304-b087eb9d-4f8d-4106-8d92-bd9d0c207924.jpg', idGroup: Group.Esther, countryCode: Country.brazil, hobbies: ['poem', 'skating', 'nature'], mainCourse: MainCourse.business, linkedin: 'https://www.linkedin.com/in/gabriel-oliveira-a84910223/', imgs: [{ url: 'https://user-images.githubusercontent.com/54940494/248789765-492e16c1-3a8b-446d-9079-93e8042b69e6.jpg' }, { url: 'https://user-images.githubusercontent.com/54940494/248789628-db908c76-d8fc-4b40-9156-097362cafe8a.jpg' }] },
    { id: 7, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Jessica', nickname: 'Jessica', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946324-f0e89cb0-97b4-47c9-bda9-fd05870fcc68.jpg', idGroup: Group.Nephi, countryCode: Country.brazil },
    { id: 8, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Kamelia', nickname: 'Kami', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946344-c6f1e93f-07c8-44e7-a856-03c345686e61.jpg', idGroup: Group.Nephi, countryCode: Country.ucrania },
    { id: 9, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Kledion', nickname: 'Kledion', points: 1, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946392-e7fe8a03-5380-47af-acde-af119e88dbf5.jpg', idGroup: Group.Nephi, countryCode: Country.albania },
    { id: 10, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Kristi', nickname: 'Kristi', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946400-1af7fa8b-01fb-41ab-9feb-f3f31cc46f98.jpg', idGroup: Group.Nephi, countryCode: Country.albania, mainCourse: MainCourse.workfocus, linkedin: 'https://www.linkedin.com/in/kristi-coka-17ba77193/' },
    { id: 11, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Mariana', nickname: 'Мар\'яночка', points: 3, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946420-dc2c4d17-0ad9-483d-82f7-1d93f971bbfd.jpg', idGroup: Group.Esther, countryCode: Country.ucrania, mainCourse: MainCourse.business },
    { id: 12, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Pamela', nickname: 'Pam', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946428-542ca0d5-ca41-4256-aa1c-e04acec2d9ab.jpg', idGroup: Group.Esther, countryCode: Country.brazil, linkedin: 'https://www.linkedin.com/in/pamela-gomes-dev/', mainCourse: MainCourse.business },
    { id: 13, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Tania', nickname: 'Tania', points: 4, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946436-805b420d-0123-467a-b100-9baa495e7fe6.jpg', idGroup: Group.Nephi, countryCode: Country.ucrania },
    { id: 14, englishLevel: EnglishLevel.b2, type: CategoryEnum.students, name: 'Yetsy', nickname: 'Yetsy', points: 4, birthdate: new Date('2002-03-04'),  mainCourse: MainCourse.english, age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/238946457-86e7ad68-7a7f-48b6-96fe-afdba17f26cf.jpg', idGroup: Group.Esther, countryCode: Country.spain },
    { id: 15, englishLevel: EnglishLevel.c1, type: CategoryEnum.students, name: 'Luba', nickname: 'Luba', points: 5, birthdate: new Date('2002-03-04'), age: 21, imgURL: 'https://user-images.githubusercontent.com/54940494/253419692-11b33cb0-d257-4f40-8c5a-10c896325f8c.jpg', idGroup: Group.Ruth, countryCode: Country.ucrania, hobbies: ['dance', 'running'], mainCourse: MainCourse.english },

  ]
  constructor() { }

  getStudents(): Student[] {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return this.items;
  }
  getStudentById(id: number): Student | undefined {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return this.items.find(x => x.id === id);
  }

  getMentors() {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return [...this.mentors];
  }

  getMentorById(id: number): Mentor | undefined {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return this.mentors.find(x => x.id === id);
  }
  getCourses(): Course[] {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return [...this.courses];
  }

  getCourseById(id: number): Course | undefined {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return this.courses.find(x => x.id === id);
  }
  getNotifications(): Notification[] {
    this.isBusy = true;
    const timeout = setTimeout(() => {
      this.isBusy = false;
      clearTimeout(timeout)
    }, 1500);
    return [...this.notifications];
  }
}
