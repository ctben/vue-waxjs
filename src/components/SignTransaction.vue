<template>
  <div>
    <h3>Sign Transaction</h3>
    <p>Click once you're logged in.</p>
    <button id="sign" @click="sign('eosio', 'delegatebw')">
      Sign Transaction
    </button>
    <h3>Sign Transaction - Transfer</h3>
    <p>Transfer token to <input type="text" v-model="transferTo" /></p>
    <p>Transfer amount <input type="text" v-model="amount" /></p>
    <button id="sign" @click="transfer(transferTo, amount)">Transfer</button>
    <hr />
    <pre><code id="response" class="hljs ">Transaction Response
    </code></pre>
  </div>
</template>

<script>
export default {
  name: "SignTransaction",
  data() {
    return {
      transferTo: "oqsca.wam",
      amount: "10.0000000",
    };
  },
};
</script>

<style scoped lang="scss"></style>
