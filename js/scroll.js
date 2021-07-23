var x = window.matchMedia("(min-width: 992px)")

window.onscroll = function () {
  myFunction(x)
  x.addListener(myFunction)
};

function myFunction() {
  var viewport = $(window).height();
  var linker_studium_container = document.getElementById("studium_preview_wrapper");
  var linker_job_container = document.getElementById("job_preview_wrapper");
  var startcontainer = $(".personendiv").height();
  var studium_textwrapperheight = $(".studium_text_wrapper").height();
  var job_textwrapperheight = $(".job_text_wrapper").height();

  var summe = startcontainer + studium_textwrapperheight
  if (x.matches) {
  // Nach dem oberen Personendiv wird der erste linke Container auf sticky gesetzt
  if (((document.body.scrollTop > startcontainer) && (document.body.scrollTop <= studium_textwrapperheight)) || ((document.documentElement.scrollTop > startcontainer) && (document.documentElement.scrollTop <= studium_textwrapperheight))) {
    linker_studium_container.classList.remove("bottom");
    linker_studium_container.classList.add("sticky");

  } else if (document.body.scrollTop > studium_textwrapperheight && document.body.scrollTop <= summe || document.documentElement.scrollTop > studium_textwrapperheight && document.documentElement.scrollTop <= summe) {
    linker_studium_container.classList.remove("sticky");
    linker_studium_container.classList.add("bottom");
    linker_job_container.classList.remove("sticky");


  } else if (document.body.scrollTop > summe && document.body.scrollTop <= summe + job_textwrapperheight - viewport || document.documentElement.scrollTop > summe && document.documentElement.scrollTop <= summe + job_textwrapperheight - viewport) {
    linker_job_container.classList.remove("bottom");
    linker_job_container.classList.add("sticky");
  } else if (document.body.scrollTop > summe + job_textwrapperheight - viewport || document.documentElement.scrollTop > summe + job_textwrapperheight - viewport) {
    linker_job_container.classList.remove("sticky");
    linker_job_container.classList.add("bottom");
  } else {
    linker_studium_container.classList.remove("sticky");
  }

}
}
