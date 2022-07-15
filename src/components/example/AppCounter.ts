import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@components/input/AppButton';

@customElement('app-counter')
export class NavLink extends LitElement {
  static override styles = css`
    .app-counter {
      width: 500px;
      padding: 10px;
      border: 1px solid #ccc;
      text-align: center;
      border-radius: 5px;
    }

    .count {
      font-size: 30px;
      font-weight: 700;
      padding: 10px;
    }
  `;

  @property({type: Number}) count = 0;

  decrease() {
    this.count--;
  }

  increase() {
    this.count++;
  }

  override render() {
    return html`
      <div class="app-counter">
        <div class="count">${this.count}</div>
        <div class="controls">
          <app-button @click=${() => this.decrease()}>Decrease</app-button>
          <app-button @click=${() => this.increase()}>Increase</app-button>
        </div>
      </div>
    `;
  }
}
