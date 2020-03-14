<template>
  <div class="home">
    <p class="name">Brenda Zhang</p>
    <p class="description">
      Software engineer <a href="https://linkedin.com/in/brendacs"  target="_blank">@ Adobe</a>, personal project connoisseur, chronic <a href="https://github.com/brendacs" target="_blank">GitHub</a> repository creator, avid reader, &amp; callused guitarist.
    </p>
    <p>
      I dabble in everything &amp; have a fleeting interest in most things I come across. Over time, I have found that there are only three constants in my life &mdash; things I never have trouble focusing on, and I never run out of energy &amp; curiousity for:
      <span>humans, creating, and music.</span>
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
    padding: 10vh 0;
  }

  .name {
    font-size: 50px;
    text-decoration: underline;
  }

  .description {
    max-width: 600px;
  }

  span {
    display: block;
    margin: 20px 0;
    font-weight: bold;
  }
</style>