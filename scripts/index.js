var hotel = {
    rooms: [
        {
            name: "Double Bed", // room 1
            price: "$75.00",
            available: 40
        },
        {
            name: "King Bed",   // room 2
            price: "$120.00",
            available: 20
        },
        {
            name: "Luxery Suite",   // room 3
            price: "$250.00",
            available: 5
        }
    ],
    
    name: "CareerDevs Innt"
}

// display the price and number of available rooms----------------------------->

function displayDetail(room) {
    console.log("hello");
    console.log(room);
    document.getElementById("price").innerHTML = hotel.rooms[room].price;
    document.getElementById("available").innerHTML = hotel.rooms[room].available;
}

// display rooms as radio option------------------------------------------------>

//console.log(document.createElement("radio").nodeName);
for (var i = 0; i < hotel.rooms.length; i++){
        console.log("start");
    var radioBtn = document.createElement("INPUT");
    var radioLbl = document.createElement("LABEL");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "rooms"); // in var hotel
    radioBtn.setAttribute("value", i); // i = room [{--},{--},{--}]
    radioBtn.setAttribute("id", "room" + i); // room + 1, 2, 3
    radioBtn.setAttribute("onclick", "displayDetail(" + i + ")"); // short way `displayDetail(${i})`
    radioLbl.innerHTML = hotel.rooms[i].name; // var hotel->rooms:->[--]->name of bed type
        console.log("stop");
        
    document.getElementById("radioSection").appendChild(radioBtn); // button appears
    document.getElementById("radioSection").appendChild(radioLbl); // name of bed type appears
}

//validate and reserve with a placeholder name --------------------------------->


