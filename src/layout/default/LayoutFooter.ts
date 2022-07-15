import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('layout-footer')
export class LayoutHeader extends LitElement {
  static override styles = css`
    footer {
      background-color: #eee;
      text-align: center;
      padding: 1em;
    }
  `;

  @property() footerText = 'BoiLit - The Boiler Plate Kit for Lit';

  override render() {
    return html`
      <footer>
        ${this.footerText}
      </footer>
    `;
  }
}
