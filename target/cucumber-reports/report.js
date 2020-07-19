$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Search in google home page",
  "description": "",
  "id": "search-in-google-home-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 368680500,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User can search with \u0027Google Search\u0027",
  "description": "",
  "id": "search-in-google-home-page;user-can-search-with-\u0027google-search\u0027",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@TechTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Im on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I type \u0027The name of the wind\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click the Google Search button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.iMOnTheHomepage()"
});
formatter.result({
  "duration": 4957456200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iTypeTheNameOfTheWindIntoTheSearchField()"
});
formatter.result({
  "duration": 1067345900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickTheGoogleSearchButton()"
});
formatter.result({
  "duration": 1159867400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 512240300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss()"
});
formatter.result({
  "duration": 31658000,
  "error_message": "org.junit.ComparisonFailure: the result was \u0027El nombre del viento - Wikipedia, la enciclopedia libre\u0027 but the expected is \u0027The Name of the Wind - Patrick Rothfuss\u0027. expected:\u003c[El nombre del viento - Wikipedia, la enciclopedia libre]\u003e but was:\u003c[The Name of the Wind - Patrick Rothfuss]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.google.googleTest.controllers.BusinessController.checkSpecificSearchResult(BusinessController.java:102)\r\n\tat com.google.googleTest.steps.StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss(StepDefinition.java:72)\r\n\tat ✽.And the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027(GoogleSearch.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4879123100,
  "status": "passed"
});
formatter.before({
  "duration": 4764000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User can search by using the suggestions",
  "description": "",
  "id": "search-in-google-home-page;user-can-search-by-using-the-suggestions",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@TechTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Im on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I type \u0027The name of the w\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the suggestions list is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.iMOnTheHomepage()"
});
formatter.result({
  "duration": 4403513500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iTypeTheNameOfTheWIntoTheSearchField()"
});
formatter.result({
  "duration": 137909500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.theSuggestionsListIsDisplayed()"
});
formatter.result({
  "duration": 865267400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnTheFirstSuggestionInTheList()"
});
formatter.result({
  "duration": 1125933400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 492256100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss()"
});
formatter.result({
  "duration": 26656700,
  "error_message": "org.junit.ComparisonFailure: the result was \u0027El nombre del viento - Wikipedia, la enciclopedia libre\u0027 but the expected is \u0027The Name of the Wind - Patrick Rothfuss\u0027. expected:\u003c[El nombre del viento - Wikipedia, la enciclopedia libre]\u003e but was:\u003c[The Name of the Wind - Patrick Rothfuss]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.google.googleTest.controllers.BusinessController.checkSpecificSearchResult(BusinessController.java:102)\r\n\tat com.google.googleTest.steps.StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss(StepDefinition.java:72)\r\n\tat ✽.And the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027(GoogleSearch.feature:18)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 4868527500,
  "status": "passed"
});
formatter.before({
  "duration": 5338900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "The user can search by using the suggestions and go to the selected page",
  "description": "",
  "id": "search-in-google-home-page;the-user-can-search-by-using-the-suggestions-and-go-to-the-selected-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@TechTest"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "Im on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I type \u0027The name of the w\u0027 into the search field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the suggestions list is displayed",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on the first suggestion in the list",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I go to the search results page",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I go to the \u0027Patrick Rothfuss - The Books\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.iMOnTheHomepage()"
});
formatter.result({
  "duration": 4788146800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iTypeTheNameOfTheWIntoTheSearchField()"
});
formatter.result({
  "duration": 114757700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.theSuggestionsListIsDisplayed()"
});
formatter.result({
  "duration": 869010100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnTheFirstSuggestionInTheList()"
});
formatter.result({
  "duration": 1857335300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 417435700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss()"
});
formatter.result({
  "duration": 28720400,
  "error_message": "org.junit.ComparisonFailure: the result was \u0027El nombre del viento - Wikipedia, la enciclopedia libre\u0027 but the expected is \u0027The Name of the Wind - Patrick Rothfuss\u0027. expected:\u003c[El nombre del viento - Wikipedia, la enciclopedia libre]\u003e but was:\u003c[The Name of the Wind - Patrick Rothfuss]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.google.googleTest.controllers.BusinessController.checkSpecificSearchResult(BusinessController.java:102)\r\n\tat com.google.googleTest.steps.StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss(StepDefinition.java:72)\r\n\tat ✽.And the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027(GoogleSearch.feature:28)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinition.iClickOnTheFirstResultLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinition.iGoToThePatrickRothfussTheBooksPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4623901400,
  "status": "passed"
});
});