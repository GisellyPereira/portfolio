export default function puxarImg() {
  fetch('https://avatars.githubusercontent.com/u/116305443?v=4')
    .then(function (data) {
      return data.blob();
    }).then(function (result) {
      const imgURL = URL.createObjectURL(result);
      const img = `<img src="${imgURL}" class="imgss"/>`

      document.querySelector('.profile').innerHTML = img;
    })
}



