const url = "https://api.github.com/users/uitalorss"

axios.get(url)
  .then(function(response){
    const nomeUsuario = document.getElementById('nome_usuario');
    const userInformation = document.querySelector('.information');
    const avatar = document.querySelector('.avatar');
    nomeUsuario.textContent = response.data.name;
    avatar.innerHTML = `<img src=${response.data.avatar_url} alt="" />`
    userInformation.innerHTML = `
    <li><img src="assets/img/social.png" alt="">${response.data.followers} seguidores</li>
    <li><img src="assets/img/social.png" alt="">${response.data.following} seguindo</li>
    <li><img src="assets/img/repositories.png" alt="">${response.data.public_repos} Repositorios</li>
    <li><img src="assets/img/work.png" alt="">Freelancer</li>
    <li><img src="assets/img/local.png" alt="">Salvador</li>
    `

  })
  .catch(error => console.error(error))