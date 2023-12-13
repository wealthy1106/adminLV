
<template>
      <div class="container-fluid page-body-wrapper">
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
                                                            <h1 class="mb-0">8742</h1>
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
                                                            <h1 class="mb-0">47,840</h1>
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
                                                            <h1 class="mb-0">7,243 </h1>
                                                      </div>
                                                      <img style="width: 20%;"
                                                            src="https://cdn-icons-png.flaticon.com/512/38/38251.png" alt="">
                                                </div>
                                                <canvas id="balance-chart" height="80"></canvas>
                                          </div>
                                    </div>
                              </div>
                        </div>

                        <div class="row">
                              <div class="col-md-12">
                                    <div class="card">
                                          <div class="table-responsive pt-3">
                                                <table class="table table-striped project-orders-table">
                                                      <thead>
                                                            <tr>
                                                                  <th class="ml-5">ID</th>
                                                                  <th>Project name</th>
                                                                  <th>Customer</th>
                                                                  <th>Deadline</th>
                                                                  <th>Payouts </th>
                                                                  <th>Traffic</th>
                                                                  <th>Actions</th>
                                                            </tr>
                                                      </thead>
                                                      <tbody>
                                                            <tr>
                                                                  <td>#D1</td>
                                                                  <td>Consectetur adipisicing elit </td>
                                                                  <td>Beulah Cummings</td>
                                                                  <td>03 Jan 2019</td>
                                                                  <td>$ 5235</td>
                                                                  <td>1.3K</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <button type="button"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3">
                                                                                    Edit
                                                                                    <i
                                                                                          class="typcn typcn-edit btn-icon-append"></i>
                                                                              </button>
                                                                              <button type="button"
                                                                                    class="btn btn-danger btn-sm btn-icon-text">
                                                                                    Delete
                                                                                    <i
                                                                                          class="typcn typcn-delete-outline btn-icon-append"></i>
                                                                              </button>
                                                                        </div>
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>#D2</td>
                                                                  <td>Correlation natural resources silo</td>
                                                                  <td>Mitchel Dunford</td>
                                                                  <td>09 Oct 2019</td>
                                                                  <td>$ 3233</td>
                                                                  <td>5.4K</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <button type="button"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3">
                                                                                    Edit
                                                                                    <i
                                                                                          class="typcn typcn-edit btn-icon-append"></i>
                                                                              </button>
                                                                              <button type="button"
                                                                                    class="btn btn-danger btn-sm btn-icon-text">
                                                                                    Delete
                                                                                    <i
                                                                                          class="typcn typcn-delete-outline btn-icon-append"></i>
                                                                              </button>
                                                                        </div>
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>#D3</td>
                                                                  <td>social capital compassion social</td>
                                                                  <td>Pei Canaday</td>
                                                                  <td>18 Jun 2019</td>
                                                                  <td>$ 4311</td>
                                                                  <td>2.1K</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <button type="button"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3">
                                                                                    Edit
                                                                                    <i
                                                                                          class="typcn typcn-edit btn-icon-append"></i>
                                                                              </button>
                                                                              <button type="button"
                                                                                    class="btn btn-danger btn-sm btn-icon-text">
                                                                                    Delete
                                                                                    <i
                                                                                          class="typcn typcn-delete-outline btn-icon-append"></i>
                                                                              </button>
                                                                        </div>
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>#D4</td>
                                                                  <td>empower communities thought</td>
                                                                  <td>Gaynell Sharpton</td>
                                                                  <td>23 Mar 2019</td>
                                                                  <td>$ 7743</td>
                                                                  <td>2.7K</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <button type="button"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3">
                                                                                    Edit
                                                                                    <i
                                                                                          class="typcn typcn-edit btn-icon-append"></i>
                                                                              </button>
                                                                              <button type="button"
                                                                                    class="btn btn-danger btn-sm btn-icon-text">
                                                                                    Delete
                                                                                    <i
                                                                                          class="typcn typcn-delete-outline btn-icon-append"></i>
                                                                              </button>
                                                                        </div>
                                                                  </td>
                                                            </tr>
                                                            <tr>
                                                                  <td>#D5</td>
                                                                  <td> Targeted effective; mobilize </td>
                                                                  <td>Audrie Midyett</td>
                                                                  <td>22 Aug 2019</td>
                                                                  <td>$ 2455</td>
                                                                  <td>1.2K</td>
                                                                  <td>
                                                                        <div class="d-flex align-items-center">
                                                                              <button type="button"
                                                                                    class="btn btn-success btn-sm btn-icon-text mr-3">
                                                                                    Edit
                                                                                    <i
                                                                                          class="typcn typcn-edit btn-icon-append"></i>
                                                                              </button>
                                                                              <button type="button"
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
</style>
