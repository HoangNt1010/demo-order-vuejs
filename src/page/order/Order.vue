<template>
  <div>
    <h1 class="text-center">Bảng số liệu</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Số người</th>
          <th scope="col">Buổi</th>
          <th scope="col">Nơi tổ chức</th>
          <th scope="col">Tên khách</th>
          <th scope="col">Giới tính</th>
          <th scope="col">Địa điểm</th>
          <th scope="col">Ngày</th>
          <th scope="col">Yêu cầu</th>
          <th scope="col">Qua</th>
          <th scope="col">Món</th>
          <th scope="col">Tổng tiền</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td scope="row">{{ item.id }}</td>
          <td scope="row">{{ item.amount }}</td>
          <td scope="row">{{ item.time }}</td>
          <td scope="row">{{ item.place }}</td>
          <td scope="row">{{ item.name }}</td>
          <td scope="row">{{ item.gender }}</td>
          <td scope="row">{{ item.address }}</td>
          <td scope="row">{{ item.date }}</td>
          <td scope="row">{{ item.description }}</td>
          <td scope="row">{{ item.ads }}</td>
          <td scope="row">{{ item.food }}</td>
          <td scope="row">{{ item.totalPrice }}</td>
          <td scope="row">
            <button type="button" class="btn btn-primary" @click="editItem(item.id)">
              Sửa
            </button>
            <button
              type="button"
              class="btn btn-danger"
              @click="deleteItem(item)"
            >
              Xóa
            </button>
          </td>
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
    };
  },
  methods: {
    deleteItem(item) {
      this.$store.dispatch("deleteItem", item);
    },
    editItem(id) {
      this.$router.push(`/edit/${id}`)
    }
  }
};
</script>

<style></style>
