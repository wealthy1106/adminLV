
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
                              <router-link class="nav-link" :to="{ name: 'ngaykhoihanhtour' }">
                                    <!-- <i class="typcn typcn-device-desktop menu-icon"></i> -->
                                    <span class="menu-title">Ngày khởi hành tour</span>
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
                        <div class="row">
                              <h3 class="col-6">Danh sách lịch trình</h3>
                              <div class="col-6">
                                    <button :key="index" v-for="(tt, index) in tongLT" type="button"
                                          class="btn btn-outline-primary btn-fw">Tổng lịch trình {{ tt.tong }}</button>
                              </div>
                              <div>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary" data-toggle="modal"
                                          data-target="#staticBackdrop">
                                          Thêm lịch trình
                                    </button>

                                    <!-- Modal -->
                                    <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false"
                                          tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                          <div class="modal-dialog">
                                                <div class="modal-content">
                                                      <div class="modal-header">
                                                            <h5 class="modal-title" id="staticBackdropLabel">Thông tin</h5>
                                                            <button type="button" class="close" data-dismiss="modal"
                                                                  aria-label="Close">
                                                                  <span aria-hidden="true">&times;</span>
                                                            </button>
                                                      </div>
                                                      <div class="modal-body">
                                                            <div :key="index" v-for="(tt, index) in themLT ">
                                                                  <div class="form-group row">
                                                                        <div class="col-6">
                                                                              <label for="formGroupExampleInput">ID
                                                                                    tour</label>
                                                                              <input type="text" class="form-control"
                                                                                    v-model="tt.idT" @input="showtour"
                                                                                    id="formGroupExampleInput" placeholder="">
                                                                        </div>
                                                                        <div class="form-group col-6">
                                                                              <label for="formGroupExampleInput2">Ngày khởi
                                                                                    hành</label>
                                                                              <input type="text" v-model="tt.ngaykh"
                                                                                    class="form-control"
                                                                                    id="formGroupExampleInput2"
                                                                                    placeholder="dd/mm/yy">
                                                                        </div>
                                                                  </div>
                                                                  <div>
                                                                        <label for="formGroupExampleInput">Tour</label>
                                                                        <input type="text" class="form-control"
                                                                              v-model="tentour" id="formGroupExampleInput"
                                                                              placeholder="">
                                                                  </div>

                                                                  <div class="form-group">
                                                                        <label for="formGroupExampleInput2">Nơi khởi
                                                                              hành</label>
                                                                        <input type="text" v-model="tt.noikh"
                                                                              class="form-control" id="formGroupExampleInput2"
                                                                              placeholder="">
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                  data-dismiss="modal">Đóng</button>
                                                            <button type="button" @click="addDD"
                                                                  class="btn btn-primary">Thêm</button>
                                                      </div>
                                                </div>
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
                                    <button @click="deleteLT" style="width: 100px;" type="button" class="btn btn-primary">Xác
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
                                                                  <th>Ngày khởi hành</th>
                                                                  <th>Nơi khởi hành</th>
                                                                  <th>idT</th>
                                                                  <th>Tên tour</th>
                                                                  <th>Actions</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr :key="index" v-for="(tt, index) in dsLT ">
                                                                  <td>{{ index + 1 }}</td>
                                                                  <td>{{ tt.idLT }}</td>
                                                                  <td>{{ tt.ngaykhoihanh }}</td>
                                                                  <td>{{ tt.noikhoihanh }}</td>
                                                                  <td>{{ tt.idT }}</td>
                                                                  <td>{{ tt.tenT }}</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <!-- <button type="button"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3">
                                                                                    
                                                                              </button> -->
                                                                              <!-- Button trigger modal -->
                                                                              <button type="button" @click="chinhsua(tt.idLT)"
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
                                                                                                            v-for="(tt, index) in LTdon ">
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="formGroupExampleInput">Ngày
                                                                                                                        khởi
                                                                                                                        hành</label>
                                                                                                                  <input type="date"
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.ngaykhoihanh"
                                                                                                                        id="formGroupExampleInput"
                                                                                                                        placeholder="Example input placeholder">
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="">Nơi
                                                                                                                        khởi
                                                                                                                        hành</label>
                                                                                                                  <input class="form-control"
                                                                                                                        v-model="tt.noikhoihanh"
                                                                                                                        id=""
                                                                                                                        rows="3">
                                                                                                            </div>
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
                                                                                                                              placeholder="Another input placeholder">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Tour</label>
                                                                                                                        <input type="text"
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.tenT"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="Example input placeholder">
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
                                                                              <button type="button" @click="showTT(tt.idLT)"
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
                  tentour: '',
                  tour: [],
                  LTdon: [],
                  updateLT: [],
                  themLT: [{
                        idT: '',
                        ngaykh: '',
                        noikh: '',
                  }],
                  idLTdelete: '',
                  tongLT: []
            };
      },

      mounted() {

            axios.get('http://localhost:3000/api/tour/')
                  .then((response) => {
                        this.dsLT = response.data;
                        // console.log('dsDD', this.dsDD)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/lichtrinh/tongLT/')
                  .then((response) => {
                        this.tongLT = response.data;
                        // console.log('dsDD', this.dsDD)
                  })
                  .catch((error) => {
                        console.log(error);
                  });

      },
      methods: {
            showTT(idLT) {
                  // console.log('isLT1', idLT)
                  this.idLTdelete = idLT
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
            chinhsua(idLT) {
                  // axios.get('http://localhost:3000/api/lichtrinh/' + idLT)
                  //       .then((response) => {
                  //             this.LTdon = response.data;
                  //             console.log('dd', this.LTdon)
                  //       })
                  //       .catch((error) => {
                  //             console.log(error);
                  //       });
            },
            update() {
                  // const ngayThangChuyenDoi = moment(this.LTdon[0].ngaykhoihanh, 'D-M-Y').format('Y-M-D');
                  // // console.log('dd1', this.LTdon)
                  // axios.put('http://localhost:3000/api/lichtrinh/' + this.LTdon[0].idLT, {
                  //       "ngaykhoihanh": ngayThangChuyenDoi,
                  //       "noikhoihanh": this.LTdon[0].noikhoihanh,
                  //       "idT": this.LTdon[0].idT,
                  // })
                  //       .then((response) => {
                  //             this.updateLT = response.data;
                  //             console.log('daupdate', this.updateLT)
                  //       })
                  //       .catch((error) => {
                  //             console.log(error);
                  //       });
                  // window.location.reload();
            },
            addDD() {
                  // console.log('themtt', this.themdd)
                  // const ngayThangChuyenDoi = moment(this.themLT[0].ngaykh, 'D-M-Y').format('Y-M-D');
                  // console.log('ngaychuyendoi', ngayThangChuyenDoi)
                  // console.log('ngaychuyendoi1', this.themLT[0].ngaykh)
                  // console.log('noikhoihanh', this.themLT[0].noikh)
                  // console.log('idT', this.themLT[0].ngaykh)
                  // axios.post('http://localhost:3000/api/lichtrinh/', {
                  //       "ngaykhoihanh": ngayThangChuyenDoi,
                  //       "noikhoihanh": this.themLT[0].noikh,
                  //       "idT": this.themLT[0].idT,
                  // })
                  //       .then((response) => {
                  //             // this.updateTT = response.data;
                  //             console.log('add', response.data)
                  //       })
                  //       .catch((error) => {
                  //             console.log(error);
                  //       });
                  // window.location.reload();
            },
            showtour() {
                  // axios.get('http://localhost:3000/api/tour/' + this.themLT[0].idT)
                  //       .then((response) => {
                  //             this.tour = response.data;
                  //             // console.log('tentinh', this.tinhthanh);
                  //             this.tentour = this.tour[0].tenT;
                  //             // console.log('tentinh', this.tinhthanh.);
                  //             // console.log('tentinh1', this.tinhthanh.tenTinh);
                  //             // console.log('tentinh2', this.tinhthanh[0].tenTinh);
                  //       })
                  //       .catch((error) => {
                  //             // Nếu có lỗi xảy ra với yêu cầu, xử lý lỗi
                  //             console.log(error);
                  //       });
            },
            deleteLT() {
                  // axios.delete('http://localhost:3000/api/lichtrinh/' + this.idLTdelete)
                  //       .then((response) => {
                  //             // this.LTdon = response.data;
                  //             console.log('delete')
                  //       })
                  //       .catch((error) => {
                  //             console.log(error);
                  //       });
            }
      },

};
</script>
