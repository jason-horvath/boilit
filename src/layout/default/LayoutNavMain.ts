import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@components/nav/NavLink';

interface NavLinkInterface {
  href: String;
  text: String;
}

@customElement('layout-nav-main')
export class LayoutNavMain extends LitElement {
  static override styles = css`
    nav-link{
      margin: 15px;
    }
  `;

  @property({type: Array}) navLinks: NavLinkInterface[] = [
    {
      href: '/home',
      text: 'Home'
    },
    {
      href: '/about',
      text: 'About'
    },
  ];

  override render() {
    return html`
      <div class="layout-nav-main">
        ${this.navLinks.map(navLink => {
          return html`<nav-link hRef=${navLink.href}>${navLink.text}</nav-link>`;
        })}
      </div>
    `;
  }
}
