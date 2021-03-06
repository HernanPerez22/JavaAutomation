package com.google.googleTest.pages.google;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

import static com.google.googleTest.controllers.BusinessController.webActions;


public class Results {
    @FindBy(how = How.XPATH, using = "//div[@id='search']//h3")
    private List<WebElement> lnkResults;

    @FindBy(how = How.XPATH, using = "//div[@class='hdtb-mitem hdtb-msel hdtb-imb']")
    private WebElement opcAllResults;

    public boolean checkPage() throws Exception{
        return webActions.isVisible(opcAllResults,"all results option",30,true);
    }

    public String getSpecificResult(int position) {
        return webActions.getTextFromElement(lnkResults.get(position),"first search result",false);
    }

    public void clickFirstResult(int position) {
        webActions.clickElement(lnkResults.get(position),"first search result",false);
    }
}
