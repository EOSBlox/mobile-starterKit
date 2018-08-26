import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../shared-styles.js';
import 'blox-settings';

class MyLogout extends PolymerElement {
static get template() {
    return html`
    <style include="shared-styles">
        :host {
        display: block;
        padding: 0;
        margin-top: 75px;
        }
    </style>

    <div class="container">
        <blox-settings screen="logout"></blox-settings>
    </div>

    `;
}
} window.customElements.define('my-logout', MyLogout);