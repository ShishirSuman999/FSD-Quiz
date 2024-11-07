const correctAnswers = ["Paris", "Jupiter", "Mount Everest", "Pacific Ocean", "Amazon"];
        let currentQuestionIndex = 0;
        function checkAnswer() {
            const selectedOption = document.querySelector('input[name="answer"]:checked');
            if (!selectedOption) {
                alert("Please select an answer.");
                return;
            }
            const userAnswer = selectedOption.value;
            if (userAnswer === correctAnswers[currentQuestionIndex]) {
                alert("Correct answer!");
            } else {
                alert("Wrong answer. The correct answer is " + correctAnswers[currentQuestionIndex] + ".");
            }

            if (currentQuestionIndex < correctAnswers.length - 1) {
                currentQuestionIndex++;
                window.location.href = `question${currentQuestionIndex + 1}.html`;
            } else {
                window.location.href = "submit.html";
            }
        }