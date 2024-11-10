document.addEventListener('DOMContentLoaded', function () {
    var genButton = document.querySelector('#gen-resume-button');
    var formContainer = document.querySelector('.form-container');
    var output = document.querySelector('.output');
    var firstName = document.querySelector('input[name="first-name"]');
    var firstName_R = document.querySelector('#name');
    var surName = document.querySelector('input[name = "surname"]');
    var surName_R = document.querySelector('#surname');
    var profession = document.querySelector('input[name = "prof"]');
    var prof_r = document.querySelector('#prof-r');
    var city = document.querySelector('input[name = "city"]');
    var country = document.querySelector('input[name = "country"]');
    var city_r = document.querySelector('#city-r');
    var country_r = document.querySelector('#country-r');
    var email = document.querySelector('input[name="email"]');
    var email_r = document.querySelector('#email-r');
    var phone = document.querySelector('input[name="phone"]');
    var phone_r = document.querySelector('#phone-r');
    var summary = document.querySelector('textarea[name="summary-textarea"]');
    var summary_r = document.querySelector('#summary-r');
    var schoolName = document.querySelector('input[name="school-name"]');
    var schoolLocation = document.querySelector('input[name="s-location"]');
    var degree = document.querySelector('input[name="degree"]');
    var field = document.querySelector('input[name="field"]');
    var gradDate = document.querySelector('input[name="grad-date"]');
    var eduDetails = document.querySelector('#edu-details');
    var schoolName2 = document.querySelector('input[name="school-name2"]');
    var schoolLocation2 = document.querySelector('input[name="s-location2"]');
    var degree2 = document.querySelector('input[name="degree2"]');
    var field2 = document.querySelector('input[name="field2"]');
    var gradDate2 = document.querySelector('input[name="grad-date2"]');
    var eduDetails2 = document.querySelector('#edu-details2');
    var jobTitle = document.querySelector('input[name = "job-title"]');
    var employer = document.querySelector('input[name = "employer"]');
    var eLocation = document.querySelector('input[name = "e-location"]');
    var jobStartDate = document.querySelector('input[name = "job-start-date"]');
    var jobEndDate = document.querySelector('input[name = "job-end-date"]');
    var jobTitle2 = document.querySelector('input[name = "job-title2"]');
    var employer2 = document.querySelector('input[name = "employer2"]');
    var eLocation2 = document.querySelector('input[name = "e-location2"]');
    var jobStartDate2 = document.querySelector('input[name = "job-start-date2"]');
    var jobEndDate2 = document.querySelector('input[name = "job-end-date2"]');
    var expDetails = document.querySelector('#exp-details');
    var expDetails2 = document.querySelector('#exp-details2');
    var certList = document.querySelector('.certification-ul');
    var certTextarea = document.querySelector('#certification-textarea');
    var certifications = document.querySelector('.certifications-r');
    var language = document.querySelector('.language-r');
    var languageList = document.querySelector('.lang-ul');
    var languagesTextarea = document.querySelector('#lang-textarea');
    var skillList = document.querySelector('.skills-ul');
    var skillsTextarea = document.getElementById('skillstextarea');
    var addEduButton = document.querySelector('#addEduButton');
    var eduSection = document.querySelector('.education-grid2');
    var addExpButton = document.querySelector('#addExpButton');
    var expSection = document.querySelector('.experience-grid2');
    var pfp = document.querySelector('#pfp1');
    var pfp2 = document.querySelector('#pfp2');
    var editButton = document.querySelector('#editButton');
    // add functionalities  for buttons
    addEduButton.addEventListener('click', function () {
        eduSection.style.display = 'grid';
        addEduButton.style.display = 'none';
    });
    addExpButton.addEventListener('click', function () {
        expSection.style.display = 'grid';
        addExpButton.style.display = 'none';
    });
    if (skillList && skillsTextarea) {
        skillsTextarea.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                var allText = skillsTextarea.value;
                var lines = allText.split('\n');
                skillList.innerHTML = '';
                for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                    var line = lines_1[_i];
                    if (line.trim() !== '') {
                        var newListItem = document.createElement('li');
                        newListItem.textContent = line;
                        skillList.appendChild(newListItem);
                    }
                }
            }
        });
    }
    // adding languages
    if (certList && certTextarea) {
        certTextarea.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                var allText = certTextarea.value;
                var lines = allText.split('\n');
                certList.innerHTML = '';
                for (var _i = 0, lines_2 = lines; _i < lines_2.length; _i++) {
                    var line = lines_2[_i];
                    if (line.trim() !== '') {
                        var newListItem = document.createElement('li');
                        newListItem.textContent = line;
                        certList.appendChild(newListItem);
                    }
                }
            }
        });
    }
    if (languageList && languagesTextarea) {
        languagesTextarea.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                var allText = languagesTextarea.value;
                var lines = allText.split('\n');
                languageList.innerHTML = '';
                for (var _i = 0, lines_3 = lines; _i < lines_3.length; _i++) {
                    var line = lines_3[_i];
                    if (line.trim() !== '') {
                        var newListItem = document.createElement('li');
                        newListItem.textContent = line;
                        languageList.appendChild(newListItem);
                    }
                }
            }
        });
    }
    genButton.addEventListener('click', function () {
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
        country_r.textContent = country.value;
        eduDetails.innerHTML = "<h4>".concat(degree.value, "</h4>\n        <p>Graduated from ").concat(schoolName.value, " on ").concat(gradDate.value, ",").concat(schoolLocation.value, " <br/> ").concat(field.value);
        if (degree2.value === "") {
            document.querySelector('.edu-disp-none').style.display = 'none';
        }
        else {
            eduDetails2.innerHTML = "<h4>".concat(degree2.value, "</h4>\n    <p>Graduated from ").concat(schoolName2.value, " on ").concat(gradDate2.value, ",").concat(schoolLocation2.value, " <br/> ").concat(field2.value);
        }
        expDetails.innerHTML = "<h4>".concat(jobTitle.value, "</h4>\n         <p>").concat(jobStartDate.value, " - ").concat(jobEndDate.value, " at ").concat(employer.value, ",").concat(eLocation.value);
        if (jobTitle2.value == "") {
            document.querySelector('.exp-disp-none').style.display = 'none';
        }
        else {
            expDetails2.innerHTML = "<h4>".concat(jobTitle2.value, "</h4>\n         <p>").concat(jobStartDate2.value, " - ").concat(jobEndDate2.value, " at ").concat(employer2.value, ",").concat(eLocation2.value);
        }
    });
    if (pfp) {
        pfp.addEventListener('change', function (event) {
            var _a;
            var file = (_a = pfp.files) === null || _a === void 0 ? void 0 : _a[0];
            // Change image if a file is uploaded, else set to default
            pfp2.src = file ? URL.createObjectURL(file) : 'default.png';
        });
    }
    editButton.addEventListener('click', function () {
        formContainer.style.display = 'block';
        output.style.display = 'none';
    });
    // If sir Ameen Alam is reading this, here is a note for you:
    // I wrote the code by my self but improved  it by AI :)
});
