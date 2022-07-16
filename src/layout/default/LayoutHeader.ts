import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@layout/default/LayoutNavMain';

@customElement('layout-header')
export default class LayoutFooter extends LitElement {
  static override styles = css`
    header {
      display: flex;
      background-color: #eee;
      margin: 0;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
    
    .title-container p {
      display: block;
      font-size: 14px;
      padding: 0 1.3em ;
      margin-top: -10px
    }

    h1 {
      margin: 0;
      padding: .5em;
    }
  `;

  @property({type: String}) headerTitle = 'BoiLit';

  override render() {
    return html`
      <header class="layout-header">
        <div class="title-container">
          <h1 class="title">${this.headerTitle}</h1>
          <p>BoiLit - The Boiler Plate Kit for Lit</p>
        </div>
        <layout-nav-main></layout-nav-main>
      </header>
    `;
  }
}
