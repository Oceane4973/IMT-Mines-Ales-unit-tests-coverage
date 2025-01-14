module.exports = {
    '@tags': ['contactpage'],

    '1. Main Banner Tests': function (browser) {
        browser
            .url('http://127.0.0.1:9090/contact')
            .waitForElementVisible('body', 5000)

            // E2E-001
            .assert.textContains('header h2.display-3', 'CONTACTEZ-NOUS', 'The main banner text is correct')

            // E2E-002
            .assert.textContains('header h2.display-6.text-danger', 'remplissez le formulaire', 'The subtitle text is correct')

            // E2E-003
            .assert.visible('header img', 'The banner image is visible')
            .end();
    },

    '2. Contact Form Tests': function (browser) {
        browser
            .url('http://127.0.0.1:9090/contact')
            .waitForElementVisible('form', 5000)

            .moveToElement('.btn-primary', 0, 0)
            .pause()

            // E2E-004
            .assert.visible('input[name="firstName"]', 'First name field is visible')
            .setValue('input[name="firstName"]', 'Alice')

            // E2E-005
            .assert.visible('input[name="lastName"]', 'Last name field is visible')
            .setValue('input[name="lastName"]', 'Smith')

            // E2E-006
            .setValue('input[name="mobilePhone"]', '0612345678')
            .assert.attributeEquals('input[name="mobilePhone"]', 'pattern', '0[6|7]{1}([0-9]{2}){4}', 'Mobile phone field validates correctly')

            // E2E-007
            .setValue('input[name="email"]', 'test@example.com')
            .assert.attributeEquals('input[name="email"]', 'type', 'email', 'Email field validates correctly')

            // E2E-008
            .assert.visible('input[name="arrivedAt"]', 'Arrival date field is visible')
            .setValue('input[name="arrivedAt"]', '2023-01-01')
            .assert.visible('input[name="departureAt"]', 'Departure date field is visible')
            .setValue('input[name="departureAt"]', '2023-01-10')

            // E2E-009
            .assert.visible('textarea[name="message"]', 'Message field is visible')
            .setValue('textarea[name="message"]', 'This is a test message.')

            // E2E-010
            .clearValue('input[name="firstName"]')
            .clearValue('input[name="lastName"]')
            .clearValue('input[name="mobilePhone"]')
            .clearValue('input[name="email"]')
            .clearValue('input[name="arrivedAt"]')
            .clearValue('input[name="departureAt"]')
            .clearValue('textarea[name="message"]')
            .click('.btn-primary')
            .pause(1000);

        browser.execute(function () {
            return document.activeElement === document.querySelector('input[name="firstName"]');
        }, [], function (result) {
            browser.assert.ok(result.value, 'First name input field is focused');
        })

            .getAttribute('input[name="firstName"]', 'validationMessage', function (result) {
                browser.assert.equal(
                    result.value,
                    'Veuillez renseigner ce champ.',
                    'Validation message for first name is displayed correctly'
                );
            })

            // E2E-011
            .setValue('input[name="firstName"]', 'Alice')
            .setValue('input[name="lastName"]', 'Smith')
            .setValue('input[name="mobilePhone"]', '0612345678')
            .setValue('input[name="email"]', 'alice@example.com')
            .setValue('input[name="arrivedAt"]', '2023-01-01')
            .setValue('input[name="departureAt"]', '2023-01-10')
            .setValue('textarea[name="message"]', 'This is a test message.')
            .click('.btn-primary')

            .end();
    },

    /**'4. Performance and Security Tests': function (browser) {
        browser
            .url('http://127.0.0.1:9090/contact')
            .perform(() => {
                const start = Date.now();

                // E2E-018
                browser.assert.ok(Date.now() - start < 3000, 'Page loads within 3 seconds')
            })

            // E2E-019
            .perform(() => {
                const startSubmit = Date.now();

                browser
                    .setValue('input[name="firstName"]', 'Alice')
                    .setValue('input[name="lastName"]', 'Smith')
                    .setValue('input[name="mobilePhone"]', '0612345678')
                    .setValue('input[name="email"]', 'alice@example.com')
                    .setValue('input[name="arrivedAt"]', '2023-01-01')
                    .setValue('input[name="departureAt"]', '2023-01-10')
                    .setValue('textarea[name="message"]', 'This is a test message.')
                    .click('button[type="submit"]')
                    .perform(() => {
                        browser.assert.ok(Date.now() - startSubmit < 5000, 'Form submission takes less than 5 seconds');
                    });
            })

            // E2E-020 to E2E-022
            .setValue('input[name="email"]', '<script>alert(1)</script>')
            .setValue('textarea[name="message"]', '<script>alert(1)</script>')
            .click('button[type="submit"]')
            .assert.not.textContains('body', '<script>alert(1)</script>', 'Scripts are not executed in fields')
            .end();
    },**/
};

