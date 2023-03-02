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
    };
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
