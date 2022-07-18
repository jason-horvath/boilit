import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('default-not-found-view')
export class DefaultNotFoundView extends LitElement {
  static override styles = css`
    .default-not-found-view {
      text-align: center;
    }
    h2 {
      font-size: 4em;
      font-weight: bold;
    }
    .default-not-found-message {
      padding: 1em;
      margin: 1em;
      background-color: #eee;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `;

  override render () {
    return html`
      <div class="default-not-found-view">
        <h2>Sorry, 404 Not found!</h2>
        <div class="default-not-found-message">
          <p>This is the default 404 fallback route that comes with the boilit-router package.</p>
          <p>To use your own route, simply add a route to your own app routes with the '/404' key.</p>
        </div>
      </div>
    `;
  }
}
