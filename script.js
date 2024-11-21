// generate resume
var form = document.getElementById('Resume-foam');
var resumeDisplayElement = document.getElementById('Dynamic-Resume');
// foam submition
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page load
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumehtml = "\n        <h2><b>resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b>".concat(name, "</p>\n        <p><b>Email:</b>").concat(email, "</p>\n        <p><b>Phone:</b>").concat(phone, "</p>\n\n        <h3>Education</h3>\n        <p><b>Education</b></p>\n\n        <h3>Experience</h3>\n        <p><b>Experience:</b></p>\n\n        <h3>Skills</h3>\n        <p><b>skills:</b></p>\n        ");
    // display the genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumehtml;
    }
    else {
        console.error('The resume display element is missing ');
    }
});
