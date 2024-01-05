# symphony-test-task
Create (design and implement) an automated API test using any JS framework or library
(e.g., Request with Cypress; Playwright with request, etc.).
Deadline: +24 hours

##  API Test should do the following:
1) Call https://api.publicapis.org/entries
2) Read the response, find all objects with property “Category: Authentication &amp;
Authorization”
3) Compare, count, and verify the number of objects where the property above
appears
4) Finally print found objects to console

#### Create (design and implement) an automated UI test using any any UI JS framework or library (Cypress with JavaScript; Playwright with TypeScript, WebdriverIO, etc.) UI Test should do the following:
1) Go to https://www.saucedemo.com/
2) Log in to the site. Verify that the items are sorted by Name ( A -&gt; Z ).
3) Change the sorting to Name ( Z -&gt; A).
4) Verify that the items are sorted correctly.

#### Instructions:
1. Use appropriate test runner and test reporting tool.
2. Implement assertions to verify the expected behavior.
3. Use relevant build tool for the project.
4. Provide clear instructions in the Readme file on how to run the automated tests
locally and on CI.
Acceptance Criteria:
1. The automated tests should be well-organized, readable, and easy to maintain.
2. The test suite should be uploaded to your public repository (can be any: GitHub,
GitLab, etc.).

#### Bonus points:
- Create Gitlab public project
- Acquire shared docker runner (i.e., use one of the default publics GitLab allows)
- Create “.gitlab-ci.yml” file in project
- Make sure CI/CD pipeline works
- Show tests run in a pipeline in CI/CD of the Gitlab project.
