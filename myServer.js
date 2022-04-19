const express=require('express')


const port = 3000
const app=express();


app.get('/',(req, res) => {
    res.sendfile(__dirname+"/mainpage.html")
})

app.get('/',(req, res) => {
    res.sendfile(__dirname+"/2page.html")
})

app.get('/',(req, res) => {
    res.sendfile(__dirname+"/moomknight.html")
})
app.get('/',(req, res) => {
    res.sendfile(__dirname+"/showshenko.html")
})
app.get('/',(req, res) => {
    res.sendfile(__dirname+"/spiderman.html")
})
app.get('/',(req, res) => {
    res.sendfile(__dirname+"/uncharted.html")
})
app.get('/',(req, res) => {
    res.sendfile(__dirname+"/account.html")
})



app.listen(port, function(){
    console.log(`app started on http://localhost:${port}`)
})