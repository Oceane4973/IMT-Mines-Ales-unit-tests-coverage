module.exports = {
    '@tags': ['feedback'],

    '1. Tests for the main banner': function (browser) {
        browser
            .url('http://127.0.0.1:9090/feedback')
            .waitForElementVisible('body', 3000)

            // E2E-001
            .assert.textContains('.home--header-title', 'IDEALEMENT SITUE')

            // E2E-002
            .assert.textContains('.display-6.text-danger', '30 mètres de la plage')
            .assert.visible('.display-6.text-danger')

            // E2E-003
            .assert.visible('.btn-dark.btn-lg.rounded-pill')

            // E2E-004
            .click('.btn-dark.btn-lg.rounded-pill')
            .assert.urlContains('/contact')
            .back()

            .end()
    },

    '3. Tests for the feedback form': function (browser) {
        browser
            .url('http://127.0.0.1:9090/feedback')
            .waitForElementVisible('body', 3000)

            // E2E-008
            .assert.visible('input[name="name"]')
            .setValue('input[name="name"]', 'Alice')
            .assert.valueEquals('input[name="name"]', 'Alice')

            // E2E-009
            .assert.visible('textarea[name="message"]')
            .setValue('textarea[name="message"]', 'Great place!')

            // E2E-010
            .setValue('input[name="name"]', 'Alice') // Clear the name field
            .clearValue('textarea[name="message"]') // Clear the message field
            .moveToElement('button[type="submit"]', 0, 0)
            .click('button[type="submit"]')
            .pause(3000)
            .execute(function () {
                const messageField = document.querySelector('textarea[name="message"]');
                return {
                    isFocused: document.activeElement === messageField,
                    validationMessage: messageField.validationMessage,
                };
            }, [], function (result) {
                browser.assert.ok(
                    result.value.isFocused,
                    'Focus is set to the message field after submission'
                );
                browser.assert.ok(
                    result.value.validationMessage === 'Veuillez renseigner ce champ.',
                    'Message field shows the correct validation message'
                );
            })


            // E2E-011
            .setValue('input[name="name"]', 'Alice')
            .setValue('textarea[name="message"]', 'Great place!')
            .click('button[type="submit"]')
            .pause(5000)
            .useXpath()
            .waitForElementVisible(
                '//div[contains(@class, "col-12") and contains(@class, "mt-2") and contains(@class, "mb-2")][1]',
                5000,
                'First feedback card is visible'
            )
            .assert.containsText(
                '(//div[contains(@class, "col-12") and contains(@class, "mt-2") and contains(@class, "mb-2")][1]//div[contains(@class, "card-header")]//div[contains(@class, "col-3")])[2]',
                "Auteur : Alice",
                'Author text is displayed correctly'
            )
            .assert.containsText(
                '(//div[contains(@class, "col-12") and contains(@class, "mt-2") and contains(@class, "mb-2")][1]//div[contains(@class, "card-body")]//blockquote/p)[1]',
                'Great place!',
                'Message text is displayed correctly'
            )

            .end();
    },

    /**'5. Responsiveness tests': function (browser) {
        browser
            .url('http://127.0.0.1:9090/feedback')
            .waitForElementVisible('body', 5000)

            .resizeWindow(375, 667) // Mobile

            // E2E-019
            .assert.visible('.col-6:nth-of-type(1)')
            .assert.visible('.col-6:nth-of-type(2)')

            // E2E-020
            .resizeWindow(768, 1024) // Tablet
            .assert.cssProperty('.row', 'display', 'flex')

            .end();
    },

    '7. Performance tests': function (browser) {
        const startTime = Date.now();

        browser
            .url('http://127.0.0.1:9090/feedback')
            .waitForElementVisible('body', 5000, function () {
                const loadTime = Date.now() - startTime;

                // E2E-022
                browser.assert.ok(
                    loadTime < 3000,
                    `Page loaded in ${loadTime} ms, within the acceptable threshold.`
                );
            })

            .end()
    },

    '4. Tests for the "Our clients speak about us" section': function (browser) {
        browser
            .url('http://127.0.0.1:9090/feedback')
            .waitForElementVisible('body', 5000)

            // E2E-015
            .assert.textContains('.card-header', 'Déposé le')
            .assert.textContains('.card-header', 'Auteur')

            // E2E-016
            .assert.textContains('.blockquote p', 'Great place!')

            .end();
    },**/
};

