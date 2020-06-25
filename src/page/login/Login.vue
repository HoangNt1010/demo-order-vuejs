<template>
  <div class="login-form">
    <form>
      <h1 class="text-center">Login</h1>
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
      <button type="button" class="btn btn-primary" @click="login">Sign in</button>
      <button type="button" class="btn btn-primary" @click="register">Register</button>
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
    login() {
      if (this.name === "" && this.password === "") {
        alert("Insert information");
      } else {
        axios
          .post(`${host}/api/login`, {
            name: this.name,
            password: this.password
          })
          .then(res => {
              console.log(res.data.message);
              this.$cookies.set('token', res.data.token)
              localStorage.setItem('name',res.data.name)
              this.$store.dispatch('checkLogin')
              this.$router.push('/home')
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    register() {
      this.$router.push("/register");
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