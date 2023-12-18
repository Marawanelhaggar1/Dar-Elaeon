import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-service-details-page-one',
    templateUrl: './service-details-page-one.component.html',
    styleUrls: ['./service-details-page-one.component.scss'],
})
export class ServiceDetailsPageOneComponent implements OnInit {
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
