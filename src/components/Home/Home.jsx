/* eslint-disable react/jsx-key */
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";



const Home = () => {

   const [allActors,setAllActors]=useState([])
   const [selectedActors,setSelectedActors]=useState([])
   const [remaining,setRemaining]=useState(0)
   const [totalCost,setTotalCost]=useState(0)
   useEffect(()=>{
    fetch('./Data.json')
    .then(res=>res.json())
    .then(data=>setAllActors(data))
   },[])

   const handleSelectActor=(actor)=>{
    const isExist=selectedActors.find(item=>item.id==actor.id)
    let count=actor.salary
    if(isExist){
      return  alert('Already Booked')
    }else{
        selectedActors.forEach(item=>{
            count=count+item.salary
        })
        const totalRemaining=20000-count
        
        if(count>20000){
            return alert('Budget can not be excide')
        }
        setTotalCost(count)
        setRemaining(totalRemaining)
        setSelectedActors([...selectedActors,actor])
    }

   }
    return (
        <div className="text-white">
            <div className=" justify-between flex">
           <div className="grid grid-cols-4 gap-4">
           {
            allActors.map(actor=>(<div key={actor.id} className="w-[250px] h-[300px]  border-2 border-gray-500 bg-gray-700 rounded-3xl shadow-2xl ">
            <div>
                <img className="w-32 rounded-full m-auto" src={actor.image} alt="" />
            </div>
                  <h2 className="text-2xl text-white text-center">{actor.name}</h2>
                  <p className="text-white text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, quidem.</p>
                  <div className="flex justify-evenly">
                    <p className="text-center">Salary:${actor.salary}</p>
                    <p>{actor.role}</p>
                  </div>
                  <div className="flex justify-center">
                  <button className="bg-blue-500 px-4 py-2 text-black rounded-3xl" onClick={()=>handleSelectActor(actor)}>Select</button>
                  </div>
        </div>))
           }
           </div>
                
                <div className="w-1/4 text-center">
                    <Cart selectedActors={selectedActors} remaining={remaining} totalCost={totalCost}></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default Home;







