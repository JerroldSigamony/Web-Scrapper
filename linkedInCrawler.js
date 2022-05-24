const axios = require("axios");
const cheerio = require("cheerio");

const getBoysNames = async () => {
  try {
    const { data } = await axios.get(
      "https://linkedinlead.alphamechanicalservices.net/test/test.html"
    );
    const $ = cheerio.load(data);
    const boysNames = [];

    const imageAttr = $(".member-photo-container img").attr();
    const image = imageAttr["data-delayed-url"];
    const name = $(".member-name span:nth-child(1)").text();
    const occupation = $(
      "#app-container > section.basic-profile-container.basic-profile-update > dl > dd.medium"
    ).text();
    const connectionList = $(".member-connection-info").text();
    let summary = $("#about-section > div > div > div").text();
    let designation = $(
      "#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dt > span"
    ).text();
    let company = $(
      "#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dd.medium.entity-name > span"
    ).text();
    let startDate = $(
      "#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dd.medium.time-period > span:nth-child(1)"
    ).text();
    let endDate = $(
      "#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dd.medium.time-period > span:nth-child(2)"
    ).text();
    let location = $(
      "#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dd.small-light.entity-location > span"
    ).text();

    summary = summary.replace(/\s\s+/g, " ");
    designation = designation.replace(/\s\s+/g, " ");
    location = location.replace(/\s\s+/g, " ");
    const experience = { designation, company, startDate, endDate, location };

    let institute = $(
      "#app-container > div.profile-overview-container > section.education-container.list-container > section > ol > li > a > dl > dt > span"
    ).text();

    let degreeName = $(
      "#app-container > div.profile-overview-container > section.education-container.list-container > section > ol > li > a > dl > dd.medium.entity-name"
    ).text();
    degreeName = degreeName.replace(/\s\s+/g, " ");
    let degreeDuration = $(
      "#app-container > div.profile-overview-container > section.education-container.list-container > section > ol > li > a > dl > dd.medium.time-period"
    ).text();

    let skills = [];
    $("#skills-list").each(function (i, elm) {
      skills = $(elm).find("li").text();
    });
    institute = institute.replace(/\s\s+/g, " ");
    const education = { institute, degreeName, degreeDuration };

    let Contact = [];

    $(".contact-detail-container").each(function (i, elm) {
      let contactType = $(elm).find(".contact-title").text();
      let contactValue = $(elm).find(".contact-value").text();
      Contact.push({ contactType, contactValue });
    });

    const LinkedIn = {
      image,
      name,
      occupation,
      connectionList,
      summary,
      experience,
      education,
      skills,
      Contact,
    };

    console.log(LinkedIn);

    return LinkedIn;
  } catch (error) {
    throw error;
  }
};

getBoysNames().then((postTitles) => {
  //console.log(postTitles)
});
