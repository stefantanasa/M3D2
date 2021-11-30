let getNode = document.querySelectorAll(".main-container");

let newRow = document.createElement("div");
newRow.className = "row-cols-1 d-flex overflow-hidden";
newRow.innerHTML += `
  <div class="col-6 mt-4 mb-4">
  <h3>This is added In JS</h3>
  <small class="text-muted">All data is taken from an api</small>

  </div>
  `;
getNode[0].appendChild(newRow);
console.log(newRow);



const addCards = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=nirvana")
    .then((response) => response.json())
    .then((content) => {
      console.log(content);

      let getNewRow = document.createElement("div");
      getNewRow.className = "row-cols-1 d-flex overflow-hidden";
      getNode[0].appendChild(getNewRow);

      for (i = 0; i < content.data.length; i++) {
        let newCard = document.createElement("div");
        newCard.className = "col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3";
        newCard.innerHTML = `
    <div class="card p-3">
          <img
            height="150px"
            src="${content.data[i].album.cover}"
            class="card-img-top"
            alt="${content.data[i].album.title}"
          />
          <div class="card-body p-0 mt-2">
            <h5 class="card-title">${content.data[i].title_short}</h5>
            <p class="card-text text-muted">
            ${content.data[i].album.title} album
            </p>
          </div>
          <!-- play button -->

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            class="card-play-btn"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"
            ></path>
          </svg>
        </div>
    `;
        getNewRow.appendChild(newCard);
      }
    });
};
