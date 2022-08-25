import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 3Zo7JykFGAdafXvbm0aJSJ8Y6iKkRhK6SF_5IkgN5FPnLYcWjOzDeFC9x7SIvDwrP7YFmiuLeuUx_8foFOJze7WxsvrYd2xYr_Eq7H1_OtxH77AIJMlEN-XDo_kFY3Yx",
  },
});
