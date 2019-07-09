const submitButton = document.querySelector('.btn');
const inputField = document.querySelector('.longInput');
const outputField = document.querySelector('.outputField');
const clear = document.querySelector('.clear');

submitButton.addEventListener('click', function() {
    input = inputField.value;
    capInput = input.toUpperCase();
    caesarCipher(capInput);
});


// [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]
function caesarCipher(str) {
    var solved = '';
    for (var i = 0; i < str.length; i++) {
        var asciiNum = str[i].charCodeAt();
        if (asciiNum >= 65 && asciiNum <= 77) {
            solved += String.fromCharCode(asciiNum + 13);
        } else if (asciiNum >= 78 && asciiNum <= 90) {
            solved += String.fromCharCode(asciiNum - 13);
        } else {
            solved += str[i];
        }
    };
    outputField.innerHTML = solved.toLowerCase();
    // outputField.appendChild(solved);
    console.log(solved.toLowerCase());
};

function clearButton() {
    inputField.value = '';
    outputField.value = '';

};

// Lower case letter still need to be accepted