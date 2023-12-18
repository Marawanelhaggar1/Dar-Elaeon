import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-page-one',
    templateUrl: './about-page-one.component.html',
    styleUrls: ['./about-page-one.component.scss'],
})
export class AboutPageOneComponent implements OnInit {
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
