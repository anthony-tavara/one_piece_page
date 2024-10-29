	fetch('https://api.api-onepiece.com/v2/characters/en')
	  .then(response => response.json())
	  .then(data=>{	
	  	//console.log(data);
		const MAX_ITEMS = 1000;
		let contador = 0;
		const lista = document.getElementById("lista");
		data.forEach((element)=>{
			if ( contador <= MAX_ITEMS ){
				let li = document.createElement("li");
				let nombre = document.createElement("p");
				let enlace = document.createElement("a");
                enlace.href = `personaje.html?name=${encodeURIComponent(element.name)}`; // Enlace a la página de detalles				
                enlace.textContent = "Character: " + element.name;
				
		
				li.appendChild(nombre);            
				li.appendChild(enlace);
				lista.appendChild(li);
			}
		//	contador ++;	
		});
		console.log(data[0]);
		console.log(data[1]);

	  });


