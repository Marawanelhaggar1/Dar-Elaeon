import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-appointment-page',
    templateUrl: './appointment-page.component.html',
    styleUrls: ['./appointment-page.component.scss'],
})
export class AppointmentPageComponent implements OnInit {
    lang?: string;
    constructor() {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
    }
}
