
// /api/random-number
export default defineEventHandler(async (event) => {
  return { number: Math.floor(Math.random() * 100) };
});
