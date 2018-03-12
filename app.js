const rp = require('request-promise');
const cheerio = require('cheerio');


const options = {
    uri: 'https://finance.google.com/finance?q=LON%3ARBS',
    transform: function (body) {
      return cheerio.load(body);
    }
  };

//#quote-header-info > div.Mt\28 15px\29 > div.D\28 ib\29.Mt\28 -5px\29.Mend\28 20px\29.Maw\28 56\25 \29 --tab768.Maw\28 52\25 \29.Ov\28 h\29.smartphone_Maw\28 85\25 \29.smartphone_Mend\28 10px\29 > div.D\28 ib\29 > h1
"<tr"

  rp(options)
  .then(($) => {
      let obj = { //.children('[id^=ref_]')
          value: $('.pr').children('[id^=ref_]').text(),
          stock: "rbs"
      }
    console.log(obj);

  })
  .catch((err) => {
      console.log(`Error ${err}`);
  });
