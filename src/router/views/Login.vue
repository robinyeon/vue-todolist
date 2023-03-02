<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="inputEmail" class="form-label">Email</label>
        <input type="email" id="inputEmail" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">Password</label>
        <input type="password" class="form-control" id="inputPassword" />
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
};
</script>

<style></style>
