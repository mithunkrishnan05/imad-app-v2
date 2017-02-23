var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
 'article-one':{
    title:'article-one!mithun1',
    heading:'article-one',
    date:'jan 5 2017',
    content:`<p>
                poda podapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodap
                odapodapodapodapodapodapoda
                podapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapo</p>
                <p>dapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodap
                odapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapoda
                podapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapoda
                podapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapoda
                podapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapoda
                podapodapodapodapodapodapodapodapodapo
                dapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodap
                odapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapod
                apodapodapodapodapodapodapodapodapodapodapodapodapodapodapoda</p>`
},
'article-two':{
    title:'article-one!mithun1',
    heading:'article-two',
    date:'feb 5 2017',
    content:`<p>
                
                dapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodap
                odapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapodapod
                apodapodapodapodapodapodapodapodapodapodapodapodapodapodapoda</p>`
},
'article-three':{
    title:'article-three!mithun1',
    heading:'article-three',
    date:'nov 5 2017',
    content:`<p>
                prince</p>`
},
};

function createTemplate (data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>${title}</title>
        <meta name ="viewport" content="width=device-width,initials-scale=1" />
         <link href="/ui/style.css" rel="stylesheet" /> 
    </head>
    <body>
        <div class="container">
            <div>
             <a href='/'>home</a>    
             </div>
        <hr/>
        <h3>
        ${heading}
        </h3>
            <div>
            ${date}
            </div>
            <div>
            ${content}
                 </div>  
         </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/:articleName', function (req, res) {
    var articleName= req.params.articleName;
  res.send(articles(articleName));
});

                    /* INITIAL CODE********************************************************
                    /*app.get('/article-one',function (req, res) {
                       res.send(createTemplate(articles[articleName]));
                    });
                    
                    app.get('/article-two',function (req, res){
                         res.send(createTemplate(articletwo));
                    });
                    
                    app.get('/article-three',function (req, res){
                      res.send(createTemplate(articlethree));//
                    });*************************************************************************/
                    
                    
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
