
//Read the PDF convert it into each Json with each Header Information pointing to the desired image

import fs from "fs";

import { createWorker } from 'tesseract.js';
const checkAndAssingImage= [,"LIBERATORS","VANQUISHERS","VINDICTORS","CELESTANT-PRIME", "GARDUS STEEL SOUL","KNIGHT-ARCANUM","KNIGHT-DRACONIS","KNIGHT-JUDICATOR", "KNIGHT-QUESTOR","KNIGHT-RELICTOR", "KNIGHT-VEXILLOR", "LORD-AQUILOR","LORD-CELESTANT", "ON DRACOTH", "BASTIAN", "LORD-IMPERATANT", "LORD-RELICTOR", "LORD-VERITANT", "NEAVE'S COMPANIONS", "BLACKTALON", "LORAI", "VANDUS HAMMERHAND", "YNDRASTRA", "DRAKESWORN TEMPLAR", "KARAZAI", "KRONDYS", "ON STARDRAKE", "AETHERWINGS", "ANNIHILATORS", "GRYPH-HOUNDS", "WITH METEORIC GRANDHAMMERS", "CONCUSSORS", 
"DESOLATORS", "FULMINATORS", "TEMPESTORS", "PRAETORS", "PROSECUTORS",  "STORMDRAKE GUARD", "STORMSTRIKE CHARIOT", 
"VANGUARD HUNTERS", "WITH STARSTRIKE JAVELINS", "WITH SHOCK HANDAXES", "WITH HURRICANE CROSSBOWS", "LONGSTRIKE CROSSBOWS", "VIGILORS", "SOULWORN", "CELESTIAN VORTEX", "DAIS ARCANUM", "ON GRYPH-STALKER",  "LORD-TERMINOS", "RECLUSIANS", "IONUS CRYPTOBORN"
]
const currentTome= "StormcastEternalsTome-"

import {ensureDirectoryExistence} from "../Utils/CheckFolderExists.js"
const   convertImageToText =async(currentNumber: string)=> {
  const worker = await createWorker('eng');
  const ret = await worker.recognize("./public/Images/"+currentTome+currentNumber+".jpg");
  await worker.terminate();
  return ret.data.text   
}

const convertToJson =async ()=>{//outputJson
  const firstNumberOfUnits=8;
  const lastNumberOfUnits=60;
  let index:string|number;

  checkAndAssingImage.forEach(async (str)=>{
    const eachTextOfEachBattleTomeCard:string=str!//https://stackoverflow.com/questions/45194964/how-to-assign-string-undefined-to-string-in-typescript
  for(let i= firstNumberOfUnits; i<=lastNumberOfUnits; i++){
    if(i==8||9){
      index="0"+i;
      if(i> 9){
        index=0;
        index=i;
      }
    }
    const currentImageTextFromConvertedPDF= await convertImageToText(index.toString());
    const fileName=`${currentTome}${index}.json`;
    if(currentImageTextFromConvertedPDF.includes(eachTextOfEachBattleTomeCard)){
       console.log(eachTextOfEachBattleTomeCard)
        const jsonData = {
        filename: `${currentTome}${index}`,
        extracted_text: eachTextOfEachBattleTomeCard,
          };
          ensureDirectoryExistence("Json/"+fileName)
        fs.writeFileSync("Json/"+fileName, JSON.stringify(jsonData, null,2));
        } 
  }
})
  
}
convertToJson();
