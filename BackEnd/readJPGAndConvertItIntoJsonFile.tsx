
//Read the PDF convert it into each Json with each Header Information pointing to the desired image

import fs from "fs";

import { createWorker } from 'tesseract.js';
const checkAndAssingImage= ["LIBERATORS","VANQUISHERS","VINDICTORS","CELESTANT-PRIME HAMMER OF SIGMAR", "GARDUS STEEL SOUL","KNIGHT-ARCANUM","KNIGHT-DRACONIS","KNIGHT-JUDICATOR WITH GRYPH HOUNDS","KNIGHT-QUESTOR","KNIGHT-RELICTOR", "KNIGHT-VEXILLOR", "LORD-AQUILOR","LORD-CELESTANT", "LORD-CELESTANT ON DRACOTH", "BASTIAN CARTHALOS", "LORD-IMPERATANT", "LORD-RELICTOR", "LORD-VERITANT", "NEAVE'S COMPANIONS", "NEAVE BLACKTALON", "LORAI CHILD OF THE ABYSS", "VANDUS HAMMERHAND", "YNDRASTA THE CELESTIAL SPEAR", "DRAKESWORN TEMPLAR", "KARAZAI THE SCARRED", "KRONDYS SON OF DRACOTHOIN", "LORD-CELESTANT ON STARDRAKE", "AETHERWINGS", "ANNIHILATORS", "GRYPH-HOUNDS", "ANNIHILATORS WITH METEORIC GRANDHAMMERS", "CONCUSSORS", 
"DESOLATORS", "FULMINATORS", "TEMPESTORS", "PRAETORS", "PROSECUTORS",  "STORMDRAKE GUARD", "STORMSTRIKE CHARIOT", 
"VANGUARD-HUNTERS", "VANGUARD-PALLADORS WITH STARSTRIKE JAVELINS", "VANGUARD-PALLADORS WITH SHOCK HANDAXES", "VANGUARD-RAPTORS WITH HURRICANE CROSSBOWS", "VANGUARD-RAPTORS WITH LONGSTRIKE CROSSBOWS", "VIGILORS", "QUESTOR SOULWORN", "CELESTIAN VORTEX", "DAIS ARCANUM","EVERBLAZE COMET", "LORD-VIGILANT ON GRYPH-STALKER",  "LORD-TERMINOS", "RECLUSIANS", "IONUS CRYPTOBORN","CONCUSSORS", "DESOLATORS", "FULMINATORS", "TEMPESTORS", "STORMREACH PORTAL"
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
  const rectangle = { left: 200, top: 0,width:400,height:200};

    const { data: { text } } = await worker.recognize("./public/Images/"+currentTome+"-"+number +".jpg",{rectangle});//https://lenguajejs.com/javascript/modulos/dynamic-import/
  await worker.terminate();
  return text;
  // return ret.data.text   
  
}
let arr: { filename: string; extracted_text: string; id: number; }[]=[];


