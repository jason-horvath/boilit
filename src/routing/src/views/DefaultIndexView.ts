import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('default-index-view')
export class DefaultIndexView extends LitElement {
  static override styles = css`
    .default-index-view {
      text-align: center;
    }
    h2 {
      font-size: 4em;
      font-weight: bold;
    }
    .default-index-message {
      padding: 1em;
      margin: 1em;
      background-color: #eee;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `;

  override render () {
    return html`
      <div class="default-index-view">
        <h2>Default Index</h2>
        <div class="default-index-message">
          <p>This is the default index fallback route that comes with the boilit-router package.</p>
          <p>To use your own route, simply add a route to your own app routes with the '/' key.</p>
        </div>
      </div>
    `;
  }
}
