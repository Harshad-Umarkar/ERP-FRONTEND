let btn = document.querySelector(".view-mode");
let css_mode = document.querySelector("#css-style");
let mode_icon = document.querySelector("#mode");
const navbar = document.querySelector(".hamburger");
const list = document.querySelectorAll(".Nevigation-action-title");
const list1 = document.querySelector(".Nevigation-action-title");
const list_set = document.querySelector(".Nevigation-panal");
const list_set1 = document.querySelector(".Nevigation-panal div");
const calender = document.querySelector(".calender");
const calender_option = document.querySelector("#calender");
const close_calender = document.querySelector(".close-calender");
const assignment = document.querySelector("#assignment");
const assignment_option = document.querySelector(".Assignment");
const close_assignment = document.querySelector(".close-Assignment");
const notes = document.querySelector("#notes");
const notes_option = document.querySelector(".Notes");
const close_notes = document.querySelector(".close-Notes");
const schedule = document.querySelector("#schedule");
const schedule_option = document.querySelector(".shedule");
const close_schedule = document.querySelector(".close-shedule");
const tbody = document.querySelector("#temp");
const rollno = document.querySelector(".rollno");
const AddMember = document.querySelector(".add");
const student = document.querySelector(".studenDetail");
const application = document.querySelector("#application");
const application_option = document.querySelector(".Application");
const application_close = document.querySelector(".colse-application");
const profile = document.querySelector("#profile");
const profile_option = document.querySelector(".profile");
const close_profile = document.querySelector(".colse-profile");
const progress = document.querySelector("#progress");
const progress_option = document.querySelector(".progress");
const close_progress = document.querySelector(".close-progress");
css = `flex-direction:column;
  float:right;
  position:absolute;
  top:2.5rem;
  right:3.5rem;
  width:fit-content;
  margine:5rem 0rem 0rem 0rem;
  text-align:center;
  padding:2rem;
  border-radius:1rem;
  background-color:azure;`;
