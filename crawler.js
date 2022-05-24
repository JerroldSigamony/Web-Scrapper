const axios = require("axios");
const cheerio = require("cheerio");

const getBoysNames = async () => {
  try {
    const { data } = await axios.get(
      "https://hamariweb.com/names/muslim/boy/page-1"
    );
    const $ = cheerio.load(data);
    const boysNames = [];

    $(
      `body > div.main-container.container > div:nth-child(9) > div.table-responsive.mb_25 > table > tbody > tr`
    ).each((_idx, el) => {
      if (_idx === 0) return true;
      const tds = $(el).find("td");
      const name = $(tds[0]).text();
      const meaning = $(tds[1]).text();
      const urdu = $(tds[2]).text().trim();
      const tableRow = { name, meaning, urdu };
      //   const boyName = $(el).text();
      boysNames.push(tableRow);
    });

    return boysNames;
  } catch (error) {
    throw error;
  }
};

getBoysNames().then((postTitles) => console.log(postTitles));
