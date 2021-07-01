import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainmenuComponent } from './header/mainmenu/mainmenu.component';
import { AuthmenuComponent } from './header/authmenu/authmenu.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PaypalworkComponent } from './paypalwork/paypalwork.component';
import { PaypalLeftBlockComponent } from './paypalwork/paypal-left-block/paypal-left-block.component';
import { PaypalRightBlockComponent } from './paypalwork/paypal-right-block/paypal-right-block.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HowpaypalworksComponent } from './howpaypalworks/howpaypalworks.component';
import { LeftComponent } from './howpaypalworks/left/left.component';
import { RightComponent } from './howpaypalworks/right/right.component';
import { StartshoppingComponent } from './startshopping/startshopping.component';
import { PaypalbrandsComponent } from './paypalbrands/paypalbrands.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpComponent } from './fake-api/http/http.component';

@NgModule({
  declarations: [
    AppComponent,
    MainmenuComponent,
    AuthmenuComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    PagenotfoundComponent,
    PaypalworkComponent,
    PaypalLeftBlockComponent,
    PaypalRightBlockComponent,
    LoginComponent,
    RegisterComponent,
    HowpaypalworksComponent,
    LeftComponent,
    RightComponent,
    StartshoppingComponent,
    PaypalbrandsComponent,
    PostComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,ReactiveFormsModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
