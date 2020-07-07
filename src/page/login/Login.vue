<template>
  <div class="login-form">
    <form>
      <h1 class="text-center">Đăng nhập</h1>
      <div class="form-group">
        <label for="exampleInputEmail1">Email:</label>
        <input
          v-model="name"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Mật khẩu:</label>
        <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" />
      </div>
      <button type="button" class="btn btn-primary" @click="login">Đăng nhập</button>
      <button type="button" class="btn btn-primary" @click="register">Đăng ký</button>
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
      if (this.name === "" || this.password === "") {
        alert("Nhập đẩy đủ thông tin");
      } else {
        axios
          .post(`${host}/api/login`, {
            name: this.name,
            password: this.password
          })
          .then(res => {
            if (res.data.message === "success") {
              console.log(res.data);
              this.$cookies.set("token", res.data.token)
              this.$cookies.set('name', res.data.name)
              this.$store.dispatch("checkLogin");
              this.$router.push("/home");
            } else {
              alert('Email hoặc mật khẩu không đúng. Vui lòng thử lại!')
            }
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