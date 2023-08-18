import { HttpStatusCode } from "@angular/common/http";

export interface loginResponse {
    isSuccess:boolean;
    httpStatusCode:HttpStatusCode;
    result:Object;
    token:string;
    errorMessage:string[];
} 