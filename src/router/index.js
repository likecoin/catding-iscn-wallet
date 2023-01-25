import { createRouter, createWebHashHistory } from "vue-router";
import List from "@/views/List.vue";
import Create from "@/views/Create.vue";
import BatchCreate from "@/views/BatchCreate.vue";
import Find from "@/views/Find.vue";
import BatchSendLIKE from "@/views/BatchSendLIKE.vue";

const routes = [
  {
    path: "/",
    component: Create,
  },
  {
    path: "/create",
    component: Create,
  },
  {
    path: "/batch-create",
    component: BatchCreate,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/find",
    component: Find,
  },
  {
    path: "/batch-send-like",
    component: BatchSendLIKE,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
