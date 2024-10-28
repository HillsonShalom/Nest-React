export interface User {
    username: string;
    password: string;
    email: string;
    age: number;
    male: boolean;
    address: {
        country: string;
        city: string;
        street: string;
    }
    about?: string;
    dateOfBirth: Date;
}
