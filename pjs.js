
window.onload = function(){
  var validate1 = document.getElementById("button")
      validate1.onclick = pulldata;
  }

var coll = document.getElementsByClassName("collapsible");
var i; /*# of collapse boxes*/

    for(i=0; i<coll.length; i++){
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "flex") {
      content.style.display = "none";
    } else {
      content.style.display = "flex";
    }
  });
}




function pulldata(){
  var info

      fetch('https://hzcs601.000webhostapp.com/hw5json.json')
      .then((response) =>{
          if(response){
              alert("Summarized")
          }
          else{
              alert("Something, somewhere is bork'd")
          }
          console.log('resolved', response);
          return response.json();
      }).then( data => {

          info = JSON.stringify(data, null, 2)
          info = info.replace(/[\"\[\]\{\}\,]+/g, '')        
          const creds = document.createElement("p");
          creds.setAttribute("id","border")
          creds.style="border: 1px solid blue; color:black; borderRadius:20px"
          creds.style.width="30%"
          creds.style.fontWeight = "bold"
          creds.style.fontSize="22px"
          creds.style.backgroundColor= '#00ffff'
          creds.innerText = info;
          border.appendChild(creds);
        }).then( data =>{
          document.getElementById("border").style.borderRadius = "15px";
          console.log(data)
          document.getElementById('button').disabled="true";

      }).catch((error)=>{
          console.log('rejected',error)
          alert("Something, somewhere is bork'd")
      
      })


  }
  

