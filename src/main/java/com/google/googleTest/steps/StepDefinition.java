package com.google.googleTest.steps;

import com.cucumber.listener.ExtentProperties;
import com.google.googleTest.controllers.BusinessController;
import com.google.googleTest.logs.Log;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.FileInputStream;
import java.util.Properties;


public class StepDefinition {

    BusinessController businessController;
    Properties prop = new Properties();

    @Before
    public void setUp(Scenario scenario){
        try{prop.load(new FileInputStream("src/main/resources/properties/config.properties"));}catch (Exception e){e.printStackTrace();}
        String path=prop.getProperty("evidencePath");

        String rawFeatureName = scenario.getId().split(";")[0].replace("-"," ");
        String scenarioName=scenario.getName();
        String featureName = rawFeatureName.substring(0, 1).toUpperCase() + rawFeatureName.substring(1);
        businessController= new BusinessController(path,featureName,scenarioName);

        ExtentProperties extentProperties = ExtentProperties.INSTANCE;

        extentProperties.setReportPath(businessController.getEvidencePath() + "ReporteEjecucion.html");
        extentProperties.setProjectName(prop.getProperty("project.name"));

        Log.LOGGER.info("Test start");
        Log.LOGGER.info("Scenario: ".concat(scenarioName));
        Log.LOGGER.info("Feature: ".concat(featureName));
    }

    @After
    public void tearDown() {
        businessController.closeBrowser();
        Log.LOGGER.info("Test end");
    }


    @When("^I type 'The name of the wind' into the search field$")
    public void iTypeTheNameOfTheWindIntoTheSearchField() {
        businessController.typeInGoogleSearchField("The name of the wind",true);
    }

    @When("^I type 'The name of the w' into the search field$")
    public void iTypeTheNameOfTheWIntoTheSearchField() {
        businessController.typeInGoogleSearchField("The Name of the w",false);
    }

    @And("^I click the Google Search button$")
    public void iClickTheGoogleSearchButton() {
        businessController.clickOnGoogleSearchButton();
    }

    @Then("^I go to the search results page$")
    public void iGoToTheSearchResultsPage() {
        businessController.checkGoogleResultsPage();
    }

    @And("^the first result is 'The Name of the Wind - Patrick Rothfuss'$")
    public void theFirstResultIsTheNameOfTheWindPatrickRothfuss() {
        businessController.checkSpecificSearchResult("The Name of the Wind - Patrick Rothfuss",0);
    }

    @When("^I click on the first result link$")
    public void iClickOnTheFirstResultLink() {
        businessController.clickOnSpecificSearchResult(0);
    }

    @Then("^I go to the 'Patrick Rothfuss - The Books' page$")
    public void iGoToThePatrickRothfussTheBooksPage() {
        businessController.compareTabURL("https://www.patrickrothfuss.com/content/books.asp");
    }

    @And("^the suggestions list is displayed$")
    public void theSuggestionsListIsDisplayed() {
        businessController.checkSuggestionListIsDisplayed();
    }

    @And("^I click on the first suggestion in the list$")
    public void iClickOnTheFirstSuggestionInTheList() {
        businessController.clickOnSpecificElementFromSuggestionList(0);
    }

    @Given("^Im on the homepage$")
    public void iMOnTheHomepage() {
        businessController.goToGoogleHome();
    }
}
