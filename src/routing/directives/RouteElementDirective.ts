import {html, unsafeStatic} from 'lit/static-html.js';
import { Directive, directive } from 'lit/directive.js';

class RouteElementDirective extends Directive {
 
  render(tag: string) {
    return html`<${unsafeStatic(tag)} .params=${{test: 10}}></${unsafeStatic(tag)}`;
  }
}

const routeElement = directive(RouteElementDirective);

export default routeElement;
