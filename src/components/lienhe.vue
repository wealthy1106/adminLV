
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
                        <li class="nav-item native">
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
                  </ul>
            </nav>
            <div class="main-panel">
                  <div class="content-wrapper">
                        <div>
                              <h3>Danh sách liên hệ</h3>

                        </div>
                        <!-- <div id="thongbao" class="card text-center thongbao" v-if="isVisible">
                              <div class="card-header">
                                    Thêm biểu tượng xóa ở đây 
                                    <button class="close" @click="closeNotification">
                                          <span aria-hidden="true">&times;</span>
                                    </button>
                                    Thông báo
                              </div>
                              <div class="card-body">
                                    <h5 class="card-title">{{ message }}</h5>
                                    <button @click="deleteLT" style="width: 100px;" type="button" class="btn btn-primary">Xác
                                          nhận</button>
                              </div>
                        </div> -->
                        <div class="row">
                              <div class="col-md-12">
                                    <div class="card">
                                          <div class="table-responsive pt-3">
                                                <table class="table table-striped project-orders-table">
                                                      <thead>
                                                            <tr>
                                                                  <th>STT</th>
                                                                  <th class="ml-5">ID</th>
                                                                  <th>Địa chỉ</th>
                                                                  <th>Email</th>
                                                                  <th>Số điện thoại</th>
                                                                  <th>Actions</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr :key="index" v-for="(tt, index) in dsLT ">
                                                                  <td>{{ index + 1 }}</td>
                                                                  <td>{{ tt.idLH }}</td>
                                                                  <td>{{ tt.diachiLH }}</td>
                                                                  <td>{{ tt.emailLH }}</td>
                                                                  <td>{{ tt.sdtLH }}</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <!-- <button type="button"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3">
                                                                                    
                                                                              </button> -->
                                                                              <!-- Button trigger modal -->
                                                                              <button type="button" @click="chinhsua(tt.idLH)"
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
                                                                                                            Chỉnh sửa</h5>
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
                                                                                                            v-for="(tt, index) in Lienhedon ">
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="formGroupExampleInput">Email</label>
                                                                                                                  <input type="text"
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.emailLH"
                                                                                                                        id="formGroupExampleInput"
                                                                                                                        placeholder="Example input placeholder">
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="">Số
                                                                                                                        điện
                                                                                                                        thoại</label>
                                                                                                                  <input class="form-control"
                                                                                                                        v-model="tt.sdtLH"
                                                                                                                        id=""
                                                                                                                        rows="3">
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="exampleFormControlTextarea1">Địa
                                                                                                                        chỉ</label>
                                                                                                                  <textarea
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.diachiLH"
                                                                                                                        id="exampleFormControlTextarea1"
                                                                                                                        rows="3"></textarea>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="exampleFormControlTextarea1">Địa
                                                                                                                        chỉ
                                                                                                                        map</label>
                                                                                                                  <textarea
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.map"
                                                                                                                        id="exampleFormControlTextarea1"
                                                                                                                        rows="3"></textarea>
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
                                                                              <!-- <button type="button" @click="showTT(tt.idLH)"
                                                                                    class="btn btn-danger btn-sm btn-icon-text">
                                                                                    Delete
                                                                                    <i
                                                                                          class="typcn typcn-delete-outline btn-icon-append"></i>
                                                                              </button> -->
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
.r1 {
      padding: 60px 10px;
}

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
                  dsLT: [],
                  Lienhedon: [],
                  updateLH: [],
            };
      },

      mounted() {

            axios.get('http://localhost:3000/api/lienhe/')
                  .then((response) => {
                        this.dsLT = response.data;
                        // console.log('dsDD', this.dsLT)
                  })
                  .catch((error) => {
                        console.log(error);
                  });


      },
      methods: {
            showTT(idLH) {
                  // console.log('isLT1', idLT)
                  this.idLTdelete = idLH
                  // console.log('isLT1', this.idLTdelete)
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
            chinhsua(idLH) {
                  axios.get('http://localhost:3000/api/lienhe/' + idLH)
                        .then((response) => {
                              this.Lienhedon = response.data;
                              // console.log('dd', this.Lienhedon)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            },
            update() {
                  // const ngayThangChuyenDoi = moment(this.LTdon[0].ngaykhoihanh, 'D-M-Y').format('Y-M-D');
                  // console.log('dd1', this.LTdon)
                  axios.put('http://localhost:3000/api/lienhe/' + this.Lienhedon[0].idLH, {
                        "emailLH": this.Lienhedon[0].emailLH,
                        "diachiLH": this.Lienhedon[0].diachiLH,
                        "sdtLH": this.Lienhedon[0].sdtLH,
                        "map": this.Lienhedon[0].map
                  })
                        .then((response) => {
                              this.updateLH = response.data;
                              // console.log('daupdate', this.updateLH)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  window.location.reload();
            },

      },

};
</script>
