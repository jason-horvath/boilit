import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('nav-link')
export class NavLink extends LitElement {
  static override styles = css`p { color: blue }`;

  @property({type: String}) hRef = '';
  @property({type: String}) text = '';

  override render() {
    return html`<a href=${this.hRef}><slot></slot></a>`;
  }
}
