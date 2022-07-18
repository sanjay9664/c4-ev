function navbar() {
    return `<div id="navbar">
    <h1 id="news"><a href="headlines">News App</a> </h1>
    <input type="text" id="search_input" placeholder="Search "> 

</div>

<a href="search.html">
    <div id="sidebar">
        <h1 id="counteries">countries</h1>
        <h3 id="in" onclick="csearch()">India</h3>
        <h3 id="ch" onclick="csearch()">China</h3>
        <h3 id="us" onclick="csearch()">Usa</h3>
        <h3 id="uk" onclick="csearch()">UK</h3>
        <h3 id="nz" onclick="csearch()">Newzeland</h3>
    </div>

</a>

`
}
export { navbar }