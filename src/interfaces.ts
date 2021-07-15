import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {ReactFragment} from "react";

export type AppNavRoute = {
    label: string;
    route: string;
};


export type LandingCardData = {
    icon: IconProp;
    title: string;
    description: string;
    buttonText: string;
    buttonRoute: string;
};


export type SignUpFormSchema = {
    applicationType: number,
    email: string,
    firstName: string,
    lastName: string,
    middleName: string | undefined,
    gender: "Male" | "Female" | "Other" | "Unspecified" | undefined,
    dateOfBirth: string | Date | undefined,
    address: string,
    city: string,
    state: string,
    zipcode: string,
    sameAsBilling: boolean,
    mailingAddress: string,
    mailingCity: string,
    mailingState: string,
    mailingZipcode: string,
    driversLicense: string,
    socialSecurity: string,
    incomeFrequency: string,
    income: number,
    initialDeposit: number,
    phone: string
};

export type SignUpFormTestingSchema = {
    applicationType: number | any,
    email: string | any,
    firstName: string | any,
    lastName: string | any,
    middleName: string | any,
    gender: "Male" | "Female" | "Other" | any,
    dateOfBirth: string | Date | any,
    address: string | any,
    city: string | any,
    state: string | any,
    zipcode: string | any,
    sameAsBilling: boolean | any,
    mailingAddress: string | any,
    mailingCity: string | any,
    mailingState: string | any,
    mailingZipcode: string | any,
    driversLicense: string | any,
    socialSecurity: string | any,
    incomeFrequency: string | any,
    income: number | any,
    initialDeposit: number | any,
    phone: string | any
};

export type SignUpFormStep = [
    label: string,
    fields: string[],
    fragment: ReactFragment
];
