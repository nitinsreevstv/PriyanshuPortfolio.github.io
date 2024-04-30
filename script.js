// script.js
// 

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
});
