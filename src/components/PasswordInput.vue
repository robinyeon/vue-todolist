<template>
  <div class="row mb-3">
    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="inputPassword"
        placeholder="Enter your password"
        required
        @change="$emit('getPassword', password)"
      />
      <span class="invalidWarning" v-if="msg.password">{{ msg.password }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "passwordInput",
  data() {
    return {
      password: "",
    };
  },
  watch: {
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
  },
  methods: {
    validatePassword(value) {
      let lengthDifference = 8 - value.length;
      if (value.length < 8)
        this.msg[
          "password"
        ] = `Must be more than 8 characters! ${lengthDifference} characters left.`;
      else this.msg["password"] = "";
    },
  },
  props: {
    msg: Array,
  },
};
</script>

<style>
.invalidWarning {
  color: rgb(223, 87, 87);
}
</style>
