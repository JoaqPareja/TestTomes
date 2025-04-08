'use client'
import React, { useState } from 'react';
let index:string|number;
const filename = "StormcastEternalsTome-";

const testFiles = (currentNumberFile:number|string)=>import (`../../Json/${filename}${currentNumberFile}.json`).then((str)=>{
  return str
})
const cardInformation: { FilenName: string; extractedText: string; }[]=[];

   function Cards() {
  const firstNumberOfUnits=8;
  const lastNumberOfUnits=60;
  for(let i= firstNumberOfUnits; i<lastNumberOfUnits; i++){
    if(i==8||9){
      index="0"+i;
      if(i> 9){
        index=0;
        index=i;
      }
    }
    testFiles(index).then( (str)=>{
        cardInformation.push({FilenName:str.filename, extractedText:str.extracted_text})
   })
  }
  return  cardInformation;
}

let text: string;
let valueFile:string;
        export default  function Search() {
          const [valueName, setLookOutForCard] = useState('');
          return (
            <>
            <div style={{
                          width: '100vw',  
                          height: 'auto',
                        }
                        }>
              <label>
                Please search for the desired card:
                <input
                  value={valueName}
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLookOutForCard(e.target.value)}
                />
              </label>
              </div>
              {
              Cards().map((eachCard) => {
                if(valueName==eachCard.extractedText){
                  text= eachCard.extractedText;
                  valueFile =eachCard.FilenName;
                         }
                      })
                    }
              {
                valueName==text&&
                  <>
                    <div key={valueName}>
                    <img 
                      src={"/Images/"+valueFile+".jpg"} 
                      alt={"text"}
                      // sizes="100vw"  
                      style={{
                          width: '100%',  
                          height: 'auto',
                        }}
                      /> 
                  </div>
                </>                  
            }
                 
          </>
          );
        }
    // 'StormcastEternalsTome-08' 