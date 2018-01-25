<template>
  <div>
    <h1>User</h1>
    <p>Team id is {{$route.params.teamId}}</p>
    <button @click="buttonHandler">Go Home</button>
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      // alert(to.params.teamId)
    }
  },
  created() {
    // alert(this.$route.params.teamId)
  },
  methods: {
    buttonHandler() {
      this.$router.push("/");
    }
  }
};
</script>
