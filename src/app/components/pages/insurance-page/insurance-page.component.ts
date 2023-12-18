import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-insurance-page',
    templateUrl: './insurance-page.component.html',
    styleUrls: ['./insurance-page.component.scss'],
})
export class InsurancePageComponent implements OnInit {
    lang?: string;
    constructor() {}
    companies = [
        {
            image: 'https://www.elitehospital.org/images/ff0ae6a2-dffe-4e0b-a583-dcba01245c94.png?638016059306997946',
            nameEn: 'NOOR Optics',
            nameAr: 'نور للبصريات',
        },
        {
            image: 'https://www.elitehospital.org/images/feca7163-6c0e-497a-ae91-1db1edffcca4.png?44537',
            nameEn: 'AXA Company',
            nameAr: 'شركة أكسا',
        },
        {
            image: 'https://www.elitehospital.org/images/f71b63f2-8597-43b6-9916-64235ccb60fe.png?null',
            nameEn: 'Egyptian Medical Syndicate',
            nameAr: ' نقابة الاطباء',
        },
        {
            image: 'https://www.elitehospital.org/images/3f23853c-69e4-4efe-b8d0-152de083686a.png?44537',
            nameEn: 'Globe Med Egypt',
            nameAr: 'شركة جلوب ميد',
        },
        {
            image: 'https://www.elitehospital.org/images/451ec07d-94ce-41fa-8cfa-a5ddcb74c40a.png?null',
            nameEn: 'Amreya Petrolem Refining Company (APRC)',
            nameAr: 'شركة العامرية لتكرير البترول',
        },
        {
            image: 'https://www.elitehospital.org/images/4db8819b-33d6-460d-b04a-063afb0b7fa8.png?null',
            nameEn: 'Petrojet SC',
            nameAr: 'بتروجيت',
        },
        {
            image: 'https://www.elitehospital.org/images/5278b200-1e60-4912-899d-3a1a2609dc3f.png?44537',
            nameEn: 'Egypt In-Touch Assistance',
            nameAr: 'إيجيبت إن تاتش',
        },
        {
            image: 'https://www.elitehospital.org/images/571eed66-49a2-4e24-ab8a-f7324f4e381c.png?44537',
            nameEn: 'Bupa International',
            nameAr: 'بوبا',
        },
    ];
    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
    }
}
