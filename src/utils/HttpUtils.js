let baseUrl = "http://testapi.zhixingtcc.com";//测试地址

export default class HttpUtils {
    static get(url, params) {
        //拼接参数
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }

        return new Promise((resolve, reject) => {
            fetch(baseUrl + url, {
                timeout: 15000,
            })
                .then(response => {
                    resolve(response.json())
                })
                .catch(error => {
                    reject(error);
                })
        })
    }

    static post(url, params) {
        let paramsStr = "";
        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]));
            paramsStr += paramsArray.join('&')
        }

        return new Promise((resolve, reject) => {
            fetch(baseUrl + url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: paramsStr
            })
                .then(response => {
                    resolve(response.json())
                })
                .catch(error => {
                    reject(error)
                })
        })
    }
}