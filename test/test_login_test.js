Feature("test_login");

// Scenario("test_login", ({ I }) => {
//   I.amOnPage("/");
//   I.click(
//     "//html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[4]/ul[1]/li[9]/i[1]"
//   );
//   I.seeElement(".modal-content");
//   //I.click('//html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[5]/div[1]/div[1]/div[1]/div[1]/form[1]/div[6]/div[1]')
//   I.fillField("#sign-in-email", "minhnc62@gmail.com");
//   I.fillField("#sign-in-password", secret("016666"));
//   I.click("#btn-sign-in");
//   I.wait(1);

//   // I.click("/html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[4]/ul[1]/li[9]/div[2]");
//   // I.click("/html[1]/body[1]/div[1]/header[1]/div[1]/nav[1]/div[4]/ul[1]/li[9]/ul[1]/li[3]")
// });

Scenario("test_login_github", async ({ I }) => {
  I.amOnPage("https://github.com");
  
  const title = await I.grabTextFrom("h1");
  console.log(title);
  //I.writeToFile('test_title.txt','title')
  
});
