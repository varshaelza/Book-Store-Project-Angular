import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponent } from './home/components/home.component';
import { BookListComponent } from './books/components/book-list/book-list.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { CartComponent } from './shopping/components/cart/cart.component';
import { CheckoutComponent } from './shopping/components/checkout/checkout.component';
import { ConfirmationComponent } from './shopping/components/confirmation/confirmation.component';
import { WishlistComponent } from './shopping/components/wishlist/wishlist.component';
import { ManageBooksComponent } from './admin/components/manage-books/manage-books.component';
import {HttpClientModule} from '@angular/common/http';
import { ManageCategoriesComponent } from './admin/components/manage-categories/manage-categories.component';
import { ManageDiscountsComponent } from './admin/components/manage-discounts/manage-discounts.component';
import { ManageUsersComponent } from './admin/components/manage-users/manage-users.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { ViewProfileComponent } from './profile/components/view-profile/view-profile.component';
import { AllBooksComponent } from './books/components/all-books/all-books.component';
import { ViewOrdersComponent } from './shopping/components/view-orders/view-orders.component';
import { OrderDetailsComponent } from './shopping/components/order-details/order-details.component';
import { FeaturedBooksComponent } from './books/components/featured-books/featured-books.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BookListComponent,
    BookDetailsComponent,
    CartComponent,
    CheckoutComponent,
    ConfirmationComponent,
    WishlistComponent,
    ManageBooksComponent,
    ManageCategoriesComponent,
    ManageDiscountsComponent,
    ManageUsersComponent,
    FilterPipe,
    ViewProfileComponent,
    AllBooksComponent,
    ViewOrdersComponent,
    OrderDetailsComponent,
    FeaturedBooksComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
