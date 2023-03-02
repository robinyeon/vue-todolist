<template>
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
        @change="$emit('getEmail', email)"
      />
    </div>
    <span class="invalidWarning" v-if="msg.email">{{ msg.email }}</span>
  </div>
</template>

<script>
export default {
  name: "emailInput",
  data() {
    return {
      email: "",
    };
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
  },
  methods: {
    validateEmail(value) {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
        this.msg["email"] = "";
      else this.msg["email"] = "Invalid Email Address";
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
