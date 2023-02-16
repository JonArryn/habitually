// // MOCKING DATA // //
// > > good article on setting up data mocking with Typescript and MSW
// https://codibly.com/news-insights/mocking-api-calls-like-a-boss/
// > Learning: Setting up types and classes for each module/endpoint
// > then setting up the mock server
// > this was a bit advanced for me at the time but something that should
// > be revisited for this project

// // AXIOS ERROR WHEN RUNNING TESTS // //
// > > I kept getting an error from axios when running test stating
// cannot import outside of a module
// > Learning: I had to update react-scripts and add a jest
// configuration into my package.json
// > source of solution here - https://github.com/axios/axios/issues/5026
// > added
// "jest": {
"moduleNameMapper": {
"^axios$": "axios/dist/axios.js"
}
}
// updated react-scripts with npm i react-scripts
// > After the above I was good to go it seemed
