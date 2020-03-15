<template>
  <div id="app">
    <Header />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss">
/* imports */
@import url('https://fonts.googleapis.com/css?family=Sen|Roboto');

/* reset */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  text-decoration: none;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: none;
}

/* globals */
#app {
  margin: 0 25vw;

  @media screen and (max-width: 1024px) {
    margin: 0 15vw;
  }

  @media screen and (max-width: 768px) {
    margin: 0 10vw;
  }
}

#app, h1, h2, h3, h4, h5, h6, p, a, input, button {
  font-family: 'Sen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: justify;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6 {
  margin: 40px 0 20px 0;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px;
}

p {
  line-height: 1.5;
  margin-bottom: 20px;
}

a {
  text-decoration: underline;
  color: rgb(0, 211, 134);
  transition: all 0.1s ease;
  line-height: 1.5;

  &:hover {
    color: #2c3e50;
    cursor: pointer;
  }
}

li {
  list-style-position: inside;
  line-height: 1.5;
}

.container {
  padding: 5vh 0;

  @media screen and (max-width: 500px) {
    padding-top: 5vh;
  }
}

.hide {
  display: none;
}

.show {
  display: block;
}

.title {
  font-size: 50px;
  text-decoration: underline;

  @media screen and (max-width: 425px) {
    font-size: 36px;
  }
}

.primary-btn {
  height: 50px;
  background-color: rgb(0, 211, 134);
  color: #fff;
  border: none;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    background-color: rgba(0, 211, 134, 0.85);
  }
}

 /* https://coolors.co/7cfef0-6bffb8-2ceaa3-28965a-2a6041 */
</style>
