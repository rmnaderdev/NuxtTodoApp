import { defineStore } from "pinia";

// Define a new store using pinia
export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
