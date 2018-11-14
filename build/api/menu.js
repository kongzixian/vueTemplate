//navICON图json
const navIconData=require('../../static/json/navLists.json')
const navIconRatings=navIconData.imgDatas

//subNavICON图json
const subNavIconData=require('../../static/json/subNavLists.json')
const subNavIconRatings=subNavIconData.imgDatas

//recommends图json
const recommendsData=require('../../static/json/recommends.json')
const recommendsRatings=recommendsData.imgDatas

//猜你喜欢的清单json
const likeListsData=require('../../static/json/likeLists.json')
const likeListsRatings=likeListsData.imgDatas

//树结构的清单json
const treeData=require('../../static/json/treeData.json')
const treeDataRatings=treeData.treeDatas

//附近的清单json
const nearbyData=require('../../static/json/nearby.json')

//附近的tag清单
const tagListsRatings=nearbyData.tagLists
//附近的详列表清单
const nearbyListsRatings=nearbyData.nearbyLists
//附近的种类列表清单
const moreKindListsRatings=nearbyData.moreKindLists

//用户的清单json
const myUserData=require('../../static/json/myUser.json')
//用户的列表清单
const myUserListsRatings=myUserData.myUserLists
exports.menu = function(app){
  return [
      // app.post('/api/navIcon',(req,res)=>{
      //   res.json({
      //     error:0,
      //     data:navIconRatings
      //   })
      // }),

      app.get('/api/navIcon',(req,res)=>{
        res.json({
          error:0,
          data:navIconRatings
        })
      }),

      app.get('/api/subNavIcon',(req,res)=>{
        res.json({
          error:0,
          data:subNavIconRatings
        })
      }),

      app.get('/api/recommends',(req,res)=>{
        res.json({
          error:0,
          data:recommendsRatings
        })
      }),


      app.get('/api/likeLists',(req,res)=>{
        res.json({
          error:0,
          data:likeListsRatings
        })
      }),

      app.get('/api/treeData',(req,res)=>{
        res.json({
          error:0,
          data:treeDataRatings
        })
      }),
      app.get('/api/tagLists',(req,res)=>{
        res.json({
          error:0,
          data:tagListsRatings
        })
      }),
      app.get('/api/nearbyLists',(req,res)=>{
        res.json({
          error:0,
          data:nearbyListsRatings
        })
      }),
      app.get('/api/moreKindLists',(req,res)=>{
        res.json({
          error:0,
          data:moreKindListsRatings
        })
      }),
      app.get('/api/myUserLists',(req,res)=>{
        res.json({
          error:0,
          data:myUserListsRatings
        })
      })
    ]
}
