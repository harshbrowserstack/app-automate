export APP_URL=$((curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
	-X POST "https://api-cloud.browserstack.com/app-automate/xcuitest/v2/app" \
	-F "file=@./BrowserStack-SampleApp.ipa") | grep -o '"app_url":"[^"]*' | grep -o '[^"]*$')

export TEST_SUITE_URL=$((curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
	-X POST "https://api-cloud.browserstack.com/app-automate/xcuitest/v2/test-suite" \
	-F "file=@./BrowserStack-SampleXCUITest-v2.zip") | grep -o '"test_suite_url":"[^"]*' | grep -o '[^"]*$')

echo "APP_URL: "$APP_URL
echo "TEST_SUITE_URL: "$TEST_SUITE_URL


curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/xcuitest/v2/build" \
-d '{"app": "'$APP_URL'", "testSuite": "'$TEST_SUITE_URL'",  "devices": ["iPhone 14-16"]}' \
-H "Content-Type: application/json" 

