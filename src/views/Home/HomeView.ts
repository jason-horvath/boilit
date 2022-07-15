import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@components/example/AppCounter'

@customElement('home-view')
export class HomeView extends LitElement {
  static override styles = css`
    .home-view {
      padding: 1em;
    }
  `;

  @property({type: String}) homeTitle = 'This is the home view.';

  override render() {
    return html`
      <div class="home-view">
        <h1>${this.homeTitle}</h1>
        <p>This is just and example of where a view slot would go.</p>
        <p>The links up to do not go anywhere, as they would require routing or some static content at those paths. It is just to illustrate the example of rendering links.</p>
        <p>And now.... the moment you have all been waiting for. The obligatory counter.</p>
        <app-counter></app-counter>
      </div>
    `;
  }
}
