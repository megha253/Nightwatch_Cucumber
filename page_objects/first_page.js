const assert  = require("assertthat");
const { client } = require("nightwatch-api");

module.exports = {
    elements: {
        input: {
            locateStrategy: 'xpath',
            selector: "//input[@name='q']"
        },

        input_search: {
            locateStrategy: 'xpath',
            selector: "//button[@type='submit']"
        },

        element_sign: {
            locateStrategy: 'xpath',
            selector: "(//a[contains(text(),'Nightwatch')])[1]"
        },

    }
}
