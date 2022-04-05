const categProducts = [
  {
    category: "cakes",
    name: "Chocolate Truffle Cake",
    imageURI:
      "https://www.pngkit.com/png/full/21-212017_chocolate-cake-png-la-rocca-chocolate-truffle-cake.png",
    alt: "image of a chocolate truffle cake",
    discount: true,
    low: true,
    out: false,
  },

  {
    category: "cakes",
    name: "Almond fudge cake",
    imageURI:
      "https://giftdeliverycanada.s3-accelerate.amazonaws.com/catalog/Cakes/Regular%20Cake/Jamocha%20Almond%20Fudge%20Cake.png",
    alt: "iimage of an almond fudge cake",
    discount: true,
    low: true,
    out: false,
  },

  {
    category: "cakes",
    name: "Carrot Cake",
    imageURI:
      "https://giftdeliverycanada.s3-accelerate.amazonaws.com/catalog/Cakes/Regular%20Cake/Carrot%20Cake.png",
    alt: "image of a carrot cake",
    discount: true,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Italian Rum Cake",
    imageURI:
      "https://lh3.googleusercontent.com/ArqhfVOORmvWvPIZBI68OhoA22fB-gEPBdUelWTIFsPcXk4aCjJ8qpRinVDoP3w1tqgcSFRu87hRt2cBkFHHWLiIIPQk1ecbTsz7dRO2EeJepSYyJI9FVoqjBjmLS6ypzzKG6KuyMA=w1920-h1080",
    alt: "image of italian rum cake",
    discount: false,
    low: true,
    out: false,
  },

  {
    category: "cakes",
    name: "Everything Chocolate Cake",
    imageURI:
      "https://againstthegraingourmet.com/assets/images/products/chocolatecropped.png",
    alt: "image of an everything chocolate cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Milk Chocolate Caramel Cake",
    imageURI:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX1m526ga0fSGtK8fhbbvlA7wWv70LN_3ijA&usqp=CAU",
    alt: "image of a milk chocolate caramel cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Apple Crumble Cake",
    imageURI:
      "https://thecakebox.com.mt/wp-content/uploads/2020/04/Apple-Crumble-26cm-23.00.png",
    alt: "image of an apple crumble cake",
    discount: true,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Caramel Crunch Cake",
    imageURI:
      "https://giftdeliverycanada.s3-accelerate.amazonaws.com/catalog/Cakes/Regular%20Cake/The%20Original%20Super%20Caramel%20Crunch%E2%84%A2%20Cake.png",
    alt: "image of a caramel crunch cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Cherry Noire Cake",
    imageURI:
      "https://www.redsugar.in/application/modules/itemmanage/assets/images/big/R938fb32ac524d44fec0258999385bbcb.png",
    alt: "image of a cherry noire cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Brown Butter Caramel Praline Cake",
    imageURI:
      "https://images.squarespace-cdn.com/content/v1/5cc23d9516b6401e5613927b/1579914702096-U1Z3A9FCWCJ0NC6C38V8/ke17ZwdGBToddI8pDm48kH6dLahkWZjl4qQgBJa8JkNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwu_8raSl3LltzRHeMa5YI3PYx0Xg-sH8JLwncmhGfDgE0p3j2obI6Ph5_3mZGEMuU/Affogato_300449_B.png?format=original",
    alt: "image of a brown butter caramel praline cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Summer Bliss Cake",
    imageURI:
      "https://www.sugarplumdesserts.com/wp-content/uploads/ofg-6in-raspberry-keylime-mousse-chse2-800x614.png",
    alt: "image of a summer bliss cake",
    discount: false,
    low: true,
    out: false,
  },

  {
    category: "cakes",
    name: "White Chocolate Cranberry Truffle&nbsp;Cake",
    imageURI:
      "https://giftdeliverycanada.s3-accelerate.amazonaws.com/catalog/Cakes/Regular%20Cake/White%20Chocolate%20Cranberry%20Truffle%20Cake.png",
    alt: "image of white chocolate cranberry truffle cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "pastries",
    name: "Black Forest",
    imageURI:
      "https://www.papanaretos.gr/wp-content/uploads/2014/04/2.Pasta_BLACK-FOREST.png",
    alt: "image of a black forest pastry",
    discount: false,
    low: true,
    out: false,
  },

  {
    category: "pastries",
    name: "Caramel",
    imageURI:
      "https://www.papanaretos.gr/wp-content/uploads/2014/04/7.Pasta_KARAMELA.png",
    alt: "image of a caramel pastry",
    discount: true,
    low: false,
    out: false,
  },

  {
    category: "pastries",
    name: "Chocolate",
    imageURI:
      "https://www.papanaretos.gr/wp-content/uploads/2014/04/9.Pasta_SOKOLATA.png",
    alt: "image of a chocolate pastry",
    discount: true,
    low: true,
    out: false,
  },

  {
    category: "pastries",
    name: "Profiterol",
    imageURI:
      "https://www.papanaretos.gr/wp-content/uploads/2014/04/1.Pasta_PROFITEROL.png",
    alt: "image of a profiterol pastry",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "glutenf",
    name: "Gluten free turtle cheesecake",
    imageURI:
      "https://images.squarespace-cdn.com/content/v1/538500e4e4b0fa9e95efc7b9/1474392514481-YP6YDWSILDGN2OL8VUDD/adj_GF_TurtleCC.png?format=500w",
    alt: "image of a gluten free turtle cheesecake",
    discount: true,
    low: false,
    out: false,
  },

  {
    category: "glutenf",
    name: "Gluten free flourless Chocolate Cake",
    imageURI:
      "https://www.cakesonlineaustralia.com.au/wp-content/uploads/2020/01/FlourlessChocMud.png",
    alt: "image of a gluten free flourless chocolate cake",
    discount: false,
    low: true,
    out: false,
  },

  {
    category: "glutenf",
    name: "Gluten free Caramel Cake",
    imageURI:
      "https://www.chriskitchen.com.au/wp-content/uploads/2020/08/homepage-header-cake.png",
    alt: "image of a gluten free caramel cake",
    discount: true,
    low: true,
    out: false,
  },
];

