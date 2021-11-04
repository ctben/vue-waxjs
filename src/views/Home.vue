<template>
  <div class="home">
    <img
      alt="Wax logo"
      src="https://developer.wax.io/svg/wax-black-icon.svg"
      class="logo"
    />
    <h1>WaxJS Demo</h1>
    <p>
      Below is a basic example of WaxJS functionality. To use this demo, click
      WAX Login (if you're not automatically logged in), then click Sign
      Transaction.
    </p>

    <Login title="WAX Login" />
    <SignTransaction />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import SignTransaction from "@/components/SignTransaction.vue";

export default {
  name: "Home",
  components: {
    Login,
    SignTransaction,
  },
  mounted() {
    this.autoLogin();
  },
};
</script>
