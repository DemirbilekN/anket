const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var CevapSchema = new Schema(
    {
        Uyekod : String,
        Cevaplar:
    [
          {  "soru":{
                type : String,
                required: true
            },
            "cevap":{
                type:String
        }
          }
    ]
    }
);

const cevap = mongoose.model('Cevap',CevapSchema);
module.exports = cevap;