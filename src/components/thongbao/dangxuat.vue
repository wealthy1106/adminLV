<!-- Notification.vue -->
<template>
      <div class="card text-center thongbao" v-if="isVisible">
            <div class="card-header">
                  <!-- Thêm biểu tượng xóa ở đây -->
                  <button class="close" @click="closeNotification">
                        <span aria-hidden="true">&times;</span>
                  </button>
                  Thông báo
            </div>
            <div class="card-body">
                  <h5 class="card-title">{{ message }}</h5>
                  <button @click="dangxuat" style="width: 100px;" type="button" class="btn btn-primary">Xác nhận</button>
            </div>
      </div>
      <!-- <div v-if="isVisible" class="notification">
            <span>{{ message }}</span>
            <button @click="closeNotification">Đóng</button>
      </div> -->
</template>
    
<script>
export default {
      data() {
            return {
                  isVisible: false,
                  message: ""
            };
      },
      methods: {

            dangxuat() {
                  // Thực hiện các bước đăng xuất, ví dụ: xóa token, làm mới trang, v.v.
                  localStorage.removeItem('token');
                  localStorage.removeItem('user')
                  this.$emit('dang-xuat');
                  // this.$router.push({ name: 'login' });
                  this.closeNotification();
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
            }
      }
};
</script>
    
<style scoped>
.notification {
      position: absolute;
      /* top: 40%; */
      /* right: 10px; */
      /* left: 50%; */
      top: 40%;
      left: 30%;
      /* transform: translate(-50%, -50%); */
      padding: 10px;
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
}

.thongbao {
      width: 500px;
      margin: 0 auto;
      top: 40%;
      z-index: 2;
}
</style>
    