import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recent-works',
    templateUrl: './recent-works.component.html',
    styleUrls: ['./recent-works.component.scss']
})
export class RecentWorksComponent implements OnInit {

    constructor(
        public router: Router
    ) { }

    ngOnInit(): void {}

}