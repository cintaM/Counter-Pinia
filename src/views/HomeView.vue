<template>
<div class="container1">
    <div class="counter">{{counterStore.counter}}</div>
     <hr />
    <div class="buttons" >
        <button class="buttoni1" @click="counterStore.decrement" > - </button>
        <button class="buttoni2"  @click="counterStore.increment"> + </button>
    </div>
<hr/>
    <div >
        <h1> This number is {{counterStore.oddEven}}!</h1>
    </div>
 <router-view />
 </div>

</template>

<script setup>
import{useCounterStore} from '../stores/counter'

const counterStore = useCounterStore()


// export default {
//   name: "HomeView",
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     increaseCount() {
//       this.count++;
//     },
//     decreaseCount() {
//       this.count--;
//     },
//   },
//  computed: {
//     oddOrEven(){
//       if (this.count % 2 === 0) return "Even";
//       else return "Odd"
//     }
//   },
// };
</script>

<style >
.buttons{
    width: 250px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-content: center;
}

.counter{
    margin-top: 15rem;
    text-align: center;
    font-size: 5rem;
}

.buttoni1{
    width: 5rem;
    height: 3rem;
    background-color:red;
    border: none;
    font-size: 2rem;
}
.buttoni2{
    width: 5rem;
    height: 3rem;
    background-color:green;
    border: none;
    font-size: 2rem;
    margin-left: 3rem;
}

.container1{
    align-content: center;
    text-align: center;
}

</style>