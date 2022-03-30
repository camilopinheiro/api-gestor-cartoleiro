var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    res.send("relô word");
});


app.get("/times", (req, res, next) => {
    res.json(["corinthians", "cruzeiro"]);
});

app.get("/times/cruzeiro", (req, res, next) => {
    res.json({"campeao-mundial": false});
});


app.get("/times/:time", (req, res, next) => {
    if(req.params.time!=="cruzeiro"&&req.params.time!=="palmeiras")
    res.json({"campeao-mundial": true});
    else
    res.json({"campeao-mundial": false});
});


app.listen(3000, () => {
 console.log("Servidor rodando na porta 3000");
});