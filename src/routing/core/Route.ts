import { LitElement } from 'lit';
import RouteMeta from '../types/RouteMeta';

export default class Route {
  customElementName: string;
  component: LitElement;
  meta: RouteMeta;
  isProtected: boolean = false;

  constructor(
    customElementName: string,
    component: LitElement,
    isProtected: boolean = false,
    meta: RouteMeta = {}
  ) {
    this.customElementName = customElementName;
    this.component = component;
    this.isProtected = isProtected;
    this.meta = meta;
  }

  addMeta(meta: RouteMeta) {
    this.meta = meta;
  }

  getMeta(): Object {
    return this.meta;
  }
}
    
