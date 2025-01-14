module.exports = {
    '@tags': ['geopage'],

    '1. Main banner tests': function (browser) {
        browser
            .url('http://127.0.0.1:9090/geo')
            .waitForElementVisible('body', 3000)

        // E2E-001
        browser.assert.visible('header .home--header-title')

        // E2E-001
        browser.assert.textContains('header .home--header-title', 'IDEALEMENT SITUE')

        // E2E-002
        browser.assert.visible('header .text-danger')

        // E2E-002
        browser.assert.textContains('header .text-danger', '30 mètres de la plage')

        // E2E-003
        browser.assert.visible('header a.btn-dark')
            .click('header a.btn-dark') // E2E-004

        // E2E-004
        browser.assert.urlContains('/contact');

        browser.end();
    },

    '2. Tests for the "Access" section': function (browser) {
        browser
            .url('http://127.0.0.1:9090/geo')
            .waitForElementVisible('body', 3000)

            // E2E-005
            .waitForElementVisible('.col-4 .card:nth-of-type(1) .card-body h5', 5000)
            .assert.textContains('.col-4 .card:nth-of-type(1) .card-body h5', 'Voiture')
            .assert.textContains('.col-4 .card:nth-of-type(1) .list-group-item:first-child h5', 'Paris')
            .assert.textContains('.col-4 .card:nth-of-type(1) .list-group-item:first-child h5', 'Rosas')
            .assert.textContains('.col-4 .card:nth-of-type(1) .list-group-item:first-child small', '8 heures')

            // E2E-006
            .waitForElementVisible('.col-4 .card:nth-of-type(2) .card-body h5', 5000)
            .assert.textContains('.col-4 .card:nth-of-type(2) .card-body h5', 'Avion')
            .assert.textContains('.col-4 .card:nth-of-type(2) .list-group-item:first-child h5', 'Paris')
            .assert.textContains('.col-4 .card:nth-of-type(2) .list-group-item:first-child h5', 'Barcelone')
            .assert.textContains('.col-4 .card:nth-of-type(2) .list-group-item:first-child small', '1h15')

            // E2E-007
            .waitForElementVisible('.col-4 .card:nth-of-type(3) .card-body h5', 5000)
            .assert.textContains('.col-4 .card:nth-of-type(3) .card-body h5', 'Train')
            .assert.textContains('.col-4 .card:nth-of-type(3) .list-group-item:first-child h5', 'Paris')
            .assert.textContains('.col-4 .card:nth-of-type(3) .list-group-item:first-child h5', 'Barcelone')
            .assert.textContains('.col-4 .card:nth-of-type(3) .list-group-item:first-child small', '6h30')

            .end()
    },

    '3. Tests for the "Carte (Localisation)" section': function (browser) {
    browser
      .url('http://127.0.0.1:9090/geo')
      .waitForElementVisible('body', 3000)

      // E2E-008
      .waitForElementVisible('iframe[src*="google.com/maps"]', 5000)
      .assert.attributeContains(
        'iframe[src*="google.com/maps"]',
        'src',
        'google.com/maps'
      )

      // E2E-009
      .assert.attributeContains(
        'iframe[src*="google.com/maps"]',
        'src',
        'Carrer%20de%20Bernat%20Metge%2C%201%2C%2017480%20Roses%2C%20Girona%2C%20Espagne'
      )

      .end();
  },

  '4. Tests for the "A proximité" section': function (browser) {
    browser
      .url('http://127.0.0.1:9090/geo')
      .waitForElementVisible('body', 3000)

      // E2E-010
      .assert.textContains(
        '.col-12 h5',
        'A proximité'
      )
      .assert.textContains(
        '.col-12 p:nth-of-type(1)',
        "Situé sur la promenade qui longe la mer, l'appartement offre un accès direct à la plage."
      )
      .assert.textContains(
        '.col-12 p:nth-of-type(2)',
        'Nombreux commerces à proximité immédiate : restaurants, bars, supérette...'
      )
      .assert.textContains(
        '.col-12 p:nth-of-type(3)',
        'Parc naturel Cap de Creuz.'
      )

      // E2E-011
      .assert.textContains(
        '.col-12 p:nth-of-type(4)',
        'Villages typiques de la Costa Brava : Cadaques (Village de Dali), Figueras, Pals, Calella de Pallafrugell, Escala, Paratallada, Peralada...'
      )

      .end();
  },

  '5. Tests for the "Nos meilleures adresses" section': function (browser) {
    browser
      .url('http://127.0.0.1:9090/geo')
      .waitForElementVisible('body', 3000)

      // E2E-013
      .assert.textContains(
        '.col-6 .list-group-numbered li:nth-of-type(1)',
        'Restaurant Rosa'
      )
      .assert.textContains(
        '.col-6 .list-group-numbered li:nth-of-type(2)',
        'Jamoneria Jamon 100 %'
      )
      .assert.textContains(
        '.col-6 .list-group-numbered li:nth-of-type(3)',
        'Sidreria Toxt\'s'
      )

      // E2E-013
      .assert.textContains(
        '.col-6:nth-of-type(2) .list-group-numbered li:nth-of-type(1)',
        'Restaurant Las Palmeras'
      )
      .assert.textContains(
        '.col-6:nth-of-type(2) .list-group-numbered li:nth-of-type(2)',
        'A emporter : El rey del pollo'
      )
      .assert.textContains(
        '.col-6:nth-of-type(2) .list-group-numbered li:nth-of-type(3)',
        'Restaurant Pica Pica'
      )

      .end();
  },
};
