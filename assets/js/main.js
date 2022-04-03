const url = "https://api.github.com/users/uitalorss"

axios.get(url)
  .then(function(response){
    const nomeUsuario = document.getElementById('nome_usuario');
    const userInformation = document.querySelector('.information');
    const avatar = document.querySelector('.avatar');
    nomeUsuario.textContent = response.data.name;
    avatar.innerHTML = `<img src=${response.data.avatar_url} alt="" />`
    userInformation.innerHTML = `
    <ul>
      <li><img src="assets/img/social.png" alt="">${response.data.followers} seguidores</li>
      <li><img src="assets/img/social.png" alt="">${response.data.following} seguindo</li>
      <li><img src="assets/img/repositories.png" alt="">${response.data.public_repos} Repositorios</li>
      <li><img src="assets/img/work.png" alt="">Freelancer</li>
      <li><img src="assets/img/local.png" alt="">Salvador</li>
    </ul>
    `

  })
  .catch(error => console.error(error))

  const btnChangeColor = document.querySelector("#changeColor")
  btnChangeColor.addEventListener("click", handleChangeColor)

  function handleChangeColor(){
    let symbols = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++){
      hex += symbols[Math.floor(Math.random() * 16)]
    }
    const cardRound = document.querySelector(".card-round")
    cardRound.style.background = `${hex}`
  }