const convertToJson =async ()=>{//outputJson
  const firstNumberOfUnits=8;
  const lastNumberOfUnits=61;
  let index:string|number;

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

  // checkAndAssingImage.forEach(async (str)=>{
    // const eachTextOfEachBattleTomeCard:string=checkAndAssingImage[Number(index)]!//https://stackoverflow.com/questions/45194964/how-to-assign-string-undefined-to-string-in-typescript
  // for(let i= firstNumberOfUnits; i<=lastNumberOfUnits;i++){

    const stringSplitted=eachTextOfEachBattleTomeCard.split(' ')
    //

  
    const currentImageTextFromConvertedPDF= await convertImageToText(index.toString());
    // console.log(currentImageTextFromConvertedPDF)
    // console.log(currentImageTextFromConvertedPDF.includes(stringSplitted[0]))

// console.log(stringSplitted.length)
const stringSplittedLength=stringSplitted.length
// console.log(stringSplittedLength)
// for(let i=0; i <stringSplitted.length;i++){
  // if(stringSplittedLength==1){
  //   if(stringSplitted.includes(stringSplitted[0]) && stringSplitted.includes(stringSplitted[1])){
  //     console.log(stringSplitted[0]+stringSplitted[1])
  //   }
  // }
    // index =Number(index) -1; // Assign it -1 as the number comes up always +1
// if(currentImageTextFromConvertedPDF.includes(eachTextOfEachBattleTomeCard)){
    // if(){
    const currentText=[]
      currentImageTextFromConvertedPDF.split(' ').forEach((strTextFromPDF)=>{
        if(strTextFromPDF.includes(stringSplitted[0])){
          currentText.push()
        }
        console.log(strTextFromPDF)
        // console.log(currentImageTextFromConvertedPDF.indexOf(stringSplitted[0]))
      })
// if(currentImageTextFromConvertedPDF.indexOf(stringSplitted[0])){

// }
      // if(stringSplittedLength ==1&&
      //   currentImageTextFromConvertedPDF
      //   .includes(eachTextOfEachBattleTomeCard)){
      //   index =Number(index) -1; // Assign it -1 as the number comes up always +1
      //   if(i==8||i==9){
      //     index="0"+i;
      //     }
      //     if(i> 9){
      //       index=0;
      //       index=i;
      //     }
      //   console.log(eachTextOfEachBattleTomeCard)
      //   // console.log(fileName);
      //   console.log(index)
      //   arr.push({
      //     filename: `${currentTome}-${index}`,
      //     extracted_text: str,
      //     id: i
      //   })
        
      // }
      // console.log(arr)
      //   arrFirstPositions.push({
      //       filename: `${currentTome}-${index}`,
      //       extracted_text: EachText,
      //       id: index
      //     })

      // }
      // if(currentImageTextFromConvertedPDF.includes(stringSplitted[1])){

      //   arrSecondPositions.push({
      //     filename: `${currentTome}-${index}`,
      //     extracted_text: EachText,
      //     id: index
      //   })

      // }
      // if(currentImageTextFromConvertedPDF.includes(stringSplitted[2])){

      //   arrThirdPositions.push({
      //     filename: `${currentTome}-${index}`,
      //     extracted_text: EachText,
      //     id: index
      //   })
      // }
      // if(currentImageTextFromConvertedPDF.includes(stringSplitted[3])){

      //   arrFourthPositions.push({
      //     filename: `${currentTome}-${index}`,
      //     extracted_text: EachText,
      //     id: index
      //   })
      // }
      // if(currentImageTextFromConvertedPDF.includes(stringSplitted[4])){
      //   arrFitfhPositions.push({
      //     filename: `${currentTome}-${index}`,
      //     extracted_text: EachText,
      //     id: index
      //   })
      // }

      // arr.push(arrFirstPositions,arrSecondPositions,arrThirdPositions,arrFourthPositions,arrFitfhPositions)
   
        // if(index=='08'){
          // arr.push({
          //   filename: `${currentTome}-${index}`,
          //   extracted_text: EachText,
          //   id: index
          // })  
        // // }
        // if(arr.length< 1){

        //   arr.push({
        //     filename: `${currentTome}-${index}`,
        //     extracted_text: EachText,
        //     id: index
        //   })  
        // }
        // if(arr.length>=1){
        //   arr.forEach((str)=>{
        //     if(str.extracted_text!==EachText){
        //       // console.log(EachText)

        //     arr.push({
        //             filename: `${currentTome}-${index}`,
        //             extracted_text: EachText,
        //             id: index
        //           })  
        //         }
        //         console.log(arr)
        //   });
        // }
        // if(arr[Number(index)].extracted_text!=EachText){

      // }
        // arr.forEach((str)=>{
        //   console.log()
        //   if(str.extracted_text!=EachText){
        //     arr.push({
        //       filename: `${currentTome}-${index}`,
        //       extracted_text: EachText,
        //       id: index
        //     })  
        //   }
        //   // console.log(str.extracted_text)

        //   // else if(str.extracted_text==EachText){
        //   //   return ;
        //   // }
        //   console.log(arr)
        // })

      


    // }
    //  if(stringSplittedLength ==2&&currentImageTextFromConvertedPDF.includes(stringSplitted[0]) && currentImageTextFromConvertedPDF.includes(stringSplitted[1])){
    //     //  console.log(eachTextOfEachBattleTomeCard)
    //     // console.log(EachText)

    //     arr.push({
    //       filename: `${currentTome}-${index}`,
    //       extracted_text: EachText,
    //       id: index
    //     })  
    //   }
    //    if(stringSplittedLength ==3&&currentImageTextFromConvertedPDF.includes(stringSplitted[0])&& currentImageTextFromConvertedPDF.includes(stringSplitted[2])){
    //     // console.log(EachText)
    //     arr.push({
    //       filename: `${currentTome}-${index}`,
    //       extracted_text: EachText,
    //       id: index
    //     })  
    //   }
    //   if(stringSplittedLength ==4&&stringSplitted.includes(stringSplitted[0])&&stringSplitted.includes(stringSplitted[3])){
    //     arr.push({
    //       filename: `${currentTome}-${index}`,
    //       extracted_text: EachText,
    //       id: index
    //     })  
    //     // console.log(EachText)
    // }
    // if(stringSplittedLength == 5&&stringSplitted.includes(stringSplitted[0])&&stringSplitted.includes(stringSplitted[4])){
    //   arr.push({
    //     filename: `${currentTome}-${index}`,
    //     extracted_text: EachText,
    //     id: index
    //   })  
      // console.log(EachText)
  // }

  }
  if(arr.length>52){
    console.log(arr)
  
    const fileName=`Json/${currentTome}.json`;
  ensureDirectoryExistence(fileName)
  return fs.writeFileSync(fileName, JSON.stringify(arr, null,2));
  }
})


}

      // if(i==8||i==9){
      //   index="0"+i;
      //   }
      //   if(i> 9){
      //     index=0;
      //     index=i;
      //   }
      // // console.log(eachTextOfEachBattleTomeCard)
      // // // console.log(fileName);
      // // console.log(index)
      //   // const jsonData = {



          // };
        
//  } 


 
// }
// }  
// }
convertToJson();
