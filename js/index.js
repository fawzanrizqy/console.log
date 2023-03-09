let database = [

    {
        id: 1,
        name: "Atari 2600 ",
        released: 1977,
        description: "was equipped with a joystick and several buttons that allowed players to control characters in the game.",
        url: "https://i.pinimg.com/564x/59/f3/c3/59f3c39724cc1686f3429ddc685f0d5b.jpg"
    },
    {
        id: 2,
        name: "Nintendo Entertainment System (NES) ",
        released: 1985,
        description: "became the most popular game console at the time with over 60 million units sold. The NES was equipped with a more advanced controller and more color in its graphics.",
        url: "https://i.pinimg.com/564x/b5/2e/cd/b52ecd7bf5467c44d180332f4c5fa8d6.jpg"
    },
    {
        id: 3,
        name: "Sega Genesis",
        released: 1988,
        description: "became the most popular game console in the 1990s. The console was equipped with more controller buttons, as well as more advanced graphics than the NES.",
        url: "https://i.pinimg.com/564x/3f/4a/32/3f4a32801aae394c51b2f26f475626a8.jpg"
    },
    {
        id: 4,
        name: "Sony PlayStation",
        released: 1994,
        description: "became the first game console to use CD-ROM media as a source of games. The console became very popular with over 100 million units sold worldwide",
        url: "https://i.pinimg.com/564x/9f/30/9d/9f309d2bee566ec9ef68a2858957e9ed.jpg"
    },
    {
        id: 5,
        name: " Nintendo 64",
        released: 1996,
        description: "became the first game console to use 3D graphics. The Nintendo 64 was also equipped with an innovative controller with a joystick that could be moved in various directions.",
        url: "https://i.pinimg.com/564x/15/d1/bc/15d1bc9d9cf45665b5b95d98ee87046f.jpg"
    },
    {
        id: 6,
        name: "Sony PlayStation 2",
        released: 2000,
        description: "became the best-selling game console of all time with over 150 million units sold. The PlayStation 2 was equipped with a DVD player that could be used as a movie player.",
        url: "https://i.pinimg.com/564x/41/15/d8/4115d8792ddb0337dc95f6a90cc782f0.jpg"
    },
    {
        id: 7,
        name: "Xbox 360 ",
        released: 2005,
        description: "became the first game console that could be connected to the internet network and allowed players to play games online. The console was also equipped with multimedia features such as music and video players.",
        url: "https://i.pinimg.com/564x/62/46/15/6246153ca9888d6f527a58d0b58a011d.jpg"
    },
    {
        id: 8,
        name: "PlayStation 4",
        released: 2013,
        description: "became the most popular game console today with over 100 million units sold worldwide. The PlayStation 4 was equipped with features such as a Blu-ray player, media streaming, and motion controllers.",
        url: "https://i.pinimg.com/564x/7c/13/76/7c1376abff084025a582cf853c44621a.jpg"
    },
    {
        id: 9,
        name: " Xbox Series X/S",
        released: 2020,
        description: "became the latest game console launched by Microsoft. This console has very high hardware specifications, and allows players to play games with 4K graphics and 120 fps.",
        url: "https://i.pinimg.com/564x/91/1d/f6/911df6e78dcfe1880f722ad539dbead5.jpg"
    },


];
//ini buat hide all forms 



//buat update
let inputidupdate = document.getElementById("select-update");//select option\
let inputiddelete = document.getElementById("option-delete");//select option\



//buat delete

function generateoption() {
    inputidupdate.innerHTML="";
    inputiddelete.innerHTML="";

    for (const elm of database) { //generate data
        // console.log(elm.name);
        let option = document.createElement("option");
        option.innerText = elm.name;
        option.value = elm.id;
        inputidupdate.append(option);

        let option1 = document.createElement("option");
        option1.innerText = elm.name;
        option1.value = elm.id;
        inputiddelete.append(option1);
    }
}
generateoption();


let btnFadd = document.getElementById("button-Fadd");
let btnFupdate = document.getElementById("button-Fupdate");
let btnFdelete = document.getElementById("button-Fdelete");

// buat add
let inputnama = document.getElementById("input-name-add");
let inputtahun = document.getElementById("input-year-add");
let inputdesc = document.getElementById("input-desc-add");
let inputimg = document.getElementById("input-img-add");

function adddata() {
    let nama = inputnama.value;
    let tahun = inputtahun.value;
    let desc = inputdesc.value;
    let img = inputimg.value;

    let max=-Infinity;
    for (const elm of database) {
        if (elm.id>max) {
            max=elm.id;
        }
    }



    database.push(
        {
            id: max+1,
            name: nama,
            released: tahun,
            description: desc,
            url: img
        }
    );

    console.log(database);
}

btnFadd.addEventListener("click", function (e) {
    adddata();
    divAdd.classList.toggle("hidden");

})

let inputnamaupdate = document.getElementById("input-name-update");
let inputtahunupdate = document.getElementById("input-year-update");
let inputdescupdate = document.getElementById("input-desc-update");
let inputimgupdate = document.getElementById("input-img-update");

btnFupdate.addEventListener("click", function (e) {
    console.log("test");
    let id=inputidupdate.value;
    let nama = inputnamaupdate.value;
    let tahun = inputtahunupdate.value;
    let desc = inputdescupdate.value;

    for (const elm of database) {
        if (elm.id==id) {
            elm.name=nama;
            elm.released=tahun;
            elm.description=desc;
        }
    }

    console.log(database);




})

function fdelete() {
   let id= inputiddelete.value;

   let newobj=[];
   for (const elm of database) {
    if (elm.id!=id) {
        newobj.push(elm);
    }
   }
   database=newobj;
   console.log(database);
}

btnFdelete.addEventListener("click", function (e) {
fdelete();

})


