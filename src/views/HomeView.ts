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
        <p>The navigation links are using the official <a href="https://www.npmjs.com/package/@larzilla/boilit-router" target="_blank">BoiLit Router</a> package for navigation.</p>
        <p>And now.... the moment you have all been waiting for. The obligatory counter.</p>
        <app-counter></app-counter>
      </div>
    `;
  }
}
