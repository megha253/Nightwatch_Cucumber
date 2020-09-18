const {client} = require("nightwatch-api");
const {Given, Then ,When} = require("cucumber");

var use_page = client.page.first_page();

Given(/^open browser$/, async () => {
    await client.url('https://www.ecosia.org/')
    
  });

