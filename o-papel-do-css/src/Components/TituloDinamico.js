class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        // Base do component <h1>Antedeguemon</h1>
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute("titulo");

        // Estilizar o component
        const style = document.createElement("style");
        style.textContent = `
            h1 {
                color: orange;
            }
        `;

        // Enviar para a shadow
        shadow.appendChild(componentRoot);
        shadow.appendChild(style);
    }
}

customElements.define('titulo-dinamico', TituloDinamico);  // Sempre usar hífens para tags customizadas!
