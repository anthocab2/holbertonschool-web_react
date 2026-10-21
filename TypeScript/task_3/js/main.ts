// eslint-disable-next-line @typescript-eslint/triple-slash-reference -- The exercise requires this ambient reference.
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

export const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

export const newRowID: RowID = CRUD.insertRow(row);

export const updatedRow: RowElement = { ...row, age: 23 };

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
