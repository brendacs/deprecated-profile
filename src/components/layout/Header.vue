<template>
  <header class="header">
    <nav class="nav">
        <ul class="nav-items">
          <router-link to="/"><li>brendacs.dev</li></router-link>
          <router-link to="/projects"><li>Projects</li></router-link>
          <router-link to="/posts"><li>Posts</li></router-link>
          <!-- <router-link to="/contact"><li>Contact</li></router-link> -->
          <a href="https://brendacs.dev/#/contact" target="_blank">Contact</a>
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

  @media screen and (max-width: 500px) {
    padding-bottom: 0;
  }
}

.nav-items {
  display: flex;
  list-style: none;

  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
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