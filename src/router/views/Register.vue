<template>
  <div>
    <form>
      <div class="row mb-4">
        <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="inputEmail" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="inputPassword" class="col-sm-2 col-form-label"
          >Password</label
        >
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" />
        </div>
      </div>

      <div class="row mb-3">
        <label for="inputPasswordConfirm" class="col-sm-2 col-form-label"
          >Password Confirm</label
        >
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            id="inputPasswordConfirm"
          />
        </div>
      </div>

      <div class="row mb-3">
        <label for="inputUsername" class="col-sm-2 col-form-label"
          >Username</label
        >
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputUsername" />
        </div>
      </div>

      <button type="submit" class="btn btn-primary">Register</button>
      <p>
        Already have an account? 👉
        <router-link to="/">Login</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  name: "register",
};
</script>

<style></style>
