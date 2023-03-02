<template>
  <div class="row mb-3">
    <label for="inputPasswordConfirm" class="col-sm-2 col-form-label"
      >Password Confirm</label
    >
    <div class="col-sm-10">
      <input
        type="password"
        class="form-control"
        id="inputPasswordConfirm"
        required
        v-model="passwordConfirm"
        placeholder="Confirm your password"
        @change="$emit('getPasswordConfirm', passwordConfirm)"
      />
    </div>
    <span class="invalidWarning" v-if="msg.passwordConfirm">{{
      msg.passwordConfirm
    }}</span>
  </div>
</template>

<script>
export default {
  name: "passwordConfirm",
  data() {
    return {
      passwordConfirm: "",
    };
  },
  props: {
    msg: Array,
    password: String,
  },
  watch: {
    passwordConfirm(value) {
      this.passwordConfirm = value;
      this.validatePasswordConfirm(value);
    },
  },
  methods: {
    validatePasswordConfirm(value) {
      if (!value) this.msg["passwordConfirm"] = "Please enter your password";
      else if (value !== this.password)
        this.msg["passwordConfirm"] = "Please check your password";
      else this.msg["passwordConfirm"] = "";
    },
  },
};
</script>

<style>
.invalidWarning {
  color: rgb(223, 87, 87);
}
</style>
