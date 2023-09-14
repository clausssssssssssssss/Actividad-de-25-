document.getElementById('calcular').addEventListener('click', function () {

    const cantidadRetiro = parseInt(document.getElementById('cantidadRetiro').value);

    if (cantidadRetiro < 0) {
        alert('La cantidad de retiro NO debe de ser negativa. Ingrese una cantidad valida.');
        return;
    }

    const nombreUsuario = document.getElementById('nombreUsuario').value;
    
    document.getElementById("mensajeSaludo").textContent = `Bienvenid@ ${nombreUsuario}, 
    tu retiro ha sido realizado:`
    
    const Billete100 = Math.floor(cantidadRetiro / 100);
    const Billete50 = Math.floor((cantidadRetiro % 100) / 50);
    const Billete20 = Math.floor(((cantidadRetiro % 100) % 50) / 20);
    const Billete10 = Math.floor((((cantidadRetiro % 100) % 50) % 20) / 10);
    const Billete5 = Math.floor(((((cantidadRetiro % 100) % 50) % 20) % 10) / 5);
    const Billete1 = (((cantidadRetiro % 100) % 50) % 20) % 10 % 5;
      
    document.getElementById('Billete100').textContent = Billete100;
    document.getElementById('Billete50').textContent = Billete50;
    document.getElementById('Billete20').textContent = Billete20;
    document.getElementById('Billete10').textContent = Billete10;
    document.getElementById('Billete5').textContent = Billete5;
    document.getElementById('Billete1').textContent = Billete1;
});