<template>
  <main>
    <h1>{{user}}</h1>
  </main>
</template>

<script>
export default {
  computed:{
    user(){
      return this.$store.getters.user
    }
  }
}
</script>

