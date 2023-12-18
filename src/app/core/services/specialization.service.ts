import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specialization } from '../models/specialization';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SpecializationService {
    lang: string;

    constructor(private _http: HttpClient) {
        if (JSON.parse(localStorage.getItem('lang')!) == 'rtl') {
            this.lang = 'Ar';
        } else {
            this.lang = 'En';
        }
    }
    get(): Observable<{ data: Specialization[] }> {
        return this._http.get<{ data: Specialization[] }>(
            `http://pp.etqanis.com/public/api/specialization?lang=${this.lang}`
        );
    }
}
