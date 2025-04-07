

const filename = "StormcastEternalsTome-";
// 2-2889/2025
let index:string|number;
const test = (currentNumberFile:number|string)=>import (`../../Json/${filename}${currentNumberFile}.json`).then((str)=>{
  return str
})
 async function Cards() {
  const cardInformation: { FilenName: string; extractedText: string; }[]=[];

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
     await test(index).then((str)=>{
       cardInformation.push({FilenName:str.filename, extractedText:str.extracted_text})
   })
  }
  return cardInformation;
}
  // const readPath=(text: string)=> '/Json/'+text+".json";
  // const local= fs.readFileSync(readPath("StormcastEternalsTome-08"))
  // console.log(filename)
  // const jsonList= [DeclareEachJSON()];
  // jsonList.forEach((str)=>{
  //   const img= "/Images/"+str.filename+".jpg"
  //   console.log(img)
  // })


  export default async function Home(){
  const obtainCards=  await Cards();

    // console.log();

return(
<section>

{obtainCards.map(eachCard => {
  return (
  <div>
      <ul>
        <li>
      <img 
          src={"/Images/"+eachCard.FilenName+".jpg"} 
          alt={"text"}  
          width={1800} 
          height={1200}
          /> 
          </li>
          </ul>
          </div>
    );  
  })
};
</section>
)
          // </section>
          
  

{/* <div>{tome.extracted_text}</div> */}
}