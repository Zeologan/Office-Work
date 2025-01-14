// const url = "https://api.jikan.moe/v4/top/anime";

// async function fetchData() {
//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// }

//https://docs.api.jikan.moe/#tag/top
// fetchData();
const url = "https://api.jikan.moe/v4/top/anime";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Fetching error:", error);
    return null;
  }
}

// Create and display cards
function createCards() {
  const cardRow = document.getElementById("cardRow");

  fetchData().then((responseData) => {
    if (responseData && responseData.data) {
      responseData.data.forEach((anime) => {
        const card = `
          <div class="col-md-4 d-flex justify-content-center mb-4">
            <div class="card ud-card" style="width: 18rem; height: 27rem;">
              <img src="${anime.images.jpg.image_url}" class="card-img-top" alt="${anime.title}">
              <div class="card-body">
                <h5 class="card-title">${anime.title}</h5>
                <p class="card-text">Type: ${anime.type}</p>
                <p class="card-text">Episodes: ${anime.episodes}</p>
                <p class="card-text">Status: ${anime.status}</p>
              </div>
            </div>
          </div>
        `;
        cardRow.innerHTML += card;
      });
    } else {
      console.error("Failed to fetch data.");
    }
  });
}

window.addEventListener("load", createCards);
