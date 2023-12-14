
<template>
      <div class="container-fluid page-body-wrapper" style="background-color: azure;">
            <nav class="sidebar sidebar-offcanvas" id="sidebar" style="margin-top: 100px;">
                  <ul class="nav">
                        <li class="nav-item native">
                              <router-link class="nav-link" :to="{ name: 'taikhoan' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Tài khoản</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'diadanh' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Địa danh</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'lichtrinh' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Lịch trình</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'dattour' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Đặt tour</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'khuyenmai' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Khuyến mãi</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'lehoi' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Lễ hội</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'lienhe' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Liên hệ</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'tinhthanh' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Tỉnh thành</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'tour' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Tour</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'tournb' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Tour nổi bật</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'thongtinhanhkhach' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Thông tin hành khách</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'vetour' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Vé tour</span>
                              </router-link>
                        </li>
                        <li class="nav-item">
                              <router-link class="nav-link" :to="{ name: 'TDD' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Tour_DD</span>
                              </router-link>
                        </li>
                  </ul>
            </nav>
            <div class="main-panel">
                  <div class="content-wrapper">
                        <div class="row r1">
                              <div class="col-md-4 grid-margin stretch-card">
                                    <div class="card">
                                          <div class="card-body">
                                                <div
                                                      class="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                                                      <div>
                                                            <p class="mb-2 text-md-center text-lg-left">Lượt đặt tour</p>
                                                            <h1 :key="index" v-for="(tt, index) in tongluot " class="mb-0">{{
                                                                  tt.tong }}</h1>
                                                      </div>
                                                      <i class="typcn typcn-briefcase icon-xl text-secondary"></i>
                                                </div>
                                                <canvas id="expense-chart" height="40"></canvas>
                                          </div>
                                    </div>
                              </div>
                              <div class="col-md-4 grid-margin stretch-card">
                                    <div class="card">
                                          <div class="card-body">
                                                <div
                                                      class="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                                                      <div>
                                                            <p class="mb-2 text-md-center text-lg-left">Tổng số tour</p>
                                                            <h1 :key="index" v-for="(tt, index) in tongtour " class="mb-0">{{
                                                                  tt.tong }}</h1>
                                                      </div>
                                                      <i class="typcn typcn-chart-pie icon-xl text-secondary"></i>
                                                </div>
                                                <canvas id="budget-chart" height="30"></canvas>
                                          </div>
                                    </div>
                              </div>
                              <div class="col-md-4 grid-margin stretch-card">
                                    <div class="card">
                                          <div class="card-body">
                                                <div
                                                      class="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                                                      <div>
                                                            <p class="mb-2 text-md-center text-lg-left">Tổng doanh thu</p>
                                                            <h1 :key="index" v-for="(tt, index) in tongtien " class="mb-0">{{
                                                                  tt.tong }}</h1>
                                                      </div>
                                                      <img style="width: 20%;"
                                                            src="https://cdn-icons-png.flaticon.com/512/38/38251.png" alt="">
                                                </div>
                                                <canvas id="balance-chart" height="30"></canvas>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div class="row r1">
                              <div class="col-md-4 grid-margin stretch-card">
                                    <div class="card">
                                          <div class="card-body">
                                                <div
                                                      class="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                                                      <div>
                                                            <p class="mb-2 text-md-center text-lg-left">Lượt truy cập</p>
                                                            <h1 class="mb-0">{{ pageViews }}</h1>
                                                      </div>
                                                      <!-- <i class="typcn typcn-briefcase icon-xl text-secondary"></i> -->
                                                </div>
                                                <canvas id="expense-chart" height="30"></canvas>
                                          </div>
                                    </div>
                              </div>
                              <div class="col-md-4 grid-margin stretch-card">
                                    <div class="card">
                                          <div class="card-body">
                                                <div
                                                      class="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                                                      <div>
                                                            <p class="mb-2 text-md-center text-lg-left">Tổng địa danh</p>
                                                            <h1 :key="index" v-for="(tt, index) in tongluot " class="mb-0">{{
                                                                  tt.tong }}</h1>
                                                      </div>
                                                      <!-- <i class="typcn typcn-chart-pie icon-xl text-secondary"></i> -->
                                                </div>
                                                <canvas id="budget-chart" height="30"></canvas>
                                          </div>
                                    </div>
                              </div>
                              <!-- <div class="col-md-4 grid-margin stretch-card">
                                    <div class="card">
                                          <div class="card-body">
                                                <div
                                                      class="d-flex align-items-center justify-content-between justify-content-md-center justify-content-xl-between flex-wrap mb-4">
                                                      <div>
                                                            <p class="mb-2 text-md-center text-lg-left">Tổng khách hàng</p>
                                                            <h1 class="mb-0">7,243 </h1>
                                                      </div>

                                                </div>
                                                <canvas id="balance-chart" height="30"></canvas>
                                          </div>
                                    </div>
                              </div> -->
                        </div>
                  </div>

            </div>
      </div>

      <!-- <p>Page Views: {{ pageViews }}</p> -->
</template>
<style>
.r1 {
      padding: 60px 10px 10px;
}
</style>
<script>
import axios from 'axios';


export default {

      data() {
            return {
                  pageViews: 0,
                  tongtour: [],
                  tongtien: [],
                  tongluot: [],
                  tongDD: [],

            };
      },

      mounted() {
            console.log('user', localStorage.getItem('user'))
            this.iduser = localStorage.getItem('user')
            this.token = localStorage.getItem('token')
            // Gửi yêu cầu đến API để lấy số lượng lượt truy cập
            this.fetchPageViews();

            // Tăng số lượng lượt truy cập khi trang được tải
            this.incrementPageViews();
            if (localStorage.getItem('reloaded')) {
                  //       // The page was just reloaded. Clear the value from local storage
                  //       // so that it will reload the next time this page is visited.
                  localStorage.removeItem('reloaded');
            } else {
                  //       // Set a flag so that we know not to reload the page twice.
                  localStorage.setItem('reloaded', '1');
                  location.reload();
            }
            axios.get('http://localhost:3000/api/dattour/tongtour/')
                  .then((response) => {
                        this.tongtour = response.data;
                        console.log('tongtour', this.tongtour)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/dattour/tongtien/')
                  .then((response) => {
                        this.tongtien = response.data;
                        console.log('tongtien', this.tongtien)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/dattour/tongluot/')
                  .then((response) => {
                        this.tongluot = response.data;
                        console.log('tongluot', this.tongluot)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/diadanh/tongDD/')
                  .then((response) => {
                        this.tongDD = response.data;
                        // console.log('dsDD', this.dsDD)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
      },
      methods: {
            async fetchPageViews() {
                  try {
                        const response = await axios.get('/api/page-views');
                        this.pageViews = response.data.pageViews;
                  } catch (error) {
                        console.error('Error fetching page views:', error);
                  }
            },
            async incrementPageViews() {
                  try {
                        await axios.post('/api/page-views/increment');
                        // Gọi lại để cập nhật số lượng lượt truy cập sau khi tăng
                        this.fetchPageViews();
                  } catch (error) {
                        console.error('Error incrementing page views:', error);
                  }
            },
      },

};
</script>

