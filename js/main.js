const bsButton = new bootstrap.Button('#myButton')
document.querySelectorAll('.btn').forEach(buttonElement => {
    const button = bootstrap.Button.getOrCreateInstance(buttonElement)
    button.toggle()
  })

  function calculateTotalPrecio() {
    const regularTicketPrice = 2000;
    const studentTicketPrice = regularTicketPrice * 0.2; 
    const trainerTicketPrice = regularTicketPrice * 0.5;
    const juniorTicketPrice = regularTicketPrice * 0.8; 
    
    let regularTicketQuantity = parseInt(document.getElementById('regular-ticket').value);
    let studentTicketQuantity = parseInt(document.getElementById('student-ticket').value);
    let trainerTicketQuantity = parseInt(document.getElementById('ticketTrainee').value);
    let juniorTicketQuantity = parseInt(document.getElementById('ticketJr').value);
    
    let totalPrecio = (regularTicketPrice * regularTicketQuantity) + (studentTicketPrice * studentTicketQuantity) + (trainerTicketPrice * trainerTicketQuantity) + (juniorTicketPrice * juniorTicketQuantity);
    
    document.getElementById('total').textContent =  totalPrecio;
  }

  function borrarFormulario() {
    document.getElementById("formulario").reset();
    document.getElementById("pago").style.display = "none";
  }

  document.getElementById("botondepago").addEventListener("click", function() {
    document.getElementById("pago").style.display = "block";
  });
  