const jokes=document.querySelector('#joke');
          const jokebtn=document.querySelector('#jokebtn');

          /* // solve by promises

        //   const setHeader = {
        //     headers : {
        //         Accept : "application/json"
        //     }
        //   }

        //   const generateJokes=()=>{

        //     fetch('https://icanhazdadjoke.com/ ',setHeader)
        //     .then((res) => res.json())
        //     .then((data)=>{
        //         jokes.innerHTML=data.joke;     
        //     }).catch((error)=>{ 
        //         console.log(error);
        //     })
        //   }

        //   jokebtn.addEventListener('click',generateJokes);
        //   generateJokes(); */

        // solved by async await


        
        

          const generateJokes= async ()=>{
            
           try{
            const setHeader = {
            headers : {
                Accept : "application/json"
            }
          }
            const res= await fetch('https://icanhazdadjoke.com/ ',setHeader)
            const data = await res.json();
            jokes.innerHTML=data.joke;     
            }catch(error){ 
                console.log(error);
            }
        }

          jokebtn.addEventListener('click',generateJokes);
          generateJokes();