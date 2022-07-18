import {html, unsafeStatic} from 'lit/static-html.js';
import { Directive, directive } from 'lit/directive.js';
import RouteMeta from '../types/RouteMeta';

class RouteElementDirective extends Directive {
  render(tag: string, meta: RouteMeta) {
    return html`<${unsafeStatic(tag)} .meta=${meta}></${unsafeStatic(tag)}>`;
  }
}

const routeElement = directive(RouteElementDirective);

export default routeElement;