function createCakes() {
  const parentElement = document.getElementById("divCakes");
  parentElement.innerHTML = "";
  for (let idx in categProducts) {
    if (categProducts[idx].category === "cakes") {
      const cakeDiv = document.createElement("div");
      parentElement.appendChild(cakeDiv);
      cakeDiv.className = "product";
      cakeDiv.id = `cakeDiv${idx}`;
      const cakeImg = document.createElement("img");
      cakeImg.src = categProducts[idx].imageURI;
      cakeImg.alt = categProducts[idx].alt;
      cakeImg.id = `cakeImg${idx}`;
      cakeDiv.appendChild(cakeImg);
      const cakeP = document.createElement("p");
      cakeP.innerHTML = categProducts[idx].name;
      cakeDiv.appendChild(cakeP);
      cakeSpan = document.createElement("span");
      cakeP.appendChild(cakeSpan);
      cakeSpan.id = `cakeSpan${idx}`;

      if (categProducts[idx].discount) {
        cakeImg.classList.add("discount");
        cakeSpan.innerHTML = "<br> Discount! Best Price!!";
      }
      if (categProducts[idx].low) {
        cakeImg.classList.add("low");
        cakeSpan.innerHTML = "<br> Only Few Cakes&nbsp;Left!!";
      }
      if (categProducts[idx].out) {
        cakeDiv.className = "out";
      }

      if (categProducts[idx].discount && categProducts[idx].low) {
        cakeImg.classList.remove("low");
        cakeImg.classList.add("discount");
        cakeSpan.innerHTML = "<br> Discount! Best Price!!";
        cakeSpan2 = document.createElement("span");
        cakeP.appendChild(cakeSpan2);
        cakeSpan2.innerHTML = "<br> Only Few Cakes&nbsp;Left!!";
        cakeSpan2.style.color = "rgb(224, 67, 88)";
       

        // const changeContent = (() => {
        //   const classes = ["low", "discount"];
        //   const spanText = [
        //     "<br> Only Few Cakes&nbsp;Left!!",
        //     "<br> Discount! Best Price!!",
        //   ];
        //   let index = 0;
        //   return function () {
        //     document.getElementById(`cakeSpan${idx}`).innerHTML = "";
        //     document.getElementById(`cakeImg${idx}`).classList = "";
        //     document.getElementById(`cakeSpan${idx}`).innerHTML =
        //       spanText[index];
        //     document.getElementById(`cakeImg${idx}`).classList = classes[index];
        //     index++;
        //     if (index === classes.length) {
        //       index = 0;
        //     }
        //   };
        // })();

        // setInterval(changeContent, 2000);
      }
    }
  }
}

