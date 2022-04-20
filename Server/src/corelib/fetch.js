import fetch from "node-fetch";
import config from "config";
import logger from "corelib/logger";
import { ApolloError, UserInputError } from "apollo-server-core";

/** FetchOverride -  Common fetch method */
class FetchOverride {
  baseURL = config?.NASA_IMAGE?.baseURL; // base url from the config file

  /**
   * 
   * @param {String} endpoint - Url used to call the API
   * @param {String} method  - Http methods  GET | PUT | POST | DELETE
   * @param {any} body - Payload use for http api call 
   * @returns {Promise}
   */
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
      .then(async (response) => {


        const isTextOrHtml = response.headers.get('content-type').indexOf("text/html") > -1;
        const res = isTextOrHtml ? await response.text():await response.json();
        logdata.response = res;

        if(isTextOrHtml){
          switch(response.status){
            case 404:
                throw new ApolloError('API Not Found', 'NOT_FOUND');
            case 400:
                throw new UserInputError('Required field missing');
            case 500:
            case 502:
            case 503:
            case 504:
                throw new ApolloError('Internal server error', 'INTERNAL_SERVER_ERROR');
          }
        }else{
          const { reason } = res;
          if(reason && reason.length){
            throw new UserInputError(reason);
          }else{
            return res
          }
        }
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
