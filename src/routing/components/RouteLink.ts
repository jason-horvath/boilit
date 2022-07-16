import {css, html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
// import RouteLinkEvent from '@routing/events/RouteLinkEvent'

@customElement('route-link')
export default class RouteLink extends LitElement {
  static override styles = css`
    route-link:hover {
      cursor: pointer;
    }
  `;
  @property({type: String}) uri = '';
  
  override connectedCallback() {
    super.connectedCallback()
    console.log(this.uri)
    this.addEventListener('click', () => this.navigate())
  }

  navigate() {
    console.log(this.uri);
    window.dispatchEvent(this.getNavigateEvent())
  }

  getNavigateEvent() {
    const event = new CustomEvent('route-navigate', {
      detail: {
        uri: this.uri
      }
    })
    // console.log(event);
    return event;
  }
  override render() {
    return html`<a @click=${() => this.navigate()}><slot></slot></a>`;
  }
}
