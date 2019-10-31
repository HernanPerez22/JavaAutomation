$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 1,
  "name": "Google Homepage Search",
  "description": "",
  "id": "google-homepage-search",
  "keyword": "Feature"
});
formatter.before({
  "duration": 418487098,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User can search with \u0027Google Search\u0027",
  "description": "",
  "id": "google-homepage-search;user-can-search-with-\u0027google-search\u0027",
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
  "name": "I’m on the homepage",
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
  "location": "StepDefinition.ImOnTheHomepage()"
});
formatter.result({
  "duration": 2281382821,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iTypeTheNameOfTheWindIntoTheSearchField()"
});
formatter.result({
  "duration": 957345051,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickTheGoogleSearchButton()"
});
formatter.result({
  "duration": 1878543556,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 210251471,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss()"
});
formatter.result({
  "duration": 38171684,
  "error_message": "org.junit.ComparisonFailure: the result was \u0027El nombre del viento - Wikipedia, la enciclopedia libre\u0027 but the expected is \u0027The Name of the Wind - Patrick Rothfuss\u0027. expected:\u003c[El nombre del viento - Wikipedia, la enciclopedia libre]\u003e but was:\u003c[The Name of the Wind - Patrick Rothfuss]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat com.google.googleTest.businessController.BusinessController.checkSpecificSearchResult(BusinessController.java:103)\n\tat com.google.googleTest.steps.StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss(StepDefinition.java:76)\n\tat ✽.And the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027(GoogleSearch.feature:9)\n",
  "status": "failed"
});
formatter.after({
  "duration": 129007399,
  "status": "passed"
});
formatter.before({
  "duration": 4258223,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User can search by using the suggestions",
  "description": "",
  "id": "google-homepage-search;user-can-search-by-using-the-suggestions",
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
  "name": "I’m on the homepage",
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
  "location": "StepDefinition.ImOnTheHomepage()"
});
formatter.result({
  "duration": 2500340975,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iTypeTheNameOfTheWIntoTheSearchField()"
});
formatter.result({
  "duration": 153183418,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.theSuggestionsListIsDisplayed()"
});
formatter.result({
  "duration": 748920702,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnTheFirstSuggestionInTheList()"
});
formatter.result({
  "duration": 1879616820,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 209463705,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss()"
});
formatter.result({
  "duration": 30637819,
  "error_message": "org.junit.ComparisonFailure: the result was \u0027El nombre del viento - Wikipedia, la enciclopedia libre\u0027 but the expected is \u0027The Name of the Wind - Patrick Rothfuss\u0027. expected:\u003c[El nombre del viento - Wikipedia, la enciclopedia libre]\u003e but was:\u003c[The Name of the Wind - Patrick Rothfuss]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat com.google.googleTest.businessController.BusinessController.checkSpecificSearchResult(BusinessController.java:103)\n\tat com.google.googleTest.steps.StepDefinition.theFirstResultIsTheNameOfTheWindPatrickRothfuss(StepDefinition.java:76)\n\tat ✽.And the first result is \u0027The Name of the Wind - Patrick Rothfuss\u0027(GoogleSearch.feature:18)\n",
  "status": "failed"
});
formatter.after({
  "duration": 127564269,
  "status": "passed"
});
formatter.before({
  "duration": 7725795,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "The user can seatch by using the suggestions",
  "description": "",
  "id": "google-homepage-search;the-user-can-seatch-by-using-the-suggestions",
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
  "name": "I’m on the homepage",
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
  "name": "I click on the first result link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I go to the \u0027Patrick Rothfuss - The Books\u0027 page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.ImOnTheHomepage()"
});
formatter.result({
  "duration": 2425174691,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iTypeTheNameOfTheWIntoTheSearchField()"
});
formatter.result({
  "duration": 126647406,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.theSuggestionsListIsDisplayed()"
});
formatter.result({
  "duration": 813599449,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnTheFirstSuggestionInTheList()"
});
formatter.result({
  "duration": 1016866256,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iGoToTheSearchResultsPage()"
});
formatter.result({
  "duration": 385334725,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iClickOnTheFirstResultLink()"
});
formatter.result({
  "duration": 1083321262,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.iGoToThePatrickRothfussTheBooksPage()"
});
formatter.result({
  "duration": 159669165,
  "error_message": "org.junit.ComparisonFailure: the URL obtained was \u0027https://es.wikipedia.org/wiki/El_nombre_del_viento\u0027 but the expected is \u0027https://www.patrickrothfuss.com/content/books.asp\u0027. expected:\u003chttps://[www.patrickrothfuss.com/content/books.asp]\u003e but was:\u003chttps://[es.wikipedia.org/wiki/El_nombre_del_viento]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat com.google.googleTest.businessController.BusinessController.compareTabURL(BusinessController.java:152)\n\tat com.google.googleTest.steps.StepDefinition.iGoToThePatrickRothfussTheBooksPage(StepDefinition.java:86)\n\tat ✽.Then I go to the \u0027Patrick Rothfuss - The Books\u0027 page(GoogleSearch.feature:29)\n",
  "status": "failed"
});
formatter.after({
  "duration": 106933947,
  "status": "passed"
});
});