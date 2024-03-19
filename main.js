var motivos = [
    " Elas são perfeitas",
    "Gostam de nadar",
    "Até praticam natação",
    "As tartarugas são fofinhas",
      "elas são queridas",
      ];
  
  var imagens = [ "https://i.pinimg.com/736x/80/7f/e0/807fe0695dcac1932798b3e6b41e7caa.jpg",
    "https://s1.static.brasilescola.uol.com.br/be/e/image/tartaruga.jpg",
    "https://portalfilosofando.files.wordpress.com/2011/02/tar_filhotes01.jpg",
    "https://img.freepik.com/fotos-premium/grupo-de-tartarugas-marinhas-nadando-juntas-em-aguas-rasas-criadas-com-ai-generativa_124507-214737.jpg",
    "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/04_sea_turtle.jpg?w=1190&h=953",
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }
  