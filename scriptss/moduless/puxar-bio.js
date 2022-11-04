export default function puxarBio() {
  const parag = document.querySelector('.profile-p')
  fetch('https://api.github.com/users/GisellyPereira')
    .then(response => response.json())
    .then(biografia => {
      parag.innerHTML = biografia.bio
    })
}