var datatable = require("../data/datatable");
var waitlist = require("../data/waitlist");


module.exports = function(app){
    app.get("/api/tables", function(req, res) {
        res.json(datatable)
    })
    app.get("/api/waitlist", function(req, res) {
        res.json(waitlist)
    })

    app.post("/api/tables", function(req, res) {
        if (datatable.length < 5) {
            datatable.push(req.body);
            return res.json(true);
        } else {
            waitlist.push(req.body);
            return res.json(false);
        }
    })
    // clear post

}