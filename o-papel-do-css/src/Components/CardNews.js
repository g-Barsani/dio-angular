// // Todo componente é uma função JavaScript que vai acabar retornando mais JavaScript :)

// class CardNews extends HTMLElement {
//     constructor() {
//         super();  // Invoca o método construtor de quem você tá herdando (Nesse caso, o HTMLElement)

//         // --open-- é tipo public no C#
//         const shadow = this.attachShadow({ mode: "open" });
//         shadow.innerHTML = "<h1>TESTE</h1>";
        
//     }
// }

// customElements.define('card-news', CardNews);

// console.log("hello");

class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    // Vai construir a parte dos elementos (de maneira mais organizada)
    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");

        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const newsContent = document.createElement("p");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);


        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");
        const newsImage = document.createElement("image");
        cardRight.appendChild(newsImage);

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {

    }
}

customElements.define("card-news", CardNews);