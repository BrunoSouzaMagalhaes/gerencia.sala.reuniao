import { Injectable, EmbeddedViewRef, ComponentFactoryResolver, ApplicationRef, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DomServiceService {

  private element: any;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
) { }

appendComponentToBody(component: any) {
  // 1. Create a component reference from the component 
  const componentRef = this.componentFactoryResolver
    .resolveComponentFactory(component)
    .create(this.injector);

    this.element = componentRef;

  // 2. Attach component to the appRef so that it's inside the ng component tree
  this.appRef.attachView(componentRef.hostView);

  // 3. Get DOM element from component
  const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
    .rootNodes[0] as HTMLElement;

  // 4. Append DOM element to the body
  document.body.appendChild(domElem);
  }

  removeToBody() {
    // 5. Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
      this.appRef.detachView(this.element.hostView);
      this.element.destroy();
  }, 3000);
  }
}
