const fullPost = document.querySelector(".full-post");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://steineriet.one/project_exam/wp-json/wp/v2/posts/" + id;

async function getFullPost() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    const title = document.querySelector("title");
    title.innerHTML = ` ${details.title.rendered} | Urban Style Files`;
    fullPost.innerHTML = " ";

    createHtml(details);
  } catch (error) {
    console.log(error);
    fullPost.innerHTML = displayError();
  }
}

getFullPost();

function createHtml(details) {
  fullPost.innerHTML = `
    <div class="rendered-post">
    ${details.content.rendered}
    </div>
  `;
}
