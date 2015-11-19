
(function() { //Voegt de class .hide toe op uitagenda
     var uitagendaArticles = document.querySelectorAll('aside section:nth-of-type(2) article');
     var uitagendaHeading = document.querySelector('aside section:nth-of-type(2) h2');

     for (var i = 0; i < uitagendaArticles.length; i++) {
     uitagendaArticles[i].classList.add('hide');
     }

     uitagendaHeading.addEventListener('click', function(e){
     e.preventDefault();

     uitagendaHeading.classList.toggle("active"); //pijltje

     for (var i = 0; i < uitagendaArticles.length; i++) {
     if (uitagendaArticles[i].classList.contains('hide')) {
     uitagendaArticles[i].classList.remove('hide');
     } else {
     uitagendaArticles[i].classList.add('hide');
     }
     }

        // document.getElementById("hide").style.transition = "ease-in 2s";

     });

 })();

(function() { //Voegt de class .hide toe op mededelingen
     var mededelingenArticles = document.querySelectorAll('aside section:first-of-type article');
     var mededelingenHeading = document.querySelector('aside section:first-of-type h2');

     for (var i = 0; i < mededelingenArticles.length; i++) {
     mededelingenArticles[i].classList.add('hide');
     }

     mededelingenHeading.addEventListener('click', function(e){
     e.preventDefault();

     mededelingenHeading.classList.toggle("active");

     for (var i = 0; i < mededelingenArticles.length; i++) {
     if (mededelingenArticles[i].classList.contains('hide')) {
     mededelingenArticles[i].classList.remove('hide');
     } else {
     mededelingenArticles[i].classList.add('hide');
     }
     }


     });

 })();

(function() { //Voegt de class .scroll toe
     var navClass = document.querySelectorAll('body header nav');

     for (var i = 0; i < navClass.length; i++) {
     navClass[i].classList.add('scroll');
     }

 })();