function createPastries() {
  const parentElement = document.getElementById("divPastries");
  parentElement.innerHTML = "";
  for (let idx in categProducts) {
    if (categProducts[idx].category === "pastries") {
      const pastryDiv = document.createElement("div");
      parentElement.appendChild(pastryDiv);
      pastryDiv.className = "product";
      pastryDiv.id = `pastryDiv${idx}`;
      const pastryImg = document.createElement("img");
      pastryImg.src = categProducts[idx].imageURI;
      pastryImg.alt = categProducts[idx].alt;
      pastryImg.id = `pastryImg${idx}`;
      pastryDiv.appendChild(pastryImg);
      const pastryP = document.createElement("p");
      pastryP.innerHTML = categProducts[idx].name;
      pastryDiv.appendChild(pastryP);
      pastrySpan = document.createElement("span");
      pastryP.appendChild(pastrySpan);
      pastrySpan.id = `pastrySpan${idx}`;

      if (categProducts[idx].discount) {
        pastryImg.classList.add("discount");
        pastrySpan.innerHTML = "<br> Discount! Best Price!!";
      }
      if (categProducts[idx].low) {
        pastryImg.classList.add("low");
        pastrySpan.innerHTML = "<br> Only Few Pastries&nbsp;Left!!";
      }
      if (categProducts[idx].out) {
        pastryDiv.className = "out";
      }

      if (categProducts[idx].discount && categProducts[idx].low) {
        pastryImg.classList.remove("low");
        pastryImg.classList.add("discount");
        pastrySpan.innerHTML = "<br> Discount! Best Price!!";
        pastrySpan2 = document.createElement("span");
        pastryP.appendChild(pastrySpan2);
        pastrySpan2.innerHTML = "<br> Only Few Pastries&nbsp;Left!!";
        pastrySpan2.style.color = "rgb(224, 67, 88)";

      // if (categProducts[idx].discount && categProducts[idx].low) {
      //   const changeContent = (() => {
      //     const classes = ["low", "discount"];
      //     const spanText = [
      //       "<br> Only Few Pastries&nbsp;Left!!",
      //       "<br> Discount! Best Price!!",
      //     ];
      //     let index = 0;
      //     return function () {
      //       document.getElementById(`pastrySpan${idx}`).innerHTML = "";
      //       document.getElementById(`pastryImg${idx}`).classList = "";
      //       document.getElementById(`pastrySpan${idx}`).innerHTML =
      //         spanText[index];
      //       document.getElementById(`pastryImg${idx}`).classList =
      //         classes[index];
      //       index++;
      //       if (index === classes.length) {
      //         index = 0;
      //       }
      //     };
      //   })();

      //   setInterval(changeContent, 2000);

      }
    }
  }
}

