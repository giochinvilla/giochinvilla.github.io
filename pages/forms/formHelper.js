function createInputField(id, name, label, required = false, size = 'large') {
    let column;
    switch (size) {
        case 'small':
            column = 'col-md-4';
            break;
        case 'medium':
            column = 'col-md-6';
            break;
        case 'large':
        default:
            column = 'col-md-12';
            break;
    }
    const div = document.createElement('div');
    div.className = `${column} mt-2`;
    const floatingDiv = document.createElement('div');
    floatingDiv.className = 'form-floating';

    const inputElement = document.createElement('input');
    inputElement.id = id;
    inputElement.name = name;
    inputElement.className = 'form-control';
    inputElement.placeholder = '';
    inputElement.required = required;

    const labelElement = document.createElement('label');
    labelElement.className = 'form-label';
    labelElement.textContent = `${label}*`;

    const invalidElement = document.createElement('div');
    invalidElement.className = 'invalid-feedback';
    invalidElement.textContent = `Inserisci un ${label.toLowerCase()}`;

    floatingDiv.appendChild(inputElement);
    floatingDiv.appendChild(labelElement);
    floatingDiv.appendChild(invalidElement);
    div.appendChild(floatingDiv);
    return div;
}

function createInputSelector(id, name, label, required = false, size = 'large', options = []) {
    let column;
    switch (size) {
        case 'small':
            column = 'col-md-4';
            break;
        case 'medium':
            column = 'col-md-6';
            break;
        case 'large':
        default:
            column = 'col-md-12';
            break;
    }

    const div = document.createElement('div');
    div.className = `${column} mt-2`;

    const floatingDiv = document.createElement('div');
    floatingDiv.className = 'form-floating';

    const selectElement = document.createElement('select');
    selectElement.id = id;
    selectElement.name = name;
    selectElement.className = 'form-select';
    selectElement.required = required;

    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    defaultOption.textContent = `Seleziona una ${label.toLowerCase()}*`;
    selectElement.appendChild(defaultOption);

    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option.value;
        opt.textContent = option.text;
        selectElement.appendChild(opt);
    });

    const labelElement = document.createElement('label');
    labelElement.className = 'form-label';
    labelElement.htmlFor = id;
    labelElement.textContent = `${label}*`;

    const invalidElement = document.createElement('div');
    invalidElement.className = 'invalid-feedback';
    invalidElement.textContent = `Seleziona una ${label.toLowerCase()}`;

    floatingDiv.appendChild(selectElement);
    floatingDiv.appendChild(labelElement);
    floatingDiv.appendChild(invalidElement);
    div.appendChild(floatingDiv);
    return div;
}

function createAccordion(title, inputs) {
    const sanitizedTitle = title.replace(/\s+/g, '_');
    const accordionElement = document.createElement('div');
    accordionElement.className = 'accordion-item shadow';

    const headerDiv = document.createElement('div');
    headerDiv.className = 'accordion-header';

    const headerButton = document.createElement('button');
    headerButton.className = 'accordion-button';
    headerButton.setAttribute('type', 'button');
    headerButton.setAttribute('data-bs-toggle', 'collapse');
    headerButton.setAttribute('data-bs-target', `#collapse_${sanitizedTitle}`);
    headerButton.setAttribute('aria-expanded', 'true');
    headerButton.setAttribute('aria-controls', `collapse_${sanitizedTitle}`);

    const titleElement = document.createElement('h4');
    titleElement.textContent = title;
    titleElement.style.margin = '0';
    headerButton.appendChild(titleElement);

    headerDiv.appendChild(headerButton);
    accordionElement.appendChild(headerDiv);

    const collapseDiv = document.createElement('div');
    collapseDiv.id = `collapse_${sanitizedTitle}`;
    collapseDiv.className = 'accordion-collapse collapse show';

    const bodyDiv = document.createElement('div');
    bodyDiv.className = 'accordion-body row m-0 p-0';

    const inputContainer = document.createElement('div');
    inputContainer.id = `input-container-${sanitizedTitle}`;
    inputContainer.className = 'row m-0 p-2';

    inputs.forEach((input, index) => {
        let inputFieldNode;

        if (input.type === 'select') {
            inputFieldNode = createInputSelector(input.id, input.name, input.label, input.required, input.size, input.options);
        } else {
            inputFieldNode = createInputField(input.id, input.name, input.label, input.required, input.size);
        }

        if (inputFieldNode) {
            if (index === inputs.length - 1) {
                inputFieldNode.classList.add('mb-2');
            }
            inputContainer.appendChild(inputFieldNode);
        } else {
            console.error('Failed to create input field:', input);
        }
    });

    bodyDiv.appendChild(inputContainer);
    collapseDiv.appendChild(bodyDiv);
    accordionElement.appendChild(collapseDiv);

    return accordionElement;
}

