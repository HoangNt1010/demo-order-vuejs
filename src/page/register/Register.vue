<template>
  <div class="login-form">
    <form>
      <h1 class="text-center">Đăng ký</h1>
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
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="password"
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Nhập lại mật khẩu:</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          v-model="rePassword"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="register">
        Đăng ký
      </button>
      <button type="button" class="btn btn-primary" @click="reset">Xóa</button>
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
      password: "",
      rePassword: ""
    };
  },
  methods: {
    register() {
      if (this.name === "" || this.password === "" || this.rePassword === "") {
        alert("Hãy nhập đầy đủ thông tin");
      } else if (this.password !== this.rePassword) {
        alert("Mật khẩu không giống nhau");
      } else {
        axios
          .post(`${host}/api/register`, {
            name: this.name,
            password: this.password
          })
          .then(res => {
            alert('Đăng ký thành công');
            this.$router.push("/");
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    reset() {
      this.name = "";
      this.password = "";
      this.rePassword = "";
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
