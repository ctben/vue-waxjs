import Vue from "vue";
import * as waxjs from "@waxio/waxjs/dist";

const wax = new waxjs.WaxJS({
  rpcEndpoint: 'https://wax.greymass.com',
  tryAutoLogin: true
});

Vue.mixin({
  methods: {
    async autoLogin() {
        let isAutoLoginAvailable = await wax.isAutoLoginAvailable();
        if (isAutoLoginAvailable) {
            let userAccount = wax.userAccount;
            let pubKeys = wax.pubKeys;
            let str = 'AutoLogin enabled for account: ' + userAccount + '<br/>Active: ' + pubKeys[0] + '<br/>Owner: ' + pubKeys[1]
            document.getElementById('autologin').insertAdjacentHTML('beforeend', str);
        }
        else {
            document.getElementById('autologin').insertAdjacentHTML('beforeend', 'Not auto-logged in');
        }
    },
    async login() {
        try {
            //if autologged in, this simply returns the userAccount w/no popup
            let userAccount = await wax.login();
            let pubKeys = wax.pubKeys;
            let str = 'Account: ' + userAccount + '<br/>Active: ' + pubKeys[0] + '<br/>Owner: ' + pubKeys[1]
            document.getElementById('loginresponse').insertAdjacentHTML('beforeend', str);
        } catch (e) {
            document.getElementById('loginresponse').append(e.message);
        }
    },
    async sign(account,contractFunction) {
    if(!wax.api) {
        return document.getElementById('response').append('* Login first *');
    }

    try {
        const result = await wax.api.transact({
        actions: [{
            account: account, //'eosio'
            name: contractFunction, //'delegatebw'
            authorization: [{
            actor: wax.userAccount,
            permission: 'active',
            }],
            data: {
            from: wax.userAccount,
            receiver: wax.userAccount,
            stake_net_quantity: '0.00000001 WAX',
            stake_cpu_quantity: '0.00000000 WAX',
            transfer: false,
            memo: 'This is a WaxJS/Cloud Wallet Demo.'
            },
        }]
        }, {
        blocksBehind: 3,
        expireSeconds: 30
        });
        document.getElementById('response').append(JSON.stringify(result, null, 2))
    } catch(e) {
        document.getElementById('response').append(e.message);
    }
  },
  async transfer(to,amount) {
    if(!wax.api) {
        return document.getElementById('response').append('* Login first *');
    }

    try {
        const result = await wax.api.transact({
        actions: [{
            account: 'eosio.token',
            name: 'transfer',
            authorization: [{
            actor: wax.userAccount,
            permission: 'active',
            }],
            data: {
            from: wax.userAccount,
            to: to,
            quantity: amount + ' WAX',
            memo: '',
            },
        }]
        }, {
        blocksBehind: 3,
        expireSeconds: 1200
        });
        document.getElementById('response').append(JSON.stringify(result, null, 2))
    } catch(e) {
        document.getElementById('response').append(e.message);
    }
  }
  },
});
