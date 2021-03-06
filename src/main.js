import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faList,
  faUsers,
  faChartPie,
  faCalendarCheck,
  faSignOutAlt,
  faSearch,
  faEnvelope,
  faBell,
  faUser,
  faCommentAlt,
  faPaperclip,
  faCheckCircle,
  faEdit,
  faTrashAlt,
  faChevronLeft,
  faEye,
  faThLarge,
  faThList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import VueMeta from "vue-meta";
import "./config/axios";
import './registerServiceWorker'

library.add(
  faBars,
  faList,
  faUsers,
  faChartPie,
  faCalendarCheck,
  faSignOutAlt,
  faSearch,
  faEnvelope,
  faBell,
  faUser,
  faCommentAlt,
  faPaperclip,
  faCheckCircle,
  faEdit,
  faTrashAlt,
  faChevronLeft,
  faEye,
  faThLarge,
  faThList
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("v-select", vSelect);
Vue.use(VueSweetalert2);
Vue.use(VueMeta);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
