import { HttpModule } from '@angular/http';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent }  from './app.component';



//import { UsuariosListComponent }  from './usuarios/usuarios-list.component';
//import { EditarUsuarioComponent }  from './usuarios/editar_usuario/usuario.component';
//import { AdministrarProductosComponent }  from './productos/administrar_productos/administrar-productos.component';



import { NotificacionesListComponent }  from './notificaciones/notificaciones-list.component';

import { ReviewsListComponent }  from './reviews/reviews-list.component';
import { StarComponent }  from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';

//componentes unitarios
import { ReviewComponent }  from './reviews/realizar_review/realizar-review.component';



import { filterDateComponent } from './shared/filters/filterDate.component';

import { RouterModule } from '@angular/router';

//REPORTES
import { ReportesComponent }  from './reportes/reportes-list.component';
import { ReportesCategoriasComponent } from "./reportes/reportes-categorias.component";
import { ReportesProductoCantidadComponent } from "./reportes/reportes-productocantidad.component";

//ROLES
import { RolesListComponent }  from './roles/lista_roles/roles-list.component';

//import { RolesComponent } from "./roles/roles.component";

import { RolesNewComponent } from "./roles/new_role/roles-new.component";
//CATEGORIAS
import { CategoryListComponent } from "./categorias/category_list/category-list.component";
import { CategoryNewComponent } from "./categorias/category_new/category-new.component";
import { CategoryEditComponent } from "./categorias/category_edit/category-edit.component";
//USUARIOS
import { UserListComponent } from "./usuarios/user_list/users-list.component";
import { UserNewComponent } from "./usuarios/user_new/user-new.component";
import { UserEditComponent } from "./usuarios/user_edit/user-edit.component";
import { UserDetailsComponent } from "./usuarios/user_details/user-details.component";
//LOGIN
import { LoginComponent } from "./login/login.component";

//REGISTRO
import { RegisterComponent } from "./register/register.component";

//PRODUCTOS
import { ProductListComponent } from "./productos__/product_list/product-list.component";
import { ProductNewComponent } from "./productos__/product_new/product-new.component";
import { ProductEditComponent } from "./productos__/product_edit/product-edit.component";
import { ProductAdminComponent } from "./productos__/product_admin/product-list.component";

//MENU
import { MenuPublicComponent } from "./shared/menu/public/menu-public.component";
import { MenuLoginComponent } from "./shared/menu/login/menu-login.component";
import { MenuClientComponent } from "./shared/menu/private/client/menu-client.component";
import { MenuAdministrationComponent } from "./shared/menu/private/administration/menu-administration.component";
//SALE
import { SaleProductsComponent } from "./home/sale_product/product_list/product-list.component";
import { ProductDetailsComponent } from "./home/sale_product/product-datails/product-details.component";
//CARRITO
import { CartListComponent } from "./carrito/cart-list.component";

//PRODUCT FIELDS
import { ProductFieldEditComponent }  from './product_fields/product_fields_edit/product_fields_edit.component';
import { ProductFieldNewComponent }  from './product_fields/product_fields_new/product_fields_new.component';
import { ProductFieldListComponent }  from './product_fields/product_fields_list/product_fields_list.component';
import { AddProductFieldToProductComponent }  from './product_fields/product_fields_to_product/fields_for_producto.component';
import { PurchaseListComponent } from "./purchase/purchase-list.component";
import { PurchaseDetailsComponent } from "./purchase/purchase_details/purchase-details.component";
import { ConfigService } from "./config/config.service";


@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    HttpModule,
    RouterModule.forRoot([
    //PRODUCTOS
      { path: 'productos/campos/agregar/producto/:id', component: AddProductFieldToProductComponent },
      { path: 'administar-productos', component: ProductAdminComponent }, 
      { path: 'productos/editar/:id', component: ProductEditComponent }, 
      { path: 'productos', component: ProductListComponent }, 
      { path: 'productos/nuevo', component: ProductNewComponent }, 
      { path: 'productos/campos', component: ProductFieldListComponent },
      { path: 'productos/campos/nuevo', component: ProductFieldNewComponent },
      { path: 'productos/campos/editar/:id', component: ProductFieldEditComponent },
      
       { path: 'administar-productos', component: ProductListComponent }, 
    
      { path: 'compras', component: PurchaseListComponent },
      { path: 'compras/:id', component: PurchaseDetailsComponent },
      
      { path: 'reviews', component: ReviewsListComponent },
      { path: 'reviews/:id', component: ReviewComponent },


      { path: 'carrito', component: CartListComponent },
      { path: 'notificaciones', component: NotificacionesListComponent },
      
      
      //REPORTES
      { path: 'reportes', component: ReportesComponent },
      //ROLES
      { path: 'roles', component: RolesListComponent },
      { path: 'roles/nueva', component:  RolesNewComponent},
      //CATEGORIAS
      { path: 'categorias', component:  CategoryListComponent},
      { path: 'categorias/nueva', component:  CategoryNewComponent},
      { path: 'categorias/editar/:id', component:  CategoryEditComponent},
      //USUARIOS
      { path: 'usuarios', component: UserListComponent }, 
      { path: 'usuarios/nuevo', component:  UserNewComponent},
      { path: 'usuarios/editar/:id', component:  UserEditComponent},
      { path: 'usuarios/detalle/:id', component:  UserDetailsComponent},
      //LOGIN
      { path: 'login', component: LoginComponent },
      
      //REGISTRO
      { path: 'registro', component: RegisterComponent },

      //VENTAS
      { path: 'productos/detalles/:id', component: ProductDetailsComponent },

      { path: 'home', component:  WelcomeComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' }, // configuramos la URL por defecto
      { path: '**', redirectTo: '/home', pathMatch: 'full'} //cualquier otra ruta que no matchee, va a ir al WelcomeComponent, aca podría ir una pagina de error tipo 404 Not Found
      ])
   ],
  declarations: [ AppComponent, WelcomeComponent,
                
                  ReviewComponent,
                 
                  StarComponent, 
                 // ProductoFilterPipe, 
                
                 //REVIEWS
                  ReviewsListComponent,
                  //REPORTES
                  ReportesComponent,
                  ReportesCategoriasComponent,
                  ReportesProductoCantidadComponent,
                  //ROLES
                  RolesListComponent,
                  RolesNewComponent,
                  //CATEGORIAS
                  CategoryListComponent,
                  CategoryNewComponent,
                  CategoryEditComponent,
                  //USUARIOS
                  UserListComponent,
                  UserNewComponent,
                  UserEditComponent,
                  UserDetailsComponent,
                  //LOGIN
                  LoginComponent,
                 
                  //REGISTRO
                  RegisterComponent,
                  //MENU
                  MenuPublicComponent,
                  MenuLoginComponent,
                  MenuAdministrationComponent,
                  MenuClientComponent,
                  //SALEPRODUCTS
                  SaleProductsComponent,
                  ProductDetailsComponent,
                  //CARRITO
                  CartListComponent,
                  NotificacionesListComponent,
                  filterDateComponent,
                  ReportesCategoriasComponent,                 
                 //PRODUCT FIELD 
                  ProductFieldListComponent,
                  ProductFieldNewComponent,
                  ProductFieldEditComponent,
                  AddProductFieldToProductComponent,
                  //PRODUCT
                  ProductNewComponent,
                  ProductEditComponent,
                  ProductListComponent,
                  ProductAdminComponent,
                  ReportesProductoCantidadComponent,
                  //PURCHASE
                  PurchaseListComponent,
                  PurchaseDetailsComponent
                  ],

                  
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
