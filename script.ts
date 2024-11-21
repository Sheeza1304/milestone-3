// generate resume
const form = document.getElementById('resume-form')  as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// foam submition
    form.addEventListener('submit',(event:Event)=>{
        event.preventDefault();//prevent page load


        const name = (document.getElementById('name') as HTMLInputElement).value
        const email =(document.getElementById('email') as HTMLInputElement).value
        const phone =(document.getElementById('phone') as HTMLInputElement).value
        const education =(document.getElementById('education')as HTMLInputElement).value
        const experience =(document.getElementById('experience') as HTMLInputElement).value
        const skills = (document.getElementById('skills') as HTMLInputElement).value

        const resumeHTML = `
        <h2><b>resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b>${name}</p>
        <p><b>Email:</b>${email}</p>
        <p><b>Phone:</b>${phone}</p>

        <h3>Education</h3>
        <p><b>Education</b></p>

        <h3>Experience</h3>
        <p><b>Experience:</b></p>

        <h3>Skills</h3>
        <p><b>skills:</b></p>
        `;
        // display the genrated resume
        if(resumeDisplayElement){
            resumeDisplayElement.innerHTML=resumeHTML;
        }
        else{
            console.error('The resume display element is missing ');
        }
    })
