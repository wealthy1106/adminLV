
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
                              <h3 class="col-6">Danh sách lễ hội</h3>
                              <div class="col-6">
                                    <button :key="index" v-for="(tt, index) in tongLH" type="button"
                                          class="btn btn-outline-primary btn-fw">Tổng lễ hội {{ tt.tong }}</button>
                              </div>
                              <div>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary" data-toggle="modal"
                                          data-target="#staticBackdrop">
                                          Thêm lễ hội
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
                                                            <div :key="index" v-for="(tt, index) in themLH ">
                                                                  <div class="form-group row">
                                                                        <div class="col-6">
                                                                              <label for="formGroupExampleInput2">ID
                                                                                    Tỉnh</label>
                                                                              <input type="text" v-model="tt.idTinh"
                                                                                    @input="showtour" class="form-control"
                                                                                    id="formGroupExampleInput2"
                                                                                    placeholder="">
                                                                        </div>

                                                                        <div class="col-6">
                                                                              <label for="formGroupExampleInput">Ngày
                                                                                    lễ
                                                                                    hội</label>
                                                                              <input type="text" class="form-control"
                                                                                    v-model="tt.ngayLH"
                                                                                    id="formGroupExampleInput" placeholder="">
                                                                        </div>
                                                                  </div>
                                                                  <div class="form-group row">
                                                                        <div class="col-6">
                                                                              <label for="formGroupExampleInput">Tên
                                                                                    tỉnh</label>
                                                                              <input type="text" readonly class="form-control"
                                                                                    v-model="this.tentinh"
                                                                                    id="formGroupExampleInput" placeholder="">
                                                                        </div>
                                                                        <div class="col-6">
                                                                              <label for="formGroupExampleInput2">Tên
                                                                                    lễ
                                                                                    hội</label>
                                                                              <textarea class="form-control"
                                                                                    v-model="tt.tenLH"
                                                                                    id="exampleFormControlTextarea1"
                                                                                    rows="3"></textarea>

                                                                        </div>


                                                                  </div>

                                                                  <div class="form-group">
                                                                        <label for="exampleFormControlTextarea1">Chi
                                                                              tiết</label>
                                                                        <textarea class="form-control" v-model="tt.motaLH"
                                                                              id="exampleFormControlTextarea1"
                                                                              rows="3"></textarea>
                                                                  </div>
                                                                  <div class="form-group">
                                                                        <label for="">Hình
                                                                              ảnh</label>
                                                                        <input class="form-control" v-model="tt.hinhLH" id=""
                                                                              rows="3">
                                                                  </div>

                                                                  <div class="form-group">
                                                                        <img class="hinh" :src="tt.hinhLH" alt="">
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
                                                                  <th class="ml-5">IDLH</th>
                                                                  <th>Tên lễ hội</th>
                                                                  <th>Hình lễ hội</th>
                                                                  <th>Ngày lễ hội</th>
                                                                  <th>idTinh</th>
                                                                  <th>Tên tỉnh</th>
                                                                  <th>Actions</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr :key="index" v-for="(tt, index) in dsLH ">
                                                                  <td>{{ index + 1 }}</td>
                                                                  <td>{{ tt.idLH }}</td>
                                                                  <td>{{ tt.tenLH }}</td>
                                                                  <td><img :src="tt.hinhLH" alt=""></td>
                                                                  <td>{{ tt.ngayLH }}</td>
                                                                  <td>{{ tt.idTinh }}</td>
                                                                  <td>{{ tt.tenTinh }}</td>
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
                                                                                                            v-for="(tt, index) in LHdon">
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">ID
                                                                                                                              Tỉnh</label>
                                                                                                                        <input type="text"
                                                                                                                              v-model="tt.idTinh"
                                                                                                                              @input="showt"
                                                                                                                              class="form-control"
                                                                                                                              id="formGroupExampleInput2"
                                                                                                                              placeholder="">
                                                                                                                  </div>

                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Ngày
                                                                                                                              lễ
                                                                                                                              hội</label>
                                                                                                                        <input type="text"
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.ngayLH"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="">
                                                                                                                  </div>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group row">
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput">Tên
                                                                                                                              tỉnh</label>
                                                                                                                        <input type="text"
                                                                                                                              readonly
                                                                                                                              class="form-control"
                                                                                                                              v-model="tent"
                                                                                                                              id="formGroupExampleInput"
                                                                                                                              placeholder="">
                                                                                                                  </div>
                                                                                                                  <div
                                                                                                                        class="col-6">
                                                                                                                        <label
                                                                                                                              for="formGroupExampleInput2">Tên
                                                                                                                              lễ
                                                                                                                              hội</label>
                                                                                                                        <textarea
                                                                                                                              class="form-control"
                                                                                                                              v-model="tt.tenLH"
                                                                                                                              id="exampleFormControlTextarea1"
                                                                                                                              rows="3"></textarea>

                                                                                                                  </div>


                                                                                                            </div>

                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="exampleFormControlTextarea1">Chi
                                                                                                                        tiết</label>
                                                                                                                  <textarea
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.motaLH"
                                                                                                                        id="exampleFormControlTextarea1"
                                                                                                                        rows="3"></textarea>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="">Hình
                                                                                                                        ảnh</label>
                                                                                                                  <input class="form-control"
                                                                                                                        v-model="tt.hinhLH"
                                                                                                                        id=""
                                                                                                                        rows="3">
                                                                                                            </div>

                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <img class="hinh"
                                                                                                                        style="height: 300px;width: 460px;border-radius: 0;"
                                                                                                                        :src="tt.hinhLH"
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
                                                                              <button type="button" @click="showTT(tt.idLH)"
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

