const url = "data/shop.json";

const displayMembers = (products) => {
    const cards = document.querySelector(".grid"); // select the output container element
  
    products.forEach((product) => {
      // Create elements to add to the div.cards element
      let card = document.createElement("section");
      card.classList.add("product_card")
      card.innerHTML = `<h2>${product.products}</h2>
      <p> About this scent, ${product.about}</p>
      <img class='card_img' src=${product.imgurl}>
      <p> ${product.size}</p>`
      cards.appendChild(card);
    }); // end of forEach loop
}; // end of function expression

async function getMemberData() {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayMembers(data.products);
    } else {
      console.error("There was an error loading the data.");
      const cards = document.querySelector("div.cards");
      cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
}
getMemberData();