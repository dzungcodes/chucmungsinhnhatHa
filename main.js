function removeHiddenBtn() {
    setTimeout(
        function () {
            var element = document.querySelector('button');
            element.classList.remove("inactive");
        }, 2000);
  }

document.addEventListener('click', removeHiddenBtn)

