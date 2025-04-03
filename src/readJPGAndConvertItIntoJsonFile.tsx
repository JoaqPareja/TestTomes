
//Read the PDF convert it into each Json with each Header Information pointing to the desired image

import fs from "fs";

import { createWorker } from 'tesseract.js';
const checkAndAssingImage= [,"LIBERATORS","VANQUISHERS","VINDICTORS","CELESTANT-PRIME", "GARDUS STEEL SOUL","KNIGHT-ARCANUM","KNIGHT-DRACONIS","KNIGHT-JUDICATOR", "KNIGHT-QUESTOR","KNIGHT-RELICTOR", "KNIGHT-VEXILLOR", "LORD-AQUILOR","LORD-CELESTANT", "ON DRACOTH", "BASTIAN CARTHALOS", "LORD-IMPERANT", "LORD-RELICTOR", "LORD-VERITANT", "NEAVER'S COMPANIONS", "NEAVE BLACKTALON", "LORAI", "VANDUS HAMMERHAND", "YNDRASTRA", "DRAKESWORN TEMPLAR", "KARAZAI", "KRONDYS", "ON STARDRAKE", "AETHERWINGS", "ANNIHILATORS", "GRYPH-HOUNDS", "WITH METEORIC GRANDHAMMERS", "CONCUSSORS", 
"DESOLATORS", "FULMINATORS", "TEMPESTORS", "PRAETORS", "PROSECUTORS",  "STORMDRAKE GUARD", "STORMSTRIKE CHARIOT", 
"VANGUARD HUNTERS", "WITH STARSTRIKE JAVELINS", "WITH SHOCK HANDAXES", "WITH HURRICANE CROSSBOWS", "LONGSTRIKE CROSSBOWS", "VIGILORS", "QUESTOR SOULWORN", "CELESTIAN VORTEX", "DAIS ARCANUM", "EVERBLAZE COMET", "ON GRYPH-STALKER",  "LORD-TERMINOS", "RECLUSIANS", "IONUS CRYPTOBORN"
]
const currentTome= "StormcastEternalsTome-"

import {ensureDirectoryExistence} from "../Utils/CheckFolderExists.js"
const   convertImageToText =async(currentNumber: string)=> {
  const worker = await createWorker('eng');
  const ret = await worker.recognize("./Images/"+currentTome+currentNumber+".jpg");
  await worker.terminate();
  return ret.data.text   
}

const convertToJson =async ()=>{//outputJson
  const firstNumberOfUnits=8;
  const lastNumberOfUnits=60;
  checkAndAssingImage.forEach(async (str)=>{
    
  for(let i= firstNumberOfUnits; i<lastNumberOfUnits; i++){
    let index;
    if(i==8||9){
      index="0"+i;
      if(i> 9){
        index=0;
        index=i;
      }
    }
    console.log(index);

    const text= await convertImageToText(index);
    const fileName=`${currentTome}${index}.json`;
    if(text.includes(str)){
       console.log(str)
        const jsonData = {
        filename: `${currentTome}${index}`,
        extracted_text: str,
          };
          ensureDirectoryExistence("Json/"+fileName)
        fs.writeFileSync("Json/"+fileName, JSON.stringify(jsonData, null,2));
        } 
        
  }
})


    // return checkAndAssingImage.forEach((str)=>{
    // if(text.includes(str)){
    //   const jsonData = {
    //     filename: currentImage,
    //     extracted_text: str,
    //       };
    //     }
    //     // fs.writeFileSync("../Json/"+outputJson+".json", JSON.stringify(jsonData, null,2));
    // }
    // })
  
}
// currentImage
convertToJson();
