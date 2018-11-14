const appData = require('../../static/json/data.json')
const ratings = appData.seller

const usersData = require('../../static/json/users.json')
const usersRatings = usersData.seller

//获取佛山地图的json
const foshanData=require('../../static/json/foshan.json')
const foshanRatings=foshanData.fshMap

//底部的icon图json
const footerIconData=require('../../static/json/footerIcon.json')
const footerIconRatings=footerIconData.imgDatas

exports.menu2 = function(app){
  return [
      app.get('/api/ratings',(req, res) => {
        res.json({
          errno: 0,
          data: ratings
        })
      }),
      app.post('/api/usersRatings',(req,res)=>{
        res.json({
          error:0,
          data:usersRatings
        })
      }),
      app.get('/api/foshanMap',(req,res)=>{
        res.json({
          error:0,
          data:foshanRatings
        })
      }),

      app.post('/api/footerIcon',(req,res)=>{
        res.json({
          error:0,
          data:footerIconRatings
        })
      }),

      
    ]
}
