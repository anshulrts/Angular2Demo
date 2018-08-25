export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    salary: string;
    dateofbirth: string;
}

export class Employee implements IEmployee {
    constructor(public code: string, public name: string, public gender: string, public salary: string,
        public dateofbirth: string) {

    }
}