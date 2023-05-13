const express = require("express");
const fetch = require("node-fetch");
globalThis.fetch = fetch



const ApiCall = async()=>{

          fetch('https://web-scraping-lyart.vercel.app/', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                    url: 'https://vercel.com/ali-raza365/web-scraping',
               
               })
          })
               .then(data => console.log(data))
               .catch(error => console.error(error));
          }

          ApiCall()