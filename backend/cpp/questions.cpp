#include <iostream>
#include <vector>
#include <string>

class Question {
public:
    std::string questionText;
    std::vector<std::string> options;
    int correctAnswerIndex;

    Question(std::string text, std::vector<std::string> opts, int correctIndex) 
        : questionText(text), options(opts), correctAnswerIndex(correctIndex) {}
};

class Questions {
private:
    std::vector<Question> level4Questions;
    std::vector<Question> level5Questions;
    std::vector<Question> level6Questions;

public:
    Questions() {
        // Level 4 Questions
        level4Questions.push_back(Question("What is the capital of France?", {"Paris", "London", "Berlin", "Madrid"}, 0));
        level4Questions.push_back(Question("What is 2 + 2?", {"3", "4", "5", "6"}, 1));

        // Level 5 Questions
        level5Questions.push_back(Question("What is the largest planet in our solar system?", {"Earth", "Mars", "Jupiter", "Saturn"}, 2));
        level5Questions.push_back(Question("What is the chemical symbol for water?", {"H2O", "O2", "CO2", "NaCl"}, 0));

        // Level 6 Questions
        level6Questions.push_back(Question("What is the derivative of x^2?", {"2x", "x^2", "x", "2"}, 0));
        level6Questions.push_back(Question("What is the value of pi to two decimal places?", {"3.14", "3.15", "3.16", "3.17"}, 0));
    }

    std::vector<Question> getQuestions(int level) {
        if (level == 4) return level4Questions;
        else if (level == 5) return level5Questions;
        else if (level == 6) return level6Questions;
        else return {};
    }
};