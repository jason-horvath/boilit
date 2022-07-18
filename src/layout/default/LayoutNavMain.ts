import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@larzilla/boilit-router/link';

interface NavLinkInterface {
  uri: String;
  text: String;
}

@customElement('layout-nav-main')
export default class LayoutNavMain extends LitElement {
  static override styles = css`
    route-link {
      margin: 15px;
    }
    route-link:hover {
      cursor: pointer;
    }
  `;

  @property({type: Array}) navLinks: NavLinkInterface[] = [
    {
      uri: '/',
      text: 'Home'
    },
    {
      uri: '/about',
      text: 'About'
    },
  ];

  override render() {
    return html`
      <div class="layout-nav-main">
        ${this.navLinks.map(navLink => {
          return html`<route-link uri=${navLink.uri}>${navLink.text}</route-link>`;
        })}
      </div>
    `;
  }
}
