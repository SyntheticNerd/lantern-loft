// class Link {
//     constructor(_element, _index, _url) {
//         this.element = _element;
//         this.index = _index;
//         this.url = _url
//     }
//     button() {
//         let _btn = document.createElement("BUTTON");
//         _btn.innerHTML = this.index;
//         _btn.addEventListener("click", () => {
//             populateList(readPage(appendUrl(dnd, this.url)));
//         });
//         this.element.appendChild(_btn);
//     }
//     print() {
//         console.log(`${this.index} : ${this.url}`)
//     }
// }



// //initialize the navigation

// class ObjectLink extends Link {
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