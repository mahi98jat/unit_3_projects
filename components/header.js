function header() {
  return `<div id="header">
    <h3><a href="./latest.html">latest</a></h3>
    <input
      type="text"
      placeholder="Search Receipe Here"
      oninput="showSuggestion()"
    />
    <h3 ><a href = "./foodofday.html">Recepe of the day</a></h3>
    <h3 ><a href = "./home.html">Home</a></h3>
  </div>
  <div id="data"></div>`;
}

export default header;
