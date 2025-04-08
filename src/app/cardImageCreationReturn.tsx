'use client'
import Image from 'next/image'
const filename = "StormcastEternalsTome-";
import { useCallback } from 'react';
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
       test(index).then( (str)=>{
        cardInformation.push({FilenName:str.filename, extractedText:str.extracted_text})
   })
  }
  return  cardInformation;
}

  export  async function InputReturn(text:string){
  const obtainCards= await  Cards();

  const cachedTextFunction = useCallback(()=>{
    {obtainCards.map( eachCard => {
      if(text.includes(eachCard.extractedText)){
          {text==eachCard.extractedText&&
          setTimeout(() => {       
           return eachCard.extractedText
          },1000)
        
          }
        }
      })
    }
  },[])

  return (
    <>
    {text==cachedTextFunction.toString()&&
    <div key={cachedTextFunction.toString()}>
          <Image 
            src={cachedTextFunction.toString()} 
            alt={"text"}
            sizes="100vw"  
            style={{
                width: '100%',
                height: 'auto',
              }}
            /> 
          </div>
  }
        </>
      );  
  }

//   const [loading, setLoading] = useState(true);
//   const [image, setImage] = useState(
//       ''
//   );
//   obtainCards.map( eachCard => {
//     if(text.includes(eachCard.extractedText)){
//   useEffect(() => {
//     if (loading) {
//     setTimeout(() => {
//         if (loading) {
//             setLoading(false);
//             setImage(
//                 "/Images/"+eachCard.FilenName+".jpg"
//             );
//         }
//     }, 1000);
//     }
// }, [loading, setLoading, setImage]);
//     }
//   });

  // {obtainCards.map( eachCard => {
  //   if(text.includes(eachCard.extractedText)){

    


  // function ProductPage({ productId, referrer, theme }) {
  //   // Cada vez que el tema cambie, esta será una función diferente...
  //   function handleSubmit(orderDetails) {
  //     post('/product/' + productId + '/buy', {
  //       referrer,
  //       orderDetails,
  //     });
  //   }
    
  //   return (
  //     <div className={theme}>
  //       {/* ... así las props de ShippingForm nunca serán iguales, y cada vez se renderizará nuevamente */}
  //       <ShippingForm onSubmit={handleSubmit} />
  //     </div>
  //   );
  // }