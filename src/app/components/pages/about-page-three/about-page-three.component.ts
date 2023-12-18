import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-page-three',
    templateUrl: './about-page-three.component.html',
    styleUrls: ['./about-page-three.component.scss'],
})
export class AboutPageThreeComponent implements OnInit {
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
