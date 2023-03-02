<template>
  <div>
    <form @submit="submitLoginForm">
      <EmailInput :msg="msg" @getEmail="email = $event" />
      <PasswordInput :msg="msg" @getPassword="password = $event" />
      <button type="submit" class="btn btn-primary">Login</button>
      <p>
        Don't have an account? 👉
        <router-link to="/register">Register</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import EmailInput from "../../components/EmailInput.vue";
import PasswordInput from "../../components/PasswordInput.vue";

export default {
  name: "login",
  data() {
    return {
      msg: [],
    };
  },
  components: {
    EmailInput,
    PasswordInput,
  },
  methods: {
    submitLoginForm(event) {
      event.preventDefault();
      console.log(this.email, this.password);
    },
  },
};
</script>

<style></style>
