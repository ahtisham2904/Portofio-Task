async function fetchData() {
    let response = await fetch("https://68de9db3d7b591b4b7902ce1.mockapi.io/Results")
    let data = await response.json()
    ShowData(data)
    console.log(data)
    
}
function ShowData(data) {
    let container = document.getElementById("Details")
    let head = document.createElement("div")
    head.setAttribute("class","heading")
    head.innerHTML = `
        <h1>Term</h1>
        <h2>Grade Points</h2>
        <h3>Cumulative GP</h3>
        <h4>Attempted CH</h4>
        <h5>Earned CH</h5>
        <h5>Cumulative CH</h5>
        <h6>SGPA</h6>
        <h6>CGPA</h6>
    `
    container.appendChild(head)
    data.forEach((term, index) => {
        let eachTerm = document.createElement("div")
        eachTerm.setAttribute("class","term")
        eachTerm.setAttribute("id","termId"+index)
        eachTerm.innerHTML = `
            <h1 onclick='TermDetails(${JSON.stringify(term.courses)},"termId${index}")'><i id="arrow" class="fas fa-chevron-right"></i>${term.term}</h1>
            <h2>${term.grade_points}</h2>
            <h3>${term.cumulative_gp}</h3>
            <h4>${term.attempted_ch}</h4>
            <h5>${term.earned_ch}</h5>
            <h5>${term.cumulative_ch}</h5>
            <h6>${term.sgpa}</h6>
            <h6>${term.cgpa}</h6>
        `
        container.appendChild(eachTerm)
    })
}
fetchData()

function TermDetails(courses,termId) {
    let existing = document.getElementById("TermBox"+termId)
    if (existing) {
        let arrow = document.getElementById("arrow").style.transform = "rotate(0deg)"
        existing.remove()
        return
    }
    let arrow = document.getElementById("arrow").style.transform = "rotate(90deg)"
    let container = document.getElementById(termId)
    let TermBox = document.createElement("div")
    TermBox.setAttribute("id","TermBox"+termId)
    TermBox.setAttribute("class","TermBox")
    let detailsHeading = document.createElement("div")
    detailsHeading.setAttribute("id","Show"+termId)
    detailsHeading.setAttribute("class", "termDetails")
    detailsHeading.innerHTML = `
        <h1>Course</h1>
        <h2>Credit Hours</h2>
        <h3>Grade Pts</h3>
        <h4>Final Grade</h4>
    `
    TermBox.append(detailsHeading)
    courses.forEach(course => {
        let row = document.createElement("div")
        row.setAttribute("class","courseRow")
        row.innerHTML = `
            <h1>${course.course}</h1>
            <h2>${course.credit_hours}</h2>
            <h3>${course.grade_points}</h3>
            <h4>${course.final_grade}</h4>
        `
        TermBox.appendChild(row)
    })
    container.after(TermBox)
}

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
            <li><i class="fa-regular fa-file"></i><a href="Subjects.html">Subjects</a></li>
            <li><i class="fa-solid fa-square-poll-horizontal"></i><a href="">Results</a></li>
            <li><i class="fa-solid fa-circle-user"></i><a href="Profile.html">Profile</a></li>
        </ul>
    `
    Ham.append(Menu)
}

// [
//   {
//     "term": "Fall 2024",
//     "grade_points": 57.36,
//     "cumulative_gp": 57.36,
//     "attempted_ch": 15.0,
//     "earned_ch": 15.0,
//     "cumulative_ch": 15.0,
//     "sgpa": 3.82,
//     "cgpa": 3.82,
//     "courses": [
//       {
//         "course": "Basic Electronics",
//         "credit_hours": 2.0,
//         "grade_points": 8.0,
//         "final_grade": "A"
//       },
//       {
//         "course": "Functional English",
//         "credit_hours": 3.0,
//         "grade_points": 11.01,
//         "final_grade": "A-"
//       },
//       {
//         "course": "Introduction to Computing",
//         "credit_hours": 3.0,
//         "grade_points": 12.0,
//         "final_grade": "A"
//       },
//       {
//         "course": "Introduction to Computing - Lab",
//         "credit_hours": 1.0,
//         "grade_points": 4.0,
//         "final_grade": "A"
//       },
//       {
//         "course": "Ideology & Constitution of Pakistan",
//         "credit_hours": 2.0,
//         "grade_points": 7.34,
//         "final_grade": "A-"
//       },
//       {
//         "course": "Discrete Structures",
//         "credit_hours": 3.0,
//         "grade_points": 11.01,
//         "final_grade": "A-"
//       },
//       {
//         "course": "Basic Electronics - Lab",
//         "credit_hours": 1.0,
//         "grade_points": 4.0,
//         "final_grade": "A"
//       }
//     ]
//   },
//   {
//     "term": "Spring 2025",
//     "grade_points": 57.33,
//     "cumulative_gp": 114.69,
//     "attempted_ch": 15.0,
//     "earned_ch": 15.0,
//     "cumulative_ch": 30.0,
//     "sgpa": 3.82,
//     "cgpa": 3.82,
//     "courses": [
//       {
//         "course": "Programming Fundamentals - Lab",
//         "credit_hours": 1.0,
//         "grade_points": 4.0,
//         "final_grade": "A"
//       },
//       {
//         "course": "Civics and Community Engagement",
//         "credit_hours": 2.0,
//         "grade_points": 8.0,
//         "final_grade": "A"
//       },
//       {
//         "course": "Programming Fundamentals",
//         "credit_hours": 3.0,
//         "grade_points": 12.0,
//         "final_grade": "A"
//       },
//       {
//         "course": "Digital Logic and Design - Lab",
//         "credit_hours": 1.0,
//         "grade_points": 4.0,
//         "final_grade": "A"
//       },
//       {
//         "course": "Digital Logic and Design",
//         "credit_hours": 2.0,
//         "grade_points": 7.34,
//         "final_grade": "A-"
//       },
//       {
//         "course": "Expository Writing",
//         "credit_hours": 3.0,
//         "grade_points": 9.99,
//         "final_grade": "B+"
//       },
//       {
//         "course": "Calculus and Analytical Geometry",
//         "credit_hours": 3.0,
//         "grade_points": 12.0,
//         "final_grade": "A"
//       }
//     ]
//   }
// ]
