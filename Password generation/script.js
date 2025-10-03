// 1. Lấy các phần tử từ HTML
const passwordOutput = document.getElementById('passwordOutput');
const lengthInput = document.getElementById('length');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('numbers');
const symbolsInput = document.getElementById('symbols');
const generateButton = document.getElementById('generateButton');
const copyButton = document.getElementById('copyButton');

// 2. Định nghĩa các bộ ký tự
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// 3. Hàm tạo mật khẩu
function generatePassword() {
    let characters = '';
    if (uppercaseInput.checked) {
        characters += uppercaseChars;
    }
    if (lowercaseInput.checked) {
        characters += lowercaseChars;
    }
    if (numbersInput.checked) {
        characters += numberChars;
    }
    if (symbolsInput.checked) {
        characters += symbolChars;
    }

    if (characters === '') {
        alert('Vui lòng chọn ít nhất một loại ký tự!');
        return;
    }

    let password = '';
    const passwordLength = lengthInput.value;

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordOutput.value = password;
}

// 4. Hàm sao chép mật khẩu
function copyPassword() {
    passwordOutput.select();
    document.execCommand('copy');
    alert('Đã sao chép mật khẩu!');
}


// 5. Gán sự kiện cho các nút
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyPassword);

// Tạo một mật khẩu khi tải trang lần đầu
generatePassword();