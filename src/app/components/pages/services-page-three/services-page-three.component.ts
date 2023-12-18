import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services-page-three',
    templateUrl: './services-page-three.component.html',
    styleUrls: ['./services-page-three.component.scss'],
})
export class ServicesPageThreeComponent implements OnInit {
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
