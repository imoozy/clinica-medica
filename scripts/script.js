function mascaraCPF(input) {
    let value = input.value.replace(/\D/g, ''); // Remove qualquer caractere não numérico
    if (value.length > 11) {
        value = value.slice(0, 11); // Limita o número de caracteres a 11
    }

    input.value = value
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}


// Função para abrir o popup e exibir os detalhes da consulta
function openPopup(consultaId) {
    const popup = document.getElementById("popup");
    const popupDetails = document.getElementById("popup-details");


    const consultas = {
        consulta1: {
            date: '12/09/2024',
            symptoms: 'Dor de cabeça, febre',
            diagnosis: 'Gripe comum',
            prescription: 'Paracetamol 500mg'
        },
        consulta2: {
            date: '02/09/2024',
            symptoms: 'Cansaço, tosse seca',
            diagnosis: 'Resfriado',
            prescription: 'Xarope para tosse, repouso'
        },
        consulta3: {
            date: '20/08/2024',
            symptoms: 'Dor abdominal, náusea',
            diagnosis: 'Gastrite',
            prescription: 'Omeprazol 20mg'
        }
    };

    const consulta = consultas[consultaId];

    popupDetails.innerHTML = `
        <h3>Consulta - ${consulta.date}</h3>
        <p><strong>Sintomas:</strong> ${consulta.symptoms}</p>
        <p><strong>Diagnóstico:</strong> ${consulta.diagnosis}</p>
        <p><strong>Prescrição:</strong> ${consulta.prescription}</p>
    `;

    popup.style.display = 'flex';
}

// Função para fechar o popup
function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = 'none';
}


// JavaScript para controlar a exibição da agenda e popups

document.getElementById('toggleAgenda').addEventListener('click', function() {
    const agenda = document.getElementById('agenda');
    if (agenda.classList.contains('show')) {
        agenda.classList.remove('show');
    } else {
        agenda.classList.add('show');
        loadAgenda();
    }
});

document.getElementById('closeProfile').addEventListener('click', function() {
    const profile = document.querySelector('.profile');
    profile.style.display = 'none';
});

document.getElementById('closePopup').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
});

function loadAgenda() {
    const agendaContainer = document.getElementById('agendaContainer');
    const hours = Array.from({ length: 8 }, (_, i) => `${i.toString().padStart(2, '9')}:00`);
    agendaContainer.innerHTML = hours.map(hour => `
        <div class="hour-slot" data-hour="${hour}" onclick="showAppointmentDetails('${hour}')">
            ${hour} - Paciente X
        </div>
    `).join('');
}

function showPopup(patients) {
    const popup = document.getElementById('popup');
    const popupDetails = document.getElementById('popupDetails');
    popupDetails.innerHTML = patients.map(patient => `
        <p><strong>${patient.name}</strong> - ${patient.time}</p>
        <p>${patient.details}</p>
    `).join('');
    popup.style.display = 'flex';
}

function showAppointmentDetails(hour) {
    // Exemplo de detalhes para uma hora específica
    showPopup([
        { name: 'Paciente X', time: hour, details: 'Detalhes da consulta para a hora selecionada.' }
    ]);
}



