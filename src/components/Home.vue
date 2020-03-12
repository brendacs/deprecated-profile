<template>
  <div class="home">
    <p class="name">Brenda Zhang</p>
    <p class="description">
      Software engineer <a href="https://linkedin.com/in/brendacs"  target="_blank">@ Adobe</a>, personal project connoisseur, chronic <a href="https://github.com/brendacs" target="_blank">GitHub</a> repository creator, avid reader, & callused guitarist
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
  .home {
    padding: 10vh 10vw;
  }

  .name {
    font-size: 50px;
    text-decoration: underline;
    margin-bottom: 20px;
  }

  .description {
    max-width: 600px;
  }
</style>