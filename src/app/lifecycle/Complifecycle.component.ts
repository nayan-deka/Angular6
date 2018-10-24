import { Component, Input, OnInit, OnChanges, DoCheck, OnDestroy,
     ChangeDetectorRef, SimpleChanges } from '@angular/core'

@Component({
    selector: 'app-lifecycle',
    template: `
    <h1 class="container">Google Search: 
        <input type="text" [(ngModel)]="search">
    </h1>
    <child [search]="search"></child>
    `
})
export class CompLifeCycleComponent {
    search: string = 'computers'
}

@Component({
    selector:'child',
    template: `
        
<h1 class="container text-danger" id="text">Search Text</h1>
<div class="container">
  <h3 class="text-primary">{{search}}</h3>
</div>
    `
})
export class ChildComponent implements OnInit,OnChanges,DoCheck,OnDestroy {
    changed: boolean = false;
    @Input()
    search: string
    constructor(public cd:ChangeDetectorRef){
        console.log(`constructor: ${this.search}`)
        this.cd.detach()
    }
    ngOnInit(){
        console.log(`ngOnInit: ${this.search}`)
        // setTimeout(() => {
        //     this.cd.reattach()
        // }, 5000)
    }

    ngOnChanges(changes: SimpleChanges):void {
        console.log(`ngOnChanges: ${this.search}`)
    }
    ngDoCheck() {
        console.log(`ngDocCheck - Change detection strategy`)
        // if(this.search.length > 10){
        //     this.cd.detectChanges()
        // }
        // this.cd.checkNoChanges()
    }

    ngAAfterViewChecked(){
        console.log("h1 tag text: " + document.getElementById("txt").innerText)
    }

    ngOnDestroy(){
        console.log("Component Destroyed")
    }
}

