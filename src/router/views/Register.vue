<template>
  <div>
    <form @submit="submitRegisterForm">
      <EmailInput :msg="msg" @getEmail="email = $event" />
      <PasswordInput :msg="msg" @getPassword="password = $event" />
      <PasswordConfirm
        :msg="msg"
        @getPasswordConfirm="passwordConfirm = $event"
        :password="password"
      />
      <UsernameInput :msg="msg" @getUsername="username = $event" />

      <button type="submit" class="btn btn-primary">Register</button>
      <p>
        Already have an account? 👉
        <router-link to="/">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
import EmailInput from "../../components/EmailInput.vue";
import PasswordInput from "../../components/PasswordInput.vue";
import PasswordConfirm from "../../components/PasswordConfirm.vue";
import UsernameInput from "../../components/UsernameInput.vue";

export default {
  name: "register",
  data() {
    return {
      msg: [],
      email: "",
      password: "",
      passwordConfirm: "",
      username: "",
    };
  },
  components: {
    EmailInput,
    PasswordInput,
    PasswordConfirm,
    UsernameInput,
  },
  methods: {
    submitRegisterForm(event) {
      event.preventDefault();
      console.log(
        this.email,
        this.password,
        this.passwordConfirm,
        this.username
      );
    },
  },
};
</script>

<style></style>
