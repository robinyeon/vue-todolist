<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Email</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      </div>

      <button type="submit" class="btn btn-primary">Login</button>
      <p>
        Don't have account? 👉
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
