class prolists {
    
    proListFemale( req, res) {
        var listFemale = [{id :1,name:"lisa ann",age:42},
        {id :2,name:"sofidee",age:35},
        {id :4 ,name:"mia kalifa",age:25}
    ];
    
        res.json(listFemale);
    }

    proListMale(req , res) {
        var listMale = [
            {id:1 , name:"danny D", age: 38},
            {id:2 , name:"chriss Roy", age: 40},
            {id:3 , name:"chiris hemsworth", age: 39}
        ];
        res.json(listMale);
    }

    proListFemaleone(req , res) {

        var listFemale = [{id :1,name:"lisa ann",age:42},
        {id :2,name:"sofidee",age:35},
        {id :4 ,name:"mia kalifa",age:25}
    ];
    
        var id = req.params.id;
        var list;

        for(var i =0 ;i< listFemale.length;i++) {
            if(listFemale[i].id == id){
                list = listFemale[i];
            }
        }

        if(list) {
            res.json(list);
        } else {
            res.send("no data found");
        }
    };

    addProItem(req ,res) {

        var listFemale = [{id :1,name:"lisa ann",age:42},
        {id :2,name:"sofidee",age:35},
        {id :4 ,name:"mia kalifa",age:25}
    ];

    listFemale.push(req.body);
    res.send(req.body);
    console.log(listFemale);
        
    }

}
module.exports = new prolists;