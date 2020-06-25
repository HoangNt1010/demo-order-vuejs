<template>
  <div>
      <h1 class="text-center">Bảng số liệu</h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">Số người</th>
      <th scope="col">Buổi</th>
      <th scope="col">Nơi tổ chức</th>
      <th scope="col">Tên khách</th>
      <th scope="col">Giới tính</th>
      <th scope="col">Địa điểm</th>
      <th scope="col">Ngày</th>
      <th scope="col">Yêu cầu</th>
      <th scope="col">Qua</th>
      <th scope="col">Tổng tiền</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in data" :key="index">
      <td scope="row">{{item.amount}}</td>
      <td scope="row">{{item.time}}</td>
      <td scope="row">{{item.place}}</td>
      <td scope="row">{{item.name}}</td>
      <td scope="row">{{item.gender}}</td>
      <td scope="row">{{item.address}}</td>
      <td scope="row">{{item.date}}</td>
      <td scope="row">{{item.description}}</td>
      <td scope="row">{{item.ads}}</td>
      <td scope="row">{{item.totalPrice}}</td>
    </tr>
    
  </tbody>
</table>
  </div>
</template>

<script>
export default {
    data() {
        return {
            data: this.$store.state.data
        }
    }
};
</script>

<style>
</style>