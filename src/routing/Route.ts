import { LitElement } from 'lit';

export default class Route {
    uri: string = '';
    customElementName: string = '';
    component: LitElement = {} as LitElement;
    isProtected: boolean = false;

    constructor(
        uri: string,
        customElementName: string,
        component: LitElement,
        isProtected: boolean
    ) {
        this.uri = uri;
        this.customElementName = customElementName;
        this.component = component;
        this.isProtected = isProtected;
    }
}
    
