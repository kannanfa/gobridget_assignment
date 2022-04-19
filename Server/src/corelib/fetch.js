import fetch from "node-fetch";
import config from "config";
import logger from "corelib/logger";

class FetchOverride {
  baseURL = config?.NASA_IMAGE?.baseURL;
  generateRequest = async (endpoint, method, body = null) => {
    const URL = `${this.baseURL}${endpoint}`;
    let options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (body) {
      options["body"] = JSON.stringify(body);
    }
    const logdata = { URL, payload: options, response: null, error: null };
    logger.transport({ URL, options });
    return await fetch(URL, options)
      .then((response) => {
        console.log(response)
        logdata.response = response;
        return response.json();
      })
      .then((res) => {
        logdata.response = res;
        logger.transport(logdata);
        return res;
      })
      .catch((ex) => {
        logdata.error = ex;
        logger.transport(logdata);
        logger.error(ex);
        throw ex;
      });
  };
  get = (endpoint) => {
    return this.generateRequest(endpoint, "GET");
  };
  post = (endpoint, body) => {
    return this.generateRequest(endpoint, "GET");
  };
  put = (endpoint, body) => {
    return this.generateRequest(endpoint, "PUT");
  };
  delete = (endpoint, body) => {
    return this.generateRequest(endpoint, "DELETE");
  };
}

export default new FetchOverride();
