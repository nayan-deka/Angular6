import { Component } from "@angular/core";

@Component({
    selector: 'app-test',
    template: `
    <h1 style="background-color: orange">
        Angular Directives with Modules
    </h1>
    <h3 [myHidden]="show" style="background: lightblue">
        <div>
            Welcome to Hidden Customer Attribute Directive
        </div>
    </h3>
    <div class='hover-focus'>Nayan Infotek Greets you!</div>

    <br/>
    <h2>Pipes Demo</h2>
  <div style='background-color:yellow'>
     <h2>Enter Temperature</h2>
       <input type='text' [(ngModel)] = "temp">
       <button (click)="toggleFormat()">Toggle Format</button>
       <br/>
       
       <h3 style='background-color:lightgreen'>
          In {{targetFormat}} the temperature is
              {{ temp | temperature:format | number:'1.1-2'}}
       </h3>     
  </div>
    `
})
export class TestComponent {
    show: boolean = false

    temp: number=40;
    toCelsius: boolean=true;
    targetFormat: string ='Celsius';
    format: string='FtoC';

    toggleFormat(){   
        this.toCelsius = !this.toCelsius;
        this.format = this.toCelsius ? 'FtoC': 'CtoF';
        this.targetFormat = 
        this.toCelsius ?'Celsius' : 'Fahrenheit';
    }
}