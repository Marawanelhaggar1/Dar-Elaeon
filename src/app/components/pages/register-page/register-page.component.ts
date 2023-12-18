import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/auth-services.service';
import { DatePipe } from '@angular/common';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
    // date_of_birth = new FormControl('', [Validators.required]);
    // date_of_birth?: any;
    lang?: string;
    datePickerConfig!: Partial<BsDatepickerConfig>;
    registerForm: FormGroup;
    user!: User;
    socialUser!: SocialUser;
    isLoggedin: boolean = false;

    constructor(
        private _formBuilder: FormBuilder,
        private _authService: UserService,
        private _datePipe: DatePipe,
        private _cookie: CookieService,
        private _router: Router,

        private socialAuthService: SocialAuthService
    ) {
        this.registerForm = this._formBuilder.group({
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            date_of_birth: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            mobile: ['', [Validators.required]],
            password: ['', [Validators.required]],
            password_confirmation: ['', [Validators.required]],
        });
    }

    checkDate() {
        var datePipe = new DatePipe('en-US');
        this.registerForm.value.date_of_birth = datePipe.transform(
            this.registerForm.value.date_of_birth,
            'yyyy/MM/dd'
        );

        console.log(this.registerForm.value.date_of_birth);
    }

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            this.isLoggedin = user != null;
            console.log(this.socialUser);
            this.google();
        });
    }

    onSubmit() {
        if (this.registerForm.valid) {
            this.checkDate();
            console.log(this.registerForm.value.first_name);
            // console.log(this.registerForm.value.date_of_birth);
            this.register();
            console.log(this.registerForm.value);
        } else {
            alert('please enter a valid registration');
        }
    }

    register() {
        this._authService
            .register({ role: 'user', ...this.registerForm.value })
            .subscribe({
                next: (res) => {
                    this.user = res;
                    this._router.navigate(['/login']);
                    console.log(res);
                },

                error: (err) => {
                    console.log(err);
                },
            });
    }

    google() {
        let googleUser = {
            first_name: this.socialUser.firstName,
            last_name: this.socialUser.lastName,
            email: this.socialUser.email,
            social_id: this.socialUser.id,
            role: 'user',
        };
        console.log(googleUser);
        this._authService.google(googleUser).subscribe({
            next: (res) => {
                this._cookie.set('user', JSON.stringify(res));
                this.sendToHome();
                console.log(res);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    sendToHome() {
        window.location.href = '/';
    }
}
