import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-banner-features',
    templateUrl: './banner-features.component.html',
    styleUrls: ['./banner-features.component.scss'],
})
export class BannerFeaturesComponent implements OnInit {
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
