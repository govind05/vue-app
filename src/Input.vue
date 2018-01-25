<template>
  <div>
    <input type="text" :value="msg" @input="messageChanged" />
    <p> {{message= msg}} </p>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data() {
    return {
      message: ""
    };
  },
  methods:{
    messageChanged(event){
      this.message = event.target.value;
      this.$emit('changeMessage', event.target.value);
    }
  }
};
</script>
