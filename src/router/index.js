import { createWebHistory, createRouter } from "vue-router";
// import ContactBook from "@/views/ContactBook.vue";
const routes = [
      {
            path: "/",
            name: "trangchu",
            component: () => import("@/components/trangchu.vue")
      },
      {
            path: "/login",
            name: "login",
            component: () => import("@/components/login.vue")
      },
      {
            path: "/thongke",
            name: "thongke",
            component: () => import("@/components/thongke.vue")
      },
      {
            path: "/taikhoan",
            name: "taikhoan",
            component: () => import("@/components/taikhoan.vue")
      },
      {
            path: "/dattour",
            name: "dattour",
            component: () => import("@/components/dattour.vue")
      },
      {
            path: "/diadanh",
            name: "diadanh",
            component: () => import("@/components/diadanh.vue")
      },
      {
            path: "/khuyenmai",
            name: "khuyenmai",
            component: () => import("@/components/khuyenmai.vue")
      },
      {
            path: "/lehoi",
            name: "lehoi",
            component: () => import("@/components/lehoi.vue")
      },
      {
            path: "/lichtrinh",
            name: "lichtrinh",
            component: () => import("@/components/lichtrinh.vue")
      },
      {
            path: "/lienhe",
            name: "lienhe",
            component: () => import("@/components/lienhe.vue")
      },
      {
            path: "/nkht",
            name: "ngaykhoihanhtour",
            component: () => import("@/components/nkht.vue")
      },
      {
            path: "/tinhthanh",
            name: "tinhthanh",
            component: () => import("@/components/tinhthanh.vue")
      },
      {
            path: "/tour",
            name: "tour",
            component: () => import("@/components/tour.vue")
      },
      {
            path: "/tourNB",
            name: "tournb",
            component: () => import("@/components/tourNB.vue")
      },
      {
            path: "/hongtinhanhkhach",
            name: "thongtinhanhkhach",
            component: () => import("@/components/tthk.vue")
      },
      {
            path: "/vetour",
            name: "vetour",
            component: () => import("@/components/vetour.vue")
      }
];
const router = createRouter({
      history: createWebHistory(import.meta.env.BASE_URL),
      routes,
});
export default router;