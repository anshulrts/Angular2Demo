import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    //templateUrl: 'app/app.component.html',
    template:   `
                <div style="padding:5px">
                    <ul class="nav nav-tabs">
                        <li><a routerLink="home">Home</a></li>
                        <li><a routerLink="employees">Employees</a></li>
                    </ul>
                    <router-outlet></router-outlet>
                </div>
                `
})
export class AppComponent  {
    pageHeader: string = 'Employee Details';
    imgPath: string = 'http://www.pragimtech.com/Images/Logo.JPG';
    isDisabled: boolean = true;

    firstName: string = 'Anshul';
    lastName: string = 'Dahiya';

    fullName = 'Tom Show';
    secondFullName = 'Albert Mesh';

    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;

    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    buttonClicked(): void{
        alert('Button Clicked');
    }

    addStyles() {
        let styles = {
            'font-size.px': this.fontSize,
            'font-weight': this.isBold ? 'bold' : 'normal',
            'font-style': this.isItalic ? 'italic' : 'normal'
        };

        return styles;
    }
}
