import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('lit-router-kit-default-index')
export class DefaultIndexView extends LitElement {
  static override styles = css`
    .not-found-view {
      text-align: center;
    }
    h2 {
      font-size: 4em;
      font-weight: bold;
    }
    .not-found-message {
      
    }
  `;

  override render () {
    return html`
      <div class="not-found-view">
        <h2>Default Index</h2>
        <div class="not-found-message">
          <p>This is the default index fallback route that comes with the boilit-router package.</p>
          <p>To use your own route, simply add a route to your own app routes with the '/' key.</p>
        </div>
      </div>
    `;
  }
}
