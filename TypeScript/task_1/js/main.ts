export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [attribute: string]: unknown;
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string,
): string => `${firstName.charAt(0)}. ${lastName}`;

export interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

export class StudentClass implements StudentInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
