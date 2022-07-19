import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('about-view')
export class AboutView extends LitElement {
  static override styles = css`
    .home-view {
      padding: 1em;
    }
  `;
  
  @property({type: String}) aboutTitle = 'This is the about view.';

  override render() {
    return html`
      <div class="home-view">
        <h1>${this.aboutTitle}</h1>
        <p>Another test page for the routing</p>
        <p>The navigation links are using the official <a href="https://www.npmjs.com/package/@larzilla/boilit-router" target="_blank">BoiLit Router</a> package for navigation.</p>
      </div>
    `;
  }
}
