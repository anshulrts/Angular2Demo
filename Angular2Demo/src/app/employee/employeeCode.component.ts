import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from './employee';

@Component({
    templateUrl: 'app/employee/employeeCode.component.html',
    styleUrls: ['app/employee/employee.component.css'],
})

export class EmployeeCodeComponent implements OnInit {
    employee: IEmployee;
    statusMessage: string = 'Please wait. Loading data...';

    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = 'Employee with this code is not present'
                }
                else {
                    this.employee = employeeData;
                }
            },
            (error) => {
                this.statusMessage = "Problem with the service. Please try again later."
                console.log(error);
            }

        );
    }
}