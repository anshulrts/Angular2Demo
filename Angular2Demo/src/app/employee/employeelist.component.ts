import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeelist.component.html',
    styleUrls: ['app/employee/employeelist.component.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];

    selectedEmployeeCountRadioButton: string = "All";

    constructor(private _employeeService: EmployeeService) {

    }

    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData);
    }

    getAllEmployeeCount(): number {
        return this.employees.length;
    }

    getAllMaleEmployeeCount(): number {
        return this.employees.filter(row => row.gender === "Male").length;
    }

    getAllFemaleEmployeeCount(): number {
        return this.employees.filter(row => row.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(onSelectedEmployeeCountRadioButton: string): void {
        this.selectedEmployeeCountRadioButton = onSelectedEmployeeCountRadioButton;
    }
}