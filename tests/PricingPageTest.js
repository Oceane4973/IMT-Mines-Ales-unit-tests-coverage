module.exports = {
  '@tags': ['pricingpage'],

  '1. Tests for the banner section': function (browser) {
    browser
      .url('http://127.0.0.1:9090/pricing')
      .waitForElementVisible('body', 3000)

      // E2E-002
      .assert.textContains(
        '.container .display-6',
        'Venez séjourner à Rosas'
      )

      // E2E-004
      .assert.visible('.container .btn-dark')
      .click('.container .btn-dark')
      .pause(1000)
      .assert.urlContains('/contact')
      .back()

      .end();
  },

  '2. Tests for the pricing cards': function (browser) {
    browser
      .url('http://127.0.0.1:9090/pricing')
      .waitForElementVisible('body', 3000)

      // E2E-005
      .assert.visible('.row > .col-4:nth-of-type(1) .card')
      .assert.visible('.row > .col-4:nth-of-type(2) .card')
      .assert.visible('.row > .col-4:nth-of-type(3) .card')
      .assert.cssProperty('.row > .col-4:nth-of-type(1)', 'display', 'block')
      .assert.cssProperty('.row > .col-4:nth-of-type(2)', 'display', 'block')
      .assert.cssProperty('.row > .col-4:nth-of-type(3)', 'display', 'block')

      // E2E-006
      .assert.textContains(
        '.row > .col-4:nth-of-type(1) .card-text',
        '460 €'
      )
      .assert.textContains(
        '.row > .col-4:nth-of-type(2) .card-text',
        '560 €'
      )
      .assert.textContains(
        '.row > .col-4:nth-of-type(3) .card-text',
        '760 €'
      )

      // E2E-007
      .assert.textContains(
        '.row > .col-4:nth-of-type(1) ul.list-group',
        '1 lit 150 cm'
      )
      .assert.textContains(
        '.row > .col-4:nth-of-type(2) ul.list-group',
        '2 lits 90 cm'
      )
      .assert.textContains(
        '.row > .col-4:nth-of-type(3) ul.list-group',
        'Linge de lit inclus'
      )

      // E2E-008
      .assert.visible('.col-4:nth-of-type(1) .d-grid.gap-2 a.btn-primary')
      .moveToElement('.col-4:nth-of-type(1) .d-grid.gap-2 a.btn-primary', 0, 0)
      .pause(500)
      .click('.col-4:nth-of-type(1) .d-grid.gap-2 a.btn-primary')
      .pause(1000)
      .assert.urlContains('/contact')
      .back()

      .assert.visible('.col-4:nth-of-type(2) .d-grid.gap-2 a.btn-primary')
      .moveToElement('.col-4:nth-of-type(2) .d-grid.gap-2 a.btn-primary', 0, 0)
      .pause(500)
      .click('.col-4:nth-of-type(2) .d-grid.gap-2 a.btn-primary')
      .pause(1000)
      .assert.urlContains('/contact')
      .back()

      .assert.visible('.col-4:nth-of-type(3) .d-grid.gap-2 a.btn-primary')
      .moveToElement('.col-4:nth-of-type(3) .d-grid.gap-2 a.btn-primary', 0, 0)
      .pause(500)
      .click('.col-4:nth-of-type(3) .d-grid.gap-2 a.btn-primary')
      .pause(1000)
      .assert.urlContains('/contact')
      .back()

      .end();
  },

  /**'3. Tests for the reservation conditions section': function (browser) {
    browser
      .url('http://127.0.0.1:9090/pricing')
      .waitForElementVisible('body', 3000)

      // E2E-010
      .moveToElement('#tarifs-services .col-2:nth-of-type(1) .d-grid button img', 0, 0)
      .pause(5000)
      .assert.visible('#tarifs-services .col-2:nth-of-type(1) .d-grid button img')
      .moveToElement('#tarifs-services .col-2:nth-of-type(2) .d-grid button img', 0, 0)
      .pause(5000)
      .assert.visible('#tarifs-services .col-2:nth-of-type(2) .d-grid button img') // Visa
      .moveToElement('#tarifs-services .col-2:nth-of-type(3) .d-grid button img', 0, 0)
      .pause(5000)
      .assert.visible('#tarifs-services .col-2:nth-of-type(3) .d-grid button img') // Maestro

      .end()
  },**/

  '4. Responsiveness tests': function (browser) {
    browser
      .url('http://127.0.0.1:9090/pricing')
      .resizeWindow(375, 812) 

      // E2E-011
      .assert.cssProperty('.col-4:nth-of-type(1)', 'display', 'block')
      .assert.cssProperty('.col-4:nth-of-type(2)', 'display', 'block')
      .assert.cssProperty('.col-4:nth-of-type(3)', 'display', 'block')
      .assert.visible('.col-4:nth-of-type(1)')
      .assert.visible('.col-4:nth-of-type(2)')
      .assert.visible('.col-4:nth-of-type(3)')

      // E2E-012
      .assert.visible('.col-4:nth-of-type(1) .list-group-item')
      .assert.visible('.col-4:nth-of-type(2) .list-group-item')
      .assert.visible('.col-4:nth-of-type(3) .list-group-item')

      // E2E-013
      .assert.visible('#tarifs-conditions')
      .assert.cssProperty('#tarifs-conditions .h3:nth-of-type(1)', 'display', 'block')
      .assert.cssProperty('#tarifs-conditions .h3:nth-of-type(2)', 'display', 'block')
      .assert.cssProperty('#tarifs-conditions .h3:nth-of-type(3)', 'display', 'block')

      .end();
  },

  '5. Performance tests': function (browser) {
  const startTime = Date.now();

  browser
    .url('http://127.0.0.1:9090/pricing')
    .waitForElementVisible('body', 3000, function () {
      const loadTime = Date.now() - startTime;

      // E2E-018
      browser.assert.ok(
        loadTime < 3000,
        `Page loaded in ${loadTime} ms, which is within the acceptable threshold of 3000 ms.`
      );
    })
    .end();
}

};
