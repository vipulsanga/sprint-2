import { Books } from "./book";
import { Student } from "./student";
import { getLocaleDateFormat } from "@angular/common";

export class IssuedBook {
    id!:number;
    stud!:Student;
    book!:Books;
    issuedDate!:Date;
    returnDate!:Date;
}
