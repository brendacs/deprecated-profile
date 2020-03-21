<template>
	<div class="contact">
		<h2 class="title">Contact</h2>
		<p>
			If you like what I write in words or in code, subscribe to my monthly newsletter! Unsubscribe with a click from your inbox anytime.
		</p>
		<div id="mc_embed_signup">
			<form action="https://dev.us19.list-manage.com/subscribe/post?u=245ff7f1674733c41a66fc34a&amp;id=a071fd49f6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
				<div id="mc_embed_signup_scroll">
					<div class="mc-field-group">
						<div>
							<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" placeholder="name@email.com"/>
							<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="primary-btn">
						</div>
					</div>
					<div id="mce-responses">
						<!-- <p class="response" id="mce-error-response" style="display:none"></p> -->
						<p class="response" id="mce-success-response" style="display:none"></p>
					</div>
					<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
					<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_245ff7f1674733c41a66fc34a_a071fd49f6" tabindex="-1" value=""></div>
				</div>
			</form>
		</div>
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
export default {
	name: 'Contact',
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

form {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px 0;
}

#mc_embed_signup_scroll {
	display: flex;
	/* places error message under inputs */
	flex-direction: column;
}

.mc-field-group div {
	display: flex;
	margin-bottom: 10px;
}

input[type=email] {
	width: 25vw;
	height: 50px;
	padding: 0 20px;
	color: rgb(0, 211, 134);
	border: 1px solid #d7d7d7;

	@media screen and (max-width: 768px) {
		width: 50vw;
	}
}

label {
	text-align: left;
}

#mc_embed_signup input.mce_inline_error {
		border-color: #cd0000;
}
</style>