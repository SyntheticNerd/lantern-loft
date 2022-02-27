const dnd = "https://www.dnd5eapi.co";
let nav = "/api/";
let testurl = "/api/magic-items/"
// let urlArray = [baseURL, nav];
let ul = document.getElementById("links");

let arrOfLinks = [];

function appendUrl(baseURL, addon) {
    let _url = baseURL;
    _url += addon;
    // console.log(_url)
    return _url;
}

async function readPage(url) {
    // debugger;
    console.log(url);
    let _object = await fetch(url)
        .then((res) => res.text())
        .then((res) => {
            return JSON.parse(res);
        })
        .then((res) => {
            if (!res.results) {
                return res;
            } else {
                return res.results;
            }
        });
    return _object;
}


console.log(appendUrl(dnd, nav));
//this is going to build our urls


//returns a promise containing the data we want

function populateList(arrObject) {
    let newlist = document.createElement("UL");
    if (document.querySelectorAll("#templist").length) {
        document.getElementById("templist").remove();
    }
    newlist.setAttribute("id", "templist");
    document.body.appendChild(newlist);
    arrObject.then((arr) => {
        for (let x in arr) {
            let listitem = document.createElement("LI");
            new ObjectLink(listitem, arr[x].index, arr[x].url, arr[x].name).button();
            // listitem.innerHTML = arr[x].index;
            newlist.appendChild(listitem);
            // console.log(arr[x]);
        }
    });
}
//this will change later

function populateObject() {
    let overview = document.createElement("DIV")
    overview.setAttribute("id", "overview")
    overview.style.backgroundColor = "#E1C9C9";
    overview.style.height = "90vh";
    overview.style.width = "50vw";
    overview.style.position = "absolute";
    overview.style.right = "32px";
    document.body.appendChild(overview);
}

// populateObject();


let navigation = readPage(appendUrl(dnd, nav))
    .then((arrObjects) => {
        for (let index in arrObjects) {
            new Link(ul, index, arrObjects[index]).button();
        }
    })



class NAVLink {
    constructor(_element, _index, _url) {
        this.element = _element;
        this.index = _index;
        this.url = _url
        this.link = document.createElement("button");
    }
    draw() {
        this.element.appendChild(this.link);
        this.link.innerHTML = this.index;
    }
    print() {
        console.log(`${this.index} : ${this.url}`)
    }
}

//initialize the navigation

// class ObjectLink extends NAVLink {
//     constructor(_element, _index, _url, _name) {
//         super(_element, _index, _url)
//         this.name = _name;
//     }
//     button() {
//         let _btn = document.createElement("BUTTON");
//         _btn.innerHTML = this.index;
//         _btn.addEventListener("click", () => {
//             readPage(appendUrl(dnd, this.url)).then((res) => {
//                 console.log(res)
//             })
//             console.log(`${this.index} : ${this.url} : ${this.name}`)
//         });
//         this.element.appendChild(_btn);
//     }
// }

// class Rule extends ObjectLink {
//     constructor(_element, _index, _url, _name, _desc, _subsections) {
//         super(_element, _index, _url, _name)
//         this.desc = _desc;
//         this.subsections = _subsections;
//     }
// }


// class Ability extends Rule {
//     constructor(_element, _index, _url, _name, _desc, _full_name, _skills) {
//         super(_element, _index, _url, _name)
//         this.full_name = _full_name;
//         this.desc = _desc;
//         this.skills = _skills;
//     }
// }