import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-page-two',
    templateUrl: './about-page-two.component.html',
    styleUrls: ['./about-page-two.component.scss'],
})
export class AboutPageTwoComponent implements OnInit {
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
