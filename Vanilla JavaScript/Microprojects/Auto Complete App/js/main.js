const search = document.getElementById("search");
const list = document.getElementById("match-list");

//Search states.json and filter

const searchStates = async (searchText) => {
  const res = await fetch("../data/states.json");
  const states = await res.json();

  //Get matches to current text input

  if (searchText.length === 0) {
    matches = [];
    list.innerHTML = '';
  } else {
    let matches = states.filter((state) => {
      const regex = new RegExp(`^${searchText}`, "gi");
      return state.name.match(regex) || state.abbr.match(regex);
    });
    //Show results in html

    const html = matches
      .map(
        (match) =>
          `
        <div class="card card-body mb-4">
            <h4> 
            ${match.name} (${match.abbr}) <span class="text-primary"> ${match.capital}</span>
            </h4>
            <small> Lat: ${match.lat} / Long: ${match.long}</small>
        </div>
        `
      )
      .join("");

    list.innerHTML = html;
  }
};

search.addEventListener("input", () => searchStates(search.value));
