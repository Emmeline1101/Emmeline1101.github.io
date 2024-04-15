//script.js
document.addEventListener('DOMContentLoaded', function(){
    const courseBtns = document.querySelectorAll('.course-btn');
    courseBtns.forEach((btn) => {
        btn.addEventListener('click', () =>{
            const courseList = btn.previousElementSibling;
            if (courseList.style.display === 'none'){
                courseList.style.display = 'block';
                btn.textContent = 'View Less';
            } else {
                courseList.style.display = 'none';
                btn.textContent = 'View More';
            }
        });
    });
});