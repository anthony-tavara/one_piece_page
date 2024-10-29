	fetch("https://api.api-onepiece.com/v2/chapters/en")
	  .then(response => response.json())
	  .then(data=>{	
	  	//console.log(data);
		const lista = document.getElementById("lista");
		data.forEach((element)=>{
		/*	if ( contador <= MAX_ITEMS ){
				let li = document.createElement("li");
				let nombre = document.createElement("p");
				let recompensa = document.createElement("p");
				let frutaDelDiablo = document.createElement("p");
				let frutaImg = document.createElement("img");
				nombre.innerHTML = "Nombre: " + element.name;

				if (element.bounty!=="")
					recompensa.innerHTML = "Su recompensa es: $" + element.bounty + " Berries";
				else
					recompensa.innerHTML =  "No tiene recompensa."
				//Verifico que la fruta este definida
				if	(element.fruit!==undefined){
					frutaDelDiablo.innerHTML = element.fruit.name;
					frutaImg.src = element.fruit.filename;
					frutaImg.style.width = "150px";
				}else
					frutaDelDiablo.innerHTML = "No consumió ninguna fruta del diablo.";	

				li.appendChild(nombre);            
				li.appendChild(recompensa);
				li.appendChild(frutaDelDiablo);
				li.appendChild(frutaImg);
				lista.appendChild(li);
			}
		//	contador ++;	*/
		});
		console.log(data[0]);
		console.log(data[1]);

	  });
