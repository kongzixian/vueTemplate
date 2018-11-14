  //建立模仿请求后台的json
  const express = require('express')
  const app = express()
  
  const apiRouter = express.Router()
  app.use('http://localhost:8080/api',apiRouter)

 // menu
 const menuFun = require('./menu.js').menu
 const menu2Fun = require('./menu2.js').menu2


  exports.api = function(app){
    var menuArr = menuFun(app)
    var menu2Arr = menu2Fun(app)
    const apiArr = []
     // 合并
    apiArr.push(...menuArr,...menu2Arr)
    return [...apiArr]
    
  } 
