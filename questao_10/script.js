const form = document.getElementById("form");
const divForm = document.getElementById("divForm");
const divCard = document.getElementById("divCard");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fullName = document.getElementById("fullNameInput").value;
    const cpf = document.getElementById("cpfInput").value;
    const email = document.getElementById("emailInput").value;
    const telephone = document.getElementById("telephoneInput").value;
    const country = document.getElementById("countryInput").value;
    const state = document.getElementById("stateInput").value;
    const city = document.getElementById("cityInput").value;
    const neighborhood = document.getElementById("neighborhoodInput").value;
    const street = document.getElementById("streetInput").value;
    const number = document.getElementById("numberInput").value;

    divCard.innerHTML = `
        <div class="card">
          <div class="card-header">
            <h4>Dados Pessoais</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Nome Completo: </strong>${fullName}</li>
            <li class="list-group-item"><strong>CPF: </strong>${cpf}</li>
            <li class="list-group-item"><strong>E-mail: </strong>${email}</li>
            <li class="list-group-item"><strong>Telefone: </strong>${telephone}</li>
          </ul>
          <div class="card-header">
            <h4>Endereço</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>País: </strong>${country}</li>
            <li class="list-group-item"><strong>Estado: </strong>${state}</li>
            <li class="list-group-item"><strong>Cidade: </strong>${city}</li>
            <li class="list-group-item"><strong>Bairro: </strong>${neighborhood}</li>
            <li class="list-group-item"><strong>Rua/Logradouro: </strong>${street}</li>
            <li class="list-group-item"><strong>Número: </strong>${number}</li>
          </ul>
        </div>
    `;

    divForm.classList.remove("d-block");
    divForm.classList.add("d-none");

    divCard.classList.remove("d-none");
    divCard.classList.add("d-block");
});