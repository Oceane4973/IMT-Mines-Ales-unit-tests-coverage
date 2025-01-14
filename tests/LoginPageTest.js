module.exports = {
    '@tags': ['loginpage'],

    '1. Tests de la structure de la page': function (browser) {
    browser
      .url('http://127.0.0.1:9090/login')
      .waitForElementVisible('body', 5000)

      // E2E-001
      .assert.visible('.btn-primary')
      .assert.enabled('.btn-primary')

      // E2E-002
      .assert.visible('.input-group-text i.fa-user')

      // E2E-003
      .assert.visible('.input-group-text i.fa-lock')

      .end();
  },

  '2. Tests de validation des champs': function (browser) {
    browser
      .url('http://127.0.0.1:9090/login')
      .waitForElementVisible('body', 5000)

      // E2E-004
      .setValue('input[name="name"]', 'Alice')
      .click('.btn-primary')
      .getAttribute('input[name="password"]', 'validationMessage', function (result) {
        this.assert.equal(
          result.value,
          'Veuillez renseigner ce champ.',
          'Validation message for password field is displayed correctly'
        );
      })

      // E2E-005
      .clearValue('input[name="name"]')
      .setValue('input[name="password"]', 'password123')
      .click('.btn-primary')
      .getAttribute('input[name="name"]', 'validationMessage', function (result) {
        this.assert.equal(
          result.value,
          'Veuillez renseigner ce champ.',
          'Validation message for name field is displayed correctly'
        );
      })

      .end();
  },

  '3. Tests de Performance': function (browser) {
    const startTime = new Date().getTime();

    // E2E-006
    browser
      .url('http://127.0.0.1:9090/login')
      .waitForElementVisible('body', 3000, function () {
        const loadTime = new Date().getTime() - startTime;
        this.assert.ok(
          loadTime < 3000,
          `Page loaded in ${loadTime}ms (expected < 3000ms)`
        );
      })

      // E2E-007
      .setValue('input[name="name"]', 'Alice')
      .setValue('input[name="password"]', 'password123')
      .click('.btn-primary')

      .end();
  }
};

