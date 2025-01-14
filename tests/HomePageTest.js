module.exports = {
    '@tags': ['homepage'],

    '1. Main banner tests': function (browser) {
        browser
            .url('http://127.0.0.1:9090/')
            .waitForElementVisible('body', 5000);

        // E2E-001
        browser.assert.textContains('h2.home--header-title', 'A LOUER APPARTEMENT ROSAS');

        // E2E-002
        browser.assert.textContains('h2.display-6.text-danger', '2 chambres | 30 m de la plage');
        browser.assert.visible('h2.display-6.text-danger');

        // E2E-003
        browser.assert.textContains('p', 'De 460 € à 760 € / semaine');

        // E2E-005
        browser.resizeWindow(375, 667);
        browser
            .assert.textContains('h3.display-6', "L'appartement")
            .assert.visible('h3.display-6')

        // E2E-004
        browser
            .assert.visible('a.btn.btn-lg.btn-dark.rounded-pill')
            .moveToElement('a.btn.btn-lg.btn-dark.rounded-pill')
            .pause(3000)
            .click('a.btn.btn-lg.btn-dark.rounded-pill') // Simule un clic sur le bouton
            .pause(1000) // Pause pour permettre la redirection
            .assert.urlContains('/contact') // Vérifie si l'URL contient "/contact" après le clic
            .back();

        browser.end();
    },

    '2. Image gallery tests': function (browser) {
        browser
            .url('http://127.0.0.1:9090/')
            .waitForElementVisible('body', 5000)

        // E2E-006
        browser.assert.visible('section#appartement-gallerie')

        browser.end();
    },

    '3. Tests de la section "Caractéristiques"': function (browser) {

        browser
            .url('http://127.0.0.1:9090/')
            .waitForElementVisible('body', 5000) 
            .assert.visible('section#caracteristiques');

        // E2E-007
        const iconContainers = [
            '.col:nth-child(1)',
            '.col:nth-child(2)',
            '.col:nth-child(3)',
            '.col:nth-child(4)',
            '.col:nth-child(5)',
            '.col:nth-child(6)',
            '.col:nth-child(7)',
            '.col:nth-child(8)',
            '.col:nth-child(9)',
            '.col:nth-child(10)',
            '.col:nth-child(11)',
            '.col:nth-child(12)',
        ];

        iconContainers.forEach((selector) => {
            browser
                .waitForElementVisible(selector, 5000)
                .assert.visible(`${selector} img`, `The icon in ${selector} is visible`)
                .assert.visible(`${selector} span`, `The text in ${selector} is visible`);
        });

        // E2E-008
        const screenSizes = [
            { width: 375, height: 667 },
            { width: 768, height: 1024 },
            { width: 1920, height: 1080 },
        ];

        screenSizes.forEach((size) => {
            browser.resizeWindow(size.width, size.height);
            iconContainers.forEach((selector) => {
                browser.assert.visible(`${selector} img`, `The icon in ${selector} is visible on ${size.width}x${size.height}`)
                browser.assert.visible(`${selector} img`, `The text in ${selector} is visible on ${size.width}x${size.height}`)
            });
        });

        browser.end();
    },

    '4. Tests of the “Prices” section': function (browser) {
        browser
            .url('http://127.0.0.1:9090/')
            .waitForElementVisible('body', 5000)
            .assert.visible('section#tarifs', 'The “Prices” section is visible');

        // E2E-009 
        const cardSelectors = [
            '.col-4:nth-child(1)',
            '.col-4:nth-child(2)',
            '.col-4:nth-child(3)',
        ];

        const tarifsTexts = ['460 €', '560 €', '760 €'];

        // E2E-010
        cardSelectors.forEach((selector, index) => {
            browser.assert.textContains(
                `${selector} .card-text`,
                tarifsTexts[index],
                `The price "${tarifsTexts[index]}" is clearly visible in the card ${index + 1}`
            );
        });

        // E2E-011 
        cardSelectors.forEach((selector, index) => {
            browser
                .waitForElementVisible(`${selector} a.btn-primary`, 5000)
                .moveToElement(`${selector} a.btn-primary`, 10, 10)
                .click(`${selector} a.btn-primary`)
                .pause(1000)
                .assert.urlContains('/contact')
                .back();
        });

        browser.end();
    },

    '5. Performance Testing': function (browser) {
        const startTime = Date.now();

        // E2E-012
        browser
            .url('http://127.0.0.1:9090/')
            .waitForElementVisible('body', 3000, function () {
                const loadTime = Date.now() - startTime;
                this.assert.ok(loadTime < 3000, `Page loaded in ${loadTime} ms`); 
            });

        browser.end();
    },

};
