'use client'
import React, { useState } from 'react';
// const filename = "StormcastEternalsTome-";

// const testFiles = (currentNumberFile:number|string)=>import (`../../Json/${filename}${currentNumberFile}.json`).then((str)=>{
//   return str
// })
import StormcastEternalsTomeFile from "../../Json/StormcastEternalsTome.json"
import './styles.css';
const possibleSearches=["LIBERATORS", "KNIGHT-ARCANUM", "YNDRASTA", "ANNIHILATORS", "WITH METEORIC GRANDHAMMERS", "PROSECUTORS", "STARSTRIKE JAVELINS", "SHOCK HANDAXES", "VIGILORS", "CELESTIAN VORTEX", "DAIS ARCANUM", "GRYPH-STALKER", "LORD-TERMINOS", "RECLUSIANS"]
let text: string;
let valueFile:string;
//   const sayHello = () => {
//     // const [valueName, setLookOutForCard] = useState('')
//     // setLookOutForCard(valueName)
//     // alert("Hello!")

//     // const handleClick = (e: { preventDefault: () => void; }) => {
//     //   e.preventDefault();
//       alert("Hello!")

//     // }
//     // return handleClick
//   };


//     const [open, setOpen] = useState(null);

//     const [showImage, setShowImage] = useState({
//       showImageNow: true,
//       showImageId: null,
//     })

//     const {showImageNow, showImageId} = showImage;

//     const OpenImage = (a: { image: React.SetStateAction<null>; id: any; }) => {
//      setOpen(a.image);
//      setShowImage({
//        showImageNow: !showImageNow,
//        showImageId: a.id
//      }); 
//     }

const ImgIteration=(valueName:string)=>{
  {
    StormcastEternalsTomeFile.map((eachCard) => {
      if(valueName===eachCard.extracted_text.slice(0,1)+eachCard.extracted_text.slice(1).toLowerCase()){
        text= eachCard.extracted_text.slice(0,1)+eachCard.extracted_text.slice(1).toLowerCase();
        valueFile = eachCard.filename;
               }
            })
          }
}

const ImageToBeSearched=(valueName: React.Key | null | undefined)=>{
setTimeout(()=>{
return(
  <div key={valueName}>
  <img 
    src={"./Images/"+valueFile+".jpg"} 
    alt={valueFile}
    id='imgTest'
    /> 
</div>
)
},1000)
}
const SearchesMap =()=>{

  let possibleSearchsPArr=[]
  for (let i = 0; i < possibleSearches.length; i++) {
    possibleSearchsPArr.push(
    <p className="testText" key={possibleSearches[i]} 
    // onClick={() => OpenImage(a)}
    >
        {possibleSearches[i].slice(0,1)+possibleSearches[i].slice(1).toLowerCase()},</p>)
  }
  return(
    <>
  <div className="allingText" >
    {possibleSearchsPArr.map(p=>p)}
    </div>
     {/* {
      showImageNow && showImageId === a.id ?
        <>
        {ImageToBeSearched(valueName)}
      </>                  
    } */}
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
              {ImgIteration(valueName)}
              {
                valueName==text&&
                  <>
                  {ImageToBeSearched(valueName)}
                </>                  
            }
                 
          </>
          );
        }
