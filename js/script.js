const blogUrl =
  "https://steineriet.one/project_exam/wp-json/wp/v2/posts?_embed";

const blogContainer = document.querySelector(".blog-wrapper");
const postContainer = document.querySelector(".featured-posts");
const featuredContainer = document.querySelector(".featured-container");
const allPosts = document.querySelector(".all-posts");
const perPage = document.querySelector(".per-page-selection");

async function getApiTwo(url) {
  try {
    const responseTwo = await fetch(url);
    const postsTwo = await responseTwo.json();

    blogContainer.innerHTML = " ";
    postsTwo.forEach(function (postTwo) {
      blogContainer.innerHTML += `
      <a href="details.html?id=${postTwo.id}">
        <div class="cards">
          <img src="${postTwo._embedded["wp:featuredmedia"]["0"].source_url}" alt="" class="thumbnail-img">
         
            <h3 id="card-title">${postTwo.title.rendered} </h3>
            
           
        </div>
      </a>
      `;
    });
  } catch (error) {
    console.log(error);
    blogContainer.innerHTML = displayError();
  }
}

getApiTwo(blogUrl);

perPage.onchange = function (event) {
  const newUrl = blogUrl + `&per_page=${event.target.value}`;
  blogContainer.innerHTML = "";
  getApiTwo(newUrl);
};
