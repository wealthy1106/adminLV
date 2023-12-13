
<template>
      <div class="container-scroller ">
            <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                  <div class="navbar-brand-wrapper d-flex justify-content-center">
                        <div class="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                              <a class="navbar-brand brand-logo" href="index.html"><img src="./../assets/logo.png"
                                          style="width: 100%;" alt="logo" /></a>TPG Tourism
                              <a class="navbar-brand brand-logo-mini" href="index.html"><img src="./../assets/logo.png"
                                          alt="logo" /></a>
                              <button class="navbar-toggler navbar-toggler align-self-center" type="button"
                                    data-toggle="minimize">
                                    <span class="typcn typcn-th-menu"></span>
                              </button>
                        </div>
                  </div>
                  <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                        <ul class="navbar-nav mr-lg-2">
                              <li class="nav-item nav-profile dropdown">
                                    <h5>Admin</h5>
                              </li>

                        </ul>
                        <div class="input-group" style="width: 300px;">
                              <input type="text" class="form-control" placeholder="Search..." aria-label="search"
                                    aria-describedby="search">
                              <div class="input-group-prepend" style="height: 40px;">
                                    <span class=" input-group-text" id="search">
                                          <i class="typcn typcn-zoom"></i>
                                    </span>
                              </div>
                        </div>
                        <ul class="navbar-nav navbar-nav-right">
                              <li class="nav-item nav-date dropdown">
                                    <a class="nav-link d-flex justify-content-center align-items-center" href="javascript:;">
                                          <h6 class="date mb-0">Today : {{ formattedDate }}</h6>
                                          <i class="typcn typcn-calendar"></i>
                                    </a>
                              </li>
                              <li class="nav-item">
                                    <a @click="dangxuat" v-if="hienlen"
                                          class="nav-link count-indicator d-flex justify-content-center align-items-center"
                                          id="messageDropdown" href="#">
                                          Đăng xuất
                                          <span class="count"></span>
                                    </a>

                                    <a v-if="hienlai"
                                          class="nav-link count-indicator d-flex justify-content-center align-items-center"
                                          id="messageDropdown" href="#">
                                          Đăng nhập
                                          <span class="count"></span>
                                    </a>

                              </li>

                        </ul>
                        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                              data-toggle="offcanvas">
                              <span class="typcn typcn-th-menu"></span>
                        </button>
                  </div>
            </nav>
            <!-- partial -->

      </div>
</template>
<script>
import axios from 'axios';
export default {
      data() {
            const currentDate = new Date();
            return {
                  formattedDate: this.formatDate(currentDate),
                  hienlen: false,
                  hienlai: false,
            };
      },
      mounted() {
            console.log('user', localStorage.getItem('user'))
            this.iduser = localStorage.getItem('user')
            this.token = localStorage.getItem('token')
            if (this.token != null) {
                  this.hienlen = true
                  this.hienlai = false
                  // this.hienlen = false
                  // this.hienlai = true
            } else {
                  this.hienlen = false
                  this.hienlai = true

            }
      },
      methods: {
            dangxuat() {
                  localStorage.removeItem('token');
                  localStorage.removeItem('user')
                  this.hienlen = true
                  // this.hienlai = true
                  this.$router.push({ name: 'login' });
            },
            formatDate(date) {
                  const day = date.getDate();
                  const month = date.getMonth() + 1; // Lưu ý: getMonth() trả về từ 0 - 11
                  const year = date.getFullYear().toString().slice(-2); // Lấy 2 chữ số cuối cùng của năm

                  // Định dạng chuỗi "dd/mm/yy"
                  const formattedDay = day < 10 ? `0${day}` : day;
                  const formattedMonth = month < 10 ? `0${month}` : month;

                  return `${formattedDay}/${formattedMonth}/${year}`;
            },
      },
}

</script>