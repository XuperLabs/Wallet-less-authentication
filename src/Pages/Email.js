import React from 'react';
import '../App.css';



function Email() {
  return (
    <div class="flex justify-center">
        
        <div class="bg-gray-800 p-14 pt-10 m-12 justify-left rounded-md">
        <h1>1/3</h1>
          <h1 class="text-4xl justify-left"> Welcome </h1>
          <p class=" font-light pb-11">This is the Wallet-less Authentication <br/> Kit to test the Wallet-less Auth endpoints</p>
          <label htmlFor="price" className="block text-sm font-medium leading-6 ">
            Email
          </label>
          <input type="email" name="email" id="email" placeholder="example@gmail.com" class="border-b-4  w-80 text-dark-green pl-2 p-1 rounded-md"></input>
          <div class="grid grid-cols-2 gap-4 mt-4">
              <div>Need help?</div>
              <div> 
              <button class="bg-light-green p-1 pl-4 pr-4">
                    Login
                </button>
              </div>
          </div>
          <div class="grid grid-cols-3 gap-4 mt-4">
              <div>
                <a  class="hover:text-light-green" href='/#'>
                   <button class="bg-light-green p-1 pl-4 pr-4">
                      1/3
                   </button>
                </a>
              </div>
              <div>
              <a  class="hover:text-light-green" href='/Pin'>
                   <button class="bg-light-green p-1 pl-4 pr-4">
                      2/3
                   </button>
                </a>
              </div>
              <div>
              <a  class="hover:text-light-green" href='/Wallet'>
                   <button class="bg-light-green p-1 pl-4 pr-4">
                      3/3
                   </button>
                </a>
              </div>
              
          </div>
          
          
        </div>
      
    </div>
  );
}

export default Email;
