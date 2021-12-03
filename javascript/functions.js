const categProducts = [
  {
    category: "cakes",
    name: "Chocolate Truffle Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2015/11/chocolate_truffle_cake.png",
    alt: "image of a chocolate truffle cake",
    discount: true,
    low: false,
    out: false,
  },

  {
    category: "cakes",
    name: "Almond fudge cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2015/11/300256-Jamocha-Almond-Fudge_B_small.png",
    alt: "iimage of an almond fudge cake",
    discount: false,
    low: true,
    out: false,
  },

  {
    category: "cakes",
    name: "Carrot Cake",
    imageURI:
      "https://www.laroccacakes.com/wp-content/uploads/2015/11/300188-Carrot_B_small.png",
    alt: "image of a carrot cake",
    discount: false,
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
    out: false,
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
    low: false,
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
    out: true,
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
    discount: false,
    low: false,
    out: false,
  }


];


// function discount(){
//   const discountedItem = document.getElementsByClassName("discount")    
//   console.log(discountedItem)
//       for (let i in discountedItem) {
//       discountedItem[i].children.item(1).innerHTML =  discountedItem[i].children.item(1).innerHTML + "<br> " + "<span>Discounted&nbsp;Item!!</span>";
//       }
//   }


  

  
