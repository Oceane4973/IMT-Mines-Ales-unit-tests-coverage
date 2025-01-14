import Header from '../components/header';

// Pictures
import paysage from '../img/home/header-paysage.jpeg';
import sunUmbrella from '../img/caracteristiques/sun-umbrella.png';
import freeParking from '../img/caracteristiques/free-parking.png';
import restaurant from '../img/caracteristiques/restaurant.png';
import restaurant2 from '../img/caracteristiques/restaurant-2.png';
import table from '../img/caracteristiques/table.png';
import bathing from '../img/caracteristiques/bathing.png';
import microwave from '../img/caracteristiques/microwave.png';
import coffeeMachine from '../img/caracteristiques/coffee-machine.png';
import noPets from '../img/caracteristiques/no-pets.png';
import noTv from '../img/caracteristiques/no-television.png';
import noSingal from '../img/caracteristiques/no-signal.png';
import noSmoking from '../img/caracteristiques/no-smoking.png';

import snowFlake from '../img/tarifs/snowflake.png';
import sakura from '../img/tarifs/sakura.png';
import sun from '../img/tarifs/sun.png';

import img1282 from '../img/appartement/IMG_1282.JPG';
import img1250 from '../img/appartement/IMG_1250.JPG';
import img1287 from '../img/appartement/IMG_1287.JPG';
import img1307 from '../img/appartement/IMG_1307.JPG';
import img1310 from '../img/appartement/IMG_1310.JPG';
import photo1 from '../img/home/photo1.png';

const Home = class {
  constructor(body) {
    this.body = body;
  }

  renderHeader() {
    return `
      <header class="container-fluid">
        ${Header}
        <div class="container">
            <div class="row">
                <div class="col-6 pt-5">
                    <h2 class="display-3 home--header-title">A LOUER APPARTEMENT ROSAS</h2>
                    <h2 class="display-6 text-danger">2 chambres | 30 m de la plage</h2>
                    <div class="row">
                        <div class="col-12">
                            <p>De <span class="h3">460 €</span> à <span class="h3">760 €</span> / semaine</p>
                            <a href="/contact" class="btn btn-lg btn-dark rounded-pill">Contactez-nous</a>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-12">
                            <img src="${paysage}" class="img-fluid" alt="spanish">
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    `;
  }

  renderAppartmentGallery() {
    return `
      <section id="appartement-gallerie">
        <div class="row mb-5">
          <div class="12">
            <h3 class="display-6">L'appartement</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <div class="col-12 mb-4">
              <img src="${img1282}" alt="photo1" width="100%" />
            </div>
            <div class="col-12 mb-4">
              <img src="${img1287}" alt="photo1287" width="100%" />
            </div>
            <div class="col-12 mb-4">
              <img src="${img1307}" alt="photo1307" width="100%" />
            </div>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-12 mb-4">
                <img src="${img1250}" alt="photo1" width="100%" />
              </div>
              <div class="col-12 mb-4">
                <img src="${photo1}" alt="photo1" width="100%" />
              </div>
              <div class="col-12">
                <img src="${img1310}" alt="photo1310" width="100%" />
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-6">
            <div class="row">
              <div class="col-12">
                <div class="home--appartement-photo2"></div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="home--appartement-photo3"></div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="home--appartement-photo1"></div>
          </div>
        </div>
      </section>
    `;
  }

  renderSettings() {
    return `
      <section id="caracteristiques" class="mt-5 pt-4">
      <div class="row">
        <div class="col-12">
          <h3 class="display-6">Caractéristiques</h3>
        </div>
      </div>
      <div class="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3">
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${sunUmbrella}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Plage à 30m</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${freeParking}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Parking gratuit</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${restaurant}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Restaurants</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${restaurant2}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Commerces</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${table}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Salon de jardin</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${bathing}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Baignoire</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${microwave}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Micro-ondes</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${coffeeMachine}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Cafetière</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${noPets}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Pas d'animaux</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${noTv}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Pas de TV</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${noSingal}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Pas de WIFI</span>
        </div>
        <!-- Icon -->
        <div class="col text-center">
          <img class="img-fluid" src="${noSmoking}" alt="icon" style="max-width: 25px; height: auto;"/>
          <span class="d-block mt-2">Non fumeur</span>
        </div>
      </div>
    </section>
  `;
  }

  renderAPrices() {
    return `
      <section id="tarifs" class="mt-4 pt-4">
        <div class="row">
          <div class="12">
            <h3 class="display-6">Tarifs</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="card border border-dark bg-light pt-4">
              <img src="${snowFlake}" class="card-img-top" alt="winter">
              <div class="card-body">
                <h5 class="card-title h4 text-center">Basse saison</h5>
                <p class="card-text h2 text-center"><strong>460 €</strong> / semaine</p>
                <hr>
                <div class="d-grid gap-2">
                  <a class="btn btn-primary btn-lg" href="/contact" type="button">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card border border-dark bg-light pt-4">
              <img src="${sakura}" class="card-img-top" alt="winter">
              <div class="card-body">
                <h5 class="card-title h4 text-center">Moyenne saison</h5>
                <p class="card-text h2 text-center"><strong>560 €</strong> / semaine</p>
                <hr>
                <div class="d-grid gap-2">
                  <a class="btn btn-primary btn-lg" href="/contact" type="button">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card border border-dark bg-light pt-4">
              <img src="${sun}" class="card-img-top" alt="winter">
              <div class="card-body">
                <h5 class="card-title h4 text-center">Haute saison</h5>
                <p class="card-text h2 text-center"><strong>760 €</strong> / semaine</p>
                <hr>
                <div class="d-grid gap-2">
                  <a class="btn btn-primary btn-lg" href="/contact" type="button">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  render() {
    return `
      ${this.renderHeader()}
      <hr />
      <main class="container mt-5">
        ${this.renderAppartmentGallery()}
        ${this.renderSettings()}
        ${this.renderAPrices()}
      </main>
    `;
  }

  run() {
    this.body.innerHTML = this.render();
  }
};

export default Home;
