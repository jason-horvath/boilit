import { LitElement } from 'lit';
import RouteMetaData from '../types/RouteMetaData';

export default class Route {
  customElementName: string;
  component: LitElement;
  meta: RouteMetaData;
  isProtected: boolean = false;

  constructor(
    customElementName: string,
    component: LitElement,
    isProtected: boolean = false,
    meta: RouteMetaData = {}
  ) {
    this.customElementName = customElementName;
    this.component = component;
    this.isProtected = isProtected;
    this.meta = meta;
  }

  addMeta(meta: RouteMetaData) {
    this.meta = meta;
  }

  getMeta(): Object {
    return this.meta;
  }
}
    
