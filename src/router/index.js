import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Premium/HomeView.vue";

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/",
    name: "dashboard",
    component: Home,
  },
  {
    path: "/dashboard",
    redirect: "/",
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables-and-lists",
    name: "tables",
    component: () => import("@/views/Premium/TablesListsView.vue"),
  },
  {
    meta: {
      title: "Forms Base",
    },
    path: "/forms",
    name: "forms",
    component: () => import("@/views/FormsView.vue"),
  },
  {
    meta: {
      title: "Forms Advanced",
    },
    path: "/forms-advanced",
    name: "forms-advanced",
    component: () => import("@/views/Premium/FormsView.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Premium/ProfileView.vue"),
  },
  {
    meta: {
      title: "Ui Base",
    },
    path: "/ui",
    name: "ui",
    component: () => import("@/views/UiView.vue"),
  },
  {
    meta: {
      title: "Ui Advanced",
    },
    path: "/ui-advanced",
    name: "ui-advanced",
    component: () => import("@/views/Premium/UiView.vue"),
  },
  {
    meta: {
      title: "Sidebar styles",
    },
    path: "/styles",
    name: "style",
    component: () => import("@/views/Premium/StyleView.vue"),
  },
  {
    meta: {
      title: "Pricing layout",
    },
    path: "/pricing",
    name: "pricing",
    component: () => import("@/views/Premium/PricingView.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/Premium/LoginView.vue"),
  },
  {
    meta: {
      title: "Sign up",
    },
    path: "/signup",
    name: "signup",
    component: () => import("@/views/Premium/SignupView.vue"),
  },
  {
    meta: {
      title: "Remind Password",
    },
    path: "/remind",
    name: "remind",
    component: () => import("@/views/Premium/RemindView.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
