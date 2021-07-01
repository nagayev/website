import cheerio from "cheerio";
import fetch from "node-fetch";

function check(body) {
  const cheer = cheerio.load(body);
  expect(cheer("#__next").find("div")).toBeGreaterThan(0);
}

it("SSR Loads with an HTML Body", () => {
  const url = "localhost:3000";
  fetch(url)
    .then((res) => res.text())
    .then((body) => check(body));
});
