import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-contact-page-three',
    templateUrl: './contact-page-three.component.html',
    styleUrls: ['./contact-page-three.component.scss'],
})
export class ContactPageThreeComponent implements OnInit {
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
