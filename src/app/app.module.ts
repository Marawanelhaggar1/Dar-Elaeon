import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserModule } from '@angular/platform-browser';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    SocialLoginModule,
    SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

import { GoogleLoginProvider } from '@abacritt/angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { BannerFeaturesComponent } from './components/pages/home-demo-one/banner-features/banner-features.component';

import { HomeDemoEightComponent } from './components/pages/home-demo-eight/home-demo-eight.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { BlogComponent } from './components/common/blog/blog.component';
import { FeedbackComponent } from './components/common/feedback/feedback.component';
import { DentistsComponent } from './components/common/dentists/dentists.component';
import { FeaturesComponent } from './components/common/features/features.component';
import { AboutComponent } from './components/common/about/about.component';
import { AppointmentComponent } from './components/common/appointment/appointment.component';
import { CallUsComponent } from './components/common/call-us/call-us.component';
import { ServicesComponent } from './components/common/services/services.component';

import { RecentWorksComponent } from './components/common/recent-works/recent-works.component';

import { PopularDestinationsComponent } from './components/common/popular-destinations/popular-destinations.component';
import { WhyChooseUsComponent } from './components/common/why-choose-us/why-choose-us.component';
import { WhatWeDoComponent } from './components/common/what-we-do/what-we-do.component';

import { PartnerComponent } from './components/common/partner/partner.component';
import { BeforeAndAfterComponent } from './components/common/before-and-after/before-and-after.component';
import { SkinCareServicesComponent } from './components/common/skin-care-services/skin-care-services.component';

import { HeaderComponent } from './components/common/header/header.component';
import { TopHeaderComponent } from './components/common/header/top-header/top-header.component';
import { RecaptchaModule } from 'ng-recaptcha';

import { NavbarComponent } from './components/common/header/navbar/navbar.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { HowItWorksComponent } from './components/common/how-it-works/how-it-works.component';
import { DoctorsComponent } from './components/common/doctors/doctors.component';
import { WhatWeOfferComponent } from './components/common/what-we-offer/what-we-offer.component';
import { EyeCareServicesComponent } from './components/common/eye-care-services/eye-care-services.component';

import { SelfProtectionComponent } from './components/common/self-protection/self-protection.component';
import { ApprovedVaccineComponent } from './components/common/approved-vaccine/approved-vaccine.component';
import { EmergencyRegistrationComponent } from './components/common/emergency-registration/emergency-registration.component';

