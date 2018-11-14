  export const apiFun = (indexAxios, qs) => {
    var apiObj = {}

    apiObj.ratings = (params) => { return indexAxios.get(`api/ratings`, {params}).then(function(res) {
      return res.data
    })}

    // users-ratings
    apiObj.usersRatings = params => { return indexAxios.post(`api/usersRatings`, qs.stringify(params)).then(function(res) {
      return res.data
    })}

    // 获取佛山地图的json
    apiObj.foshanMap = (params) => { return indexAxios.get(`api/foshanMap`, {params}).then(function(res) {
      return res.data
    })}

    // 底部的icon图json
    apiObj.footerIcon = params => { return indexAxios.post(`api/footerIcon`, qs.stringify(params)).then(function(res) {
      return res.data
    })}

    return apiObj
  }
  
