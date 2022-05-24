"use strict";

var axios = require("axios");

var cheerio = require("cheerio");

var getBoysNames = function getBoysNames() {
  var _ref, data, $, boysNames, imageAttr, image, name, occupation, connectionList, summary, designation, company, startDate, endDate, location, experience, institute, degreeName, degreeDuration, skills, education, Contact, LinkedIn;

  return regeneratorRuntime.async(function getBoysNames$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("https://linkedinlead.alphamechanicalservices.net/test/test.html"));

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          $ = cheerio.load(data);
          boysNames = [];
          imageAttr = $(".member-photo-container img").attr();
          image = imageAttr["data-delayed-url"];
          name = $(".member-name span:nth-child(1)").text();
          occupation = $("#app-container > section.basic-profile-container.basic-profile-update > dl > dd.medium").text();
          connectionList = $(".member-connection-info").text();
          summary = $("#about-section > div > div > div").text();
          designation = $("#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dt > span").text();
          company = $("#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dd.medium.entity-name > span").text();
          startDate = $("#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dd.medium.time-period > span:nth-child(1)").text();
          endDate = $("#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dd.medium.time-period > span:nth-child(2)").text();
          location = $("#app-container > div.profile-overview-container > section.experience-container.list-container.collapsable-list-container.false > ol > li > div > ul > li > a > dl > dd.small-light.entity-location > span").text();
          summary = summary.replace(/\s\s+/g, " ");
          designation = designation.replace(/\s\s+/g, " ");
          location = location.replace(/\s\s+/g, " ");
          experience = {
            designation: designation,
            company: company,
            startDate: startDate,
            endDate: endDate,
            location: location
          };
          institute = $("#app-container > div.profile-overview-container > section.education-container.list-container > section > ol > li > a > dl > dt > span").text();
          degreeName = $("#app-container > div.profile-overview-container > section.education-container.list-container > section > ol > li > a > dl > dd.medium.entity-name").text();
          degreeName = degreeName.replace(/\s\s+/g, " ");
          degreeDuration = $("#app-container > div.profile-overview-container > section.education-container.list-container > section > ol > li > a > dl > dd.medium.time-period").text();
          skills = [];
          $("#skills-list").each(function (i, elm) {
            skills = $(elm).find("li").text();
          });
          institute = institute.replace(/\s\s+/g, " ");
          education = {
            institute: institute,
            degreeName: degreeName,
            degreeDuration: degreeDuration
          };
          Contact = [];
          $(".contact-detail-container").each(function (i, elm) {
            var contactType = $(elm).find(".contact-title").text();
            var contactValue = $(elm).find(".contact-value").text();
            Contact.push({
              contactType: contactType,
              contactValue: contactValue
            });
          });
          LinkedIn = {
            image: image,
            name: name,
            occupation: occupation,
            connectionList: connectionList,
            summary: summary,
            experience: experience,
            education: education,
            skills: skills,
            Contact: Contact
          };
          console.log(LinkedIn);
          return _context.abrupt("return", LinkedIn);

        case 37:
          _context.prev = 37;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 40:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 37]]);
};

getBoysNames().then(function (postTitles) {//console.log(postTitles)
});