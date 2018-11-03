class prolists {
    
    proListFemale( req, res) {
        var pro = [{id :1,name:"lisa ann",age:42},
        {id :2,name:"sofidee",age:35},
        {id :4 ,name:"mia kalifa",age:25}
    ];
        res.json(pro);
    }

    proListMale(req , res) {
        var pro = [
            {id:1 , name:"danny D", age: 38},
            {id:2 , name:"chriss Roy", age: 40},
            {id:3 , name:"chiris hemsworth", age: 39}
        ];
        res.json(pro);
    }

}
module.exports = new prolists;