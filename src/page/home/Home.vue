<template>
  <form class="container">
    <h1 class="text-center">Đặt bàn</h1>
    <div class="row">
      <div class="col-6">
        <div class="form-group">
          <label for="exampleFormControlInput1">Số Người: *</label>
          <input
          type="number"
            v-model="form.amount"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Đặt trên 10 người sẽ đc giảm giá 30%"
          />
        </div>
        <div>
          <label for="exampleFormControlInput1">
            Buổi: *
            <small class="form-text text-muted">Đặt buổi sáng hoặc buổi trưa được giảm 10%.</small>
          </label>
          <br />
          <input
            v-model="form.time"
            class="form-check-input mx-3"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="sáng"
            checked
          />
          <label class="form-check-label m-3" for="morning">Sáng</label>
          <input
            v-model="form.time"
            class="form-check-input mx-3"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="trưa"
          />
          <label class="form-check-label m-3" for="afternoon">Trưa</label>
          <input
            v-model="form.time"
            class="form-check-input mx-3"
            type="radio"
            name="exampleRadios"
            id="exampleRadios3"
            value="tối"
          />
          <label class="form-check-label m-3" for="evening">Tối</label>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect1">Nơi tổ chức: *</label>
          <select class="form-control" id="exampleFormControlSelect1" v-model="form.place">
            <option v-for="(pl,index) in place" :key="index" :value="pl.value">{{pl.text}}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleFormControlInput2">Tên khách hàng: *</label>
          <input
            class="form-control"
            id="exampleFormControlInput2"
            placeholder="Nguyễn Văn A"
            v-model="form.name"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect2">Giới tính: *</label>
          <select class="form-control" id="exampleFormControlSelect2" v-model="form.gender">
            <option v-for="(sex,index) in gender" :key="index" :value="sex.value">{{sex.text}}</option>
          </select>
        </div>
      </div>
      <div class="col-6">
        <div class="form-group">
          <label for="exampleFormControlInput3">Địa điểm tổ chức: *</label>
          <input
            class="form-control"
            id="exampleFormControlInput3"
            placeholder="Bạn muốn tổ chức tại đâu?"
            v-model="form.address"
          />
        </div>
        <div class="form-group">
          <label for="example-date-input">Date: *</label>
          <input
            class="form-control"
            type="date"
            value="2011-08-19"
            id="example-date-input"
            v-model="form.date"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Yêu cầu của khách hàng: *</label>
          <textarea
            placeholder="Bạn có yêu cầu gì không?"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="form.description"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="exampleFormControlSelect3">Bạn biết chúng tôi qua:</label>
          <select
            class="form-control"
            id="exampleFormControlSelect3"
            v-model="form.ads"
            value="Facebook"
          >
            <option v-for="(item,index) in ads" :key="index" :value="item.value">{{item.text}}</option>
          </select>
        </div>
        <div class="form-group">
          <input type="text" list="food" v-model="form.food" />
          <datalist id="food">
            <option v-for="(item,index) in listFood" :key="index">{{item}}</option>
          </datalist>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="order">Đặt bàn</button>
    <button type="reset" class="btn btn-danger">Xóa</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: 0,
        amount: "",
        time: "",
        place: "Trong nhà",
        name: "",
        gender: "Nam",
        address: "",
        date: "",
        description: "",
        ads: "Facebook",
        totalPrice: 0,
        food: ""
      },
      place: [
        { text: "Trong nhà", value: "Trong nhà" },
        { text: "Ngoài trời", value: "Ngoài trời" }
      ],
      gender: [
        { text: "Nam", value: "Nam" },
        { text: "Nữ", value: "Nữ" }
      ],
      ads: [
        { text: "Facebook", value: "Facebook" },
        { text: "Quảng cáo", value: "Quảng cáo" },
        { text: "Bạn bè", value: "Bạn bè" }
      ],
      listFood: ["tôm", "cua", "cá"]
    };
  },
  methods: {
    order() {
      if(this.form.amount === '' || this.form.time === '' || this.form.place === '' || this.form.name === '' || this.form.gender === '' || this.form.address === '' || this.form.date === '' || this.form.description === '') {
        alert('Bạn hãy nhập đủ thông tin')
      } else {
      this.form.id =   this.$store.state.data.length + 1
      this.$store.dispatch("totalPrice", this.form);
      this.$router.push("/order");
      }
    }
  }
};
</script>

<style>