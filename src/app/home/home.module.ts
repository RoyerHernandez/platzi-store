import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BannerComponent } from './component/banner/banner.component';
import {Routes, RouterModule} from '@angular/router';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './component/home/home.component';
import { SwiperModule } from "swiper/angular";


const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        SwiperModule
    ]
})
export class HomeModule{

};