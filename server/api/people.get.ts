import data from "../../testData/MOCK_DATA.json";

export default defineEventHandler(async (event) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
});
