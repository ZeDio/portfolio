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