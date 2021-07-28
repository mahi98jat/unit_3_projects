async function findMovies() {
  try {
    let movie = document.getElementById("movie").value;
    let res = await fetch(`http://www.omdbapi.com/?apikey=bd9d9797&t=${movie}`);
    let data = await res.json();
    // console.log(data.Response);
    if (data.Response === "False") {
      let div = document.getElementById("container");
      let image = document.createElement("img");
      image.setAttribute(
        "src",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAclBMVEUAAAD///+lpaWenp4oKChpaWk2Njbu7u7k5OTMzMy2traEhIRgYGD29vYwMDBOTk6XlpZUVFQjIyN1dXXDw8PY19dubm6MjIypqalJSUmUk5Pp6ekODg6vr6/AwMB9fX0bHBzS0tI+Pj48PDwTEhIdHR2YX7s+AAACdElEQVR4nO3Xa3OiMBiGYQKCoiKIlZMHXLX//y9ukjfZ2tXufoNR72umg08jnfQZDkkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwjMqiCUVTlDq3Pi5lPHa5af0Zlf1NVNpw6mS8WYwx+aElmfKyROfKp1DGG583/oy55MSG1c4Nb8eY/NCSqTpEovvUOVZTSfUiNuOhmhUur02OF7WNxaJe6TiZqbmcvOhPI/4bw9BlXW5zrGbyoVCpOYTqKHmrGnP4peSGKzNlblRdltyfrcq+/Z2XpMtqb/NNWR/mEMrBtGRvzNSVtZr6suwFp8uaJoNMeEy6rPNtpqx/0GWty4kwWZdlP58Kuf90WXuT96mKTL4va2lOL9fZ7i3K8uylEfsUyXjocyX5viz/NtyPMv9B6bIyZ2Zeb7qsLDM/hYyHLv9clj5T/6SjzH5guqyqza3WXBv6NmzXW7XJVzIeqvQcT6fLXBahD8qqzgd1PJ8f/vUX8+gBf52p3GfzgL9k2crn+7JyvXA9DjXdcT1cOrR5lLoVuynrmq/nqbz0Hr4Nk3WfhkNOeiw/LB0+vh7wdumw888svyidfFs69G+z3Wm6wqplu2PLiutFZK8tV1Zfd4XdWm/q2n65qzu33TFlnYu6sLul1/b3RjpWOxmI/HbHLUrddicIDl9f1mXt/ixK32C7M2nmXmNeePnRPX2qY20OGznoFf3RPcV6++WDXcIGn+Fc7uLE/OZSxVa1CvA/nb9I+7Fn8gQ2W2c59kyewNVtMidvsPUBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/QaEnxzqaZk/+AAAAABJRU5ErkJggg=="
      );

      div.appendChild(image);
    } else {
      let div = document.getElementById("container");

      let movie_cont = document.createElement("div");
      movie_cont.setAttribute("class", "mov_cont");

      let poster = document.createElement("img");
      poster.setAttribute("src", `${data.Poster}`);

      let rel_date = document.createElement("p");
      rel_date.setAttribute("class", "rel_date");
      rel_date.innerHTML = "Released: " + data.Released;

      let rating = document.createElement("div");
      rating.setAttribute("class", "rating");
      rating.innerHTML = "Rating: " + data.imdbRating;

      let title = document.createElement("div");
      title.setAttribute("class", "title");
      title.innerHTML = data.Title;

      movie_cont.append(poster, title, rating, rel_date);
      // appending one more extra tag if the rating of a movie is more than 8.5
      if (data.imdbRating > 8.5) {
        let rec = document.createElement("div");
        rec.innerHTML = "Recommanded";
        movie_cont.appendChild(rec);
      }
      div.appendChild(movie_cont);
    }
  } catch (err) {
    console.log(err);
  }
}
// all data link ==> http://www.omdbapi.com/?apikey=[yourkey]&
// poster api request ==> http://img.omdbapi.com/?apikey=[yourkey]&
// api link ==> http://www.omdbapi.com/?i=tt3896198&apikey=bd9d9797
// fraud link ==> http://www.omdbapi.com/?s=${movie}&page=2
// findMovies();
// http://www.omdbapi.com/?apikey=bd9d9797&t=
