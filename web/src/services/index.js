import axios from "axios";
import _ from "lodash";
import qs from 'qs'

const instance = axios.create({
  baseURL: "http://localhost:9000",
});

const removeEmpty = (obj) => {
  for (var propName in obj) {
    if (
      obj[propName] === null ||
      obj[propName] === undefined ||
      obj[propName] === ""
    ) {
      delete obj[propName];
    }
  }
  return obj;
};

export const getTripsApi = (keyword) => {
  const params = removeEmpty({ keyword });
  const config = {
    method: "get",
    url: `/trips`,
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  };
  return instance
    .request(config)
    .then((res) => {
      if (_.size(res.data) >= 0) {
        return res.data;
      }
    })
    .catch((err) => {
      return err.message;
    });
};