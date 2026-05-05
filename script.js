//You can edit ALL of the code here
const allEpisodes = getAllEpisodes();

function setup() {
  extractEpisodeDetails(allEpisodes);
  makePageForEpisodes(allEpisodes);
  console.log(extractEpisodeDetails(allEpisodes));
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}

function extractEpisodeDetails(allEpisodes) {
  let episodeName = document.createElement("h2");
  let episodeCode = document.createElement("h3");
  let episodeImage = document.createElement("img");
  let episodeSummary = document.createElement("p");
  let episodeCard = document.createElement("section");
  let seasonNumber;
  let episodeNumber;
  for (let episode of allEpisodes) {
    episodeName.innerText = episode.name;
    seasonNumber = episode.season.toString();
    episodeNumber = episode.number.toString();
    episodeSummary.innerText = episode.summary;
    episodeImage.src = episode.image.medium;
    episodeImage.alt = episode.name;
    episodeImage.width = "300";
    episodeCode.innerText = `S${seasonNumber.padStart(2, "0")}E${episodeNumber.padStart(2, "0")}`;
    episodeCard.append(episodeName, episodeCode, episodeImage, episodeSummary);
  }
  
  return episodeCard;
}

window.onload = setup;
