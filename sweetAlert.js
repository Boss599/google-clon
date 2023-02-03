Swal.fire({
  text: "Bienvenido(a)",
  footer:
    "<b class='rojo'>Es un clon de la interfaz de Google de hace unos años</b>",
  backdrop: "true",
  timer: 5000,
  timerProgressBar: true,
  allowOutsideClick: false,
});

function aviso() {
  Swal.fire({
    icon: "error",
    text: "No esta habiliadata esta funcion por los momentos",
  });
}
