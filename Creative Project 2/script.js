document.getElementById("randomButton").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("heyp")

    let s = document.getElementById('selector');
    let type = s.options[s.selectedIndex].value;

    let url = "https://emojihub.herokuapp.com/api/random/";
    if (type != 'random'){
        url += "category_" + type;
    }
    console.log(url)
    fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        let results = "";
        //results += '<h2>' + json.name + "</h2>";
        results += "<h2>";
        console.log(json.htmlCode);
        for(let i = 0; i < json.htmlCode.length; ++i){
            results += json.htmlCode[i]
        }

        results += "</h2>";
        document.getElementById("emoji").innerHTML = results;
    });

});