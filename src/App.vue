<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<div class="container">
<div class="navbar">
      <nav class="nav">
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/about">About</RouterLink>
      </nav>

</div>
<RouterView/>
</div>

</template>

<style>
.navbar{
  margin-top: 0;
  margin-left: 5rem;
}

.container{
  text-align: center;
  justify-content: center;
  align-content: center;
}




</style>
