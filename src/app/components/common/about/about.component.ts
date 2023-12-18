import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    lang?: string;
    services = [
        { en: 'Radiology Center', ar: 'مركز الأشعة' },
        { en: 'Operations Department', ar: ' قسم العمليات ' },
        { en: 'Emergency and Trauma Center', ar: ' مركز الطوارئ والإصابات ' },
        { en: 'Intensive Care Unit', ar: ' الرعاية المركزة ' },
        { en: 'Outpatient clinics', ar: 'العيادات الخارجية' },
        { en: 'Accommodation', ar: 'الإقامات' },
        { en: 'Medical analysis laboratory', ar: 'معمل التحاليل الطبية' },
        { en: 'Cardiology Center', ar: ' مراكز القلب' },
    ];
    constructor() {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
    }
}
