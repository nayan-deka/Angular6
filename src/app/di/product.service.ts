import { Product } from "./product";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductService {
    getProduct():Product {
        return new Product(101, "iPhone 8" ,"The latest iPhone, 9-inch screen", 1200.00)
    }
}