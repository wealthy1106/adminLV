
<template>
      <div class="container-fluid page-body-wrapper">
            <nav class="sidebar sidebar-offcanvas" id="sidebar" style="margin-top: 100px;">
                  <ul class="nav">
                        <li class="nav-item">
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
                        <li class="nav-item native">
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
                                                <canvas id="expense-chart" height="80"></canvas>
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
                                                <canvas id="budget-chart" height="80"></canvas>
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
                                                                  tt.tong }} </h1>
                                                      </div>
                                                      <img style="width: 20%;"
                                                            src="https://cdn-icons-png.flaticon.com/512/38/38251.png" alt="">
                                                </div>
                                                <canvas id="balance-chart" height="80"></canvas>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div id="thongbao" class="card text-center thongbao" v-if="isVisible">
                              <div class="card-header">
                                    <!-- Thêm biểu tượng xóa ở đây -->
                                    <button class="close" @click="closeNotification">
                                          <span aria-hidden="true">&times;</span>
                                    </button>
                                    Thông báo
                              </div>
                              <div class="card-body">
                                    <h5 class="card-title">{{ message }}</h5>
                                    <button @click="deleteDT()" style="width: 100px;" type="button"
                                          class="btn btn-primary">Xác
                                          nhận</button>
                              </div>
                        </div>
                        <div class="row">
                              <div class="col-md-12">
                                    <div class="card">
                                          <div class="table-responsive pt-3">
                                                <table class="table table-striped project-orders-table">
                                                      <thead>
                                                            <tr>
                                                                  <th>STT</th>
                                                                  <th class="ml-5">ID</th>
                                                                  <th>IdT</th>
                                                                  <th>idTK</th>
                                                                  <!-- <th>Giá người lớn</th>
                                                                  <th>Giá trẻ em</th>
                                                                  <th>Số lượng lớn</th>
                                                                  <th>Số lượng nhỏ</th> -->
                                                                  <th>Ngày đặt</th>
                                                                  <th>Trạng thái</th>
                                                                  <!-- <th>Họ tên liên lạc</th>
                                                                  <th>Email liên lạc</th>
                                                                  <th>Địa chỉ liên lạc</th> -->
                                                                  <th>Ngày khởi hành</th>
                                                                  <th>Tổng cộng</th>
                                                                  <th>Actions</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr :key="index" v-for="(tt, index) in dsDT ">
                                                                  <td>{{ index + 1 }}</td>
                                                                  <td>{{ tt.idDT }}</td>
                                                                  <td>{{ tt.idT }}</td>
                                                                  <td>{{ tt.idTK }}</td>
                                                                  <td>{{ formatDateTime(tt.ngayDT) }}</td>
                                                                  <td>{{ tt.trangthai }}</td>
                                                                  <td>{{ formatDate(tt.ngaykhoihanh) }}</td>
                                                                  <td>{{ tt.tongcong }}</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <button type="button" @click="chinhsua(tt.idDT)"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3"
                                                                                    data-toggle="modal"
                                                                                    data-target="#exampleModal">
                                                                                    Edit
                                                                                    <i
                                                                                          class="typcn typcn-edit btn-icon-append"></i>
                                                                              </button>
                                                                              <!-- Modal -->
                                                                              <div class="modal fade" id="exampleModal"
                                                                                    tabindex="-1"
                                                                                    aria-labelledby="exampleModalLabel"
                                                                                    aria-hidden="true">
                                                                                    <div class="modal-dialog">
                                                                                          <div class="modal-content">
                                                                                                <div class="modal-header">
                                                                                                      <h5 class="modal-title"
                                                                                                            id="exampleModalLabel">
                                                                                                            Xem chi tiết</h5>
                                                                                                      <button type="button"
                                                                                                            class="close"
                                                                                                            data-dismiss="modal"
                                                                                                            aria-label="Close">
                                                                                                            <span
                                                                                                                  aria-hidden="true">&times;</span>
                                                                                                      </button>
                                                                                                </div>
                                                                                                <div class="modal-body">
                                                                                                      <div :key="index"
                                                                                                            v-for="(tt, index) in DTdon ">
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">ID
                                                                                                                              Tour</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              v-model="tt.idT"
                                                                                                                              class="form-control"
                                                                                                                              id="formGroupExampleInput2"
                                                                                                                              placeholder="">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Tour</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.tenT"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="">
                                                                                                                  </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">Giá
                                                                                                                              người
                                                                                                                              lớn</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              v-model="tt.giaL"
                                                                                                                              class="form-control"
                                                                                                                              id="formGroupExampleInput2"
                                                                                                                              placeholder="Another input placeholder">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Giá
                                                                                                                              trẻ
                                                                                                                              em</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.giaN"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="Example input placeholder">
                                                                                                                  </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">Số
                                                                                                                              lượng
                                                                                                                              lớn</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              v-model="tt.slL"
                                                                                                                              class="form-control"
                                                                                                                              id="formGroupExampleInput2"
                                                                                                                              placeholder="Another input placeholder">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Số
                                                                                                                              lượng
                                                                                                                              trẻ
                                                                                                                              em</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.slN"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="Example input placeholder">
                                                                                                                  </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">Ngày
                                                                                                                              đặt</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              v-model="this.ngayDT"
                                                                                                                              class="form-control"
                                                                                                                              id="formGroupExampleInput2"
                                                                                                                              placeholder="">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Ngày
                                                                                                                              khởi
                                                                                                                              hành</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              class="form-control"
                                                                                                                              v-model="this.ngaykhoihanh"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="Example input placeholder">
                                                                                                                  </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">Họ
                                                                                                                              tên
                                                                                                                              liên
                                                                                                                              lạc</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              v-model="tt.hotenLL"
                                                                                                                              class="form-control"
                                                                                                                              id="formGroupExampleInput2"
                                                                                                                              placeholder="">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Số
                                                                                                                              điện
                                                                                                                              thoại
                                                                                                                              liên
                                                                                                                              lạc</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.sdtLL"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="Example input placeholder">
                                                                                                                  </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">Email
                                                                                                                              liên
                                                                                                                              lạc</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              v-model="tt.emailLL"
                                                                                                                              class="form-control"
                                                                                                                              id="formGroupExampleInput2"
                                                                                                                              placeholder="">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Số
                                                                                                                              điện
                                                                                                                              thoại
                                                                                                                              lên
                                                                                                                              lạc</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.sdtLL"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="">
                                                                                                                  </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">Tổng
                                                                                                                              cộng</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              v-model="tt.tongcong"
                                                                                                                              class="form-control"
                                                                                                                              id="formGroupExampleInput2"
                                                                                                                              placeholder="">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Trạng
                                                                                                                              thái</label>
                                                                                                                        <input type="text"
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.trangthai"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="">
                                                                                                                  </div>
                                                                                                            </div>

                                                                                                      </div>
                                                                                                </div>
                                                                                                <div class="modal-footer">
                                                                                                      <button type="button"
                                                                                                            class="btn btn-secondary"
                                                                                                            data-dismiss="modal">Đóng</button>
                                                                                                      <button type="button"
                                                                                                            @click="update()"
                                                                                                            class="btn btn-primary">Chỉnh
                                                                                                            sửa</button>
                                                                                                </div>
                                                                                          </div>
                                                                                    </div>
                                                                              </div>
                                                                              <button type="button" @click="showDT(tt.idDT)"
                                                                                    class="btn btn-danger btn-sm btn-icon-text">
                                                                                    Delete
                                                                                    <i
                                                                                          class="typcn typcn-delete-outline btn-icon-append"></i>
                                                                              </button>
                                                                        </div>
                                                                  </td>
                                                            </tr>

                                                      </tbody>
                                                </table>
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>

            </div>
      </div>