.hinh {
      /* width: 460px; */
      height: 300px;
      width: 460px;
      border-radius: 0;
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
                  dsLH: [],
                  tentour: '',
                  tour: [],
                  LHdon: [],
                  updateLT: [],
                  themLH: [{
                        tenLH: '',
                        hinhLH: '',
                        ngayLH: '',
                        motaLH: '',
                        idTinh: '',
                  }],
                  idLTdelete: '',
                  tongLH: [],
                  tinhthanh: [],
                  tentinh: '',
                  tent: '',
                  tinh: [],
            };
      },

      mounted() {

            axios.get('http://localhost:3000/api/lehoi/dslh/')
                  .then((response) => {
                        this.dsLH = response.data;
                        // console.log('dsDD', this.dsDD)
                  })
                  .catch((error) => {
                        console.log(error);
                  });
            axios.get('http://localhost:3000/api/lehoi/tongLH/')
                  .then((response) => {
                        this.tongLH = response.data;
                        // console.log('dsDD', this.dsDD)
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
                  axios.get('http://localhost:3000/api/lehoi/' + idLH)
                        .then((response) => {
                              this.LHdon = response.data;
                              this.tent = this.LHdon[0].tenTinh;
                              console.log('dd', this.tent)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            },
            update() {
                  // const ngayThangChuyenDoi = moment(this.LTdon[0].ngaykhoihanh, 'D-M-Y').format('Y-M-D');
                  // console.log('dd1', this.LHdon[0].idLH)
                  axios.put('http://localhost:3000/api/lehoi/' + this.LHdon[0].idLH, {
                        "tenLH": this.LHdon[0].tenLH,
                        "hinhLH": this.LHdon[0].hinhLH,
                        "motaLH": this.LHdon[0].motaLH,
                        "idTinh": this.LHdon[0].idTinh,
                        "ngayLH": this.LHdon[0].ngayLH,
                  })
                        .then((response) => {
                              this.updateLH = response.data;
                              console.log('daupdate', this.updateLH)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  window.location.reload();
            },
            addDD() {
                  // console.log('themtt', this.themdd)
                  const ngayThangChuyenDoi = moment(this.themLH[0].ngayLH, 'D-M-Y').format('Y-M-D');

                  axios.post('http://localhost:3000/api/lehoi/', {
                        "tenLH": this.themLH[0].tenLH,
                        "hinhLH": this.themLH[0].hinhLH,
                        "motaLH": this.themLH[0].motaLH,
                        "idTinh": this.themLH[0].idTinh,
                        "ngayLH": ngayThangChuyenDoi,
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
                  // console.log('tentinh', this.themLH[0].idTinh)
                  axios.get('http://localhost:3000/api/diadanh/tentinh/' + this.themLH[0].idTinh)
                        .then((response) => {
                              // Nếu yêu cầu thành công, cập nhật giá trị 'tentinh'
                              this.tinhthanh = response.data;
                              // console.log('tentinh', this.tinhthanh);
                              this.tentinh = this.tinhthanh[0].tenTinh;
                              // console.log('tentinh', this.tinhthanh.);
                              // console.log('tentinh1', this.tinhthanh.tenTinh);
                              console.log('tentinh2', this.tinhthanh[0].tenTinh);
                        })
                        .catch((error) => {
                              // Nếu có lỗi xảy ra với yêu cầu, xử lý lỗi
                              console.log(error);
                        });
            },
            deleteLT() {
                  axios.delete('http://localhost:3000/api/lehoi/' + this.idLTdelete)
                        .then((response) => {
                              // this.LTdon = response.data;
                              console.log('delete')
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  window.location.reload();

            },
            showt() {
                  // console.log('tentinh', this.themLH[0].idTinh)
                  axios.get('http://localhost:3000/api/diadanh/tentinh/' + this.LHdon[0].idTinh)
                        .then((response) => {
                              // Nếu yêu cầu thành công, cập nhật giá trị 'tentinh'
                              this.tinh = response.data;
                              // console.log('tentinh', this.tinhthanh);
                              this.tent = this.tinh[0].tenTinh;
                              // console.log('tentinh', this.tinhthanh.);
                              // console.log('tentinh1', this.tinhthanh.tenTinh);
                              console.log('tentinh2', this.tinh[0].tenTinh);
                        })
                        .catch((error) => {
                              // Nếu có lỗi xảy ra với yêu cầu, xử lý lỗi
                              console.log(error);
                        });
            },
      },

};
</script>
