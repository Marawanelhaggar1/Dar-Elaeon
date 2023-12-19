import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slides } from '../models/slides';

@Injectable({
    providedIn: 'root',
})
export class SlidesService {
    lang: string;

    constructor(private _http: HttpClient) {
        if (JSON.parse(localStorage.getItem('lang')!) == 'rtl') {
            this.lang = 'Ar';
        } else {
            this.lang = 'En';
        }
    }

    get(): Observable<{ data: Slides[] }> {
        return this._http.get<{ data: Slides[] }>(
            `http://pp.etqanis.com/public/api/slides?lang=${this.lang}`
        );
    }
}
