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

    // Called when the element is inserted into a document,
    // including into a shadow tree
    connectedCallback() {
        console.log('SimpleCard Komponente wurde in den DOM eingefügt');

        this.updateContent();
    }

    // Describes the observed attributes
    static get observedAttributes() {
        return ['title', 'description'];
    }

    // Called when the value of an attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'title' || name === 'description') {
            this.updateContent();
        }
    }


    // Updates title and description of the card
    updateContent() {
        const title = this.getAttribute('title') || 'Kein Titel';
        const description = this.getAttribute('description') || 'Keine Beschreibung';

        this.shadowRoot.querySelector('#title').textContent = title;
        this.shadowRoot.querySelector('#description').textContent = description;
    }
}

customElements.define('simple-card', SimpleCardDemo);