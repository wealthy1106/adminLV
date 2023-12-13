
<template>
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
                  <button style="width: 100px;" type="button" class="btn btn-primary">Đóng</button>
            </div>
      </div>
      <div class="container-scroller">
            <div class="container-fluid page-body-wrapper full-page-wrapper">
                  <div class="content-wrapper d-flex align-items-center auth px-0">
                        <div class="row w-100 mx-0">
                              <div class="col-lg-4 mx-auto">
                                    <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                                          <div class="brand-logo">
                                                <img src="./../assets/logo.png" alt="logo">
                                          </div>
                                          <h4>Hello! let's get started</h4>
                                          <h6 class="font-weight-light"></h6>
                                          <div class="pt-3">
                                                <div class="form-group">
                                                      <input type="email" v-model="email" class="form-control form-control-lg"
                                                            id="exampleInputEmail1" placeholder="Username">
                                                </div>
                                                <div class="form-group">
                                                      <input type="password" v-model="matkhau"
                                                            class="form-control form-control-lg" id="exampleInputPassword1"
                                                            placeholder="Password">
                                                </div>
                                                <div class="mt-3">
                                                      <button @click="login()"
                                                            class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Đăng
                                                            nhập</button>
                                                </div>


                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <!-- content-wrapper ends -->
            </div>
            <!-- page-body-wrapper ends -->
      </div>
</template>
<script>
import axios from 'axios';
export default {
      data() {
            return {
                  stt: 1,
                  email: '',
                  matkhau: '',
                  taikhoan: [],
            }
      },
      mounted() {
            // if (localStorage.getItem('reloaded')) {
            //       // The page was just reloaded. Clear the value from local storage
            //       // so that it will reload the next time this page is visited.
            //       localStorage.removeItem('reloaded');
            // } else {
            //       // Set a flag so that we know not to reload the page twice.
            //       localStorage.setItem('reloaded', '1');
            //       location.reload();
            // }


      },
      methods: {
            showTT() {
                  // console.log('isLT1', idLT)
                  // this.idLTdelete = idLT
                  // console.log('isLT1', this.idLTdelete)
                  this.showNotification("Tài khoản không tồn tại!");
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
            login() {
                  // console.log(this.email1, this.matkhau1)
                  axios.post('http://localhost:3000/api/taikhoan/ktlogin', {
                        "email": this.email,
                        "matkhau": this.matkhau,
                  })
                        .then((response) => {
                              if (response.data.message == 'Login successful') {
                                    // console.log('vaitro', response.data.user.vaitro)
                                    if (response.data.user.vaitro == 'admin') {
                                          // console.log(response.data.token)
                                          var token = ('token', response.data.token)
                                          this.user = response.data.user.id
                                          localStorage.setItem('token', token)
                                          localStorage.setItem('admin', this.user)
                                          console.log('user', localStorage.setItem('user', this.user))
                                          // this.thongbaodangnhap = true;
                                          this.$router.push({ name: 'trangchu' });
                                    } else {
                                          this.showTT;
                                    }

                              }
                              this.taikhoan = response.data
                              console.log('taikhoan', this.taikhoan)

                        })
                        .catch((error) => {
                              console.log(error);
                              this.isAlertVisible = true;
                        });
                  // console.log(this.email1, this.matkhau1)

            }
      }
}

</script>