document.getElementById('whatsappButton').addEventListener('click', function() {
    var telefono = document.getElementById('telefono').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();

    if (telefono.length !== 10 || isNaN(telefono)) {
      alert('Por favor ingresa un número válido de 10 dígitos');
      return;
    }

    var completo = '521' + telefono;

    if (mensaje === '') {
      alert('Por favor escribe un mensaje');
      return;
    }

    var url = 'https://wa.me/' + completo + '?text=' + encodeURIComponent(mensaje);
    window.open(url, '_blank');
  });