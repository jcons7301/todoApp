const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const port = 3000;

const dramas = [
  {
    title : "연인",
    content : "남궁민의 사극 로맨스",
  },
  {
    title : "악귀",
    content : "김태리의 서스펜스 호러",
  },
  {
    title : "사랑의 불시착",
    content : "현빈 손예진의 로맨스",
  },
  
]

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', (req, res) => {
  
  res.render('index');
 
})

app.get('/list', (req, res) => {
  res.render('list',{newData : dramas});
});

app.post('/list', (req, res) => {
  const newTitle = req.body.title;
  const newContent = req.body.content;
  dramas.push({
    title : newTitle,
    content:newContent,
  });

  res.render('list', {newData : dramas});
  
 

})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
});