// ===============================================================================
// LOAD DATA
// We are linking our routes to a "data" source.
// This data sources hold array of information on friend data
// ===============================================================================

var friendData = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================
module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    app.get("/api/friends",function(req,res){
        console.log(friendData);
        res.json(friendData);
    });

    // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the JavaScript array friendData.
    app.post("/api/friends",function(req,resp){        
        //console.log("req.body=",req.body);
        var scoresArray=[];
        var scoresArrayLength=req.body.scores.length;
        for(let i=0;i<scoresArrayLength;i++){
            //console.log(req.body.scores[i]);
            scoresArray.push(parseInt(req.body.scores[i]));
        }
        console.log(scoresArray);7
    });
}

