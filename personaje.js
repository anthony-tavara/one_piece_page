const urlParams = new URLSearchParams(window.location.search);
const nombre = urlParams.get('name');

fetch(`https://api.api-onepiece.com/v2/characters/en?name=${name}`)
    .then(response => response.json())
    .then(data => {
		console.log(data);
		const lista = document.getElementById("lista");	
    	data.forEach((element)=>{
    	if (element.name == nombre ){
			const titulo = document.getElementById("titulo");	
   			let li=document.createElement("li");    		
			let nombre = document.createElement("p");

			let recompensa = document.createElement("p");
			let frutaDelDiablo = document.createElement("p");
			let frutaImg = document.createElement("img");

			lista.appendChild(li);
			titulo.innerHTML = "Character N° "+element.id;
    		titulo.appendChild(li);



			nombre.innerHTML = "~ " + element.name+" ~";

			li.appendChild(nombre);            

							
			if (element.bounty!=="")
				recompensa.innerHTML = "Su recompensa es: $" + element.bounty + " Berries";
			else
				recompensa.innerHTML =  "No tiene recompensa."					
			//Verifico que la fruta este definida
			if	(element.fruit!==undefined){
				frutaDelDiablo.innerHTML = element.fruit.name;
				frutaImg.src = element.fruit.filename;
				frutaImg.style.width = "150px";
			}else{
				frutaDelDiablo.innerHTML = "No consumió ninguna fruta del diablo.";	
			}
				li.appendChild(recompensa);
				li.appendChild(frutaDelDiablo);
				li.appendChild(frutaImg);
				
			}
    	});
    			
    });

