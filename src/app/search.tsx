'use client'
import React, { useState } from 'react';
// const filename = "StormcastEternalsTome-";

// const testFiles = (currentNumberFile:number|string)=>import (`../../Json/${filename}${currentNumberFile}.json`).then((str)=>{
//   return str
// })
import StormcastEternalsTomeFile from "../../Json/StormcastEternalsTome.json"

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
              StormcastEternalsTomeFile.map((eachCard) => {
                if(valueName==eachCard.extracted_text){
                  text= eachCard.extracted_text;
                  valueFile =eachCard.filename;
                         }
                      })
                    }
              {
                valueName==text&&
                  <>
                    <div key={valueName}>
                    <img 
                      src={"./Images/"+valueFile+".jpg"} 
                      alt={valueFile}
                      // sizes="100vw"  
                      style={{
                          width: 'auto',  
                          height: 'auto',
                        }}
                      /> 
                  </div>
                </>                  
            }
                 
          </>
          );
        }
