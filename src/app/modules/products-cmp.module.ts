import { NgModule } from "@angular/core";
import { HomeComponent } from './home/home.component';
import { ProductLibrariesModule } from './products-libraries.module';

@NgModule({
    imports: [
        ProductLibrariesModule
    ],
    declarations: [
        HomeComponent
    ],
    exports:[]
})
export class ProductsComponentMasterModule{
}