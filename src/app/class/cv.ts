import { Job } from './job'

export class Cv {
    public id: number;
    public motivation: string;
    public skills: string;
    public studies: string;
    public job: Job;
    public lastname: string;
    public firstname: string;
    public birthday: string;
    public email: string;
    public city: string;
    public country: string;
    public phone_number: string;

    constructor(id: number,
                motivation: string,
                skills: string,
                studies: string,
                job: Job,
                lastname: string,
                firstname: string,
                birthday: string,
                email: string,
                city: string,
                country: string,
                phone_number: string
                ) {
        this.id = id;
        this.motivation = motivation;
        this.skills = skills;
        this.studies = studies;
        this.job = job;
        this.lastname = lastname;
        this.firstname = firstname;
        this.birthday = birthday;
        this.email = email;
        this.city = city;
        this.country = country;
        this.phone_number = phone_number;
    }
}
