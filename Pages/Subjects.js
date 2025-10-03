async function fetchData() {
    let response = await fetch("https://68dc11607cd1948060a95eb6.mockapi.io/api/Portfolio/Subjects")
    let data = await response.json()
    ShowData(data)
    console.log(data)
}
function ShowData(data) {
    let container = document.getElementById("Details")
    data.forEach(subject => {
        let subjectBox = document.createElement("div")
        subjectBox.setAttribute("class","subject")
        subjectBox.innerHTML = `
            <h1>Subject&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; ${subject.subject}</h1>
            <h2>Teacher&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; ${subject.teacher}</h2>
            <h2>Code&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; ${subject.code}</h2>
            <h2>Credits&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp; ${subject.credits}</h2>
        `
        container.appendChild(subjectBox)
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
            <li><i class="fa-solid fa-house"></i><a href="../index.html">Dashboard</a></li>
            <li><i class="fa-regular fa-file"></i><a href="">Subjects</a></li>
            <li><i class="fa-solid fa-square-poll-horizontal"></i><a href="Results.html">Results</a></li>
            <li><i class="fa-solid fa-circle-user"></i><a href="Profile.html">Profile</a></li>
        </ul>
    `
    Ham.append(Menu)
}
