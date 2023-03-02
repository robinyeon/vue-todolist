<template>
  <div>
    <form @submit="submitLoginForm">
      <div class="row mb-3">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="Enter your email"
            required
          />
        </div>
        <span class="invalidWarning" v-if="msg.email">{{ msg.email }}</span>
      </div>

      <div class="row mb-3">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input
            v-model="password"
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Enter your password"
            required
          />
          <span class="invalidWarning" v-if="msg.password">{{
            msg.password
          }}</span>
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
      <p>
        Don't have an account? 👉
        <router-link to="/register">Register</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      msg: [],
    };
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
  },
  methods: {
    submitLoginForm(event) {
      event.preventDefault();
      console.log(this.email, this.password);
    },
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        this.msg["email"] = "";
      else this.msg["email"] = "Invalid Email Address";
    },
    validatePassword(value) {
      let lengthDifference = 8 - value.length;
      if (value.length < 8)
        this.msg[
          "password"
        ] = `Must be more than 8 characters! ${lengthDifference} characters left.`;
      else this.msg["password"] = "";
    },
  },
};
</script>

<style>
.invalidWarning {
  color: rgb(223, 87, 87);
}
</style>
