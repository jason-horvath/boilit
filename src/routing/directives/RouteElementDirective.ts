import {html, unsafeStatic} from 'lit/static-html.js';
import { Directive, directive } from 'lit/directive.js';
import RenderProps from '../core/RenderProps';

class RouteElementDirective extends Directive {
  render(tag: string, props: RenderProps) {
    return html`<${unsafeStatic(tag)} .props=${props}></${unsafeStatic(tag)}>`;
  }
}

const routeElement = directive(RouteElementDirective);

export default routeElement;
