const MIDJ = require("@twozerotwo/midj");

const mdj = new MIDJ({
  authorization: "YOUR_AUTHORIZATION_TOKEN",
});

mdj.generate("a bear eating pickle").then((response) => {
  console.log(response);
});