</template>
<style>
/* .r1 {
      padding: 60px 10px 10px;
} */

.main-panel {
      /* z-index: 3; */
      padding: 100px 10px 10px;
}

span .menu-title {
      font-size: 18px;
}

.thongbao {
      width: 300px;
      z-index: 1;
      position: fixed;
      margin: 10px 180px;
      left: 50%;
      transform: translate(-50%, -50%);
}
</style>

<script>
import axios from 'axios';
import moment from 'moment';
// import thongbao from "@/components/thongbao/dangxuat.vue";
export default {
      data() {
            return {
                  isVisible: false,
                  message: "",
                  dsDT: [],
                  tentour: '',
                  tour: [],
                  DTdon: [],
                  updateDT: [],
                  idDTdelete: '',
                  tongLT: [],
                  ngayDT: '',
                  ngaykhoihanh: '',
                  tongtour: [],
                  tongtien: [],
                  tongluot: [],
            }
      },

      mounted() {

            axios.get('http://localhost:3000/api/dattour/')
                  .then((response) => {
                        this.dsDT = response.data;
                        console.log('dsDT', this.dsDT)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
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

      },
      methods: {
            formatDate(dateString) {
                  const formattedDate = new Date(dateString).toLocaleDateString('en-GB');
                  return formattedDate;
            },

            formatDateTime(dateTimeString) {
                  const formattedDateTime = new Date(dateTimeString).toLocaleString('en-GB', {
                        year: 'numeric',
                        month: 'numeric',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                        second: 'numeric',
                        hour12: false, // 24-hour format
                  });
                  return formattedDateTime;
            },
            showDT(idDT) {
                  // console.log('isLT1', idLT)
                  this.idDTdelete = idDT
                  console.log('isLT1', idDT)
                  this.showNotification("Xác nhận xóa");

            },
            showNotification(message) {
                  this.$refs.notification.showNotification(message);
            },
            showNotification(message) {
                  this.message = message;
                  this.isVisible = true;

                  // Tự động đóng sau 30 giây
                  // setTimeout(() => {
                  //       this.closeNotification();
                  // }, 30000);
            },
            closeNotification() {
                  this.isVisible = false;
            },
            chinhsua(idDT) {
                  console.log('idDT', idDT)
                  axios.get('http://localhost:3000/api/dattour/' + idDT)
                        .then((response) => {
                              this.DTdon = response.data;
                              this.ngayDT = this.formatDateTime(this.DTdon[0].ngayDT)
                              this.ngaykhoihanh = this.formatDate(this.DTdon[0].ngaykhoihanh)
                              console.log('dd1', this.DTdon)
                              console.log('dd1', this.ngayDT)
                              console.log('dd1', this.ngaykhoihanh)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            },
            update() {
                  // const ngayThangChuyenDoi = moment(this.LTdon[0].ngaykhoihanh, 'D-M-Y').format('Y-M-D');
                  // // console.log('dd1', this.LTdon)
                  axios.put('http://localhost:3000/api/dattour/trangthai/' + this.DTdon[0].idDT, {
                        "trangthai": this.DTdon[0].trangthai,
                  })
                        .then((response) => {
                              this.updateDT = response.data;
                              console.log('daupdate', this.updateDT)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  window.location.reload();
            },
            //showtour() {
            //       axios.get('http://localhost:3000/api/tour/' + this.themLT[0].idT)
            //             .then((response) => {
            //                   this.tour = response.data;
            //                   // console.log('tentinh', this.tinhthanh);
            //                   this.tentour = this.tour[0].tenT;
            //                   // console.log('tentinh', this.tinhthanh.);
            //                   // console.log('tentinh1', this.tinhthanh.tenTinh);
            //                   // console.log('tentinh2', this.tinhthanh[0].tenTinh);
            //             })
            //             .catch((error) => {
            //                   // Nếu có lỗi xảy ra với yêu cầu, xử lý lỗi
            //                   console.log(error);
            //             });
            //},
            deleteDT() {
                  axios.delete('http://localhost:3000/api/dattour/' + this.idDTdelete)
                        .then((response) => {
                              // this.LTdon = response.data;
                              console.log('delete')
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  window.location.reload();
            }
      },

};
</script>