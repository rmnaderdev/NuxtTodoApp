// Only allows for post requests
export default defineEventHandler(async (event) => {
  console.log("Write post event");
  return 'Success';
})
