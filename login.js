document.querySelector('input[type="submit"]').addEventListener('click', loginFunction);

function loginFunction(event) {
    event.preventDefault();
    var username = document.querySelector('input[type="text"]').value;
    var password = document.querySelector('input[type="password"]').value;

    var accounts = [
        { username: 'nguyentuanhung', password: 'nguyentuanhung' },
        { username: 'lethuyvan', password: 'lethuyvan' }
    ];

    var isValid = accounts.some(function(account) {
        return account.username === username && account.password === password;
    });

    var messageElement = document.getElementById('loginMessage');
    if (!messageElement) {
        messageElement = document.createElement('div');
        messageElement.id = 'loginMessage';
        document.querySelector('.inputBox:last-child').appendChild(messageElement);
    }

    if (isValid) {
        window.location.href = 'index.html';
    } else {
        messageElement.textContent = 'You\'re not my friend!!!';
    }
}

document.getElementById('password').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        loginFunction(event);
    }
});
