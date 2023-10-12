const MIDJ = require("@twozerotwo/midj");

const midj = new MIDJ({
  authorization: "",
});

const main = async () => {
  const response = await midj.generate("Hello, world!");

  if (response.error) {
    console.error("Error:", response.error);
  } else {
    console.log("Generated Content:", response);
  }
};

main();
