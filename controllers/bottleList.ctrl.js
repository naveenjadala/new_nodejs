const BottleList = require('../models/bottleList.model');
const prolists = {
    
    get: (req, res) => {

        BottleList.find() 
        .exec()
        .then(function(obj){
            res.status(200);
            res.json(obj);
        })
        .catch(function(err){
            res.status(500);
            res.send("Internal Server Error");
        })
    
    },
    
    save: (req ,res) => {
        var product =new BottleList(req.body);
        product.save(function (err, saveproduct) {
            if(err) {
                res.status(500);
                res.send(err+"Insdfshdgfhjdsf");
            } else {
                res.status(200);
                res.json(saveproduct);
            }
        });
    },

    delete: (req,res) => {
        let id= req.params.id;

        BottleList.findByIdAndRemove(id,function(err) {
            if(err) {
                res.status(500);
                res.send("Internal Server error");
            } else {
                res.status(204);
                res.send();
            }
        })

    }
}
module.exports = prolists;