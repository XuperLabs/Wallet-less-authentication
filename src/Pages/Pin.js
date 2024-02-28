import React from 'react';
import '../App.css';



function Pin() {
  return (
    <div class="flex justify-center">
        <div class="bg-gray-800 p-14 pt-10 m-12 justify-left rounded-md">
         2/3
          <h1 class="text-4xl justify-left"> Verify OTp </h1>
          <p class=" font-light pb-11">Check your email for a 6 digit OTP <br/> Input it below to auto Generate a wallet</p>
          <label htmlFor="price" className="block text-sm font-medium leading-6 ">
            Pin
          </label>
          <input type="email" name="email" id="email" placeholder="M982ki" class="border-b-4  w-80 text-dark-green pl-2 p-1 rounded-md"></input>
          <div class="grid grid-cols-2 gap-4 mt-4">
              <div>Need help?</div>
              <div>
                <button class="bg-light-green p-1 pl-4 pr-4">
                    Login
                </button>
              </div>
          </div>
          
        </div>
      
    </div>
  );
}

export default Pin;