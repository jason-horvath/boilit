import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import RouteCollection from '@routing/RouteCollection';

@customElement('router-outlet')
export default class RouterOutlet extends LitElement {
  static override styles = css`p { color: blue }`;

  @property() routeCollection: RouteCollection | null = null;

  @property({type: String}) activeTag = 'Tst';

  constructor(routeCollection: RouteCollection) {
    super()
    this.routeCollection = routeCollection;
  } 

  override connectedCallback() {
    super.connectedCallback();
    console.log('sadfasdfa')
    window.addEventListener('route-navigate', (e: any) => {
      // console.log(e);
      this.activeTag = e.detail.uri;
    })
  }

  override render() {
    return html`<span>${this.activeTag}</span>`;
  }
}
