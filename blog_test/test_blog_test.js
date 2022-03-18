Feature("test_blog");

Scenario("test blog", async ({ I }) => {
  I.amOnPage("/");
  const title = await I.grabTextFrom("h1");
  const description = await I.grabTextFrom("#post-details");
  const tag1 = await I.grabTextFrom(
    "//html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[3]/a[1]"
  );
  const tag2 = await I.grabTextFrom(
    "//html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[3]/a[2]"
  );
  const tag3 = await I.grabTextFrom(
    "//html[1]/body[1]/div[3]/div[1]/div[2]/div[1]/div[3]/a[3]"
  );
  

  I.amInPath('output/downloads');
  I.writeToFile(
    "test.json",
    `
 {  "title": "${title}",
    "tag": ["${tag1}" , "${tag2}" , "${tag3}"],
    
  }
  
  `
  );
  I.writeToFile("test.csv", `{
    title       tag
    ${title}    ${tag1} 
                ${tag2}
                ${tag3}
}`);
// thay  doi

    I.writeToFile("test.csv", `{
      ${title}
      ${description}}`);
});
