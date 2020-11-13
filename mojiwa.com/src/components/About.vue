<template>
  About
</template>

<script>
export default {
  mounted() {
    this.$store.commit("setCurrentPage", "About");
  },
}
</script>

<style>

</style>