function createGlutenF() {
  const parentElement = document.getElementById("divGlutenf");
  parentElement.innerHTML = "";
  for (let idx in categProducts) {
    if (categProducts[idx].category === "glutenf") {
      // const parentElement = document.getElementById("divGlutenf");
      const glutenfDiv = document.createElement("div");
      parentElement.appendChild(glutenfDiv);
      glutenfDiv.className = "product";
      glutenfDiv.id = `glutenfDiv${idx}`;
      const glutenfImg = document.createElement("img");
      glutenfImg.src = categProducts[idx].imageURI;
      glutenfImg.alt = categProducts[idx].alt;
      glutenfImg.id = `glutenfImg${idx}`;
      glutenfDiv.appendChild(glutenfImg);
      const glutenfP = document.createElement("p");
      glutenfP.innerHTML = categProducts[idx].name;
      glutenfDiv.appendChild(glutenfP);
      glutenfSpan = document.createElement("span");
      glutenfP.appendChild(glutenfSpan);
      glutenfSpan.id = `glutenfSpan${idx}`;

      if (categProducts[idx].discount) {
        glutenfImg.classList.add("discount");
        glutenfSpan.innerHTML = "<br> Discount! Best Price!!";
      }
      if (categProducts[idx].low) {
        glutenfImg.classList.add("low");
        glutenfSpan.innerHTML = "<br> Only Few Cakes&nbsp;Left!!";
      }
      if (categProducts[idx].out) {
        glutenfDiv.className = "out";
      }

      if (categProducts[idx].discount && categProducts[idx].low) {
        glutenfImg.classList.remove("low");
        glutenfImg.classList.add("discount");
        glutenfSpan.innerHTML = "<br> Discount! Best Price!!";
        glutenfSpan2 = document.createElement("span");
        glutenfP.appendChild(glutenfSpan2);
        glutenfSpan2.innerHTML = "<br> Only Few Cakes&nbsp;Left!!";
        glutenfSpan2.style.color = "rgb(224, 67, 88)";

      // if (categProducts[idx].discount && categProducts[idx].low) {
      //   const changeContent = (() => {
      //     const classes = ["low", "discount"];
      //     const spanText = [
      //       "<br> Only Few Cakes&nbsp;Left!!",
      //       "<br> Discount! Best Price!!",
      //     ];
      //     let index = 0;
      //     return function () {
      //       document.getElementById(`glutenfSpan${idx}`).innerHTML = "";
      //       document.getElementById(`glutenfImg${idx}`).classList = "";
      //       document.getElementById(`glutenfSpan${idx}`).innerHTML =
      //         spanText[index];
      //       document.getElementById(`glutenfImg${idx}`).classList =
      //         classes[index];
      //       index++;
      //       if (index === classes.length) {
      //         index = 0;
      //       }
      //     };
      //   })();

      //   setInterval(changeContent, 2000);
      }
    }
  }
}

function sortByDiscount() {
  // console.log(categProducts)
  // console.log(categProducts.sort())
  // console.log(categProducts.reverse())

  categProducts.sort(function comparator(a, b) {
    if (a.discount === b.discount) {
      
      return a.name === b.name ? 0 : a.name > b.name ? 1 : -1;
    } else return a.discount > b.discount ? -1 : 1;
  });
  console.log(categProducts.sort());
  createCakes();
  createPastries();
  createGlutenF();
}

let sortByAvailability = () => {
  categProducts.sort(function comparator(a, b) {
    if (a.low === b.low) {
      if (a.discount == b.discount) {
        return a.name === b.name ? 0 : a.name > b.name ? 1 : -1;
      } else return a.discount > b.discount ? -1 : 1;
    } else return a.low > b.low ? 1 : -1;
  });
  console.log(categProducts.sort());
  createCakes();
  createPastries();
  createGlutenF();
};

// for (let idx in categProducts){
//     let x=`${categProducts[idx].category}`

//     if (x=="glutenf"){

//   document.write(`<div class="product ${categProducts[idx].class}">
//   <img src="${categProducts[idx].imageURI}">
//  <p>${categProducts[idx].name}</p>

//   </div>`)
// }

// }
