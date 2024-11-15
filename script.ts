
document.addEventListener('DOMContentLoaded',() => {
    const genButton = document.querySelector('#gen-resume-button') as HTMLButtonElement;
    const formContainer = document.querySelector('.form-container') as HTMLFormElement;
    const output = document.querySelector('.output') as HTMLDivElement;
    const firstName = document.querySelector('input[name="first-name"]') as HTMLInputElement;
    const firstName_R = document.querySelector('#name') as HTMLElement;
    const surName = document.querySelector('input[name = "surname"]') as HTMLInputElement;
    const surName_R = document.querySelector('#surname') as HTMLElement;
    const profession = document.querySelector('input[name = "prof"]') as HTMLInputElement;
    const prof_r = document.querySelector('#prof-r') as HTMLElement;
    const city = document.querySelector('input[name = "city"]') as HTMLInputElement;
    const country = document.querySelector('input[name = "country"]') as HTMLInputElement;
    const city_r = document.querySelector('#city-r') as HTMLParagraphElement;
    const country_r = document.querySelector('#country-r') as HTMLParagraphElement;
    const email = document.querySelector('input[name="email"]') as HTMLInputElement;
    const email_r = document.querySelector('#email-r') as HTMLElement;
    const phone = document.querySelector('input[name="phone"]') as HTMLInputElement;
    const phone_r = document.querySelector('#phone-r') as HTMLElement;
    const summary = document.querySelector('textarea[name="summary-textarea"]') as HTMLInputElement;
    const summary_r = document.querySelector('#summary-r') as HTMLElement;
    const schoolName = document.querySelector('input[name="school-name"]') as HTMLInputElement;
    const schoolLocation = document.querySelector('input[name="s-location"]') as HTMLInputElement;
    const degree = document.querySelector('input[name="degree"]') as HTMLInputElement;
    const field = document.querySelector('input[name="field"]') as HTMLInputElement;
    const gradDate = document.querySelector('input[name="grad-date"]') as HTMLInputElement;
    const eduDetails = document.querySelector('#edu-details') as HTMLParagraphElement;
    const schoolName2 = document.querySelector('input[name="school-name2"]') as HTMLInputElement;
    const schoolLocation2 = document.querySelector('input[name="s-location2"]') as HTMLInputElement;
    const degree2 = document.querySelector('input[name="degree2"]') as HTMLInputElement;
    const field2 = document.querySelector('input[name="field2"]') as HTMLInputElement;
    const gradDate2 = document.querySelector('input[name="grad-date2"]') as HTMLInputElement;
    const eduDetails2 = document.querySelector('#edu-details2') as HTMLParagraphElement;
    const jobTitle = document.querySelector('input[name = "job-title"]') as HTMLInputElement;
    const employer = document.querySelector('input[name = "employer"]') as HTMLInputElement;
    const eLocation = document.querySelector('input[name = "e-location"]') as HTMLInputElement;
    const jobStartDate = document.querySelector('input[name = "job-start-date"]') as HTMLInputElement;
    const jobEndDate = document.querySelector('input[name = "job-end-date"]') as HTMLInputElement;
    const jobTitle2 = document.querySelector('input[name = "job-title2"]') as HTMLInputElement;
    const employer2 = document.querySelector('input[name = "employer2"]') as HTMLInputElement;
    const eLocation2 = document.querySelector('input[name = "e-location2"]') as HTMLInputElement;
    const jobStartDate2 = document.querySelector('input[name = "job-start-date2"]') as HTMLInputElement;
    const jobEndDate2 = document.querySelector('input[name = "job-end-date2"]') as HTMLInputElement;
    const expDetails = document.querySelector('#exp-details') as HTMLParagraphElement;
    const expDetails2 = document.querySelector('#exp-details2') as HTMLParagraphElement;
    const certList = document.querySelector('.certification-ul') as HTMLUListElement;
    const certTextarea = document.querySelector('#certification-textarea') as HTMLTextAreaElement;
    const certifications = document.querySelector('.certifications-r') as HTMLElement;
    const language = document.querySelector('.language-r') as HTMLElement;
    const languageList = document.querySelector('.lang-ul') as HTMLUListElement;
    const languagesTextarea = document.querySelector('#lang-textarea') as HTMLTextAreaElement;
    const skillList = document.querySelector('.skills-ul') as HTMLUListElement;
    const skillsTextarea = document.getElementById('skillstextarea') as HTMLTextAreaElement;
    const addEduButton = document.querySelector('#addEduButton') as HTMLButtonElement;
    const eduSection = document.querySelector('.education-grid2') as HTMLElement;
    const addExpButton = document.querySelector('#addExpButton') as HTMLButtonElement;
    const expSection = document.querySelector('.experience-grid2') as HTMLElement;
    const pfp = document.querySelector('#pfp1') as HTMLInputElement;
    const pfp2 = document.querySelector('#pfp2') as HTMLImageElement;
    const editButton = document.querySelector('#editButton') as HTMLButtonElement;
    const downloadButton = document.querySelector('#downloadButton') as HTMLButtonElement;
    const resumeOutput = document.querySelector('.resume-container')
  
    // add functionalities  for buttons
    
    addEduButton.addEventListener('click',() => {
            eduSection.style.display = 'grid';
            addEduButton.style.display = 'none';
    })
    addExpButton.addEventListener('click',() => {
        expSection.style.display = 'grid';
        addExpButton.style.display = 'none';
    })
    if (skillList && skillsTextarea) {
        skillsTextarea.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                const allText: string = skillsTextarea.value;
                const lines: string[] = allText.split('\n');
                skillList.innerHTML = '';
                
                for(let line of lines) {
                    if(line.trim() !== '') {
                        const newListItem: HTMLLIElement = document.createElement('li');
                        newListItem.textContent = line;
                        skillList.appendChild(newListItem);
                    }
                }
            }
        });
     }
     
     // adding languages
   
     if (certList && certTextarea) {
        certTextarea.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                const allText: string = certTextarea.value;
                const lines: string[] = allText.split('\n');
                certList.innerHTML = '';
                
                for(let line of lines) {
                    if(line.trim() !== '') {
                        const newListItem: HTMLLIElement = document.createElement('li');
                        newListItem.textContent = line;
                        certList.appendChild(newListItem);
                    }
                }
            }
           
        });
     }
     
     if (languageList && languagesTextarea) {
        languagesTextarea.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                const allText: string = languagesTextarea.value;
                const lines: string[] = allText.split('\n');
                languageList.innerHTML = '';
                
                for(let line of lines) {
                    if(line.trim() !== '') {
                        const newListItem: HTMLLIElement = document.createElement('li');
                        newListItem.textContent = line;
                        languageList.appendChild(newListItem);
                    }
                }
            }
           
        });
     } 
     
    
