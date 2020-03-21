<template>
	<div class="contact">
		<h2 class="title">Contact</h2>
		<p>
			If you like what I write in words or in code, subscribe to my monthly newsletter! Unsubscribe with a click from your inbox anytime.
		</p>
		<SubscribeForm />
		<h2>Virtual Presence</h2>
		<p>
			Other than through my blog and reflections, there are a few other ways to stay up to speed with what I'm working on or chat with me.
		</p>
		<p>
			<input @click="copy" class="email-address" type="text" value="hello@brendacs.dev"/>. Send me an email any time, about anything.
			<span class="email-address-copy-text">Click to copy.</span>
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
import SubscribeForm from '../components/SubscribeForm.vue'

export default {
	name: 'Contact',
	components: SubscribeForm,
	data() {
		return {
			copy: () => {
				var copyText = document.querySelector(".email-address");
				copyText.select();
				document.execCommand("copy");
				document.querySelector('.email-address-copy-text').innerHTML = 'Copied to clipboard!'
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.email-address {
	border: none;
	width: 150px;
	cursor: pointer;
	color: transparent;
  text-shadow: 0 0 0 rgb(0, 211, 134);
	text-decoration: underline;

	&::selection {
		background: none;
	}

	&:focus {
    outline: none;
  }

	&-copy-text {
		display: block;
		font-size: 12px;
	}
}
</style>