<template>
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
</template>

<script>
export default {
  name: 'SubscribeForm'
}
</script>

<style lang="scss" scoped>
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