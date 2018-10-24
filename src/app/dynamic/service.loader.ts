import { ComponentFactoryResolver,
        Injectable,
        Inject
        } from '@angular/core'

import { ViewContainerRef } from '@angular/core'
import { DynamicComponent } from './dynamic.component';

@Injectable()
export class Service {
    factoryResolver: ComponentFactoryResolver
    rootViewContainer: ViewContainerRef

    constructor(@Inject(ComponentFactoryResolver) factoryResolver) {
        this.factoryResolver = factoryResolver
    }

    setRootViewContainer(viewContainerRef) {
        this.rootViewContainer = viewContainerRef
    }

    addDynamicComponent(){
        const factory = this.factoryResolver.resolveComponentFactory(DynamicComponent)
        const component = factory.create(this.rootViewContainer.parentInjector)
        this.rootViewContainer.insert(component.hostView)
    }
}