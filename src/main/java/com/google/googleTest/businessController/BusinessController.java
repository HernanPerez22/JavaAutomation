package com.google.googleTest.businessController;

import com.google.googleTest.logs.Log;
import com.google.googleTest.pages.google.Home;
import com.google.googleTest.pages.google.Results;
import com.google.googleTest.webActions.WebActions;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

public class BusinessController {
    public static WebActions webActions;
    private Home home;
    private Results results;
    private String evidencePath;

    public BusinessController(String path, String feature,String scenario) {
        webActions = new WebActions(path,feature,scenario);
        evidencePath=webActions.getEvidencePath();
    }

    public String getEvidencePath() {
        return evidencePath;
    }

    public void goToGoogleHome(){
        String operation="Go to google home page";
        try {
            Log.LOGGER.info(" Operation: ".concat(operation));
            webActions.launchWebApp("Chrome", "http://www.google.com");
            home = PageFactory.initElements(webActions.getDriver(), Home.class);
            boolean isGoogle= home.checkPage();
            Assert.assertTrue("The loaded page isn't google",isGoogle);
            Log.LOGGER.info("- Operation completed -\n");
        }catch (Exception e){
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void closeBrowser(){
        try{
            webActions.closeWebApp();
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public void typeInGoogleSearchField(String searchString, boolean closeSearchList) {
        String operation="Type in the google search field";
        try {
            Log.LOGGER.info(" Operation: ".concat(operation));

            home.typeSearch(searchString);
            if(closeSearchList) home.closeSearchList();

            Log.LOGGER.info("- Operation completed -\n");
        }catch (Exception e){
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void clickOnGoogleSearchButton() {
        String operation="Click on the google search button";
        try {
            Log.LOGGER.info(" Operation: ".concat(operation));

            home.pressSearchButton();

            Log.LOGGER.info("- Operation completed -\n");
        }catch (Exception e){
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void checkGoogleResultsPage() {
        String operation="Check the google results page";
        try {
            Log.LOGGER.info(" Operation: ".concat(operation));

            results = PageFactory.initElements(webActions.getDriver(), Results.class);
            boolean isGoogleResultsPage= results.checkPage();
            Assert.assertTrue("The loaded page isn't google results page",isGoogleResultsPage);

            Log.LOGGER.info("- Operation completed -\n");
        }catch (Exception e){
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void checkSpecificSearchResult(String resultExpected, int position) {
        String operation="Check the first google result";
        try {
            Log.LOGGER.info(" Operation: ".concat(operation));

            String resultObtained= results.getSpecificResult(position);
            Assert.assertEquals("the result was '".concat(resultObtained).concat("' but the expected is '")
                    .concat(resultExpected).concat("'."),resultObtained,resultExpected);

            Log.LOGGER.info("- Operation completed -\n");
        }catch (Exception e){
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void checkSuggestionListIsDisplayed() {
        String operation="Check that the suggestion list is displayed";
        try {
            Log.LOGGER.info(" Operation: ".concat(operation));

            boolean isSuggestionListVisible= home.isSuggestionListVisible();
            Assert.assertTrue("The suggestion list isn't displayed",isSuggestionListVisible);

            Log.LOGGER.info("- Operation completed -\n");
        }catch (Exception e){
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void clickOnSpecificSearchResult(int position) {
        String operation="Click on the first search result";
        try {
            Log.LOGGER.info(" Operation: ".concat(operation));

            results.clickFirstResult(position);

            Log.LOGGER.info("- Operation completed -\n");
        }catch (Exception e){
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void compareTabURL(String urlExpected) {
        String operation="Compare current url with the expected";
        try {
            Log.LOGGER.info(" Operation: ".concat(operation));

            webActions.takeScreenShot();
            String obtainedURL=webActions.getTabURL();
            Assert.assertEquals("the URL obtained was '".concat(obtainedURL).concat("' but the expected is '")
                    .concat(urlExpected).concat("'."),urlExpected,obtainedURL);

            Log.LOGGER.info("- Operation completed -\n");
        }catch (Exception e){
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }

    public void clickOnSpecificElementFromSuggestionList(int elementPosition) {
        String operation="Click on specific element of the suggestion list";
        try {
            Log.LOGGER.info(" Operation: ".concat(operation));

            int suggestedOptions= home.getSuggestedOptionsQty();
            if (suggestedOptions<(elementPosition+1)) throw new Exception("The list only have".concat(String.valueOf(suggestedOptions)).concat("elements"));
            home.clickOnElementFromSuggestionList(elementPosition);

            Log.LOGGER.info("- Operation completed -\n");
        }catch (Exception e){
            Log.LOGGER.info("Operation failed: ".concat(e.getMessage()));
            e.printStackTrace();
            Assert.fail();
        }
    }
}
