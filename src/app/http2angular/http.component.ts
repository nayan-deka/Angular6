import { HTTPService } from "./http.service";
import { Component } from "@angular/core";

@Component({
    selector: 'app-http',
    template:`
    <h3 style="text-align:center;background:orange">
        Angular 6 HttpClient Demo App by Murthy
    </h3>
   
    <h3>Foods (CRUD Demo)</h3>
    <ul>
      <li *ngFor="let food of foods ">
      <input type="text" name="food-name" [(ngModel)]="food.name">
      <button (click)="updateFood(food)">Update</button> 
      <button (click)="deleteFood(food)">Delete</button></li>
    </ul>
   
    <p>Create a new food: 
    <input type="text" name="food_name" [(ngModel)]="food_name">
    <button (click)="createFood(food_name)">Save</button></p>  
    `
  })
export class HTTPComponent {
    public foods: any
    public food_name: any

    constructor(private _httpService: HTTPService) {}

    ngOnInit() {
        this.getFoods()
    }

    getFoods() {
        this._httpService.getFoods().subscribe(
            (data) => { this.foods = data },
            (err) => console.error(err),
            (data) => console.log("done loading foods")
        )
    }
}