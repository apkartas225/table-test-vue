<script setup lang="ts">

import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
          <RouterLink to="/peoples">Peoples</RouterLink>
          <RouterLink to="/favorites">Favorites</RouterLink>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #efefef;
  justify-content: space-around;
  align-items: center;
  border: 4px;
  
}
a {
  text-decoration: none;
  color: #c85cc1;
  font-size: 16px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
