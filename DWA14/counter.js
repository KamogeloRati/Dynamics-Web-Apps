import { LitElement, html, css } from 'lit';


/**
 * Represents a Counter App web component built using Lit.
 *
 * @extends LitElement
 */
class CounterApp extends LitElement {
    /**
     * Static styles for the Counter App.
     * @type {CSSResult}
     */
    static styles = css`
    container {
        text-align: center;
        margin-top: 50px;
      }
      
      sl-card {
        --sl-panel-background: #d81919;
        --sl-panel-border-radius: 10px;
        --sl-panel-box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      
      .counter {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
      }
      
      sl-button {
        margin: 0 10px;
      }
      
      #counter-value {
        font-size: 24px;
        margin: 0 10px;
      }
    `;
  
    /**
     * Properties for the Counter App component.
     * @type {Object}
     * @property {number} counter - The current counter value.
     */
    static properties = {
      counter: { type: Number }
    };
  
     
    constructor() {
      super();
  
      /**
       * The current counter value.
       * @type {number}
       */
      this.counter = 0;
    }
  
    /**
     * Increments the counter value by 1 and triggers an update.
     * @returns {void}
     */
    increment() {
      this.counter++;
      this.requestUpdate();
    }
  
    /**
     * Decrements the counter value by 1 and triggers an update.
     * @returns {void}
     */
    decrement() {
      this.counter--;
      this.requestUpdate();
    }
  
    /**
     * Resets the counter value to 0 and triggers an update.
     * @returns {void}
     */
    reset() {
      this.counter = 0;
      this.requestUpdate();
    }
  
    /**
     * Renders the Counter App component.
     * @returns {TemplateResult} The rendered HTML template.
     */
    render() {
      return html`
      <div>
      <p>Counter Value: ${this.counter}</p>
      <button @click="${this.increment}">Increment</button>
      <button @click="${this.decrement}">Decrement</button>
      <button @click="${this.reset}">Reset</button>
    </div> 
      `;
    }
  }
  
  // Define the 'counter-app' custom element.
  customElements.define('counter-app', CounterApp);
  