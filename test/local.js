const expect = require('chai').expect;
 
describe('Search Wikipedia Functionality', () => {
  it('can find search results', async () => {
        let searchbox = await $('(//android.widget.ImageView[@content-desc="Search Wikipedia"])[1]');
        await searchbox.click();
        
        let textInputBox = await $('//android.widget.AutoCompleteTextView[@resource-id="org.wikipedia.alpha:id/search_src_text"]');
        await textInputBox.addValue("Browserstack");
        
        let searchResultsItem = await $('//android.widget.TextView[@resource-id="org.wikipedia.alpha:id/page_list_item_title"]');
        expect(await searchResultsItem.getText()).equal("BrowserStack");
    });
});
