// import data from './events.json' assert { type: "json" };

// console.log(data)
// const pageSetup = document.createElement("div");
// pageSetup.className = "container fulldiv";
// let eventDiv,eventType,eventName,eventVenue,eventSeat,eventImage,eventContainer2,eventContainer1,eventDate,eventButton,tempSeat;
// let eventSearch;
// eventSearch = document.createElement("input");
// eventSearch.placeholder = "Search for some events here ..."
// eventSearch.className="mysearch"

// // eventSearch.addEventListener('keyup',function(e){
// //     const event = e.target.value.toLowerCase();
// //     data.filter()
// // })
// console.log(data)
// // function displayData()_
// for(let i=0;i<data.length;i++)
// {
//     eventDiv = document.createElement("div");
//     eventDiv.className = "row mydiv";
//     eventContainer1 = document.createElement("div");
//     eventContainer1.className = "col";
//     eventImage = document.createElement("img");
//     eventImage.src = data[i].image;
//     eventImage.className = "myimage";
//     eventContainer2 = document.createElement("div");
//     eventContainer2.className = "col";
//     eventName = document.createElement("h4");
//     eventName.innerText = data[i].name;
//     eventName.className = "myname";
//     eventType = document.createElement("p");
//     eventType.innerText = data[i].type;
//     eventType.className = "mytype";
//     eventDate = document.createElement("p");
//     eventDate.className = "mydate";
//     eventDate.innerText = data[i].date;
//     eventSeat = document.createElement("p");
//     tempSeat = data[i].SeatsAvailable;
//     eventSeat.innerText = "Seats Available : "+data[i].SeatsAvailable;
//     eventSeat.className = "myseat";
//     eventButton = document.createElement("button");
//     eventButton.className = (tempSeat!=0)? "btn btn-success":"btn btn-danger";
//     eventButton.innerText = (tempSeat!=0)?"Book Now" : "Sold Out";
//     eventVenue = document.createElement("p");
//     eventVenue.innerText = "Venue : "+data[i].venue;
//     eventVenue.className = "myvenue";
//     eventContainer2.append(eventName,eventType,eventDate,eventSeat,eventButton);
//     eventContainer1.append(eventImage);
//     eventDiv.append(eventContainer1,eventContainer2,eventVenue);
//     pageSetup.append(eventDiv);
// }
// document.body.append(eventSearch,pageSetup);

// // const displayData = ()=>{
// //     const html = "";

// // }



import data from './events.json' assert { type: "json" };

// searchBox
document.getElementById('searchbox').innerHTML = ` <form class="d-flex">
<input class="form-control me-2" type="search" id='search' placeholder="Search Name" aria-label="Search">
</form>`;
search.addEventListener('keyup', (e) => {
    const searchkey = e.target.value.toLowerCase();
    const filterData = data.filter((search) => {
        return (
            search.name.toLowerCase().includes(searchkey)
           
        );
    });
    display(filterData); 
});

// Rendering Data
const display = (item)=>{
    const html = item
    .map((curr)=>{

        return `
        <li class="card">
            <img class="myimage" alt="error" src=${curr.image}/>
                <div class="col">
                    <h4 class="myname">${curr.name}</h4>
                    <p>${curr.type}<p/>
                    <p>${curr.date}<p/>
                    <p class="myseat">Seats Available:${curr.SeatsAvailable}<p/>
                    <button className="btn btn-success"></button>
                    <p class="myvenue">Venue : ${curr.venue}<p/>
                </div>
        </li>

        `
    })
    .join('')
    document.getElementById('main').innerHTML = html;
};
display(data)
