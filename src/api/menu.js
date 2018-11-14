  export const apiFun = (indexAxios, qs) => {
    var apiObj = {}
    apiObj.navIconData = (params) => { return indexAxios.get(`api/navIcon`, {params}).then(function(res) {
      return res.data
    })}

    // subNavICON图json
    apiObj.subNavIcon = (params) => { return indexAxios.get(`api/subNavIcon`, {params}).then(function(res) {
      return res.data
    })}

    // recommends图json
    apiObj.recommends = (params) => { return indexAxios.get(`api/recommends`, {params}).then(function(res) {
      return res.data
    })}

    // 猜你喜欢的清单json
    apiObj.likeLists = (params) => { return indexAxios.get(`api/likeLists`, {params}).then(function(res) {
      return res.data
    })}

    // 树结构的清单json
    apiObj.treeData = (params) => { return indexAxios.get(`api/treeData`, {params}).then(function(res) {
      return res.data
    })}

    // 附近的tag清单
    apiObj.tagLists = (params) => { return indexAxios.get(`api/tagLists`, {params}).then(function(res) {
      return res.data
    })}

    // 附近的详列表清单
    apiObj.nearbyLists = (params) => { return indexAxios.get(`api/nearbyLists`, {params}).then(function(res) {
      return res.data
    })}

    // 附近的种类列表清单
    apiObj.moreKindLists = (params) => { return indexAxios.get(`api/moreKindLists`, {params}).then(function(res) {
      return res.data
    })}

    // 用户的列表清单
    apiObj.myUserLists = (params) => { return indexAxios.get(`api/myUserLists`, {params}).then(function(res) {
      return res.data
    })}









    apiObj.postMatchSubmit = params => { return indexAxios.post(`AccountInfo/addpartnetaccount`, qs.stringify(params)).then(function(res) {
      return res.data
    })}



    return apiObj
  }
  
