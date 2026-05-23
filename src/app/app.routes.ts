import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './users/user/user.component';
import { ProductComponent } from './products/product/product.component';
import { EditproductComponent } from './products/editproduct/editproduct.component';
import { Authguard } from './authguard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'customers',canActivate:[Authguard], component: UsersComponent,
        children: [
            {path: ':id/:name', component: UserComponent }
        ]},
    { path: 'products', component: ProductsComponent,
        children: [
            { path: ':id', component: ProductComponent },
            { path: ':id/edit', component: EditproductComponent }
        ]}
];
