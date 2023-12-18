import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Slides } from 'src/app/core/models/slides';
import { SlidesService } from 'src/app/core/services/slides.service';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss'],
})
export class HomeoneBannerComponent implements OnInit {
    lang?: string;
    slides?: Slides[];
    constructor(private _slideService: SlidesService) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }

        this.getSlides();
    }

    homeSlides: OwlOptions = {
        items: 1,
        nav: true,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1000,
        animateIn: `fadeIn`,
        animateOut: `fadeOut`,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>',
        ],
    };

    getSlides() {
        return this._slideService.get().subscribe((slid) => {
            this.slides = slid.data;
            // console.log(this.slides);

            return this.slides;
        });
    }
}
