
const Contents = () => {
    const namechange=()=>{
        const names=['Nish','Nav'];
        const int=Math.floor(Math.random()*2);
        return names[int];
      }
const handleClick=()=>{
console.log('You clicked it')
}
const handleClick2=(e)=>{
    console.log(e.target.innerText)
}

  return (
    <main>


<p>
   S and {namechange()}
   </p>

   <button onClick={handleClick}>click me</button>
   <button onClick={()=>handleClick2('Sagar')}>click me</button>
   <button onClick={(e)=>handleClick2(e)}>click me</button>

    </main>
  
  )
}

export default Contents