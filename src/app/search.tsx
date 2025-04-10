'use client'
import React, { useState } from 'react';
// const filename = "StormcastEternalsTome-";

// const testFiles = (currentNumberFile:number|string)=>import (`../../Json/${filename}${currentNumberFile}.json`).then((str)=>{
//   return str
// })
import StormcastEternalsTomeFile from "../../Json/StormcastEternalsTome.json"
import './styles.css';

const SearchesMap =()=>{
  const possibleSearches=["LIBERATORS", "KNIGHT-ARCANUM", "YNDRASTA", "ANNIHILATORS", "WITH METEORIC GRANDHAMMERS", "PROSECUTORS", "STARSTRIKE JAVELINS", "SHOCK HANDAXES", "VIGILORS", "CELESTIAN VORTEX", "DAIS ARCANUM", "GRYPH-STALKER", "LORD-TERMINOS", "RECLUSIANS"]
  let possibleSearchsPArr=[]
  for (let i = 0; i < possibleSearches.length; i++) {
    possibleSearchsPArr.push(
    <p className="testText" key={possibleSearches[i]}>
        {possibleSearches[i].slice(0,1)+possibleSearches[i].slice(1).toLowerCase()},</p>)
  }
  return(

  <div className="allingText" >
    {possibleSearchsPArr.map(p=>p)}
    </div>
    )
  
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
              <div >
              <p>Posibble searches: </p>
              <hr />
               <SearchesMap/>
               <hr />

              </div>
              {
              StormcastEternalsTomeFile.map((eachCard) => {
                if(valueName===eachCard.extracted_text.slice(0,1)+eachCard.extracted_text.slice(1).toLowerCase()){
                  text= eachCard.extracted_text.slice(0,1)+eachCard.extracted_text.slice(1).toLowerCase();
                  valueFile = eachCard.filename;
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
