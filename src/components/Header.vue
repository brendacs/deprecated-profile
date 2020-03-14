<template>
  <header class="header">
    <nav class="nav">
        <ul class="nav-items">
          <a href="/"><li>brendacs.dev</li></a>
          <a href="/projects"><li>Projects</li></a>
          <a href="/posts"><li>Posts</li></a>
          <a href="/monk-mode"><li>Monk Mode</li></a>
          <a href="/contact"><li>Contact</li></a>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.nav {
  padding: 30px 0;
}

.nav-items {
  display: flex;
}

.nav-items a {
  margin-right: 30px;
  color: #2c3e50;
  text-decoration: none;

  &:hover {
    color: rgb(0, 211, 134);
  }

  &:first-child {
    font-weight: bold;
    color: rgb(0, 211, 134);

    &:hover {
      color: #2c3e50;
    }
  }
}
</style>