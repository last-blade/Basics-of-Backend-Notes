const express = require('express');
const app = express();
const path = require('path');

const fs = require('fs');
const { request } = require('http');

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))



app.get('/', function(request, response){
    fs.readdir(`./Tasks`, function(err, Tasks){ // readdir-> read directory or folder
        console.log(Tasks);
        response.render("index.ejs", {files: Tasks});
    })
});

app.get('/task/:taskName', function(request, response){
    fs.readFile(`./Tasks/${request.params.taskName}`, "utf-8", function(err, data){
        console.log(data);
        response.render('showTaskDescription', {name: request.params.taskName, filedata: data});
    })
});

app.get(`/edit/:taskName`, function(request, response){
    response.render('edit.ejs', {tName: request.params.taskName});
});

app.post('/edit', function(request, response){
    console.log(request.body);
    fs.rename(`./Tasks/${request.body.prevName}`, `./Tasks/${request.body.newName}`, function(err){
        response.redirect("/");
    })
})


app.get('/delete/:taskName', (req, res) => {
    const taskName = req.params.taskName;
    const taskFilePath = path.join('/Tasks', taskName);
    res.render('delete.ejs', {name: req.params.taskName});

    fs.unlink(taskFilePath, (err) => {
        if (err) return res.status(500).send('Error deleting task');
        res.redirect('/');
    });
});


app.post('/create', function(req, res){
    console.log(req.body);
    fs.writeFile(`./Tasks/${req.body.title.split(' ').join('')}`, req.body.description, function(err){
        res.redirect('/')
    });
});



app.listen(3000);