import { Component } from '@angular/core'

@Component({
    selector: 'my-secondEmployee',
    templateUrl: 'app/secondEmployee/secondEmployee.component.html',
    styleUrls: ['app/secondEmployee/secondEmployee.component.css']
})

export class SecondEmployeeComponent {
    firstName: string = 'John';
    lastName: string = 'Hopkins';
    gender: string = 'Male';
    age: number = 23;
    columnSpan: number = 2;
    showDetails = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}