<template>
  <div class="counter">
   <div @click="counterStore.increment">{{counterStore.counter}}</div>
  </div>
   <router-view />
</template>

<script setup>
import{useCounterStore} from '../stores/counter';
const counterStore = useCounterStore()

</script>


<style scoped>
.counter{
  width: 150px;
}

</style>
