var photoFile = document.getElementById('photo-file');

document.getElementById('select-image').onclick = function () {
  photoFile.click();
};

window.addEventListener('load', () => {
  photoFile.addEventListener('change', () => {
    let file = photoFile.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (event) {
      let image = document.getElementById('photo-preview');
      image.src = event.target.result;
    };
  });
});
