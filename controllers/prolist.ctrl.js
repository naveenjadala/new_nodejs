var prolist = {
    
    get: function( req, res) {
        var pro = [{id :1,name:"lisa ann",age:42},{id :2,name:"sofidee",age:35},{id :4 ,name:"mia kalifa",age:25}];
        res.json(pro);
    }
};

module.exports = prolist;