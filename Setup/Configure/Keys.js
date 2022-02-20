import {ALLKeys} from "./Development.js";
import {ALLProKeys} from "./Production.js";

export default function keys(){
    if(process.env.NODE_ENV!=='production'){
      return  ALLKeys;
   }else{
      return  ALLProKeys;
   
   }
}
