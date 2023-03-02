<template>
  <div class="row mb-3">
    <label for="inputUsername" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="inputUsername"
        required
        v-model="username"
        placeholder="Enter your username"
        @change="$emit('getUsername', username)"
      />
    </div>
    <span class="invalidWarning" v-if="msg.username">{{ msg.username }}</span>
  </div>
</template>

<script>
export default {
  name: "usernameInput",
  data() {
    return {
      username: "",
    };
  },
  props: {
    msg: Array,
  },
  watch: {
    username(value) {
      this.username = value;
      this.validateUsername(value);
    },
  },
  methods: {
    validateUsername(value) {
      if (!value) this.msg["username"] = "Please enter username";
      else this.msg["username"] = "";
    },
  },
};
</script>

<style>
.invalidWarning {
  color: rgb(223, 87, 87);
}
</style>
