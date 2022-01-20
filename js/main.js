$(".slider").slick({
    infinite: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          infinite: true,
        },
      },
      {
        breakpoint: 300,
        settings: "unslick", // destroys slick
      },
    ],
  });

  const btnLoad = document.getElementById("loadMore");
  btnLoad.onclick = function () {
    fetchCats();
  };

  const fetchCats = async () => {
    try {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search"
      );
      const data = await response.json();
      console.log(data[0].url);
      $(".slider").slick(
        "slickAdd",
        "<div><img src=" + data[0].url + " /></div>"
      );
    } catch (e) {
      console.log(e);
    }
  };



//Get the button
var mybutton = document.getElementById("myBtn");
mybutton.onclick = function() {
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    console.log(window.pageYOffset);

  if (window.pageYOffset > (window.outerHeight / 2)) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

