import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-testimonials-page',
    templateUrl: './testimonials-page.component.html',
    styleUrls: ['./testimonials-page.component.scss'],
})
export class TestimonialsPageComponent implements OnInit {
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
