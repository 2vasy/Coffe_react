import Cards from "../../components/cards/Cards";
import "./HomePage.scss";
import { db } from "../../db/db";
import AboutUs from "../../components/AboutUs/AboutUs";
function HomePage() {
  return (
    <>
      <AboutUs data={db.aboutUs} />
      <section className="cards_section">
        <div className="cards_items">
          <h1 className="cards_items_title">Our best</h1>
          <div className="cards_wrapper">
            {db.cards.slice(0, 3).map((card) => (
              <Cards
                image={card.image}
                name={card.name}
                price={card.price}
                key={card.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
