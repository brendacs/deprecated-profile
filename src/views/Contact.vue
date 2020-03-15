<template>
  <div class="contact">
    <p class="title">Contact</p>
    <p>
        If you like what I write in words or in code, subscribe to my monthly newsletter! Unsubscribe with a click from your inbox anytime.
    </p>
    <form>
        <input type="email" placeholder="name@email.com" />
        <button class="primary-btn" type="submit">Submit</button>
    </form>
    <h2>Virtual Presence</h2>
    <p>
        Other than through my blog and reflections, there are a few other ways to stay up to speed with what I'm working on or chat with me.
    </p>
    <p>
        <a href="mailto:hello@brendacs.dev" target="_blank">hello@brendacs.dev</a>. Send me an email any time, about anything.
    </p>
    <p>
        <a href="https://www.linkedin.com/in/brendacs" target="_blank">LinkedIn</a>. I'm not always on, but I answer messages when I can.
    </p>
    <p>
        <a href="https://github.com/brendacs" target="_blank">GitHub</a>. If it's not a secret, there'll likely be a repository for anything I'm working on.
    </p>
    <p>
        <a href="https://notion.so/brendacs" target="_blank">Notion</a>. I'm a power user of the Notion app. I use it for anything and everything &mdash; from blogging to journaling to organizing my many lists and calendars.
    </p>
    <p>
        <a href="https://discord.com" target="_blank">@brenda#3261</a>. Want to have a quick chat? Discord is the way to go.
    </p>
    <p>
        <a href="https://brendacs.github.io/desktop/" target="_blank">Desktop</a>. The desktop is the window to a developer's soul. For more information and files such as my resume, feel free to sift through this desktop I modeled after my own.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss" scoped>
input[type=email] {
  width: 50%;
  height: 50px;
  padding: 0 20px;
  color: rgb(0, 211, 134);
}

form {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
}
</style>