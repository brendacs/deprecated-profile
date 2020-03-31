import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Posts from './views/Posts.vue'
import MonkMode from './views/MonkMode.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    },
    {
      path: '/monk-mode',
      name: 'monk-mode',
      component: MonkMode
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
});
