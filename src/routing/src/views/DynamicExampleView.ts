import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import RenderProps from '../core/RenderProps';


@customElement('dynamic-example-view')
export class DynamicExampleView extends LitElement {
  static override styles = css`
    .dynamic-example-view {
      text-align: center;
    }
    h2 {
      font-size: 4em;
      font-weight: bold;
    }
    .dynamic-example-message {
      padding: 1em;
      margin: 1em;
      background-color: #eee;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `;

  @property()
  props: RenderProps = new RenderProps({});

  override render () {
    return html`
      <div class="dynamic-example-view">
        <h2>Dynamic Example</h2>
        <div class="dynamic-example-message">
          <p>This is an example of a dynamic routes</p>
          <p>First Value (:firstValue) = ${this.props.getParam(':firstValue')}</p>
          <p>Second Value (:secondValue) = ${this.props.getParam(':secondValue')}</p>
        </div>
      </div>
    `;
  }
}
