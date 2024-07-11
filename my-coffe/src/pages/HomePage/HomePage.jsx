
import CoffeBeans from "../../components/UI/coffeeBeans3";
import Cards from "../../components/cards/Cards";
// import Solimo from ""
// import Presto from "../../assets/img/cards/presto.png"
// import Aromistico from "../../assets/img/cards/aromistico.png"
import "./HomePage.scss";
import { db } from "../../db/db";
function HomePage() {
  return (
      <>
        <h1 className="title_about">About Us</h1>
        <CoffeBeans color="black" />
        <div className="text_about">
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>
          <br />
          <p>
            Now residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now.
          </p>
        </div>
        <section className="cards_section">
          <div className="cards_items">
            <h1 className="cards_items_title">Our best</h1>
            <div className="cards_wrapper">
              {db.cards.map((card) => (
                <Cards image={card.image} name={card.name} price={card.price} key={card.id}/>
              ))}
            </div>
          </div>
        </section>
      </>
  );
}

export default HomePage;
