require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var apiRoutes=express.Router();
/*首页*/
//导航数据
var navData = require("../mock/navList.json");
apiRoutes.get('/navList',function (req,res) {
  console.log(req)
  res.json(navData);
});
//推荐
var getData = require("../mock/getData.json");
apiRoutes.get('/getData',function (req,res) {
  res.json(getData);
  console.log(req)
});
  //首页大家都在买
  var productList = require("../mock/product.json");
  apiRoutes.get('/productList',function (req,res) {
    res.json(productList);
  });
//居家
var jujia = require("../mock/jujia.json");
  apiRoutes.get('/jujia3',function (req,res) {
    res.json(jujia);
  });
var jujiapic = require("../mock/jujiapic.json");
  apiRoutes.get('/jujiapic3',function (req,res) {
    res.json(jujiapic);
  });
//美妆
var meizhuang = require("../mock/meizhuang.json");
  apiRoutes.get('/jujia13',function (req,res) {
    res.json(meizhuang);
  });
//个户
var gehu = require("../mock/gehu.json");
  apiRoutes.get('/jujia12',function (req,res) {
    res.json(gehu);
  });
var gehupic = require("../mock/gehupic.json");
apiRoutes.get('/jujiapic12',function (req,res) {
  res.json(gehupic);
});
//箱包
var xiangbao = require("../mock/xiangbao.json");
  apiRoutes.get('/jujia8',function (req,res) {
    res.json(xiangbao);
  });
var xiangbaopic = require("../mock/xiangbaopic.json");
  apiRoutes.get('/jujiapic8',function (req,res) {
    res.json(xiangbaopic);
  });
//家电
var jiadian = require("../mock/jiadian.json");
  apiRoutes.get('/jujia9',function (req,res) {
    res.json(jiadian);
  });
//厨房
var chufang = require("../mock/chufang.json");
  apiRoutes.get('/jujia4',function (req,res) {
    res.json(chufang);
  });
var chufangpic = require("../mock/chufangpic.json");
  apiRoutes.get('/jujiapic4',function (req,res) {
    res.json(chufangpic);
  });
//配饰
var peishi = require("../mock/peishi.json");
  apiRoutes.get('/jujia11',function (req,res) {
    res.json(peishi);
  });
var peishipic = require("../mock/peishipic.json");
  apiRoutes.get('/jujiapic11',function (req,res) {
    res.json(peishipic);
  });
//零食
var lingshi = require("../mock/lingshi.json");
  apiRoutes.get('/jujia14',function (req,res) {
    res.json(lingshi);
  });
var lingshipic = require("../mock/lingshipic.json");
  apiRoutes.get('/jujiapic14',function (req,res) {
    res.json(lingshipic);
  });
//母婴
var muying = require("../mock/muying.json");
  apiRoutes.get('/jujia7',function (req,res) {
    res.json(muying);
  });
var muyingpic = require("../mock/muyingpic.json");
  apiRoutes.get('/jujiapic7',function (req,res) {
    res.json(muyingpic);
  });
//家具
var jiaju = require("../mock/jiaju.json");
  apiRoutes.get('/jujia5',function (req,res) {
    res.json(jiaju);
  });
var jiajupic = require("../mock/jiajupic.json");
  apiRoutes.get('/jujiapic5',function (req,res) {
    res.json(jiajupic);
  });

/*分类*/
var classData = require("../mock/classData.json");
apiRoutes.get('/classData',function (req,res) {
  res.json(classData);
  console.log(req)
});
//我的->足迹
var zuji = require("../mock/zuji.json");
apiRoutes.get('/zujiList',function (req,res) {
  res.json(zuji);
  console.log(req)
});

//分类-品牌
var CategoryBrand = require("../mock/CategoryBrand.json");
apiRoutes.get('/CategoryBrand',function (req,res) {
  res.json(CategoryBrand);
  console.log(req)
});
/*购物车*/
var car = require("../mock/car.json");
apiRoutes.get('/car',function (req,res) {
  res.json(car);
  console.log(req)
});


// 调用api 
app.use('/api',apiRoutes)

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}



