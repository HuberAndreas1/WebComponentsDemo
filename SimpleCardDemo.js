class SimpleCardDemo extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
        <link rel="stylesheet" href="simple-card-demo.css">
        <h2 id="title"></h2>
        <p id="description"></p>
        <slot></slot>
        `;

        shadow.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {
        //TODO: Init Content based on attributes
        throw new Error('Not implemented');
    }

    static get observedAttributes() {
        // TODO: Define observed attributes
        throw new Error('Not implemented');
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // TODO: React on attribute changes
        throw new Error('Not implemented');
    }

    updateContent() {
        /*const title = this.getAttribute('title') || 'Kein Titel';
        const description = this.getAttribute('description') || 'Keine Beschreibung';

        this.shadowRoot.querySelector('#title').textContent = title;
        this.shadowRoot.querySelector('#description').textContent = description;*/
    }
}

customElements.define('simple-card', SimpleCardDemo);