let getDate = document.getElementById("getData");
let hed;
getDate.addEventListener('click', ()=>{
    
    let xhr = new  XMLHttpRequest();
    xhr.open('GET','https://fakestoreapi.com/products   ',true);

    xhr.onreadystatechange = function(){
        console.log("Ready state is: "+xhr.readyState);
    }
    xhr.onload = function(){
        if(this.status===200){
            var con = JSON.parse(this.responseText)
            console.log(con);
            data ="";
           data =  `<thead><tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Image</th>
          </tr></thead>`;   
           
          document.getElementById('table-header').innerHTML = data;

          //////////////////////////////////////////////////
          for(value in con){
            data += `
           <tr>
            <td>${con[value].id}</td>
           <td scope="col">${con[value].title}</td>
           <td scope="col">${con[value].price}</td>
           <td scope="col"><img width="100px" src='${con[value].image}' ></td>
           </tr>
           `;
           document.getElementById('table-header').innerHTML = data;
          }
 

    
        }else{
            console.log("Page is not found");
        }
    }
    xhr.send();

})


