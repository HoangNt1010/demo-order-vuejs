<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <!-- <router-link to="/order" class="navbar-brand text-light">Trang chủ</router-link> -->
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/order" class="navbar-brand text-light">Thông tin</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/home" class="navbar-brand text-light">Đặt bàn</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/" class="navbar-brand text-light">Đăng nhập</router-link>
          </li>
          <li class="nav-item active">
            <router-link to="/register" class="navbar-brand text-light">Đăng ký</router-link>
          </li>
        </ul>
        <p class="navbar-nav active text-light">{{name}}</p>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return{
      name: localStorage.getItem('name')
    }
  },
  methods: {
    login() {
      if(Boolean(this.$cookies.get('token'))) {
        return true
      } else {
        return false
      }
    },
    noLogin() {
      if(this.$cookies.get('token')) {
        return false
      } else {
        return true
      }
    }
  }
};
</script>

<style>
</style>
