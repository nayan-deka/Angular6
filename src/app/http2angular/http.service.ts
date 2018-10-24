import { Injectable } from'@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOtions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({providedIn: 'root'})
export class HTTPService {
    constructor(private http: HttpClient){
        console.log("HTTP Service Injected")
    }
    base_url = 'http://localhost:3000'

    getFoods():any{
        return this.http.get(this.base_url + '/api/food')
                    .pipe((data:any) => {
                        console.log(data)
                        return data
                    })
    }

    createFood(food) {
        let body = JSON.stringify(food)
        return this.http.post(this.base_url + 'api/food', body, httpOtions)
    }

    updateFood(food) {
        let body = JSON.stringify(food)
        return this.http.put(this.base_url + 'api/food', body, httpOtions)
    }

    deleteFood(food) {
        return this.http.delete(this.base_url + 'api/food', food.id)
    }
}