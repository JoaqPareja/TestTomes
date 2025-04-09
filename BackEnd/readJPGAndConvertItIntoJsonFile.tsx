
//Read the PDF convert it into each Json with each Header Information pointing to the desired image

import fs from "fs";

import { createWorker } from 'tesseract.js';
const checkAndAssingImage= ["LIBERATORS","VANQUISHERS","VINDICTORS","CELESTANT-PRIME", "GARDUS STEEL SOUL","KNIGHT-ARCANUM","KNIGHT-DRACONIS","JUDICATOR", "QUESTOR","RELICTOR", "VEXILLOR", "LORD-AQUILOR","LORD-CELESTANT", "ON DRACOTH", "BASTIAN", "LORD-IMPERATANT", "LORD-RELICTOR", "LORD-VERITANT", "NEAVE'S", "BLACKTALON", "LORAI", "VANDUS", "YNDRASTA", "DRAKESWORN", "KARAZAI", "KRONDYS", "ON STARDRAKE", "AETHERWINGS", "ANNIHILATORS", "GRYPH-HOUNDS", "WITH METEORIC GRANDHAMMERS", "CONCUSSORS", 
"DESOLATORS", "FULMINATORS", "TEMPESTORS", "PRAETORS", "PROSECUTORS",  "STORMDRAKE", "STORMSTRIKE", 
"HUNTERS", "STARSTRIKE JAVELINS", "SHOCK HANDAXES", "HURRICANE CROSSBOWS", "LONGSTRIKE CROSSBOWS", "VIGILORS", "SOULWORN", "CELESTIAN VORTEX", "DAIS ARCANUM","COMET", "GRYPH-STALKER",  "LORD-TERMINOS", "RECLUSIANS", "IONUS CRYPTOBORN"
]
const currentTome= "StormcastEternalsTome"
// function filterItems(arr: any[], query: string) {
//   return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
// }
import {ensureDirectoryExistence} from "../Utils/CheckFolderExists.js"
const   convertImageToText =async(number:number|string)=> {
  const worker = await createWorker('eng');
  // const regex= regex.filter(name()=>.test(name) )
  // const re = /ab+c/;

  const ret = await worker.recognize("./public/Images/"+currentTome+"-"+number +".jpg");//https://lenguajejs.com/javascript/modulos/dynamic-import/
  await worker.terminate();
  return ret.data.text   
}

const convertToJson =async ()=>{//outputJson
  const firstNumberOfUnits=8;
  const lastNumberOfUnits=61;
  let index:string|number;
  let arr=[];
  checkAndAssingImage.forEach(async (str)=>{
    const eachTextOfEachBattleTomeCard:string=str!//https://stackoverflow.com/questions/45194964/how-to-assign-string-undefined-to-string-in-typescript
  for(let i= firstNumberOfUnits; i<=lastNumberOfUnits;i++){
    index=i;
    if(i==8||i==9){
      index="0"+i;
      }
    if(i> 9){
      index=0;
      index=i;
    }
    const currentImageTextFromConvertedPDF= await convertImageToText(index.toString());
    if(currentImageTextFromConvertedPDF.includes(eachTextOfEachBattleTomeCard)){
      index =Number(index) -1; // Assign it -1 as the number comes up always +1
      if(i==8||i==9){
        index="0"+i;
        }
        if(i> 9){
          index=0;
          index=i;
        }
      console.log(eachTextOfEachBattleTomeCard)
      // console.log(fileName);
      console.log(index)
        // const jsonData = {
          arr.push({filename: `${currentTome}-${index}`,
            extracted_text: eachTextOfEachBattleTomeCard})
        
          // };
        } 
  }
    const fileName=`Json/${currentTome}.json`;

  ensureDirectoryExistence(fileName)
  console.log(arr)
  fs.writeFileSync(fileName, JSON.stringify(arr, null,2));

})
  
}
convertToJson();
