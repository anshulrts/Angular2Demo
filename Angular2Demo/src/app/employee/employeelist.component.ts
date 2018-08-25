import { Component, OnInit } from '@angular/core'
import { Employee } from './employee'
import { EmployeeService } from './employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeelist.component.html',
    styleUrls: ['app/employee/employeelist.component.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit {
    employees: Employee[];

    selectedEmployeeCountRadioButton: string = "All";

    constructor(private _employeeService: EmployeeService) {

    }

    ngOnInit() {
        this.employees = this._employeeService.getEmployees();
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