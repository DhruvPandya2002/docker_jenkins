const Course = [
  {
    name: "silk suit",
    price: 500,
  },

  {
    name: "Cotton suit",
    price: 100,
  },

  {
    name: "Muslin suit",
    price: 400,
  },

  {
    name: "jute suit",
    price: 600,
  },

  {
    name: "myCollection Suit",
    price: 800,
  },
];
{
  /* <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li> */
}

function getCourse() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  Course.forEach((myCourse) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(myCourse.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode(myCourse.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}
window.addEventListener("load", getCourse());

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
  Course.sort((a, b) => a.price - b.price);
  getCourse();
});

const button2 = document.querySelector(".btn-primary");
button2.addEventListener("click", () => {
  Course.sort((a, b) => b.price - a.price);
  getCourse();
});

const button3 = document.querySelector(".btn-secondary");
button3.addEventListener("click", () => {
  Course.sort((a, b) => {
    let name1 = a.name.toLowerCase();
    let name2 = b.name.toLowerCase();
    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }
  });
  getCourse();
});
