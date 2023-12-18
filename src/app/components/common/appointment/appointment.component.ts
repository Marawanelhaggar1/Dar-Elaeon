import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/core/models/doctor';
import { DoctorService } from 'src/app/core/services/doctor.service';
import { SpecializationService } from 'src/app/core/services/specialization.service';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
    mytime: Date = new Date();
    searchForm!: FormGroup;
    lang?: string;
    showCustomList: boolean = false;
    specialty?: string;
    showCustomListDoctors: boolean = false;
    doctors: Doctor[] = [];
    doctor: string[] = [];
    specialties?: string[] = [];
    docId?: any = 0;

    constructor(
        private _formBuilder: FormBuilder,
        public router: Router,
        private _specializations: SpecializationService,
        private _doctorService: DoctorService
    ) {
        this.searchForm = _formBuilder.group({
            specialty: ['', [Validators.required]],
            doctor: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }

        this.getSpecialties();
        this.getDoctor();
    }

    getSpecialties() {
        return this._specializations.get().subscribe((special) => {
            let s = special.data;
            for (const specialization of s) {
                this.specialties?.push(specialization.specialty);
            }
        });
    }

    getDoctor() {
        return this._doctorService.get().subscribe((doctor) => {
            let d = [];
            this.doctors = doctor.data;
            if (this.searchForm.value.specialty) {
                d = this.doctors.filter((doctor) => {
                    return (
                        doctor.specialty.specialty ===
                        this.searchForm.value.specialty
                    );
                });
            } else {
                d = this.doctors;
            }
            this.doctor = [];
            for (const doc of d) {
                this.doctor.push(doc.name);
            }
        });
    }

    set() {
        let doc = this.doctors.find((i) => {
            return i.name === this.searchForm.value.doctor;
        });
        this.docId = doc?.id;
        console.log(this.docId);
    }
    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }
}
