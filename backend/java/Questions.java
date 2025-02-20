public class Questions {
    private String[][] questions = {
        // Level 4 (Normal)
        {
            "What is the capital of France?",
            "What is 2 + 2?",
            "What is the largest planet in our solar system?"
        },
        // Level 5 (Medium)
        {
            "What is the chemical symbol for gold?",
            "Who wrote 'Romeo and Juliet'?",
            "What is the powerhouse of the cell?"
        },
        // Level 6 (Hard)
        {
            "What is the integral of x^2?",
            "What is the speed of light in vacuum?",
            "Who developed the theory of general relativity?"
        }
    };

    private String[][] answers = {
        // Level 4 (Normal)
        {
            "Paris",
            "4",
            "Jupiter"
        },
        // Level 5 (Medium)
        {
            "Au",
            "William Shakespeare",
            "Mitochondria"
        },
        // Level 6 (Hard)
        {
            "x^3/3 + C",
            "299,792,458 m/s",
            "Albert Einstein"
        }
    };

    public String getQuestion(int level, int index) {
        return questions[level - 4][index];
    }

    public String getAnswer(int level, int index) {
        return answers[level - 4][index];
    }

    public int getNumberOfQuestions(int level) {
        return questions[level - 4].length;
    }
}