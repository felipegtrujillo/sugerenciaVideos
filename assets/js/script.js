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
     let urlInicio = ` ${this._url}?start=${tiempoInicio}`;   
     let iframe = document.getElementById(this._id);
     iframe.setAttribute("src", urlInicio);
   
  }
}

let Musica = new Reproductor("https://www.youtube.com/embed/9IZKcb3LndA?si=zaYJdU2YauO8KSk1", 'musica');
let Pelicula = new Reproductor("https://www.youtube.com/embed/UoSSbmD9vqc?si=L-XQibhpchY8EPez" , "peliculas" );
let Serie = new Reproductor("https://www.youtube.com/embed/3bQ1wHdOHxQ?si=5Rmd03mvgfRud8v_" , "series" ); 

Musica.playMultimedia();
Pelicula.playMultimedia();
Serie.playMultimedia();

Musica.setInicio(10);

/* . Utiliza el método “setInicio” para modificar el tiempo de inicio en alguna de las instancias creadas. */
