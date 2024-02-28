var modulo = (function () {
  let url = "url recibida";

  function insertaVideo(url, idEtiqueta) {
    console.log("url es " + url);
    console.log("etiqueta es " + idEtiqueta);
    let iframe = document.getElementById(idEtiqueta);
    iframe.setAttribute("src", url);
  }

  return {
    metodoPublico: function (url, idEtiqueta) {
      insertaVideo(url, idEtiqueta);
    },
  };
})();

class Multimedia {
  constructor(url) {
    this._url = url;
  }

  getUrl() {
    return this._url;
  }

  setInicio() {
    return "Este método es para realizar un cambio en la URL del video";
  }
}

class Reproductor extends Multimedia {
  constructor(url,id) {
    super(url);
    this._id = id;
  }

  playMultimedia() {
    modulo.metodoPublico(super.getUrl(), this._id); 
  }

  setInicio(tiempoInicio) {
     let urlSetTime= `${this._url}&start=${tiempoInicio}`;  
     let iframe = document.getElementById(this._id);
     iframe.setAttribute("src", urlSetTime);
   
  }
}

let musica = new Reproductor("https://www.youtube.com/embed/9IZKcb3LndA?si=zaYJdU2YauO8KSk1", 'musica');
let pelicula = new Reproductor("https://www.youtube.com/embed/UoSSbmD9vqc?si=L-XQibhpchY8EPez" , "peliculas" );
let serie = new Reproductor("https://www.youtube.com/embed/3bQ1wHdOHxQ?si=5Rmd03mvgfRud8v_" , "series" ); 

musica.playMultimedia();
musica.setInicio(30); 
pelicula.playMultimedia();
pelicula.setInicio(30); 
serie.playMultimedia();


