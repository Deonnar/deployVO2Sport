"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
//import { UsuariosListComponent }  from './usuarios/usuarios-list.component';
//import { EditarUsuarioComponent }  from './usuarios/editar_usuario/usuario.component';
//import { AdministrarProductosComponent }  from './productos/administrar_productos/administrar-productos.component';
var notificaciones_list_component_1 = require("./notificaciones/notificaciones-list.component");
var reviews_list_component_1 = require("./reviews/reviews-list.component");
var star_component_1 = require("./shared/star.component");
var welcome_component_1 = require("./home/welcome.component");
//componentes unitarios
var realizar_review_component_1 = require("./reviews/realizar_review/realizar-review.component");
var filterDate_component_1 = require("./shared/filters/filterDate.component");
var router_1 = require("@angular/router");
//REPORTES
var reportes_list_component_1 = require("./reportes/reportes-list.component");
var reportes_categorias_component_1 = require("./reportes/reportes-categorias.component");
var reportes_productocantidad_component_1 = require("./reportes/reportes-productocantidad.component");
//ROLES
var roles_list_component_1 = require("./roles/lista_roles/roles-list.component");
//import { RolesComponent } from "./roles/roles.component";
var roles_new_component_1 = require("./roles/new_role/roles-new.component");
//CATEGORIAS
var category_list_component_1 = require("./categorias/category_list/category-list.component");
var category_new_component_1 = require("./categorias/category_new/category-new.component");
var category_edit_component_1 = require("./categorias/category_edit/category-edit.component");
//USUARIOS
var users_list_component_1 = require("./usuarios/user_list/users-list.component");
var user_new_component_1 = require("./usuarios/user_new/user-new.component");
var user_edit_component_1 = require("./usuarios/user_edit/user-edit.component");
var user_details_component_1 = require("./usuarios/user_details/user-details.component");
//LOGIN
var login_component_1 = require("./login/login.component");
//REGISTRO
var register_component_1 = require("./register/register.component");
//PRODUCTOS
var product_list_component_1 = require("./productos__/product_list/product-list.component");
var product_new_component_1 = require("./productos__/product_new/product-new.component");
var product_edit_component_1 = require("./productos__/product_edit/product-edit.component");
var product_list_component_2 = require("./productos__/product_admin/product-list.component");
//MENU
var menu_public_component_1 = require("./shared/menu/public/menu-public.component");
var menu_login_component_1 = require("./shared/menu/login/menu-login.component");
var menu_client_component_1 = require("./shared/menu/private/client/menu-client.component");
var menu_administration_component_1 = require("./shared/menu/private/administration/menu-administration.component");
//SALE
var product_list_component_3 = require("./home/sale_product/product_list/product-list.component");
var product_details_component_1 = require("./home/sale_product/product-datails/product-details.component");
//CARRITO
var cart_list_component_1 = require("./carrito/cart-list.component");
//PRODUCT FIELDS
var product_fields_edit_component_1 = require("./product_fields/product_fields_edit/product_fields_edit.component");
var product_fields_new_component_1 = require("./product_fields/product_fields_new/product_fields_new.component");
var product_fields_list_component_1 = require("./product_fields/product_fields_list/product_fields_list.component");
var fields_for_producto_component_1 = require("./product_fields/product_fields_to_product/fields_for_producto.component");
var purchase_list_component_1 = require("./purchase/purchase-list.component");
var purchase_details_component_1 = require("./purchase/purchase_details/purchase-details.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                //PRODUCTOS
                { path: 'productos/campos/agregar/producto/:id', component: fields_for_producto_component_1.AddProductFieldToProductComponent },
                { path: 'administar-productos', component: product_list_component_2.ProductAdminComponent },
                { path: 'productos/editar/:id', component: product_edit_component_1.ProductEditComponent },
                { path: 'productos', component: product_list_component_1.ProductListComponent },
                { path: 'productos/nuevo', component: product_new_component_1.ProductNewComponent },
                { path: 'productos/campos', component: product_fields_list_component_1.ProductFieldListComponent },
                { path: 'productos/campos/nuevo', component: product_fields_new_component_1.ProductFieldNewComponent },
                { path: 'productos/campos/editar/:id', component: product_fields_edit_component_1.ProductFieldEditComponent },
                { path: 'administar-productos', component: product_list_component_1.ProductListComponent },
                { path: 'compras', component: purchase_list_component_1.PurchaseListComponent },
                { path: 'compras/:id', component: purchase_details_component_1.PurchaseDetailsComponent },
                { path: 'reviews', component: reviews_list_component_1.ReviewsListComponent },
                { path: 'reviews/:id', component: realizar_review_component_1.ReviewComponent },
                { path: 'carrito', component: cart_list_component_1.CartListComponent },
                { path: 'notificaciones', component: notificaciones_list_component_1.NotificacionesListComponent },
                //REPORTES
                { path: 'reportes', component: reportes_list_component_1.ReportesComponent },
                //ROLES
                { path: 'roles', component: roles_list_component_1.RolesListComponent },
                { path: 'roles/nueva', component: roles_new_component_1.RolesNewComponent },
                //CATEGORIAS
                { path: 'categorias', component: category_list_component_1.CategoryListComponent },
                { path: 'categorias/nueva', component: category_new_component_1.CategoryNewComponent },
                { path: 'categorias/editar/:id', component: category_edit_component_1.CategoryEditComponent },
                //USUARIOS
                { path: 'usuarios', component: users_list_component_1.UserListComponent },
                { path: 'usuarios/nuevo', component: user_new_component_1.UserNewComponent },
                { path: 'usuarios/editar/:id', component: user_edit_component_1.UserEditComponent },
                { path: 'usuarios/detalle/:id', component: user_details_component_1.UserDetailsComponent },
                //LOGIN
                { path: 'login', component: login_component_1.LoginComponent },
                //REGISTRO
                { path: 'registro', component: register_component_1.RegisterComponent },
                //VENTAS
                { path: 'productos/detalles/:id', component: product_details_component_1.ProductDetailsComponent },
                { path: 'home', component: welcome_component_1.WelcomeComponent },
                { path: '', redirectTo: '/home', pathMatch: 'full' },
                { path: '**', redirectTo: '/home', pathMatch: 'full' } //cualquier otra ruta que no matchee, va a ir al WelcomeComponent, aca podría ir una pagina de error tipo 404 Not Found
            ])
        ],
        declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent,
            realizar_review_component_1.ReviewComponent,
            star_component_1.StarComponent,
            // ProductoFilterPipe, 
            //REVIEWS
            reviews_list_component_1.ReviewsListComponent,
            //REPORTES
            reportes_list_component_1.ReportesComponent,
            reportes_categorias_component_1.ReportesCategoriasComponent,
            reportes_productocantidad_component_1.ReportesProductoCantidadComponent,
            //ROLES
            roles_list_component_1.RolesListComponent,
            roles_new_component_1.RolesNewComponent,
            //CATEGORIAS
            category_list_component_1.CategoryListComponent,
            category_new_component_1.CategoryNewComponent,
            category_edit_component_1.CategoryEditComponent,
            //USUARIOS
            users_list_component_1.UserListComponent,
            user_new_component_1.UserNewComponent,
            user_edit_component_1.UserEditComponent,
            user_details_component_1.UserDetailsComponent,
            //LOGIN
            login_component_1.LoginComponent,
            //REGISTRO
            register_component_1.RegisterComponent,
            //MENU
            menu_public_component_1.MenuPublicComponent,
            menu_login_component_1.MenuLoginComponent,
            menu_administration_component_1.MenuAdministrationComponent,
            menu_client_component_1.MenuClientComponent,
            //SALEPRODUCTS
            product_list_component_3.SaleProductsComponent,
            product_details_component_1.ProductDetailsComponent,
            //CARRITO
            cart_list_component_1.CartListComponent,
            notificaciones_list_component_1.NotificacionesListComponent,
            filterDate_component_1.filterDateComponent,
            reportes_categorias_component_1.ReportesCategoriasComponent,
            //PRODUCT FIELD 
            product_fields_list_component_1.ProductFieldListComponent,
            product_fields_new_component_1.ProductFieldNewComponent,
            product_fields_edit_component_1.ProductFieldEditComponent,
            fields_for_producto_component_1.AddProductFieldToProductComponent,
            //PRODUCT
            product_new_component_1.ProductNewComponent,
            product_edit_component_1.ProductEditComponent,
            product_list_component_1.ProductListComponent,
            product_list_component_2.ProductAdminComponent,
            reportes_productocantidad_component_1.ReportesProductoCantidadComponent,
            //PURCHASE
            purchase_list_component_1.PurchaseListComponent,
            purchase_details_component_1.PurchaseDetailsComponent
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map