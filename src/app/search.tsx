'use client'
import React, { useRef, useState } from 'react';
// const filename = "StormcastEternalsTome-";

// const testFiles = (currentNumberFile:number|string)=>import (`../../Json/${filename}${currentNumberFile}.json`).then((str)=>{
//   return str
// })
import StormcastEternalsTomeFile from "../../Json/StormcastEternalsTome.json"
import './styles.css';
const possibleSearches=["LIBERATORS", "KNIGHT-ARCANUM", "YNDRASTA", "ANNIHILATORS", "WITH METEORIC GRANDHAMMERS", "PROSECUTORS", "STARSTRIKE JAVELINS", "SHOCK HANDAXES", "VIGILORS", "CELESTIAN VORTEX", "DAIS ARCANUM", "GRYPH-STALKER", "LORD-TERMINOS", "RECLUSIANS"]
let textFromImgIteration: string;
let valueFile:string;



const ImgIteration=(valueName:string)=>{
  {
    StormcastEternalsTomeFile.map((eachCard) => {
      if(valueName===eachCard.extracted_text.slice(0,1)+eachCard.extracted_text.slice(1).toLowerCase()){
        textFromImgIteration= eachCard.extracted_text.slice(0,1)+eachCard.extracted_text.slice(1).toLowerCase();
        valueFile = eachCard.filename;
               }
            })
          }
}

const ImageToBeSearched=(valueName: React.Key | null | undefined)=>{

return(
  <div key={valueName}>
  <img 
    src={"./Images/"+valueFile+".jpg"} 
    alt={valueFile}
    id='imgTest'
    /> 
</div>
)
}


const SearchesMap =()=>{
//   const [name, setName] = useState('');
//   // const [isTextClicked, setTextBool] = useState(false);

//   const changeName = () => {
//     let value = name;

//     if (value === valueFile) {
//       setName(valueFile);

//     } else {
//       setName('');
//     }
//     // {/* {ImgIteration('')}   */}
//   }
  // onClick={changeName}

  return(
    <>
    <section> 
  <div className="allingText" key={'allingText'} >
    {possibleSearches.map(index=>{
      process.env.currentTest=index.slice(0,1)+index.slice(1).toLowerCase()
  // console.log(index.slice(0,1)+index.slice(1).toLowerCase())
  return(
    <>


    <p  className="testText"  key={index}>
   {index.slice(0,1)+index.slice(1).toLowerCase()}</p>
    {/*
    {/* <button value={index} key={index}  
 onClick={(e)=>{
//   process.env.Value=e.currentTarget.value
//   alert(e.currentTarget.value)}}
    </button> */}

  </>
  )
})

}
    </div>
  </section>
 <>
 { console.log(process.env.Value)}
 {/* <img src={"./Images/"+"StormcastEternalsTome-29"+".jpg"} alt='test' style={{width:'100%',height:'100%'}}>
 </img> */}
 {/* {ImgIteration(`${process.env.Value}`)}
    {
      process.env.Value==textFromImgIteration&&
        ImageToBeSearched(`${process.env.Value}`)
      } */}
 </>
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
                  value={process.env.Value =valueName}
                  onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setLookOutForCard(e.target.value)}
                />
              </label>
              </div>
              <div >
              <p>Posibble searches: </p>
              <hr />
               <SearchesMap/>

              </div>
              {ImgIteration(process.env.Value)}
              {
                process.env.Value==textFromImgIteration&&
                  <>
                  {ImageToBeSearched(process.env.Value)}

                </>                  
            }

          </>
          );
        }
