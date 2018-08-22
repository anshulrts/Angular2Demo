import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  {
    pageHeader: string = 'Employee Details';
    imgPath: string = 'http://www.pragimtech.com/Images/Logo.JPG';
    isDisabled: boolean = true;


    firstName: string = 'Anshul';
    lastName: string = 'Dahiya';

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
