const btnMobile = document.getElementById('btn-mobile');  // Paara acessar um elemento do HTML --- aqui ta selecionado o id="btn-mobile" e colocando dentro da variavel btnMobile


// Aqui vamos criar a Função (toggleMenu)...
function toggleMenu(event){ 
  if (event.type === 'touchstart') event.preventDefault();// aqui vai ver qual evento ta sendo feito se for o tipo igual a touchstart o evento não vai ativar mais nada no event
  const nav = document.getElementById('nav');  // Para acessar um elemento do HTML---vai selecionar um elemento (NAV) onde vai acontecer a função...
  nav.classList.toggle('active');   // Aqui vai listar todas as classe que tiver dentro do (NAV) --- Agora pode adicionar ou remover uma classe dentro do elemento (NAV) ---- toggle significa adicione caso nao tenha a classe remova caso tenha a classe!!! (active) pode ser o nome qualquer que vc escolhe!!!
  // MODO ACESSIBILIDADE
  const active = nav.classList.contains('active')//Se a (Nav) estiver ativo o active vai mudar o atribuito do aria-expanded de true para falso ou falso para true
event.currentTarget.setAttribute('aria-expanded' , active);// Aqui ta falando qdo o (event for ativo) vai definir o atribuito da aria-expanded como 'true'
  
  // PARA QDO TIVE (active) for true mude o atribuito para 'Fechar Menu' senão tiver true mude o atribuito para 'Abrir Menu'
if (active) {
  event.currentTarget.setAttribute('aria-label' , 'Fechar Menu');
} else{
  event.currentTarget.setAttribute('aria-label' , 'Abrir Menu');
}
  
}


btnMobile.addEventListener('click', toggleMenu);  // aqui ele vai ficar esperando um evento de click para qdo for clicado ele vai ativa a função (toggleMenu) agora tem que criar essa função (toggleMenu)

btnMobile.addEventListener('touchstart', toggleMenu); // para qdo for usar no smartphone pq so (click) demorar 300ms para acionar com o touchstart e mais rapido a resposta de clique