genButton.addEventListener('click',()=> {
            formContainer.style.display = 'none';
            output.style.display = 'block';
        window.scrollTo({ top: 0, behavior: "smooth" });
        firstName_R.textContent = firstName.value;
        surName_R.textContent = surName.value;
        prof_r.textContent = profession.value;
        summary_r.textContent = summary.value;
        phone_r.textContent = phone.value;
        city_r.textContent = city.value;
        email_r.textContent = email.value;
        country_r.textContent = country.value
    
        eduDetails.innerHTML = `<h4>${degree.value}</h4>
        <p>Graduated on ${gradDate.value} from ${schoolName.value},${schoolLocation.value} <br/> ${field.value}`
   if(degree2.value === ""){
    (document.querySelector('.edu-disp-none') as HTMLElement).style.display = 'none'}
    else{
         eduDetails2.innerHTML = `<h4>${degree2.value}</h4>
    <p>Graduated on ${gradDate2} from ${schoolName2.value},${schoolLocation2.value} <br/> ${field2.value}`
    }
         expDetails.innerHTML = `<h4>${jobTitle.value}</h4>
         <p>${jobStartDate.value} to ${jobEndDate.value} at ${employer.value},${eLocation.value}`
    if(jobTitle2.value == "" ){
      (document.querySelector('.exp-disp-none') as HTMLElement).style.display = 'none';
    }
    else{
         expDetails2.innerHTML = `<h4>${jobTitle2.value}</h4>
         <p>${jobStartDate2.value} to ${jobEndDate2.value} at ${employer2.value},${eLocation2.value}`
    } 
});
    if(pfp){
        pfp.addEventListener('change', (event) => {
          const file = pfp.files?.[0];
          pfp2.src = file ? URL.createObjectURL(file) : 'default.png';
        });
        }
        editButton.addEventListener('click',() => {
            formContainer.style.display = 'block';
            output.style.display = 'none'
        });
        downloadButton.addEventListener('click', () => {
            if (resumeOutput) {
                const options = {
                    margin:       0,
                    filename:     'resume.pdf',
                    image:        { type: 'jpeg', quality: 0.98 },
                    html2canvas:  { scale: 2 },
                    jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
                };
    
                try {
                    // Ensure `html2pdf` exists in the global scope
                    (window as any).html2pdf(resumeOutput, options);
                } catch (error) {
                    console.error('An error occurred while generating PDF:', error);
                }
            } else {
                console.error('Output element not found.');
            }
});
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

        
