<template>
  <div class="login-form">
    <form>
      <h1 class="text-center">Register</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="name"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" />
      </div>
      <button type="button" class="btn btn-primary" @click="register">Sign up</button>
      <button type="button" class="btn btn-primary" @click="reset">Reset</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import host from "../../../config/host";
export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    register() {
      axios
        .post(`${host}/api/register`, {
          name: this.name,
          password: this.password
        })
        .then(res => {
          alert(res.data.message);
          this.$router.push("/");
        })
        .catch(err => {
          console.log(err);
        });
    },
    reset() {
      this.name = "";
      this.password = "";
    }
  }
};
</script>

<style>
.login-form {
  width: 300px;
  height: 300px;
  margin: 100px auto;
}
</style>