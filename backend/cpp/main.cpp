#include <iostream>
#include "questions.cpp"

using namespace std;

int main() {
    int level;
    cout << "Welcome to the ICT Quiz App!" << endl;
    cout << "Choose a Level (4 for Normal, 5 for Medium, 6 for Hard): ";
    cin >> level;

    if (level < 4 || level > 6) {
        cout << "Invalid level selected. Please restart the application." << endl;
        return 1;
    }

    Quiz quiz(level);
    quiz.startQuiz();

    return 0;
}