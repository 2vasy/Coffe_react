import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CoffeBeans from "../../components/UI/coffeeBeans3_black";
import "./HomePage.scss";
function HomePage() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title_about">About Us</h1>
        <CoffeBeans />
        <div className="text_about">
          <p>
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>
          <p>
            Now residence dashwoods she excellent you. Shade being under his bed
            her, Much read on as draw. Blessing for ignorant exercise any
            yourself unpacked. Pleasant horrible but confined day end marriage.
            Eagerness furniture set preserved far recommend. Did even but nor
            are most gave hope. Secure active living depend son repair day
            ladies now.
          </p>
        </div>
        <div className="cards_items">
          <div className="cards_items_title">Our best</div>
          <figure className="figure">
            <img src="" className="figure-img img-fluid rounded" alt="..." />
            <figcaption className="figure-caption text-right">
              A caption for the above image.
            </figcaption>
          </figure>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
