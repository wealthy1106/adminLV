
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
                              <h3 class="col-6">Danh sách địa danh</h3>
                              <div class="col-6">
                                    <button :key="index" v-for="(tt, index) in tongDD" type="button"
                                          class="btn btn-outline-primary btn-fw">Tổng địa danh {{ tt.tong }}</button>
                              </div>
                              <div>
                                    <!-- Button trigger modal -->
                                    <button type="button" class="btn btn-primary" data-toggle="modal"
                                          data-target="#staticBackdrop">
                                          Thêm địa danh
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
                                                            <div :key="index" v-for="(tt, index) in themdd ">
                                                                  <div class="form-group">
                                                                        <label for="formGroupExampleInput">Tên
                                                                              địa
                                                                              danh</label>
                                                                        <input type="text" class="form-control"
                                                                              v-model="tt.tenDD" id="formGroupExampleInput"
                                                                              placeholder="Example input placeholder">
                                                                  </div>
                                                                  <div class="form-group row">
                                                                        <div class="col-6">
                                                                              <label for="formGroupExampleInput">ID
                                                                                    tỉnh</label>
                                                                              <input type="text" class="form-control"
                                                                                    v-model="tt.idTinh" @input="showtinh"
                                                                                    id="formGroupExampleInput"
                                                                                    placeholder="Example input placeholder">
                                                                        </div>
                                                                        <div class="col-6">
                                                                              <label for="formGroupExampleInput">Tỉnh</label>
                                                                              <input type="text" class="form-control"
                                                                                    v-model="tentinh"
                                                                                    id="formGroupExampleInput"
                                                                                    placeholder="Example input placeholder">
                                                                        </div>
                                                                  </div>
                                                                  <div class="form-group">
                                                                        <label for="exampleFormControlTextarea1">Chi
                                                                              tiết</label>
                                                                        <textarea class="form-control" v-model="tt.motaDD"
                                                                              id="exampleFormControlTextarea1"
                                                                              rows="3"></textarea>
                                                                  </div>
                                                                  <div class="form-group">
                                                                        <label for="formGroupExampleInput2">Vùng
                                                                              miền</label>
                                                                        <input type="text" v-model="tt.mienDD"
                                                                              class="form-control" id="formGroupExampleInput2"
                                                                              placeholder="Another input placeholder">
                                                                  </div>
                                                                  <div class="form-group">
                                                                        <label for="formGroupExampleInput2">Hình
                                                                              ảnh</label>
                                                                        <input type="text" v-model="tt.hinh1"
                                                                              class="form-control" id="formGroupExampleInput2"
                                                                              placeholder="Another input placeholder">
                                                                        <img style="height: 300px;width: 460px;border-radius: 0;"
                                                                              :src="tt.hinh1" alt="" srcset="">
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
                                    <button @click="dangxuat" style="width: 100px;" type="button" class="btn btn-primary">Xác
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
                                                                  <th>Tên địa danh</th>
                                                                  <th>Hình ảnh</th>
                                                                  <th>Vùng miền</th>
                                                                  <th>ID tỉnh</th>
                                                                  <th>Tỉnh thành</th>
                                                                  <th>Actions</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr :key="index" v-for="(tt, index) in dsDD ">
                                                                  <td>{{ index + 1 }}</td>
                                                                  <td>{{ tt.idDD }}</td>
                                                                  <td>{{ tt.tenDD }}</td>
                                                                  <td><img :src="tt.hinh1" alt=""> </td>
                                                                  <td>{{ tt.mienDD }}</td>
                                                                  <td>{{ tt.idTinh }}</td>
                                                                  <td>{{ tt.tenTinh }}</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <!-- <button type="button"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3">
                                                                                    
                                                                              </button> -->
                                                                              <!-- Button trigger modal -->
                                                                              <button type="button" @click="chinhsua(tt.idDD)"
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
                                                                                                            v-for="(tt, index) in DDdon ">
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="formGroupExampleInput">Tên
                                                                                                                        địa
                                                                                                                        danh</label>
                                                                                                                  <input type="text"
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.tenDD"
                                                                                                                        id="formGroupExampleInput"
                                                                                                                        placeholder="Example input placeholder">
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="exampleFormControlTextarea1">Chi
                                                                                                                        tiết</label>
                                                                                                                  <textarea
                                                                                                                        class="form-control"
                                                                                                                        v-model="tt.motaDD"
                                                                                                                        id="exampleFormControlTextarea1"
                                                                                                                        rows="3"></textarea>
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="formGroupExampleInput2">Vùng
                                                                                                                        miền</label>
                                                                                                                  <input type="text"
                                                                                                                        v-model="tt.mienDD"
                                                                                                                        class="form-control"
                                                                                                                        id="formGroupExampleInput2"
                                                                                                                        placeholder="Another input placeholder">
                                                                                                            </div>
                                                                                                            <div
                                                                                                                  class="form-group">
                                                                                                                  <label
                                                                                                                        for="formGroupExampleInput2">Hình
                                                                                                                        ảnh</label>
                                                                                                                  <input type="text"
                                                                                                                        v-model="tt.hinh1"
                                                                                                                        class="form-control"
                                                                                                                        id="formGroupExampleInput2"
                                                                                                                        placeholder="Another input placeholder">
                                                                                                                  <img style="height: 300px;width: 460px;border-radius: 0;"
                                                                                                                        :src="tt.hinh1"
                                                                                                                        alt=""
                                                                                                                        srcset="">
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
                                                                              <button type="button" @click="showTT()"
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
// import thongbao from "@/components/thongbao/dangxuat.vue";
export default {
      data() {
            return {
                  isVisible: false,
                  message: "",
                  dsDD: [],
                  tentinh: '',
                  tinhthanh: [],
                  DDdon: [],
                  updateTT: [],
                  themdd: [{
                        tenDD: '',
                        motaDD: '',
                        mienDD: '',
                        hinh1: '',
                        idTinh: ''
                  }],
                  tongDD: []
            };
      },

      mounted() {

            axios.get('http://localhost:3000/api/diadanh/dsDD/')
                  .then((response) => {
                        this.dsDD = response.data;
                        // console.log('dsDD', this.dsDD)
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
            showTT() {
                  this.showNotification("Xác nhận đăng xuất");
            },
            showAlert() {
                  this.$refs.notification.showNotification("Xác nhận đăng xuất!");
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
            chinhsua(idDD) {
                  axios.get('http://localhost:3000/api/diadanh/' + idDD)
                        .then((response) => {
                              this.DDdon = response.data;
                              // console.log('dd', this.DDdon)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            },
            update() {
                  // console.log('dd1', this.DDdon)
                  axios.put('http://localhost:3000/api/diadanh/' + this.DDdon[0].idDD, {
                        "idTinh": this.DDdon[0].idTinh,
                        "tenDD": this.DDdon[0].tenDD,
                        "motaDD": this.DDdon[0].motaDD,
                        "mienDD": this.DDdon[0].mienDD,
                        "hinh1": this.DDdon[0].hinh1
                  })
                        .then((response) => {
                              this.updateTT = response.data;
                              console.log('daupdate', this.updateTT)
                        })
                        .catch((error) => {
                              console.log(error);
                        });
                  window.location.reload();
            },
            addDD() {
                  // console.log('themtt', this.themdd)
                  axios.post('http://localhost:3000/api/diadanh/', {
                        "idTinh": this.themdd[0].idTinh,
                        "tenDD": this.themdd[0].tenDD,
                        "motaDD": this.themdd[0].motaDD,
                        "mienDD": this.themdd[0].mienDD,
                        "hinh1": this.themdd[0].hinh1
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
            showtinh() {
                  axios.get('http://localhost:3000/api/diadanh/tentinh/' + this.themdd[0].idTinh)
                        .then((response) => {
                              // Nếu yêu cầu thành công, cập nhật giá trị 'tentinh'
                              this.tinhthanh = response.data;
                              // console.log('tentinh', this.tinhthanh);
                              this.tentinh = this.tinhthanh[0].tenTinh;
                              // console.log('tentinh', this.tinhthanh.);
                              // console.log('tentinh1', this.tinhthanh.tenTinh);
                              // console.log('tentinh2', this.tinhthanh[0].tenTinh);
                        })
                        .catch((error) => {
                              // Nếu có lỗi xảy ra với yêu cầu, xử lý lỗi
                              console.log(error);
                        });
            },
            deleteDD(idDD) {
                  console.log('dd1', idDD)
                  axios.delete('http://localhost:3000/api/diadanh/' + idDD)
                        .then((response) => {
                              // this.DDdon = response.data;
                              console.log('delete')
                        })
                        .catch((error) => {
                              console.log(error);
                        });
            }
      },

};
</script>
