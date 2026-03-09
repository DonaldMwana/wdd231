const courses = [
    { title: "WDD130", category: "WDD", credits: 3, completed: true },
    { title: "WDD131", category: "WDD", credits: 4, completed: false },
    { title: "WDD231", category: "WDD", credits: 3, completed: true },
];

const courseCards = document.getElementById('course-cards');
const totalCredits = document.getElementById('total-credits');

function displayCourses(filter = "All") {
    courseCards.innerHTML = "";

    let filtered = courses;
    if (filter === "WDD130") filtered = courses.filter(c => c.title === "WDD130");
    if (filter === "WDD131") filtered = courses.filter(c => c.title === "WDD131");
    if (filter === "WDD231") filtered = courses.filter(c => c.title === "WDD231");

    let total = 0;
    filtered.forEach(course => {
        total += course.credits;
        const card = document.createElement('div');
        card.className = course.completed ? 'course completed' : 'course';
        card.textContent = `${course.title} (${course.credits} credits)`;
        courseCards.appendChild(card);
    });

    totalCredits.textContent = total;
}

// Event listeners for filter buttons
document.getElementById('show-all').addEventListener('click', () => displayCourses("All"));
document.getElementById('show-wdd130').addEventListener('click', () => displayCourses("WDD130"));
document.getElementById('show-wdd131').addEventListener('click', () => displayCourses("WDD131"));
document.getElementById('show-wdd231').addEventListener('click', () => displayCourses("WDD231"));

// Initial display
displayCourses();