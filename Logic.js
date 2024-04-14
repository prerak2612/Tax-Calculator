function toggleError(id, isValid) {
    const errorIcon = document.getElementById(id + '-error');
    const tooltip = document.getElementById(id + '-tooltip');

    if (!isValid) {
        errorIcon.style.display = 'inline-block';
        tooltip.classList.add('show');
    } else {
        errorIcon.style.display = 'none';
        tooltip.classList.remove('show');
    }
}


document.getElementById('income').addEventListener('input', function () {
    const isValid = /^[\d,]*$/.test(this.value);
    toggleError('income', isValid);
});

document.getElementById('extraIncome').addEventListener('input', function () {
    const isValid = /^[\d,]*$/.test(this.value);
    toggleError('extraIncome', isValid);
});

document.getElementById('deductions').addEventListener('input', function () {
    const isValid = /^[\d,]*$/.test(this.value);
    toggleError('deductions', isValid);
});

function calculateTax() {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const age = document.getElementById('age').value;

    const totalIncome = income + extraIncome - deductions;

    let tax = 0;
    if (totalIncome > 800000) {
        const taxableAmount = totalIncome - 800000;
        switch (age) {
            case '<40':
                tax = 0.3 * taxableAmount;
                break;
            case '>=40&<60':
                tax = 0.4 * taxableAmount;
                break;
            case '>=60':
                tax = 0.1 * taxableAmount;
                break;
            default:
                tax = 0;
        }
    }

    return tax;
}

document.getElementById('income').addEventListener('input', updateTax);
document.getElementById('extraIncome').addEventListener('input', updateTax);
document.getElementById('deductions').addEventListener('input', updateTax);
document.getElementById('age').addEventListener('change', updateTax);

function updateTax() {
    const tax = calculateTax();
    document.getElementById('tax-result').innerText = tax.toFixed(2);
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const tax = calculateTax();
    const income = parseFloat(document.getElementById('income').value) || 0;
    const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const age = document.getElementById('age').value;

    const totalIncome = income + extraIncome - deductions;
});
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tax = calculateTax();
    const income = parseFloat(document.getElementById('income').value) || 0;
    const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const age = document.getElementById('age').value;

    const totalIncome = income + extraIncome - deductions;

    const modalContent = `
        <div>
            <p>Total Income: ${totalIncome.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Net Income: ${(totalIncome - tax).toFixed(2)}</p>
        </div>
    `;

    
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = modalContent;

    
    document.body.appendChild(modal);

    
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.remove();
        }
    });
});


document.getElementById('income').addEventListener('input', updateTax);
document.getElementById('extraIncome').addEventListener('input', updateTax);
document.getElementById('deductions').addEventListener('input', updateTax);
document.getElementById('age').addEventListener('change', updateTax);

function updateTax() {
    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }

    const tax = calculateTax();
    document.getElementById('tax-result').innerText = tax.toFixed(2);
}
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const tax = calculateTax();
    const income = parseFloat(document.getElementById('income').value) || 0;
    const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
    const deductions = parseFloat(document.getElementById('deductions').value) || 0;
    const age = document.getElementById('age').value;

    const totalIncome = income + extraIncome - deductions;

    const modalContent = `
        <div>
            <p>Total Income: ${totalIncome.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Net Income: ${(totalIncome - tax).toFixed(2)}</p>
            <button id="close-modal">Close</button> <!-- Add close button -->
        </div>
    `;


    const existingModal = document.querySelector('.modal');
    if (existingModal) {
        existingModal.remove();
    }


    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = modalContent;


    document.body.appendChild(modal);


    const closeButton = modal.querySelector('#close-modal');
    closeButton.addEventListener('click', function() {
        modal.remove();
        document.querySelector('form').reset();
    });
});


