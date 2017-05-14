/**
 * Created by aditya on 14/5/17.
 */

import apiai from "apiai";

const CLIENT_ACCESS_TOKEN = "95aca3648325466ebdec308acdb40d89";

const app = apiai(CLIENT_ACCESS_TOKEN);

function APIAI(sessionId) {
    this.sesstionId = sessionId;
}

APIAI.prototype.textRequest = function (query, options) {
    return new Promise((resolve, reject) => {
        options.sessionId = this.sesstionId;
        const request = app.textRequest(query, options);
        request.on("response", function (response) {
            debugger;
            if (response.status.code === 200) {
                resolve(response);
            } else {
                reject(new Error(response));
            }
        });
        request.on("error", function (error) {
            console.log(error);
            reject(error);
        });
        request.end();
    });
};

export default APIAI;
