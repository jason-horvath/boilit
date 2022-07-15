import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('layout-container')
export class LayoutContainer extends LitElement {
  static override styles = css`
    .layout-container {
      width: 80%;
      margin: 0 auto;
    }`;

  override render() {
    return html`
      <div class="layout-container">
        <slot name="header"></slot>
        <slot name="view"></slot>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
