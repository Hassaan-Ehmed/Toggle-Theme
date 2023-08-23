import React,{useContext} from 'react';
import { ThemeContext } from '../context/ThemeStore';

export default function Switch() {
        
    const store = useContext(ThemeContext)
    
    return (
      <>
      
{/* Toggle Switch */}
<div className='flex justify-end items-center ml-5 '>

<input type="checkbox" className="toggle toggle-success" 

onChange={()=>{store.dispatch(store.state)}}

/>

</div>

      </>
  )
}
