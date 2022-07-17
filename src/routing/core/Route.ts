import { LitElement } from 'lit';
import RouteMeta from '../types/RouteMeta';

export default class Route {
  uri: string = '';
  customElementName: string = '';
  component: LitElement = {} as LitElement;
  meta: RouteMeta = {};
  isProtected: boolean = false;

  constructor(
    uri: string,
    customElementName: string,
    component: LitElement,
    isProtected: boolean = false,
    meta: Object = {}
  ) {
    this.uri = uri;
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
    
