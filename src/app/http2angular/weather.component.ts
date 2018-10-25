import { Component } from '@angular/core'
import { FormControl } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { debounceTime, switchMap, map } from 'rxjs/operators'

const httpOptions = {
    headers: new HttpHeaders(
        { 'Content-Type': 'application/json'}
    )
};

@Component({
    selector: "app-weather",
    template: `
    <div class="container">
      <h3 style="background:orange">Live Weather Forecast by Murthy</h3>  
     
      City:<input type="text"
                     [formControl]="searchInput">

      <h3>Current Temperature in {{temperature}}F </h3>
      <h3>Humidity {{humidity}}% </h3>
     <h2 >Status : {{description}}</h2>
     </div>
    `
})
export class WeatherComponent {
    private baseWeatherURL: string =
    'http://api.openweathermap.org/data/2.5/weather?q='

    private urlSuffix: string =
    "&units=imperial&appid=ca3f6d6ca3973a518834983d0b318f73"

    searchInput: FormControl = new FormControl()
    description: string = ""
    temperature: string
    humidity: string = ""

    constructor(private http: HttpClient) {
        this.searchInput.valueChanges
                        .pipe(debounceTime(4000))
                        .pipe(switchMap((city: string) => this.getWeather(city)))
                        .subscribe((res: any) => {
                            this.description = res.weather[0].description
                            this.temperature = res.main.temp
                            this.humidity = res.main.humidity
                        },
                        (err: any) => console.log(`Can't get weather: Error code %s, URL: %s`, err.message, err.url),
                        () => console.log('done')
                        )
    }
    ngOnInit() {
        this.searchInput.setValue('Hyderabad')
    }
    getWeather(city:String): Observable<Array<String>> {
        return this.http.get(this.baseWeatherURL + city + this.urlSuffix)
                        .pipe(map((data: any) => {
                            console.log(data)
                            return data
                        }))
    }
}