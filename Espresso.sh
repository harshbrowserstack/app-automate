
export APP_URL=$((curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/espresso/v2/app" \
-F "file=@./Calculator.apk") | grep -o '"app_url":"[^"]*' | grep -o '[^"]*$')


export TEST_SUITE_URL=$((curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/espresso/v2/test-suite" \
-F "file=@./CalculatorTest.apk") | grep -o '"test_suite_url":"[^"]*' | grep -o '[^"]*$')

echo "APP_URL: "$APP_URL
echo "TEST_SUITE_URL: "$TEST_SUITE_URL

curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
-X POST "https://api-cloud.browserstack.com/app-automate/espresso/v2/build" \
-d '{"app": "'$APP_URL'", "testSuite": "'$TEST_SUITE_URL'", "devices": ["Samsung Galaxy S9 Plus-9.0"]}' \
-H "Content-Type: application/json" 
