
function copy(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.value);
}

function getCode() {
  fetch('/api/get-2fa')
    .then(res => res.text())
    .then(code => {
      document.getElementById('codeArea').innerText = "2FA Code: " + code;
    })
    .catch(err => {
      document.getElementById('codeArea').innerText = "Error: " + err.message;
    });
}
