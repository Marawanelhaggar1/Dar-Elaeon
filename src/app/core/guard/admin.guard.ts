import { Injectable } from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/auth-services.service';

@Injectable({
    providedIn: 'root',
})
export class AdminGuard implements CanActivate {
    constructor(
        private _auth: UserService,
        private _router: Router,
        private _cookie: CookieService
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        return new Promise((resolve) => {
            if (this._cookie.get('user')) {
                this._auth.get().subscribe((res) => {
                    if (res.role === 'admin') {
                        console.log('true');
                        resolve(true);
                    } else {
                        console.log('false');

                        this._router.navigate(['/not-found']);
                        resolve(false);
                    }
                });
            } else {
                this._router.navigate(['/not-found']);
                resolve(false);
            }
        });
    }
}
