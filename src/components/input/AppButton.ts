import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('app-button')
export class AppButton extends LitElement {
  static override styles = css`
    button {
      border: 0;
      color: #fff;
      background-color: #33c;
      font-weight: 600;
      padding: 8px 15px;
      box-shadow: 1px 1px 4px #eee; 
      cursor: pointer;
      border-radius: 3px;
    }
  `;

  override render() {
    return html`<button><slot></slot></button>`;
  }
}
