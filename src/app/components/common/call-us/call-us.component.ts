import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-call-us',
    templateUrl: './call-us.component.html',
    styleUrls: ['./call-us.component.scss'],
})
export class CallUsComponent implements OnInit {
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
