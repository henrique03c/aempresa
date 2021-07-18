(() => {
  const button = document.getElementById('cadastrar');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const menu = document.getElementById('menu');
  const remover = document.getElementById('remove');
  const lsNome = document.getElementById('lsnome');
  const lsEmail  = document.getElementById('lsemail');
  const onMenu = document.getElementById('on-menu');
  const offMenu = document.getElementById('off-menu');
  const enviar = document.getElementById('enviar');
  const dados = document.getElementById('localStorage');

  button.addEventListener('click', (event) => {
    event.preventDefault();
    let nomeRequired  = document.getElementById('nomeRequired');
    let emailRequired = document.getElementById('emailRequired');

    if (!(nomeInput.value == "") && !(emailInput.value == "")) {
      localStorage.setItem('nome', nomeInput.value);
      localStorage.setItem('email', emailInput.value);
  
      lsNome.innerText = localStorage.getItem('nome');
      lsEmail.innerText = localStorage.getItem('email');
      nomeRequired.style.display = "none";
      emailRequired.style.display = "none";
      VerResultado();
    } else {
      nomeRequired.style.display = "inline-flex";
      emailRequired.style.display = "inline-flex";
    }
  })

  menu.addEventListener('click', (event) => {
    event.preventDefault();
    VerResultado();
  })

  remover.addEventListener('click', (event) => {
    event.preventDefault();
    lsNome.innerText = "---";
    lsEmail.innerText = "---";
    localStorage.clear();
    nomeInput.value = '';
    emailInput.value = '';
    VerResultado();
  })

  function VerResultado() {
    if (onMenu.style.display == "none"){
      onMenu.style.display = "block";
      offMenu.style.display = "none";
      enviar.style.display = "block"
      dados.style.display = "none"
    } else {
      onMenu.style.display = "none";
      offMenu.style.display = "block";
      enviar.style.display = "none"
      dados.style.display = "flex"
    }
  };
})();

