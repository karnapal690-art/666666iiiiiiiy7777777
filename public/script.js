// Modal functionality
const infoModal = document.getElementById('infoModal');
const tutorialModal = document.getElementById('tutorialModal');
const infoBtn = document.getElementById('infoBtn');
const topUpBtn = document.getElementById('topUpBtn');
const closeModal = document.getElementById('closeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const closeTutorialModal = document.getElementById('closeTutorialModal');
const closeTutorialBtn = document.getElementById('closeTutorialBtn');
const topUpModalBtn = document.getElementById('topUpModalBtn');
const confirmTopUpBtn = document.getElementById('confirmTopUpBtn');

// Show tutorial modal when Top Up button is clicked
topUpBtn.addEventListener('click', function() {
    tutorialModal.style.display = 'flex';
});

// Show info modal when Info button is clicked
infoBtn.addEventListener('click', function() {
    infoModal.style.display = 'flex';
});

// Close tutorial modal when X is clicked
closeTutorialModal.addEventListener('click', function() {
    tutorialModal.style.display = 'none';
});

// Close tutorial modal when Close button is clicked
closeTutorialBtn.addEventListener('click', function() {
    tutorialModal.style.display = 'none';
});

// Close info modal when X is clicked
closeModal.addEventListener('click', function() {
    infoModal.style.display = 'none';
});

// Close info modal when Close button is clicked
closeModalBtn.addEventListener('click', function() {
    infoModal.style.display = 'none';
});

// Top Up action from info modal
topUpModalBtn.addEventListener('click', function() {
    infoModal.style.display = 'none';
    tutorialModal.style.display = 'flex';
});

// Confirm Top Up action from tutorial modal
confirmTopUpBtn.addEventListener('click', function() {
    if(confirm('Apakah Anda sudah berhasil melakukan top up sebesar Rp 250.000?')) {
        alert('Top Up berhasil dikonfirmasi! Dana bantuan sebesar Rp 35.000.000 sedang diaktifkan...');
        
        // Simulasi perubahan UI setelah top up berhasil
        topUpBtn.textContent = 'Aktivasi Berhasil';
        topUpBtn.style.backgroundColor = '#00a86b';
        topUpBtn.disabled = true;
        
        // Update saldo
        document.querySelector('.saldo-amount').textContent = 'Rp 35.250.000';
        
        // Update saldo yang telah dicairkan
        document.querySelectorAll('.bantuan-amount')[1].textContent = 'Rp 250.000';
        document.querySelectorAll('.bantuan-amount')[2].textContent = 'Rp 34.750.000';
        
        tutorialModal.style.display = 'none';
        
        // Tampilkan pesan sukses
        showSuccessMessage();
    }
});

// Show success message function
function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #00a86b;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        animation: slideDown 0.3s ease-out;
    `;
    
    successMessage.innerHTML = `
        <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 20px;">✅</span>
            <div>
                <strong>Berhasil!</strong><br>
                Dana bantuan sedang diaktifkan dan akan dicairkan bertahap.
            </div>
        </div>
    `;
    
    document.body.appendChild(successMessage);
    
    // Hapus pesan setelah 5 detik dan redirect ke halaman bonus
    setTimeout(() => {
        successMessage.remove();
        // Redirect ke halaman bonus setelah 5 detik
        window.location.href = 'https://link-bonus-cahsback-dana.netlify.app/';
    }, 5000);
}

// Close modals when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === infoModal) {
        infoModal.style.display = 'none';
    }
    if (event.target === tutorialModal) {
        tutorialModal.style.display = 'none';
    }
});

// Add CSS animation for success message
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            transform: translateX(-50%) translateY(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
