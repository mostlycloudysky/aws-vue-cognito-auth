<template>
  <div id="app">
    <amplify-authenticator>
      <div class="center">
        <h1>Hey, {{ user.username }}!</h1>
        <amplify-sign-out></amplify-sign-out>
      </div>
    </amplify-authenticator>
  </div>
</template>
<script>
import { AuthState, onAuthUIStateChange } from "@aws-amplify/ui-components";
export default {
  name: "home",
  data() {
    return {
      user: {}
    };
  },
  created() {
    onAuthUIStateChange((state, user) => {
      if (state == AuthState.SignedIn) {
        this.user = user;
      }
    });
  }
};
</script>

<style>
.center {
  justify-content: center;
  margin-left: 300px;
  margin-right: 300px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