import { ContactInfoComponent } from './components/common/contact-info/contact-info.component';
import { CtaComponent } from './components/common/cta/cta.component';
import { DigitalHelpComponent } from './components/common/digital-help/digital-help.component';
import { FunfactsComponent } from './components/common/funfacts/funfacts.component';
import { SkillsComponent } from './components/common/skills/skills.component';
import { CategoriesComponent } from './components/common/categories/categories.component';
import { HomeeightBannerComponent } from './components/pages/home-demo-eight/homeeight-banner/homeeight-banner.component';
import { ServicesPageOneComponent } from './components/pages/services-page-one/services-page-one.component';
import { ServicesPageTwoComponent } from './components/pages/services-page-two/services-page-two.component';
import { ServicesPageThreeComponent } from './components/pages/services-page-three/services-page-three.component';
import { ServicesPageFourComponent } from './components/pages/services-page-four/services-page-four.component';
import { ServicesPageFiveComponent } from './components/pages/services-page-five/services-page-five.component';
import { ServicesPageSixComponent } from './components/pages/services-page-six/services-page-six.component';
import { ServiceDetailsPageOneComponent } from './components/pages/service-details-page-one/service-details-page-one.component';
import { ServiceDetailsPageTwoComponent } from './components/pages/service-details-page-two/service-details-page-two.component';
import { ContactPageTwoComponent } from './components/pages/contact-page-two/contact-page-two.component';
import { ContactPageOneComponent } from './components/pages/contact-page-one/contact-page-one.component';
import { ContactPageThreeComponent } from './components/pages/contact-page-three/contact-page-three.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';
import { AppointmentPageComponent } from './components/pages/appointment-page/appointment-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { ComingSoonPageComponent } from './components/pages/coming-soon-page/coming-soon-page.component';
import { AboutPageOneComponent } from './components/pages/about-page-one/about-page-one.component';
import { AboutPageTwoComponent } from './components/pages/about-page-two/about-page-two.component';
import { AboutPageThreeComponent } from './components/pages/about-page-three/about-page-three.component';
import { DentistsPageComponent } from './components/pages/dentists-page/dentists-page.component';
import { InsurancePageComponent } from './components/pages/insurance-page/insurance-page.component';
import { DentistDetailsPageComponent } from './components/pages/dentist-details-page/dentist-details-page.component';
import { PortfolioDetailsPageComponent } from './components/pages/portfolio-details-page/portfolio-details-page.component';
import { PortfolioPageComponent } from './components/pages/portfolio-page/portfolio-page.component';
import { BlogGridPageComponent } from './components/pages/blog-grid-page/blog-grid-page.component';
import { BlogLeftSidebarPageComponent } from './components/pages/blog-left-sidebar-page/blog-left-sidebar-page.component';
import { BlogRightSidebarPageComponent } from './components/pages/blog-right-sidebar-page/blog-right-sidebar-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { WidgetSidebarComponent } from './components/common/widget-sidebar/widget-sidebar.component';
import { HowVaccinesWorkPageComponent } from './components/pages/how-vaccines-work-page/how-vaccines-work-page.component';
import { RegisterForVaccinePageComponent } from './components/pages/register-for-vaccine-page/register-for-vaccine-page.component';
import { DatePipe } from '@angular/common';
import { AppointmentSearchComponent } from './components/common/appointment-search/appointment-search.component';
import { BookDoctorsPageComponent } from './components/pages/book-doctors-page/book-doctors-page.component';
import { BookAppointmentComponent } from './components/pages/book-appointment/book-appointment.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
    declarations: [
        AppComponent,
        HomeDemoOneComponent,
        HomeDemoEightComponent,
        NotFoundComponent,
        FooterComponent,
        BlogComponent,
        FeedbackComponent,
        DentistsComponent,
        FeaturesComponent,
        AboutComponent,
        AppointmentComponent,
        CallUsComponent,
        ServicesComponent,
        RecentWorksComponent,
        HomeoneBannerComponent,
        BannerFeaturesComponent,
        PopularDestinationsComponent,
        WhyChooseUsComponent,
        WhatWeDoComponent,
        PartnerComponent,
        BeforeAndAfterComponent,
        SkinCareServicesComponent,

        HeaderComponent,
        TopHeaderComponent,
        NavbarComponent,
        SubscribeComponent,
        HowItWorksComponent,
        DoctorsComponent,
        WhatWeOfferComponent,
        EyeCareServicesComponent,
        SelfProtectionComponent,
        ApprovedVaccineComponent,
        EmergencyRegistrationComponent,

        ContactInfoComponent,
        CtaComponent,
        DigitalHelpComponent,
        FunfactsComponent,
        SkillsComponent,
        CategoriesComponent,
        HomeeightBannerComponent,
        ServicesPageOneComponent,
        ServicesPageTwoComponent,
        ServicesPageThreeComponent,
        ServicesPageFourComponent,
        ServicesPageFiveComponent,
        ServicesPageSixComponent,
        ServiceDetailsPageOneComponent,
        ServiceDetailsPageTwoComponent,
        ContactPageTwoComponent,
        ContactPageOneComponent,
        ContactPageThreeComponent,
        PrivacyPolicyPageComponent,
        TermsConditionsPageComponent,
        PricingPageComponent,
        TestimonialsPageComponent,
        AppointmentPageComponent,
        LoginPageComponent,
        RegisterPageComponent,
        ForgotPasswordPageComponent,
        FaqPageComponent,
        ComingSoonPageComponent,
        AboutPageOneComponent,
        AboutPageTwoComponent,
        AboutPageThreeComponent,
        DentistsPageComponent,
        InsurancePageComponent,
        DentistDetailsPageComponent,
        PortfolioDetailsPageComponent,
        PortfolioPageComponent,
        BlogGridPageComponent,
        BlogLeftSidebarPageComponent,
        BlogRightSidebarPageComponent,
        BlogDetailsPageComponent,
        WidgetSidebarComponent,
        HowVaccinesWorkPageComponent,
        RegisterForVaccinePageComponent,
        AppointmentSearchComponent,
        BookDoctorsPageComponent,
        BookAppointmentComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CarouselModule,
        BrowserAnimationsModule,
        NgxScrollTopModule,
        ModalModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
        BsDatepickerModule.forRoot(),
        TimepickerModule.forRoot(),
        FormsModule,
        NgxPaginationModule,
        HttpClientModule,
        ReactiveFormsModule,
        BsDropdownModule.forRoot(),
        FormsModule,
        SocialLoginModule,
        GoogleSigninButtonModule,
        RecaptchaModule,
        TypeaheadModule.forRoot(),
    ],
    providers: [
        DatePipe,
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(
                            '116767140798-8mbqo99f3esuqdq1ovr2ar02abio6jb3.apps.googleusercontent.com'
                        ),
                    },
                ],
            } as SocialAuthServiceConfig,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
