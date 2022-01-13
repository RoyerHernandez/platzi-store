import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { CarComponent } from './car/car.component';
import { ExponentialPipe } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CarComponent,
    ExponentialPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
