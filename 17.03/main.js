let sname = document.getElementById("Name");
let surname = document.getElementById("Surname");
let birth = document.getElementById("Birth");
let gpa = document.getElementById("GPA");
let btn = document.getElementById("button");
let tbody = document.getElementById("tbody");

btn.addEventListener("click", function(e){
  e.preventDefault();
  if(sname.value=="" || surname.value=="" || birth.value=="" || gpa.value=="") {
    alert("do not leave empty");
    return;
  }
  tbody.innerHTML = `
    <tr>
      <td>${sname.value}</td>
      <td>${surname.value}</td>
      <td>${birth.value}</td>
      <td>${gpa.value}</td>
    </tr>
  `;
  sname.value="";
  surname.value="";
  birth.value="";
  gpa.value="";
});













