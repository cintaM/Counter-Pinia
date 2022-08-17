import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    oddEven: (state) => {
        if(state.counter % 2 === 0)
        return "EVEN";
        return "ODD"
  }},
  actions: {
    increment() {
      this.counter++
    },

    decrement(){
      this.counter--
    }
  }
})
