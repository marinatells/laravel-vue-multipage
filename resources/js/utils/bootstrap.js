import lodash from "lodash";
import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
window.axios = axios;
window._ = lodash;
