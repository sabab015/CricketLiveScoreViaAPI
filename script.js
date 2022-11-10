fetch("https://api.cricapi.com/v1/cricScore?apikey=8992a6e5-a950-4f5b-b60f-c2fe7826b80e")
    .then((data) => {
        return data.json();
    })
    .then((objectData) => {
        //console.log(objectData.data[0].name);
        let scoreData1 = "";
        let scoreData2 = "";
        objectData.data.map((values) => {
            scoreData1 = `
            <img src="${values.t1img}"/>
            <p>${values.t1}</p>
            <p>${values.t1s}</p>
            `;
            console.log(scoreData1);

            scoreData2 = `
            <img src="${values.t2img}"/>
            <p>${values.t2}</p>
            <p>${values.t2s}</p>
            `;
            console.log(scoreData2);
        });
        document.getElementById("F_Team").innerHTML = scoreData1;
        document.getElementById("L_Team").innerHTML = scoreData2;
    })