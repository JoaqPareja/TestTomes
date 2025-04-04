

const filename = "StormcastEternalsTome-";

// 2-2889/2025
let index:string|number;
const test = (currentNumberFile:number|string)=>import (`../../Json/${filename}${currentNumberFile}.json`).then((str)=>{
  return str
})
export default async function Home() {

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
      console.log(str.filename);
      console.log(str.extracted_text);
   })
  }

  // const readPath=(text: string)=> '/Json/'+text+".json";
  // const local= fs.readFileSync(readPath("StormcastEternalsTome-08"))
  // console.log(filename)
  // const jsonList= [DeclareEachJSON()];
  // jsonList.forEach((str)=>{
  //   const img= "/Images/"+str.filename+".jpg"
  //   console.log(img)
  // })
  // return (
  //   // <div> Images\StormcastEternalsTome-08.jpg
  //   <div>
  //   <img 
  //   src={img} 
  //   alt={tome.extracted_text}  
  //   width={1800}
  //   height={1200}/>

  //     {/* // </div> */}
  //   <div>{tome.extracted_text}</div>
  //   </div>
  // );
}
