const element = document.getElementById("typing");
        const texts = ["- José Diogo", "- JD"];
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
      
        function typeLoop() {
          const currentText = texts[index];
          const visibleText = currentText.substring(0, charIndex);
          element.textContent = visibleText;
      
          if (!isDeleting && charIndex < currentText.length) {
            charIndex++;
            setTimeout(typeLoop, 100);
          } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeLoop, 50);
          } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
              index = (index + 1) % texts.length;
            }
            setTimeout(typeLoop, 1000);
          }
        }
        typeLoop();


document.getElementById('tema').addEventListener('click', function () {
    var img = document.getElementById('imagemTema');
    var linkCSS = document.getElementById('estiloPrincipal');
    var logo = document.querySelector('.logo img');
       var logoFooter = document.querySelector('.logoFooter');

    if (img.src.includes('Sol.png')) {
        img.src = './imgs/Tema/Lua.png';
        linkCSS.href = './style/indexTema2.css';
        logo.src = './imgs/logo/logo JD black.png';
        logoFooter.src = './imgs/logo/logo JD.png';
    } else {
        img.src = './imgs/Tema/Sol.png';
        linkCSS.href = './style/index.css';
        logo.src = './imgs/logo/logo JD.png';
        logoFooter.src = './imgs/logo/logo JD black.png';
    }
});