function summonModal(modalId, title, bodyContent, footerButtons = [], type = 'loader') {
    const existingModal = document.getElementById(modalId);
    if (existingModal) {
        existingModal.remove();
    }

    let bodyHtml;
    if (bodyContent === 'loader') {
        bodyHtml = '<div class="modal-body d-flex justify-content-center"><div class="spinner-border" role="status"><span class="visually-hidden">Caricamento...</span></div></div>';
    } else {
        if (type === 'alert') {
            bodyHtml = `<div class='modal-body'><i class='fa fa-exclamation-triangle'></i> ${bodyContent}</div>`;
        } else if (type === 'error') {
            bodyHtml = `<div class='modal-body'><i class='fa fa-close'></i> ${bodyContent}</div>`;
        } else if (type === 'success') {
            bodyHtml = `<div class='modal-body'><i class='fa fa-check-circle'></i> ${bodyContent}</div>`;
        } else {
            bodyHtml = bodyContent;
        }
    }

    let titleBadge;
    if (type === 'alert') {
        titleBadge = "ATTENZIONE";
    } else if (type === 'error') {
        titleBadge = "ERRORE";
    } else if (type === 'success') {
        titleBadge = "CONGRATULAZIONI";
    } else if (type === 'loading') {
        titleBadge = "CARICAMENTO";
    } else {
        titleBadge = "CONTINUA";
    }

    const footerContent = footerButtons.map(button => `
        <a href="${button.link || '#'}" class="btn ${button.class || 'btn-danger'}" role="button" data-bs-dismiss="${button.dismiss ? 'modal' : ''}">
            ${button.label}
        </a>
    `).join('');

    const modalHTML = `
    <div class="modal fade" id="${modalId}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="${modalId}Label">
                        <img alt='Image' src='../../images/icons/subtitle-logo.webp' style='width:28px; margin-right: 10px;'>
                        <span class='badge bg-danger rounded-pill text-white'>${titleBadge}</span> ${title}
                    </h1>
                </div>
                <h5 class="modal-body p-0 m-2">
                    ${bodyHtml}
                </h5>
                <div class="modal-footer">
                    ${footerContent}
                </div>
            </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
    const modalInstance = new bootstrap.Modal(document.getElementById(modalId));
    modalInstance.show();
}

function killModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
}

function submitForm(fetchUrl, formData) {
    summonModal('modalID', "Invio dell'iscrizione", "loader", [], "loader");
    fetch(fetchUrl, {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(text => {
        if (text === '{"status":101}') {
            summonModal('modalID', "Dati incorretti", "Il nome utente o la password non sono corretti! Se questo è un errore contatta tecnico.giochinvilla@gmail.com", [{label: 'Esci', dismiss: false, link: 'javascript:location.reload();' }], "alert");
        } else if (text === '{"status":102}') {
            summonModal('modalID', "Giornata Annullata", "Mi dispiace! Questa giornata è stata annullata, quindi non puoi più prenotarti!", [{label: 'Esci', dismiss: false, link: 'javascript:location.reload();' }], "alert");
        } else if (text === '{"status":103}') {
            summonModal('modalID', "Slot Annullato", "Mi dispiace! Questo slot è stata annullato, quindi non puoi più prenotarti!", [{label: 'Esci', dismiss: false, link: 'javascript:location.reload();' }], "alert");
        } else if (text === '{"status":104}') {
            summonModal('modalID', "Posto già prenotato", "Mi dispiace! Questo slot ti è appena stato soffiato all'ultimo secondo, quindi non puoi più prenotarti!", [{label: 'Esci', dismiss: false, link: 'javascript:location.reload();' }], "alert");
        } else if (text === '{"status":105}') {
            summonModal('modalID', "Mail Invalida", "La mail che hai inserito non risulta valida! Se questo è un errore contatta tecnico.giochinvilla@gmail.com", [{label: 'Esci', dismiss: false, link: 'javascript:location.reload();' }], "alert");
        } else if (text === '{"status":100}'){
            summonModal('modalID', "Prenotazione Effettuata", "Iscrizione completata con successo! A breve ti arriverà una mail che ti confermerà la prenotazione effettuata!", [{label: 'Esci', dismiss: false, link: 'javascript:location.reload();' }], "success");
        } else {
            summonModal('modalID', "Risposta non prevista", "Ricevuto codice di risposta inesistente: {" + text + "}. Contatta tecnico.giochinvilla@gmail.com", [{label: 'Esci', dismiss: false, link: 'javascript:location.reload();' }], "error");
        }
    })
        .catch(error => {
        summonModal('modalID', "Errore Rilevato", error, [{label: 'Esci', dismiss: false, link: '../../index.html' }], "error");
    });
}

function validateForms() {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}

function loadForms(fetchUrl) {
    document.addEventListener("DOMContentLoaded", function() {
        fetch(fetchUrl, {
            method: "GET",
            redirect: "follow",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            }
        })
            .then(response => {
            if (!response.ok) {
                summonModal('modalID', "Errore in Fetch", "Errore nel Fetch. Contatta tecnico.giochinvilla@gmail.com", [{label: 'Esci', dismiss: false, link: '../../index.html' }], "error");
                throw new Error(response.statusText);
            }
            return response.json();
        })
            .then(data => {
            loadFormsDefiner(data);
        })
            .catch(error =>  {
            summonModal('modalID', "Errore Interno", "Errore Interno. Contatta tecnico.giochinvilla@gmail.com", [{label: 'Esci', dismiss: false, link: '../../index.html' }], "error")
            console.log(error);
        });
    });
}

function loadFormsDefiner(data) {
    throw new Error("Abstract method must be overriden");
}

function loadSubmit(disabled = true) {
    const container = document.createElement('div');
    container.className = 'mt-4';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'gdpr';
    checkbox.className = 'form-check-input';
    checkbox.required = true;

    const label = document.createElement('label');
    label.setAttribute('for', 'gdpr');
    label.className = 'form-check-label';
    label.textContent = 'Accetto i termini e le condizioni del trattamento dei dati conformemente alla normativa europea in materia di protezione dei dati (GDPR).';

    const invalidFeedback = document.createElement('div');
    invalidFeedback.className = 'invalid-feedback';
    invalidFeedback.textContent = 'Devi accettare per poterti iscrivere';

    container.appendChild(checkbox);
    container.appendChild(label);
    container.appendChild(invalidFeedback);

    const submitButton = document.createElement('button');
    submitButton.id = 'submit';
    submitButton.type = 'submit';
    submitButton.className = 'btn btn-danger';
    submitButton.disabled = disabled;
    submitButton.textContent = 'Invia l\'iscrizione';

    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));
    container.appendChild(submitButton);

    checkbox.addEventListener('change', function () {
        submitButton.disabled = !this.checked;
    });
    return container;
}