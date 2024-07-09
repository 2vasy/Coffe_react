
import CoffeBeans from "../../components/UI/coffeeBeans3";
import Solimo from "../../assets/img/cards/815O9ktyfUL.png"
import Presto from "../../assets/img/cards/91Ryk2gKejL.png"
import Aromistico from "../../assets/img/cards/71qBQnpQFYL.png"
import "./HomePage.scss";
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
              <figure className="figure">
                <img src={Solimo} className="figure-img img-fluid rounded" alt="..." />
                <figcaption className="figure-caption text-right">
                  Solimo Coffee Beans 2 kg
                </figcaption>
                <div className="price_container">
                  <div className="price">10.73$</div>
                </div>
              </figure>
              <figure className="figure">
                <img src={Presto} className="figure-img img-fluid rounded" alt="..." />
                <figcaption className="figure-caption text-right">
                  Presto Coffee Beans 1 kg
                </figcaption>
                <div className="price_container">
                  <div className="price">15.99$</div>
                </div>
              </figure>
              <figure className="figure">
                <img src={Aromistico} className="figure-img img-fluid rounded" alt="..." />
                <figcaption className="figure-caption text-right">
                  AROMISTICO Coffee 1 kg  
                </figcaption>
                <div className="price_container">
                  <div className="price">6.99$</div>
                </div>
              </figure>
            </div>
          </div>
        </section>
      </>
  );
}

export default HomePage;
