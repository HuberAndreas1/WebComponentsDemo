// Define a class for the custom element
class HelloWorld extends HTMLElement {
    // Called when the element is added to the DOM
    connectedCallback() {
        // Attach a shadow DOM to encapsulate styles and structure
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
      <link rel="stylesheet" href="hello-world.css">
      <div>
        <h2>Hello, <span id="name"></span>!</h2>
        <button id="change-name">Change Name</button>
      </div>
    `;

        shadow.appendChild(template.content.cloneNode(true));

        this.updateName();

        shadow.querySelector('#change-name').addEventListener('click', () => {
            const newName = prompt('Enter a new name:');
            if (newName) {
                this.setAttribute('name', newName);
            }
        });
    }

    // Define the attributes to observe
    static get observedAttributes() {
        return ['name'];
    }

    // Called when an observed attribute changes
    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'name') {
            this.updateName();
        }
    }

    // Update the displayed name
    updateName() {
        const name = this.getAttribute('name') || 'World';
        this.shadowRoot.querySelector('#name').textContent = name;
    }
}

// Define the custom element
customElements.define('hello-world', HelloWorld);
