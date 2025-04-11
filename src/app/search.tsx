'use client'
import React, { useRef, useState } from 'react';
// const filename = "StormcastEternalsTome-";

// const testFiles = (currentNumberFile:number|string)=>import (`../../Json/${filename}${currentNumberFile}.json`).then((str)=>{
//   return str
// })
import StormcastEternalsTomeFile from "../../Json/StormcastEternalsTome.json"
import './styles.css';
const possibleSearches=["LIBERATORS", "KNIGHT-ARCANUM", "YNDRASTA", "ANNIHILATORS", "WITH METEORIC GRANDHAMMERS", "PROSECUTORS", "STARSTRIKE JAVELINS", "SHOCK HANDAXES", "VIGILORS", "CELESTIAN VORTEX", "DAIS ARCANUM", "GRYPH-STALKER", "LORD-TERMINOS", "RECLUSIANS", "STORMREACH PORTAL"]


const SearchesMap =(text:string)=>{
return(
<> 
<section>
      {StormcastEternalsTomeFile.map((image,index)=>{
      return(
    <div key={index}>
    {
    image.extracted_text.slice(0,1)+image.extracted_text.slice(1).toLowerCase()==text&&
      <img
        src={"./Images/"+image.filename+".jpg"} 
        alt={image.extracted_text} style={{width:'100%'}}
      />
    }
    </div>
      )
      })
    }
      
  </section>
  </> 
)
}


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
                  value={process.env.currentCard=valueName}
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLookOutForCard(e.target.value)}
                />
              </label>

              </div>
              <div >
              <p>Posibble searches: </p>
              <>
              {possibleSearches.map((str)=>{
                return(
              <button value={str.slice(0,1)+str.slice(1).toLowerCase()} onClick = {(e) => {process.env.currentCard=str.slice(0,1)+str.slice(1).toLowerCase(), setLookOutForCard(e.currentTarget.value)}}>{str.slice(0,1)+str.slice(1).toLowerCase()}</button> 
                )
            })}      
              </>  
              <hr />
               {SearchesMap(`${process.env.currentCard}`)}

              </div>
              {/* {ImgIteration(process.env.Value)}
              {
                process.env.Value==textFromImgIteration&&
                  <>
                  {ImageToBeSearched(process.env.Value)}

                </>                  
            } */}

          </>
          );
        }