navbar.addEventListener("click", () => {
  if (window.getComputedStyle(list1).display == "none") {
    list.forEach((item) => {
      item.setAttribute("style", "display:inline;");
    });

    list_set.setAttribute("style", css);
    list_set1.setAttribute(
      "style",
      `text-align:right;
      margin:0rem 0rem 1rem 0rem;`
    );
    navbar.innerText = "✖";
  } else {
    list.forEach((item) => {
      item.setAttribute("style", "display:none;");
    });
    list_set.setAttribute(
      "style",
      `flex-direction:row;
      position:static;`
    );
    list_set1.setAttribute(
      "style",
      `margin:0rem;
      background-color:transparent;
      border:none;`
    );
    navbar.innerText = "☰";
  }
});
calender_option.addEventListener("click", () => {
  calender.style.display = "flex";
  // find the slides container and clear it
  const page = document.querySelector(".slides");
  page.innerHTML = "";
  // choose month/year - current month by default
  const now = new Date();
  const year = now.getFullYear();
  //   const monthIndex = now.getMonth(); // 0..11
  // create a slide wrapper
  for (monthIndex = 0; monthIndex < 12; monthIndex++) {
    const newslide = document.createElement("div");
    newslide.classList.add("slide");
    newslide.id = "month-" + (monthIndex + 1);
    // create a grid container (.day) for the month days
    const dayGrid = document.createElement("div");
    dayGrid.classList.add("day");
    // compute weekday of the 1st (0 = Sunday .. 6 = Saturday)
    const firstWeekday = new Date(year, monthIndex, 1).getDay();
    // compute days in this month
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    // add empty placeholders for the days before the 1st
    for (let i = 0; i < firstWeekday; i++) {
      const placeholder = document.createElement("div");
      placeholder.classList.add("date", "empty");
      placeholder.textContent = ""; // visually empty
      dayGrid.appendChild(placeholder);
    }
    // add each day cell
    for (let d = 1; d <= daysInMonth; d++) {
      const dayCell = document.createElement("div");
      attendance = Math.floor(Math.random() * 3);
      dayCell.classList.add("date");
      dayCell.textContent = d;
      const date1 = new Date(2025, monthIndex, d);
      const dayName = date1.toLocaleDateString("en-US", { weekday: "short" });
      if (dayName == "Sun") {
        dayCell.id = "holiday";
      } else if (attendance == 1) {
        dayCell.id = "present";
      } else if (attendance == 0) {
        dayCell.id = "absent";
      } else dayCell.id = "normal";
      // highlight today
      if (
        d === now.getDate() &&
        monthIndex === now.getMonth() &&
        year === now.getFullYear()
      ) {
        dayCell.classList.add("today");
      }
      dayGrid.appendChild(dayCell);
    }
    // append grid to slide and slide to slides container
    newslide.appendChild(dayGrid);
    page.appendChild(newslide);
  }
});
close_calender.addEventListener("click", () => {
  calender.style.display = "none";
});
assignment.addEventListener("click", () => {
  assignment_option.style.display = "flex";
});
close_assignment.addEventListener("click", () => {
  assignment_option.style.display = "none";
});
notes.addEventListener("click", () => {
  notes_option.style.display = "flex";
});
close_notes.addEventListener("click", () => {
  notes_option.style.display = "none";
});
schedule.addEventListener("click", () => {
  let timetable = {
    Monday: {
      lecture1: { subName: "DBMS", Time: 1 },
      lecture2: { subName: "CAO", Time: 1 },
      lecture3: { subName: "DBMS LAB / \nCD LAB /\nC-SKILL LAB III", Time: 2 },
      lecture4: { subName: "IOT", Time: 1 },
      lecture5: { subName: "DM", Time: 1 },
    },
    Tuesday: {
      lecture1: { subName: "DBMS LAB /\n CD LAB /\nC-SKILL LAB III", Time: 2 },
      lecture2: { subName: "DBMS", Time: 1 },
      lecture3: { subName: "CAO", Time: 1 },
      lecture4: { subName: "LIBRARY", Time: 2 },
    },
    Wednesday: {
      lecture1: { subName: "ET LAB I/ \nC-SKILL LAB III/\n CD LAB", Time: 2 },
      lecture2: { subName: "CD", Time: 1 },
      lecture3: { subName: "CAO", Time: 1 },
      lecture4: { subName: "IOT", Time: 1 },
      lecture5: { subName: "SPOART", Time: 1 },
    },
    Thursday: {
      lecture1: { subName: "IOT", Time: 1 },
      lecture2: { subName: "CD", Time: 1 },
      lecture3: { subName: "DBMS", Time: 1 },
      lecture4: { subName: "DM", Time: 1 },
      lecture5: { subName: "NPTEL", Time: 2 },
    },
    Friday: {
      lecture1: { subName: "CD", Time: 1 },
      lecture2: { subName: "DM", Time: 1 },
      lecture3: { subName: "ET LAB I/\n C-SKILL LAB III/\nDBMS", Time: 2 },
      lecture4: { subName: "DBMS", Time: 1 },
      lecture5: { subName: "DDP", Time: 1 },
    },
  };
  let recess = 0;
  let recesscout = 0;
  let scheduletable = "<tbody>";
  for (let i in timetable) {
    scheduletable = scheduletable + `<tr><th scope="row">${i}</th>\n`;
    for (let j in timetable[i]) {
      let temp = [];
      for (let k in timetable[i][j]) {
        temp.push(timetable[i][j][k]);
      }
      recesscout = recesscout + temp[1];
      if (recesscout > 4 && recess == 0) {
        scheduletable =
          scheduletable +
          '<td class="recess" rowspan="6"><strong>Recess</strong></td>\n';
        recess = 1;
      }
      scheduletable =
        scheduletable +
        `<td colspan=${temp[1]}><span class="subject" >${temp[0]}</span><span class="meta">Room 101</span></td>\n`;
    }
    scheduletable = scheduletable + "</tr>\n";
  }
  scheduletable = scheduletable + "</tbody>\n";
  tbody.innerHTML = scheduletable;
  schedule_option.style.display = "flex";
});
close_schedule.addEventListener("click", () => {
  schedule_option.style.display = "none";
});
AddMember.addEventListener("click", () => {
  const temp = document.createElement("div");
  temp.classList.add("student");
  temp.innerHTML = `<input type="text"><select class="rollno">${createElement()}</select>`;
  temp.type = "text";
  student.appendChild(temp);
});
let createElement = () => {
  let options = "";
  for (let i = 0; i < 71; i++) {
    options = options + `<option value="${i + 1}">${i + 1}</option>\n`;
  }
  rollno.innerHTML = options;
  return options;
};
createElement();
application.addEventListener("click", () => {
  application_option.style.display = "flex";
});
application_close.addEventListener("click", () => {
  application_option.style.display = "none";
});
profile.addEventListener("click", () => {
  profile_option.style.display = "flex";
});
close_profile.addEventListener("click", () => {
  profile_option.style.display = "none";
});
progress.addEventListener("click", () => {
  const studentData = {
    IOT: {
      attendance: 85,
      assignments: 90,
      practicals: 88,
      theory: 78,
      monthlyScores: [75, 82, 88, 85, 90, 87, 92, 89],
    },
    CAO: {
      attendance: 92,
      assignments: 85,
      practicals: 90,
      theory: 82,
      monthlyScores: [80, 85, 82, 88, 85, 90, 88, 92],
    },
    DBMS: {
      attendance: 88,
      assignments: 92,
      practicals: 95,
      theory: 85,
      monthlyScores: [78, 85, 90, 92, 88, 85, 90, 93],
    },
    DM: {
      attendance: 90,
      assignments: 88,
      practicals: 92,
      theory: 80,
      monthlyScores: [82, 88, 85, 90, 92, 88, 85, 90],
    },
    CD: {
      attendance: 86,
      assignments: 90,
      practicals: 85,
      theory: 88,
      monthlyScores: [85, 88, 90, 87, 85, 92, 88, 91],
    },
  };
  const listCard = document.querySelector(".progress-cards");
  for (let data in studentData) {
    console.log(data);
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
                    <h2>${data}</h2>
                    <div>
                        <p>Attendance</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${studentData[data].attendance}%"></div>
                        </div>
                        <p>Assignments</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${studentData[data].assignments}%"></div>
                        </div>
                        <p>Practicals</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${studentData[data].practicals}%"></div>
                        </div>
                        <p>Theory</p>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${studentData[data].theory}%"></div>
                        </div>
                    </div>
                `;
    listCard.appendChild(card);
  }
  progress_option.style.display = "flex";
});
close_progress.addEventListener("click", () => {
  progress_option.style.display = "none";
  const listCard = document.querySelector(".progress-cards");
  listCard.innerHTML = "";
});
