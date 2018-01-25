<template>
  <div id="app">
    <app-message></app-message>
    <hr>
    <router-link to='/' >Home</router-link>
    <router-link to='/users/10' >User</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
