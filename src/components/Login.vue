<template>
  <div>
    <h2>{{ title }}</h2>
    <h3>Auto-login Feature</h3>
    <p>
      If your blockchain information displays below, you're automatically logged
      in to WaxJS, and you don't need to click WAX Login. This eliminates the
      need for multiple clicks and popups!
    </p>
    <p class="res-text" id="autologin"></p>

    <h3>Login</h3>
    <p>
      Use this if you're not automatically logged in. Note that if you are
      auto-logged in, clicking this does not open a popup and the userAccount is
      still returned.
    </p>
    <button id="login" @click="login()">WAX Login</button>
    <p class="res-text" id="loginresponse"></p>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    title: String,
  },
};
</script>

<style scoped lang="scss"></style>
