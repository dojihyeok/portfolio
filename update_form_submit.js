const fs = require('fs');
let html = fs.readFileSync('/Users/yunhyeok/portfolio/index.html', 'utf8');

const targetContent = `    // Form Submission Simulation
    function handleRecruitSubmit(e) {
        e.preventDefault();
        
        // Strict validation for the problem text area
        const problemInput = document.getElementById('recruit-problem');
        if (!problemInput.value.trim()) {
            alert('당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요? 항목을 반드시 작성해 주세요.');
            problemInput.focus();
            return;
        }

        const form = document.getElementById('recruitment-form');
        const successCard = document.getElementById('recruit-success-card');
        
        form.style.display = 'none';
        successCard.classList.remove('hidden');
        successCard.classList.add('block');
    }`;

const replacementContent = `    // Form Submission to Google Apps Script
    async function handleRecruitSubmit(e) {
        e.preventDefault();
        
        const problemInput = document.getElementById('recruit-problem');
        if (!problemInput.value.trim()) {
            alert('당신이 T-Rive와 함께 해결하고 싶은 문제는 무엇인가요? 항목을 반드시 작성해 주세요.');
            problemInput.focus();
            return;
        }

        const name = document.getElementById('recruit-name').value;
        const email = document.getElementById('recruit-email').value;
        const position = document.getElementById('recruit-position').value;
        const problem = problemInput.value;
        const link = document.getElementById('recruit-link').value;
        
        const form = document.getElementById('recruitment-form');
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn.innerText;
        
        submitBtn.innerText = '전송 중...';
        submitBtn.disabled = true;
        submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzVcjnrAqbPlUl_ko77lxPLntglc-NVlPTsbFst12BapX9RKamfHCupffHuX9AAogYD9A/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({
                    name, email, position, problem, link
                })
            });

            const result = await response.json();
            
            if (result.result === 'success') {
                const successCard = document.getElementById('recruit-success-card');
                form.style.display = 'none';
                successCard.classList.remove('hidden');
                successCard.classList.add('block');
            } else {
                alert('전송 중 오류가 발생했습니다. 다시 시도해 주세요.');
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('네트워크 오류가 발생했습니다. 다시 시도해 주세요.');
            submitBtn.innerText = originalBtnText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    }`;

if (html.includes(targetContent)) {
    html = html.replace(targetContent, replacementContent);
    fs.writeFileSync('/Users/yunhyeok/portfolio/index.html', html);
    console.log("Updated handleRecruitSubmit");
} else {
    console.error("Target content not found.");
}
