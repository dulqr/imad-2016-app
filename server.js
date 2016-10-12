var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles= {
    'article-one': {
    title: 'article one|gokz',
    heading: 'content of ma article!',
    date: 'october 10 2016',
    content:
        `<p>
            hey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first article. hey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first article.hey..!itz me yours gokul..this is ma first article.
        </p>
        <p>hey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first article. hey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first article.hey..!itz me yours gokul..this is ma first article.
        </p>
        <p>hey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first article. hey..!itz me yours gokul..this is ma first articlehey..!itz me yours gokul..this is ma first article.hey..!itz me yours gokul..this is ma first article.
        </p>`
},
    'article-two':{
    title: 'article Two|gokz',
    heading: 'content of ma 2nd  article!',
    date: 'october 16 2019',
    content:
        `<p>
            hey..!itz me yours gokul..this is ma second article.
         </p>`
},
    'article-three':{
    title: 'article Three|gokz',
    heading: 'content of ma 3rd article!',
    date: 'october 5 2015',
    content:
        `<p>
            hey..!itz me yours gokul..this is ma Third article.
         </p>`
}
};

function createTemplate(data) {
   var title=data.title;
   var heading=data.heading;
   var date=data.date;
   var content=data.content;
   
   var htmlTemplate = `
            <html>
                <head>
                    <title>
                        ${title}
                    </title>
                    <meta name="viewport" content="width=device-width,initial-scale=1"/>
                    <link href="/ui/style.css" rel="stylesheet" />
                </head>
                <body>
                    <div class="hume">
                <div>
                    <a href="/">HOME</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <hr/>
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




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName',function(req,res){
    //articleName==article-one
    //articles[articleName]=={} content object for article one
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

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
