// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// Save data function

function saveData() {
  let name, email, tel, passward;
  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  tel = document.getElementById("tel").value;
  passward = document.getElementById("passward").value;

  //console.log(name + email + tel + passward);

  //localStorage.setItem("name", name);
  //localStorage.setItem("email", email);
  //localStorage.setItem("tel", tel);
  //localStorage.setItem("passward", passward);

  let user_records = JSON.parse(localStorage.getItem("users")) || []; // Corrected variable name and added default empty array
  if (user_records.some((v) => {
    return v.email === email && v.tel === tel; // Corrected variable name and used strict equality
  })) {
    alert("Duplicate Data");
  } else {
    user_records.push({
      "name": name,
      "email": email,
      "tel": tel,
      "passward": passward
    });
    localStorage.setItem("users", JSON.stringify(user_records));
  }
}
