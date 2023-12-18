import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-self-protection',
    templateUrl: './self-protection.component.html',
    styleUrls: ['./self-protection.component.scss']
})
export class SelfProtectionComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    oneAtATime = true;

}