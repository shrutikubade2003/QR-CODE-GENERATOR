
const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

generateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isEmptyInput();
});

sizes.addEventListener('change', (e) => {
    isEmptyInput();
});

downloadBtn.addEventListener('click', () => {
    let img = qrContainer.querySelector('img');

    if (img !== null) {
        let imgAttr = img.getAttribute('src');
        downloadBtn.setAttribute('href', imgAttr);
    } else {
        downloadBtn.setAttribute('href', `${document.querySelector('canvas').toDataURL()}`);
    }
});

function isEmptyInput() {
    qrText.value.length > 0 ? generateQRCode() : alert('Enter the text or URL to generate your QR code');
}

function generateQRCode() {
    qrContainer.innerHTML = '';
    const size = sizes.value; // Get selected size from dropdown
    const qrCode = new QRCode(qrContainer, {
        text: qrText.value,
        width: size, // Use selected size
        colorLight: '#fff',
        colorDark: '#000',
    });
}
