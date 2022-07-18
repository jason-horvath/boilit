import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import RouteLinkEvent from '../types/RouteLinkEvent';

@customElement('route-link')
export default class RouteLink extends LitElement {
  static override styles = css`
    route-link:hover {
      cursor: pointer;
    }
  `;

  @property({type: String})
  uri = '';
  
  override connectedCallback() {
    super.connectedCallback()
    console.log(this.uri)
    this.addEventListener('onmousedown', () => this.navigate())
  }

  navigate() {
    console.log(this.uri);
    if(this.uri === window.location.pathname) {
      return false;
    }

    return window.dispatchEvent(this.getNavigateEvent())
  }

  getNavigateEvent() {
    const event = new CustomEvent('route-navigate', {
      bubbles: false,
      detail: {
        uri: this.uri,
      } as RouteLinkEvent
    })
    // console.log(event);
    return event;
  }
  override render() {
    return html`<a @click=${this.navigate}><slot></slot></a>`;
  }
}
