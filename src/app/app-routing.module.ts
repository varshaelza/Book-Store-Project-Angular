import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponent } from './home/components/home.component';
import {BookListComponent} from './books/components/book-list/book-list.component';
import { BookDetailsComponent } from './books/components/book-details/book-details.component';
import { CartComponent } from './shopping/components/cart/cart.component';
import { CheckoutComponent } from './shopping/components/checkout/checkout.component';
import { ConfirmationComponent } from './shopping/components/confirmation/confirmation.component';
import { WishlistComponent } from './shopping/components/wishlist/wishlist.component';
import { ManageBooksComponent } from './admin/components/manage-books/manage-books.component';
import { ManageCategoriesComponent } from './admin/components/manage-categories/manage-categories.component';
import { ManageDiscountsComponent } from './admin/components/manage-discounts/manage-discounts.component';
import { ManageUsersComponent } from './admin/components/manage-users/manage-users.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminAuthGuard } from './shared/guards/admin-auth.guard';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'list-books/:p_catID',component:BookListComponent},
  {path:'book-details/:bookId',component:BookDetailsComponent},
  {path:'cart',component:CartComponent, canActivate:[AuthGuard]},
  {path:'checkout', component:CheckoutComponent, canActivate:[AuthGuard]},
  {path:'confirm',component:ConfirmationComponent, canActivate:[AuthGuard]},
  {path:'wishlist',component:WishlistComponent, canActivate:[AuthGuard]},
  {path:'manage-books',component:ManageBooksComponent, canActivate:[AdminAuthGuard]},
  {path:'manage-categories',component:ManageCategoriesComponent, canActivate:[AdminAuthGuard]},
  {path:'manage-discounts',component:ManageDiscountsComponent, canActivate:[AdminAuthGuard]},
  {path:'manage-users',component:ManageUsersComponent, canActivate:[AdminAuthGuard]},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
