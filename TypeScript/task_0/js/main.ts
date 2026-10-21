export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

export const student1: Student = {
  firstName: 'Ana',
  lastName: 'Garcia',
  age: 22,
  location: 'Madrid',
};

export const student2: Student = {
  firstName: 'Luis',
  lastName: 'Perez',
  age: 25,
  location: 'Lima',
};

export const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = table.insertRow();
  row.insertCell().textContent = student.firstName;
  row.insertCell().textContent = student.location;
});

document.body.appendChild(table);
