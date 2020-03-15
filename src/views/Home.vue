<template>
  <div class="home">
    <p class="title">Brenda Zhang</p>
    <p>
      I dabble in everything and have a fleeting interest in most things I come across. However, over time I have found that there are three constants in my life &mdash; things I never have trouble focusing on, and I never run out of energy and curiousity for:
      <span class="block bold">humans, creating, and music.</span>
    </p>
    <p v-bind:class="[isExpanded ? 'hide' : 'show']"><a @click="isExpanded = true">Expand on this?</a></p>
    <p v-bind:class="[isExpanded ? 'show' : 'hide']"><a @click="isExpanded = false">Ok, too many words. Hide it again.</a></p>
    <div class="expanded-description" v-bind:class="[isExpanded ? 'show' : 'hide']">
      <p>
        <span class="bold">Humans.</span> Whether I was studying psychology or listening to someone's personal story, I'd always been most fulfilled when learning about, being around, and positively impacting a lot of people. At <a href="https://linkedin.com/in/brendacs"  target="_blank">work</a>, I co-founded a corporate club called New@Adobe to create a more welcoming environment for interns, new grads, and new hires to learn more about the resources available to them in the workplace and form a tighter community. I have no doubt I'll continue doing as much as I can to bring people together.
      </p>
      <p>
        <span class="bold">Creating.</span> I like to make things, and I like to make things happen, often for the people who I envision would need it. To be content, I must always be creating something no matter how big or small  &mdash; this can be in the form of a piece of software that improves productivity and efficiency, a blog that provides new insight, a piece of music that makes people feel warm, or a community that makes people feel welcome. Some of my creations live on <a href="https://github.com/brendacs" target="_blank">GitHub</a>, some exist in blogs, some are intangible, and many are in progress.
      </p>
      <p>
        <span class="bold">Music.</span> It has gotten me through the ups and downs of life. I have playlists for each phase of life, each year, and each mood. I've tried violin, flute, and piano, but the one that really stuck was guitar. If you're curious, here's the playlist I use to keep track of <a href="https://open.spotify.com/playlist/1HxOSh62rrY1M45oRiPQ2M?si=-dbIhht-SAOV6LwaPOzOJg" target="_blank">songs to play guitar to</a>.
      </p>
    </div>
    <h2>What I Do</h2>
    <p>
      By day, I'm a software engineer at Adobe and site lead for the corporate club I co-founded, New@Adobe. By night, I'm a student pursuing a <a href="https://online.stanford.edu/programs/human-computer-interaction-graduate-certificate" target="_blank">Human-Computer Interaction Graduate Certificate</a>, compulsive side projecter, multitasking blogger, avid reader, and dedicated guitarist. I also volunteer with <a href="https://www.cscareerhackers.org/" target="_blank">CS Career Hackers</a>, <a href="https://www.humanityroad.org/" target="_blank">Humanity Road</a>, and <a href="https://dialogtolearn.org/" target="_blank">Dialog To Learn</a>.
    </p>
    <h2>What I've Done</h2>
    <p>
      I graduated from UC Berkeley with a Cognitive Science degree in May 2019, but I've done a whole lot of other things too. Check out my <a href="https://linkedin.com/in/brendacs" target="_blank">LinkedIn</a>, <a href="https://github.com/brendacs" target="_blank">GitHub</a>, <router-link to="/projects">projects</router-link>, <router-link to="/posts">posts</router-link>, or <router-link to="/monk-mode">Monk Mode reflections</router-link> to see what else I've done (or in some cases, am currently doing).
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      isExpanded: false
    }
  }
}
</script>

<style lang="scss" scoped>
  span.block {
    display: block;
    margin-top: 20px;
  }

  span.bold {
    font-weight: bold;
  }
</style>