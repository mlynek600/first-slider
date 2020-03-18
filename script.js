const fetchURL = 'https://picsum.photos/v2/list?limit=10';
const fetchPostsURL = 'https://jsonplaceholder.typicode.com/posts/';
const imgContainer = document.getElementById('list-container');
const postsContainer = document.getElementById('vertical');

let sliderOptions = {
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  nav: false,
  mouseDrag: true,
  controls: false
};

let sliderPostsOptions = {
  container: "#vertical",
  items: 3,
  axis: "vertical",
  swipeAngle: true,
  speed: 5000,
  controls: false,
  mouseDrag: true,
  nav: false,
  autoplay: true,
  autoplayButtonOutput: false,
  autoplayTimeout: 5000,
};

function getImages() {
  fetch(fetchURL)
    .then(response => response.json())
    .then(json => {
      let imgList = json;
      imgList.forEach(function(img) {
        let imgElement = document.createElement("div");
        imgElement.innerHTML = `<div class="img-div"style="background-image:
        url('${img.download_url}.jpg')"><div class="author-div">${img.author}</div></div>`;
        imgContainer.appendChild(imgElement);
      });
      tns(sliderOptions);
    });
}

getImages();

function getPosts() {
  fetch(fetchPostsURL)
    .then(response => response.json())
    .then(json => {
      let postsList = json;
      postsList.forEach(function(posts) {
        let postsElement = document.createElement("div");
        postsElement.innerHTML = `<div class="posts-div">${posts.title}<br><br>${posts.body}<br><br><br></div>`;
        postsContainer.appendChild(postsElement);
      });
      tns(sliderPostsOptions);
    });
}

getPosts()
