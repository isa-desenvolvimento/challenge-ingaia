const faker = require('faker')
const puppeteer = require('puppeteer')
let browser
let page
//const domain = "http://localhost:3000/en-US";
const domain = 'http://localhost:3000/en-US/characters/rick'

async function init() {
  browser = await puppeteer.launch({
    // headless igual a true, faz com que um chromium seja aberta
    headless: false,
    slowMo: 50,
    devtools: true
  })
  page = await browser.newPage()
  await page.goto(domain)
  page.setViewport({ width: 700, height: 900 })
}

async function submitForm() {
  await page.waitForSelector('#form-search')
  await page.type('input[name=input-search]', 'rick')
  await page.$eval('#form-search', (form) => form.click())
  // verificar se a div card-container foi carregada ou a 404
  //expect(await document.getElementById('card-container')).not.toBeNull();
}

async function loadCards() {
  const totalText = await page.$eval(
    '#card-container',
    (node) => node.innerText
  )
  expect(totalText.length).not.toBe(0)
}

async function modalElements() {
  await page.click('#card-1')

  await page.waitForSelector('#details-container').then(() => {
    const about = page.$('#about').innerText
    expect(about).toEqual('About')
  })

  // const origin = await card.getElementById("origin", node => node.innerText);
  // expect(origin).toEqual('ORIGIN');

  // const locale = await card.getElementById("locale", node => node.innerText);
  // expect(locale).toEqual('LOCALE');
}

describe('Search Form', () => {
  beforeAll(async () => {
    await init()
  })

  afterAll(async () => {
    await page.close()
    browser.close()
  })

  it('submit search form', async () => {
    //submitForm();
  }, 999999)

  it('result should be more 0', async () => {
    //loadCards();
  }, 999999)

  it('modal elements', async () => {
    await modalElements()
  }, 999999)
}, 9999999)
