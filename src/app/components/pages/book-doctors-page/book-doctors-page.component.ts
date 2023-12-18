import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Doctor } from 'src/app/core/models/doctor';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
    selector: 'app-book-doctors-page',
    templateUrl: './book-doctors-page.component.html',
    styleUrls: ['./book-doctors-page.component.scss'],
})
export class BookDoctorsPageComponent {
    lang?: string;
    docId: any;
    specialty?: string;
    doctors: Doctor[] = [];
    doctor?: Doctor;
    customOptions: OwlOptions = {
        items: 3,
        nav: true,
        loop: false,
        dots: false,

        smartSpeed: 1000,
        navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>',
        ],
    };

    daysOfTheWeek!: string[];
    sub!: any;

    constructor(
        private _ActivatedRoute: ActivatedRoute,
        private _router: Router,
        private _doctorService: DoctorService
    ) {}

    ngOnInit() {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }

        if (this.lang == 'ltr') {
            this.daysOfTheWeek = [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
            ];
        } else if (this.lang == 'rtl') {
            this.daysOfTheWeek = [
                'الأحد',
                'الأثنين',
                'الثلاثاء',
                'الأربعاء',
                'الخميس',
                'الجمعه',
                'السبت',
            ];
        }

        this.sub = this._ActivatedRoute.params.subscribe((params) => {
            this.docId = params['id'];
            this.specialty = params['specialty'];
            if (this.docId == 0) {
                this.getDoctor();
            } else {
                this.getDoctorById(this.docId);
            }
        });
    }

    getDoctorById(id: number) {
        return this._doctorService.getById(id).subscribe((data) => {
            this.doctors = [];

            this.doctor = data.data;
            this.doctors.push(this.doctor);
            this.formatDate();
        });
    }

    getDoctor() {
        return this._doctorService.get().subscribe((data) => {
            this.doctors = data.data;
            this.formatDate();

            if (this.specialty) {
                let d = this.doctors.filter((d) => {
                    return d.specialty.specialty === this.specialty;
                });
                this.doctors = d;
            }
        });
    }

    formatDate() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const options: any = { weekday: 'long' };
        const formatter =
            this.lang == 'rtl'
                ? new Intl.DateTimeFormat('ar-EG', options)
                : new Intl.DateTimeFormat('en-UK', options);
        const dayName = formatter.format(today);
        const tomorrowName = formatter.format(tomorrow);
        console.log(tomorrowName);
        const todayIndex = this.daysOfTheWeek.findIndex(
            (day) => day === dayName
        );

        for (const doc of this.doctors) {
            doc.doctorSchedule = doc.doctorSchedule.sort((a, b) => {
                const dayIndexA = this.daysOfTheWeek.findIndex(
                    (day) => day === a.date
                );
                const dayIndexB = this.daysOfTheWeek.findIndex(
                    (day) => day === b.date
                );

                const sortedIndexA = (dayIndexA - todayIndex + 7) % 7;
                const sortedIndexB = (dayIndexB - todayIndex + 7) % 7;

                return sortedIndexA - sortedIndexB;
            });

            doc.doctorSchedule.map((date) => {
                if (dayName == date.date) {
                    console.log(date);
                    date.date = this.lang == 'ltr' ? 'Today' : 'اليوم';
                } else if (date.date == tomorrowName) {
                    date.date = this.lang == 'ltr' ? 'Tomorrow' : 'غدا';
                }
            });

            console.log(doc);
        }
    }
}
