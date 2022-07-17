import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import '../../routing/components/RouterOutlet';
import routes from '../../config/routes';

@customElement('layout-container')
export default class LayoutContainer extends LitElement {
  static override styles = css`
    .layout-container {
      width: 80%;
      margin: 0 auto;
    }`;

  override render() {
    return html`
      <div class="layout-container">
        <slot name="header"></slot>
        <router-outlet .routes=${routes}></router-outlet>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
