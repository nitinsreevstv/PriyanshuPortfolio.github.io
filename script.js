document.addEventListener('DOMContentLoaded', function () {
    var typed = new Typed('#element', {
        strings: ['Software Quality Test', '&amp; Automate Test Cases.'],
        typeSpeed: 50,
        loop: true,
    });

    document.getElementById('downloadResumeBtn').onclick = function () {
        var resumeUrl = 'Priyanshu_resume.docx'; // Replace with your actual resume file URL
        var link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Priyanshu_resume.docx';
        link.click();
    };

    // Add event listener for clicking on the "Services" link
    document.getElementById('services-link').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Scroll to the "Work Experience" section
        document.getElementById('work-experience-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Add event listener for clicking on the "Skills" link
    document.querySelector('nav ul li a[href="#skillsSection"]').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Scroll to the "Skills" section
        document.getElementById('skillsSection').scrollIntoView({ behavior: 'smooth' });
    });
});
