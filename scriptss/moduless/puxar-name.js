export default function puxarName() {
  const h2 = document.querySelector('.profile-h2')
  fetch('https://api.github.com/users/GisellyPereira')
    .then(response => response.json())
    .then(nome => {
      h2.innerHTML = nome.login
    })
}
