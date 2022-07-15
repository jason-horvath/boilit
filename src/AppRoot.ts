import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@layout/default/LayoutContainer';
import '@layout/default/LayoutFooter';
import '@layout/default/LayoutHeader';
import '@views/Home/HomeView'

@customElement('app-root')
export class AppRoot extends LitElement {
  static override styles = css`p { color: blue }`;;

  override render() {
    return html`
      <div class="app-main">
        <layout-container>
          <layout-header slot="header"></layout-header>
          <home-view slot="view"></home-view>
          <layout-footer slot="footer"></layout-footer>
        </layout-container>
      </div>
    `;
  }
}
