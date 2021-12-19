const categProducts = [
  {
    category: "cakes",
    name: "Chocolate Truffle Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2015/11/chocolate_truffle_cake.png",
    alt: "image of a chocolate truffle cake",
    discount: true,
    low: true,
    out: false,
  },

  {
    category: "cakes",
    name: "Almond fudge cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2015/11/300256-Jamocha-Almond-Fudge_B_small.png",
    alt: "iimage of an almond fudge cake",
    discount: true,
    low: true,
    out: false,
  },

  {
    category: "cakes",
    name: "Carrot Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2015/11/300188-Carrot_B_small.png",
    alt: "image of a carrot cake",
    discount: true,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Italian Rum Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2017/06/italian_rum_cake.png",
    alt: "image of italian rum cake",
    discount: false,
    low: true,
    out: false,
  },

  {
    category: "cakes",
    name: "Everything Chocolate Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2021/03/300606-Everything-Chocolate_small-1.png",
    alt: "image of an everything chocolate cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Milk Chocolate Caramel Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2015/11/300273-Milk-Chocolate-Caramel-Cake_small.png",
    alt: "image of a milk chocolate caramel cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Apple Crumble Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2021/06/300771-Apple-Crumble_B_small.png",
    alt: "image of an apple crumble cake",
    discount: true,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Caramel Crunch Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2015/11/300317_B-small.png",
    alt: "image of a caramel crunch cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Cherry Noire Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2020/01/300669-Classic-Black-Forest_B_small.png",
    alt: "image of a cherry noire cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Brown Butter Caramel Praline Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2021/06/300770-Brown-Butter-Caramel-Praline_B_small.png",
    alt: "image of a brown butter caramel praline cake",
    discount: false,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Summer Bliss Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2020/01/300626-Summer-Bliss_B_small.png",
    alt: "image of a summer bliss cake",
    discount: false,
    low: false,
    out: true,
  },

  {
    category: "cakes",
    name: "White Chocolate Cranberry Truffle&nbsp;Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2018/09/300341_B.png",
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
    low: true,
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
    low: false,
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
      // }
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
      // }
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
