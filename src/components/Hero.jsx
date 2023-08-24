import React,{useContext} from 'react'
import { ThemeContext } from '../context/ThemeStore'

export default function Hero() {
    
    
const store = useContext(ThemeContext);

let mode="";

{store.bcolor ==  "white" ? mode="Light Mode" : mode="Dark Mode" }

return (
    <div id='hero'>
      


      <section class={`h-[100vh] flex justify-center items-center bg-${store.bcolor}`} >
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 class={`mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-${store.tcolor}`} >We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-500" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum laborum aut perspiciatis aspernatur architecto, delectus omnis minus tenetur officia in repellendus deserunt obcaecati assumenda fugiat eos eius! In maxime hic consequatur est laborum omnis fugiat incidunt, tempore, corrupti expedita dicta.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            
            <a href="#" class={` inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border border-gray-300  focus:ring-4 focus:ring-gray-100  dark:border-gray-700 dark:focus:ring-gray-800 bg-${store.tcolor}`}  >
               

                <span className={`text-${store.bcolor} `}>{mode}</span>
               
            </a>  
        </div>
    </div>
</section>

    </div>
  )
}
