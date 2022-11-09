fetch("https://api.cricapi.com/v1/currentMatches?apikey=8992a6e5-a950-4f5b-b60f-c2fe7826b80e&offset=0")
    .then((data) => {
        return data.json();
    })
    .then((objectData) => {
        console.log(objectData.data[0].name);
        let tableData = "";
        objectData.data.map((values) => {
            tableData += ` <tr>
            <td>${values.name.r}</td>
            <td>${values.matchType}</td>
            <td>${values.date}</td>
            <td>${values.teams}</td>
            <td>${values.status}</td>
        </tr>`;
            console.log(tableData);
        });
        document.getElementById("table_body").innerHTML = tableData;
    })