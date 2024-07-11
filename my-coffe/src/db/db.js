import solimo from "../assets/img/cards/solimo.png";
import presto from "../assets/img/cards/presto.png";
import aromistico from "../assets/img/cards/aromistico.png";

export const db = {
  nav:[
    { name: "Coffee house", path: "/", id: 1 },
    { name: "Our coffee", path: "/ourcoffe", id: 2 },
    { name: "For your pleasure", path: "/pleasure", id: 3 },
  ],

  cards:[
    {
      image: solimo,
      name: "Solimo Coffee Beans 2 kg",
      price: "10.73$",
      origin: "Columbia",
      best: false,
      id: 1,
      descriptions:
        "Solimo Coffee Beans is a brand of coffee that is sourced from the finest coffee plantations of Colombia, a country renowned for its high-quality coffee. The beans are carefully selected and roasted to perfection to bring out their rich and complex flavors. Solimo Coffee Beans from Colombia have a smooth, medium roast flavor with a subtle nutty and chocolaty taste. They are suitable for making espresso, drip coffee, and French press. Solimo Coffee Beans are a great choice for those who want a premium coffee experience at an affordable price.",
    }, 
    {
      image: presto,
      name: "Presto Coffee Beans 1 kg",
      price: "15.99$",
      origin: "Kenya",
      best: true,
      id: 2,
      descriptions:
        "Presto Coffee Beans from Kenya are known for their bold and complex flavors. These coffee beans are grown in the high altitude regions of Kenya, which results in a distinctive taste profile that is characterized by bright acidity, citrusy notes, and a subtle sweetness. The beans are medium roasted to bring out their rich flavors and to balance the acidity. The Presto Coffee Beans from Kenya are ideal for those who enjoy a strong, flavorful coffee with a bright and refreshing taste.",
    },
    {
      image: aromistico,
      name: "Cerrado Coffee 1 k",
      price: "6.99$",
      origin: "Brazil",
      best: true,
      id: 3,
      descriptions:
        "Brazil is one of the world's largest coffee producers, and its coffee beans are known for their mild and sweet flavor with low acidity. Brazilian coffee beans are often used in blends, but they can also be enjoyed on their own as a medium-bodied cup with notes of chocolate and nuts. The taste and aroma of Brazilian coffee can vary depending on the region and growing conditions, but overall, it is a popular choice for its smooth and balanced flavor profile.",
    },
    {
      image: aromistico,
      name: "test",
      price: "6.99$",
      origin: "Brazil",
      best: true,
      id: 3,
      descriptions:
        "Brazil is one of the world's largest coffee producers, and its coffee beans are known for their mild and sweet flavor with low acidity. Brazilian coffee beans are often used in blends, but they can also be enjoyed on their own as a medium-bodied cup with notes of chocolate and nuts. The taste and aroma of Brazilian coffee can vary depending on the region and growing conditions, but overall, it is a popular choice for its smooth and balanced flavor profile.",
    },
  ],

  aboutUs: {
    pageTitle: "About Us",
    id: 1,
    text: [
      {
        p: "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid at highly months do things on at. Situation recommend objection do intention so questions. As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.",
        id: 1,
      },
      {
        p: "Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.",
        id: 2,
      },
    ],
  },
}

