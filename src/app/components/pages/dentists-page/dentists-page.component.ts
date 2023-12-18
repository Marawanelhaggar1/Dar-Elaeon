import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/core/models/doctor';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
    selector: 'app-dentists-page',
    templateUrl: './dentists-page.component.html',
    styleUrls: ['./dentists-page.component.scss'],
})
export class DentistsPageComponent implements OnInit {
    lang?: string;
    doctors: Doctor[] = [
        // {
        //     image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-2.jpg',
        //     nameEn: 'Ayman El Azony',
        //     nameAr: 'أيمن الزوني',
        //     specializationEn: 'Gastroenterologists',
        //     specializationAr: 'أطباء الجهاز الهضمي',
        // },
        // {
        //     image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-4.jpg',
        //     nameEn: 'Tamer Yehia',
        //     nameAr: 'تامر يحي',
        //     specializationEn: 'Aesthetic Dentistry',
        //     specializationAr: 'طب الأسنان التجميلي',
        // },
        // {
        //     image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-5.jpg',
        //     nameEn: 'Muhammed Elmessry',
        //     nameAr: 'محمد الميسيري',
        //     specializationEn: 'Endocrinologists',
        //     specializationAr: 'أطباء الغدد الصماء',
        // },
        // {
        //     image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-3.jpg',
        //     nameEn: 'Menna Samir',
        //     nameAr: 'منة سمير',
        //     specializationEn: 'Gastroenterologists',
        //     specializationAr: 'أطباء الجهاز الهضمي',
        // },
        // {
        //     image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-1.jpg',
        //     nameEn: ' Eman Tantawy',
        //     nameAr: 'ايمان طنطاوى',
        //     specializationEn: 'Prosthodontics Dentist',
        //     specializationAr: 'طبيب الأسنان التعويضات السنية',
        // },
        // {
        //     image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-7.jpg',
        //     nameEn: 'Amira Elsaid',
        //     nameAr: 'أميرة السيد',
        //     specializationEn: 'Aesthetic Dentistry',
        //     specializationAr: 'طب الأسنان التجميلي',
        // },
        // {
        //     image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-8.jpg',
        //     nameEn: 'Maged El Wakeel',
        //     nameAr: 'ماجد الوكيل',
        //     specializationEn: 'Cardiologists',
        //     specializationAr: 'أطباء القلب',
        // },
        // {
        //     image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-9.jpg',
        //     nameEn: 'Sally Mohamed',
        //     nameAr: 'سالي محمد',
        //     specializationEn: 'Dermatologists',
        //     specializationAr: 'أطباء الجلد',
        // },
    ];
    constructor(private _doctorService: DoctorService) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.getDoctors();
    }

    getDoctors() {
        return this._doctorService.get().subscribe((doctor) => {
            this.doctors = doctor.data;
            console.log(this.doctors);
        });
    }
}
