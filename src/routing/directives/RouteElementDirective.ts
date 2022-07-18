import {html, unsafeStatic} from 'lit/static-html.js';
import { Directive, directive } from 'lit/directive.js';

class RouteElementDirective extends Directive {
  render(tag: string, params: Map<String, String>) {
    return html`<${unsafeStatic(tag)} .params=${params}></${unsafeStatic(tag)}>`;
  }
}

const routeElement = directive(RouteElementDirective);

export default routeElement;
