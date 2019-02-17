const puppeteer = require('puppeteer');
const dotenv = require('dotenv');

dotenv.config();

const { WIFI_CODE = "NO", EMAIL = "contact@rayriffy.com" } = process.env;

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('https://mcdfeedback.co/th/SiteSearchMCDTH.aspx?data1=&data2=&data3=&data4=')
  
  await page.waitForSelector('font > #ContentPlaceHolder1_SearchSites > .Row > .ReferenceNumbercell > #ContentPlaceHolder1_SearchSitesText')
  await page.type('font > #ContentPlaceHolder1_SearchSites > .Row > .ReferenceNumbercell > #ContentPlaceHolder1_SearchSitesText', WIFI_CODE)
  
  await page.waitForSelector('font > #ContentPlaceHolder1_SearchSites > .Row > .ReferenceNumbercell > #ContentPlaceHolder1_SearchLocation')
  await page.click('font > #ContentPlaceHolder1_SearchSites > .Row > .ReferenceNumbercell > #ContentPlaceHolder1_SearchLocation')
  
  await navigationPromise
  
  await page.waitForSelector('font > #ContentPlaceHolder1_SearchSites > .Row > .ReferenceNumbercell > #ContentPlaceHolder1_SearchSitesText')
  await page.click('font > #ContentPlaceHolder1_SearchSites > .Row > .ReferenceNumbercell > #ContentPlaceHolder1_SearchSitesText')
  
  await page.waitForSelector('font > #ContentPlaceHolder1_SearchSites > .Row > .ReferenceNumbercell > #ContentPlaceHolder1_SearchLocation')
  await page.click('font > #ContentPlaceHolder1_SearchSites > .Row > .ReferenceNumbercell > #ContentPlaceHolder1_SearchLocation')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6182 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li > label')
  await page.click('#page-wrap > #reportComponentDiv6182 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li > label')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6183 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6183 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6184 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6184 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6185 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  await page.click('#page-wrap > #reportComponentDiv6185 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6187 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6187 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6188 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  await page.click('#page-wrap > #reportComponentDiv6188 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6190 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6190 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6191 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  await page.click('#page-wrap > #reportComponentDiv6191 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6193 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6193 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6194 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  await page.click('#page-wrap > #reportComponentDiv6194 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6196 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6196 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6197 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  await page.click('#page-wrap > #reportComponentDiv6197 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6200 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  await page.click('#page-wrap > #reportComponentDiv6200 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6200 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  await page.click('#page-wrap > #reportComponentDiv6200 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6200 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  await page.click('#page-wrap > #reportComponentDiv6200 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6200 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  await page.click('#page-wrap > #reportComponentDiv6200 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1_99')
  
  await page.waitForSelector('.masterStyle > #bk-ground > #page-wrap > #reportComponentDiv6199 > div:nth-child(2)')
  await page.click('.masterStyle > #bk-ground > #page-wrap > #reportComponentDiv6199 > div:nth-child(2)')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6201 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2 > li:nth-child(1) > .check')
  await page.click('#page-wrap > #reportComponentDiv6201 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2 > li:nth-child(1) > .check')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6201 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2_p1')
  await page.click('#page-wrap > #reportComponentDiv6201 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2 > li > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2_p1')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await page.waitForSelector('.masterStyle > #bk-ground > #page-wrap > #reportComponentDiv6224 > div')
  await page.click('.masterStyle > #bk-ground > #page-wrap > #reportComponentDiv6224 > div')
  
  await page.waitForSelector('.masterStyle > #bk-ground > #page-wrap > #reportComponentDiv6202 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_3_txtResp_3')
  await page.click('.masterStyle > #bk-ground > #page-wrap > #reportComponentDiv6202 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_3_txtResp_3')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6203 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6203 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(1) > label')
  
  await page.waitForSelector('tbody > tr:nth-child(1) > td > .mpcontainer > .checkmark')
  await page.click('tbody > tr:nth-child(1) > td > .mpcontainer > .checkmark')
  
  await page.waitForSelector('tbody > tr:nth-child(4) > td > .mpcontainer > .checkmark')
  await page.click('tbody > tr:nth-child(4) > td > .mpcontainer > .checkmark')
  
  await page.waitForSelector('tbody > tr:nth-child(7) > td > .mpcontainer > .checkmark')
  await page.click('tbody > tr:nth-child(7) > td > .mpcontainer > .checkmark')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6205 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6205 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2 > li:nth-child(1) > label')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6206 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_3_rblSelection_3 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6206 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_3_rblSelection_3 > li:nth-child(1) > label')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6207 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(2) > label')
  await page.click('#page-wrap > #reportComponentDiv6207 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_0_rblSelection_0 > li:nth-child(2) > label')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6208 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li:nth-child(2) > label')
  await page.click('#page-wrap > #reportComponentDiv6208 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_1_rblSelection_1 > li:nth-child(2) > label')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6209 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2 > li:nth-child(6) > label')
  await page.click('#page-wrap > #reportComponentDiv6209 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_2_rblSelection_2 > li:nth-child(6) > label')
  
  await page.waitForSelector('#page-wrap > #reportComponentDiv6210 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_3_rblSelection_3 > li:nth-child(1) > label')
  await page.click('#page-wrap > #reportComponentDiv6210 > #ContentPlaceHolder1_surveyQtnRepeater_ctl00_3_rblSelection_3 > li:nth-child(1) > label')
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnNext')
  
  await navigationPromise
  
  await page.waitForSelector('.emailTable > .emailRow > .emailCell > div > #ContentPlaceHolder1_txtResp')
  await page.type('.emailTable > .emailRow > .emailCell > div > #ContentPlaceHolder1_txtResp', EMAIL)
  
  await page.waitForSelector('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnSubmit')
  await page.click('.navTable > tbody > tr > td > #ContentPlaceHolder1_btnSubmit')
  
  await navigationPromise
  
  await browser.close()
})()
