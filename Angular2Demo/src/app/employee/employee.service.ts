﻿import { Injectable } from '@angular/core'
import { IEmployee } from './employee'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/Observable/throw'

@Injectable()

export class EmployeeService {

    constructor(private _http: Http) { }

    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:63257/api/employees")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }

    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:63257/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}