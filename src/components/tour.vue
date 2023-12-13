
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
                        <div class="row">
                              <h3 class="col-6">Danh sách tour</h3>
                              <div class="col-6">
                                    <button :key="index" v-for="(tt, index) in tongLT" type="button"
                                          class="btn btn-outline-primary btn-fw">Tổng tour {{ tt.tong }}</button>
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
                                                                  <div class="form-group">
                                                                        <label for="formGroupExampleInput">Tên
                                                                              tour</label>
                                                                        <input type="text" class="form-control"
                                                                              v-model="tt.tenT" id="formGroupExampleInput"
                                                                              placeholder="">
                                                                  </div>
                                                                  <div class="form-group">
                                                                        <label for="formGroupExampleInput">Giá
                                                                              tour</label>
                                                                        <input type="text" class="form-control"
                                                                              v-model="tt.giaT" id="formGroupExampleInput"
                                                                              placeholder="">
                                                                  </div>
                                                                  <div class="form-group">
                                                                        <label for="">Trãi
                                                                              nghiệm</label>
                                                                        <textarea class="form-control" v-model="tt.trainghiem"
                                                                              id="exampleFormControlTextarea1"
                                                                              rows="3"></textarea>
                                                                  </div>
                                                                  <div class="form-group">
                                                                        <label for="">Chi
                                                                              tiết</label>
                                                                        <textarea class="form-control" v-model="tt.chitietT"
                                                                              id="exampleFormControlTextarea1"
                                                                              rows="3"></textarea>
                                                                  </div>
                                                                  <div class="form-group row">
                                                                        <div class="col-6">
                                                                              <label for="formGroupExampleInput2">Số
                                                                                    ngày</label>
                                                                              <input type="text" v-model="tt.songay"
                                                                                    class="form-control"
                                                                                    id="formGroupExampleInput2"
                                                                                    placeholder="">
                                                                        </div>

                                                                        <div class="col-6">
                                                                              <label for="formGroupExampleInput">Số
                                                                                    đêm</label>
                                                                              <input type="text" class="form-control"
                                                                                    v-model="tt.sodem"
                                                                                    id="formGroupExampleInput" placeholder="">
                                                                        </div>
                                                                  </div>
                                                                  <div class="form-group">
                                                                        <label for="">Hình
                                                                              ảnh</label>
                                                                        <input class="form-control" v-model="tt.hinhT" id=""
                                                                              rows="3">
                                                                  </div>

                                                                  <div class="form-group">
                                                                        <img class="hinh"
                                                                              style="height: 300px;width: 460px;border-radius: 0;"
                                                                              :src="tt.hinhT" alt="">
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
                                                                  <th>Tên tour</th>
                                                                  <th>Giá tour</th>
                                                                  <th>Số ngày</th>
                                                                  <th>Số đêm</th>
                                                                  <th>Actions</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr :key="index" v-for="(tt, index) in dsLT ">
                                                                  <td>{{ index + 1 }}</td>
                                                                  <td>{{ tt.idT }}</td>
                                                                  <td>{{ tt.tenT }}</td>
                                                                  <td>{{ tt.giaT }}</td>
                                                                  <td>{{ tt.songay }}</td>
                                                                  <td>{{ tt.sodem }}</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <!-- <button type="button"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3">
                                                                                    
                                                                              </button> -->
                                                                              <!-- Button trigger modal -->
                                                                              <button type="button" @click="chinhsua(tt.idT)"
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
                                                                                                                        for="formGroupExampleInput">Tên
                                                                                                                        tour</label>
                                                                                                                  <input type="text"
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.tenT"
                                                                                                                        id="formGroupExampleInput"
                                                                                                                        placeholder="">
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="formGroupExampleInput">Giá
                                                                                                                        tour</label>
                                                                                                                  <input type="text"
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.giaT"
                                                                                                                        id="formGroupExampleInput"
                                                                                                                        placeholder="">
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="">Trãi
                                                                                                                        nghiệm</label>
                                                                                                                  <textarea
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.trainghiem"
                                                                                                                        id="exampleFormControlTextarea1"
                                                                                                                        rows="3"></textarea>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="">Chi
                                                                                                                        tiết</label>
                                                                                                                  <textarea
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.chitietT"
                                                                                                                        id="exampleFormControlTextarea1"
                                                                                                                        rows="3"></textarea>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">Số
                                                                                                                              ngày</label>
                                                                                                                        <input type="text"
                                                                                                                              v-model="tt.songay"
                                                                                                                              class="form-control"
                                                                                                                              id="formGroupExampleInput2"
                                                                                                                              placeholder="">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Số
                                                                                                                              đêm</label>
                                                                                                                        <input type="text"
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.sodem"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="">
                                                                                                                  </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="">Hình
                                                                                                                        ảnh</label>
                                                                                                                  <input class="form-control"
                                                                                                                        v-model="tt.hinhT"
                                                                                                                        id=""
                                                                                                                        rows="3">
                                                                                                            </div>

                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <img class="hinh"
                                                                                                                        style="height: 300px;width: 460px;border-radius: 0;"
                                                                                                                        :src="tt.hinhT"
                                                                                                                        alt="">
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
                                                                              <button type="button" @click="showTT(tt.idT)"
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
                  tour: [],
                  LTdon: [],
                  updateLT: [],
                  themLT: [{
                        tenT: '',
                        giaT: '',
                        trainghiem: '',
                        chitietT: '',
                        songay: '',
                        sodem: '',
                        hinhT: '',
                  }],
                  idLTdelete: '',
                  tongLT: []
            };
      },

      mounted() {

            axios.get('http://localhost:3000/api/tour/dstour')
                  .then((response) => {
                        this.dsLT = response.data;
                        // console.log('dsDD', this.dsDD)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/tour/tongtour/')
                  .then((response) => {
                        this.tongLT = response.data;
                        // console.log('dsDD', this.dsDD)
                  })
                  .catch((error) => {
                        console.log(error);
                  });

      },
      methods: {
            showTT(idT) {
                  // console.log('isLT1', idLT)
                  this.idLTdelete = idT
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
            chinhsua(idT) {
                  axios.get('http://localhost:3000/api/tour/' + idT)
                        .then((response) => {
                              this.LTdon = response.data;
                              console.log('dd', this.LTdon)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            },
            update() {
                  // const ngayThangChuyenDoi = moment(this.LTdon[0].ngaykhoihanh, 'D-M-Y').format('Y-M-D');
                  // console.log('dd1', this.LTdon)
                  axios.put('http://localhost:3000/api/tour/' + this.LTdon[0].idT, {
                        "tenT": this.LTdon[0].tenT,
                        "chitietT": this.LTdon[0].chitietT,
                        "songay": this.LTdon[0].songay,
                        "sodem": this.LTdon[0].sodem,
                        "giaT": this.LTdon[0].giaT,
                        "trainghiem": this.LTdon[0].trainghiem,
                        "hinhT": this.LTdon[0].hinhT,
                  })
                        .then((response) => {
                              this.updateLT = response.data;
                              console.log('daupdate', this.updateLT)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  window.location.reload();
            },
            addDD() {

                  axios.put('http://localhost:3000/api/tour/' + this.themLT[0].idT, {
                        "tenT": this.themLT[0].tenT,
                        "giaT": this.themLT[0].giaT,
                        "trainghiem": this.themLT[0].trainghiem,
                        "chitietT": this.themLT[0].chitietT,
                        "songay": this.themLT[0].songay,
                        "sodem": this.themLT[0].sodem,
                        "hinhT": this.themLT[0].hinhT,
                  })
                        .then((response) => {
                              // this.updateTT = response.data;
                              console.log('add', response.data)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  window.location.reload();
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
                  axios.delete('http://localhost:3000/api/tour/' + this.idLTdelete)
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
