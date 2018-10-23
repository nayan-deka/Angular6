import { Product } from "./product";
import { ProductService } from "./product.service";
import { Component } from "@angular/core";

@Component({
    selector: "app-DI",
    templateUrl: "./product.component.html"
})
export class ProductComponent {
    product: Product
    constructor(public ps: ProductService) {
        console.log("Service is injected")
        this.product = this.ps.getProduct()
    }
}