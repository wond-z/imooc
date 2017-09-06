var express = require('express')
var path = require('path')
var serveStatic = require('serve-static') // 新版express4中，要独立安装static
var bodyParser = require('body-parser')   // bodyParser 已经不再与Express捆绑，需要独立安装
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
// app.use(express.bodyParser())
// app.use(express.static(path.join(__dirname, 'bower_components')))
app.use(bodyParser.urlencoded())          // 格式化body中的表单
app.use(serveStatic('bower_components'))  // 创建静态路径
app.listen(port)

console.log('Server started on ' + port)

// index page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'index page',
    movies: [{
      title: '机械战警',
      _id: 1,
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
    },{
      title: '机械战警',
      _id: 2,
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
    },{
      title: '机械战警',
      _id: 3,
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
    },{
      title: '机械战警',
      _id: 4,
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
    },{
      title: '机械战警',
      _id: 5,
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
    },{
      title: '机械战警',
      _id: 6,
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
    }]
  });
});

// detail page
app.get('/movie/:id', (req, res) => {
  res.render('detail', {
    title: 'detail page',
    movie: {
      doctor: '何塞趴地利亚',
      country: '美国',
      title: '机械战警',
      year: 2014,
      poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
      language: '英语',
      flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
      summary: '这是一部科幻片'
    }
  });
});

// list page
app.get('/admin/list', (req, res) => {
  res.render('list', {
    title: 'learning nodejs list page',
    movies: [{
      title: '机械战警',
      _id: 1,
      doctor: '何塞趴地利亚',
      country: '美国',
      year: 2014,
      language: '英语',
      flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf'
    }]
  });
});

// list page
app.get('/admin/movie', (req, res) => {
  res.render('admin', {
    title: 'admin page 后台录入页',
    movie: {
      title: '',
      doctor: '',
      country: '',
      year: '',
      poster: '',
      flash: '',
      summary: '',
      language: ''
    }
  });
});