import { NgModule } from "@angular/core";
import { ProductsComponentMasterModule } from './products-cmp.module';
import { ProductLibrariesModule } from './products-libraries.module';

@NgModule({
    imports: [
        ProductLibrariesModule,
        ProductsComponentMasterModule

    ],
    declarations:[],
    exports:[
        ProductLibrariesModule,
        ProductsComponentMasterModule
    ]
})
export class MasterModule{
    
}