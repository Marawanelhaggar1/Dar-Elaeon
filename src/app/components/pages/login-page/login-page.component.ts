import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/auth-services.service';
import {
    SocialAuthService,
    GoogleLoginProvider,
    SocialUser,
} from '@abacritt/angularx-social-login';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
    email = new FormControl(' ', [Validators.required, Validators.email]);
    password = new FormControl(' ', [Validators.required]);
    loginForm: FormGroup;
    user!: User;
    socialUser!: SocialUser;
    isLoggedin: boolean = false;
    lang?: string;

    constructor(
        private _userServices: UserService,
        private _cookie: CookieService,
        private _formBuilder: FormBuilder,
        private socialAuthService: SocialAuthService
    ) {
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]],
            social_id: ['', [Validators.nullValidator]],
        });
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

    login() {
        if (this.loginForm.value.email.includes('@')) {
            this._userServices.login(this.loginForm.value).subscribe({
                next: (res) => {
                    this.user = res;
                    this._cookie.set('user', JSON.stringify(res));
                    // console.log(this.user);
                    this.sendToHome();
                },
                error: (err) => {
                    console.log(err);
                },
            });
        } else {
            let login = {
                mobile: this.loginForm.value.email,
                password: this.loginForm.value.password,
            };
            console.log(login);

            this._userServices.login(login).subscribe({
                next: (res) => {
                    this.user = res;
                    this._cookie.set('user', JSON.stringify(res));
                    // console.log(this.user);
                    this.sendToHome();
                },
                error: (err) => {
                    console.log(err);
                },
            });
        }
    }

    google() {
        let googleUser = {
            first_name: this.socialUser.firstName,
            last_name: this.socialUser.lastName,
            email: this.socialUser.email,
            social_id: this.socialUser.id,
        };
        console.log(googleUser);
        this._userServices.google(googleUser).subscribe({
            next: (res) => {
                this._cookie.set('user', JSON.stringify(res));
                this.sendToHome();
                // console.log(res);
            },
            error: (err) => {
                console.log(err);
            },
        });
    }

    onSubmit() {
        if (this.loginForm.valid) {
            this.login();
        } else {
            alert('wrong credentials');
        }
    }

    sendToHome() {
        window.location.href = '/';
    }
}
