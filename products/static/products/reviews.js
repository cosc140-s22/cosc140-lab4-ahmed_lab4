const ratings = document.querySelectorAll(".avg_rating");

const getStars = (rating) => {
  let stars = [];
  let num_stars = parseFloat(rating);
  for (let i = 0; i < parseInt(num_stars); i++) {
    stars.push(`<i class="fa-solid fa-star"></i>`);
  }
  if (num_stars % parseInt(num_stars) !== 0) {
    //Not a whole number - Add half a star
    stars.push(`<i class="fa-solid fa-star-half"></i>`);
  }
  return stars;
};

ratings.forEach((rating) => {
  let txt = rating.textContent;
  rating.textContent = "";
  if (txt != "None") {
    getStars(txt).forEach((star) => {
      rating.innerHTML += star;
    });
  }
});
