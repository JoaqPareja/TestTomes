
//Read the PDF convert it into each Json with each Header Information pointing to the desired image

import fs from "fs";

import { createWorker } from 'tesseract.js';
const checkAndAssingImage= ["VANQUISHERS","LIBERATORS","CELESTANT-PRIME", "GARDUS STEEL SOUL","KNIGHT-ARCANUM"]
const currentTome= "StormcastEternalsTome-"

const   convertImageToText =async(currentNumber)=> {
  const worker = await createWorker('eng');
  const ret = await worker.recognize(currentTome+currentNumber+".jpg");
  await worker.terminate();
  return ret.data.text   
}
const convertToJson = ()=>{//outputJson
  for(let i="08";i<60;i++){
    checkAndAssingImage.forEach(async (str)=>{
    if(i=="9"){
      i="09";
    }
    const text= await convertImageToText(i);
    const fielName=currentTome+i+".json";
    if(text.includes(str)){
       console.log(str)
        const jsonData = {
        filename: currentTome+i,
        extracted_text: str,
          };
        fs.writeFileSync(fielName, JSON.stringify(jsonData, null,2));

        } 
    i++;
  })

  }


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
