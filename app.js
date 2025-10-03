async function fetchData() {
    let response = await fetch("https://68dc11607cd1948060a95eb6.mockapi.io/api/Portfolio/Dashboard")
    let data = await response.json()
    ShowData(data[0])
    
}
function ShowData(data) {
    document.querySelector("#Name h1").textContent = `${data.Name}`
    document.querySelector("#FullName h1").textContent = `${data.FulLName}`
    document.querySelector("#RollNo h1").textContent = `${data.RollNo}`
    document.querySelector("#Semester h1").textContent = `${data.Semester}`
    document.querySelector("#CGPA h1").textContent = `${data.CGPA}`
    let container = document.getElementById("tbody")
    data.SubjectDetail.forEach(subject => {
        let tr = document.createElement("tr")
        tr.innerHTML = `
            <td>${subject.name}</td>
            <td>${subject.grade}</td>
            `
        container.appendChild(tr)
    })
}
fetchData()

function ShowMenu() {
    let existing = document.getElementById("Menu")
    if(existing){
        existing.remove()
        return
    }
    let Ham = document.getElementById("Hamburger")
    let Menu = document.createElement("div")
    Menu.setAttribute("id","Menu")
    Menu.innerHTML = `
        <ul>
            <li><i class="fa-solid fa-house"></i><a href="">Dashboard</a></li>
            <li><i class="fa-regular fa-file"></i><a href="Pages/Subjects.html">Subjects</a></li>
            <li><i class="fa-solid fa-square-poll-horizontal"></i><a href="Pages/Results.html">Results</a></li>
            <li><i class="fa-solid fa-circle-user"></i><a href="Pages/Profile.html">Profile</a></li>
        </ul>
    `
    Ham.append(Menu)
}