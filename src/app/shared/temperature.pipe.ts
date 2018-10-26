import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'temperature' })
export class TemperaturePipe implements PipeTransform{
    transform(value: number, fromTo: string) {
        if(!fromTo){
            throw "Temperature Pipes require parameter F2C or C2F"
        }
        return (fromTo == 'FtoC')?
                (value-32) * 9/5:
                value * 9/5 + 32
    }   
}