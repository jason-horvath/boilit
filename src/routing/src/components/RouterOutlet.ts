import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import RouteCollection from '../core/RouteCollection';
import Route from '../core/Route';
import routeElement from '../directives/RouteElementDirective';
import RouteEntry from '../core/RouteEntry';
import RenderProps from '../core/RenderProps';

@customElement('router-outlet')
export default class RouterOutlet extends LitElement {
  static override styles = css`p { color: blue }`;

  @property()
  notFoundUri: string = '/404';

  @property()
  routes: RouteCollection = new RouteCollection();

  @property({type: String})
  routeTag = `/`;

  @property()
  routeParams: Map<String, String> = new Map<String, String>();
  
  @property()
  routeEntry: RouteEntry = new RouteEntry('', undefined);

  override async connectedCallback() {
    super.connectedCallback();
    // this.routes.setRouteMap(this.compiledRouteMap());
    console.log(this.routes);
    console.log(window.location.pathname);
    this.navigateToPathname(window.location.pathname);
    this.routeNavigateListener();
  }

  navigateToPathname(path: string) {
    this.routeEntry = this.routes.get(path);
    // const routePath = routeEntry.getPath();
    const route = this.routeEntry.getRoute();
    this.setRouteParams(this.routeEntry);
    console.log(this.routeParams);
    if(route instanceof Route) {
      window.history.pushState({}, '', path);
      this.routeTag = route.customElementName;
    } else {
      this.redirectNotFound()
    }
  }

  setRouteParams(routeEntry: RouteEntry) {
    const entryParams = routeEntry.getParams();
    const pathParts = window.location.pathname.split('/');
    [...entryParams.keys()].map(name => {
      const pathKey = entryParams.get(name);
      if(typeof pathKey === 'number') {
        const value = pathParts[pathKey]
        this.routeParams.set(name, value);
      }
    })
  }

  redirectNotFound() {
    const route = this.routes.get(this.notFoundUri);
    if(route instanceof Route) {
      window.history.pushState({}, '', this.notFoundUri);
      this.routeTag = route.customElementName;
    } else {
      this.throwError(`Unable to find a matching route. Attempted to fallback to '/404', please add a '/404' route for proper behavoir.`);
    }
  }

  routeNavigateListener() {
    window.addEventListener('route-navigate', (e: any) => {
      try {
        this.navigateToPathname(e.detail.uri);
      } catch (e) {
        console.error(e);
      }
    })
  }

  getRouteElement(elementName: string) {
    return elementName;
  }

  getRenderProps(): RenderProps {
    
    const rederProps = {
      title: this.routeEntry.getRoute()?.meta.title ?? '',
      description: this.routeEntry.getRoute()?.meta.title ?? '',
      params: this.routeParams ?? new Map(),
      vars: this.routeEntry.getRoute()?.meta?.vars ?? new Map()
    }

    return new RenderProps(rederProps);
  }

  throwError(message: string) {
    throw new Error(`Router Outlet Error: ${message}`);
  }
  override render() {
    return html`<span>${routeElement(this.routeTag, this.getRenderProps())}</span>`;
  }
}
