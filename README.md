# Guess it Trivia (CSI-3150 Project)

Name: Aiden Blitz

Project Option Chosen: Trivia

Live App URL:  csi-3150-trivia-game.vercel.app

GitHub Repository URL: https://github.com/ABlitz-1/CSI-3150-Trivia-Game

## Project Overview
Guess it trivia is a quick and easy to use quiz webapp. It is built to both entertain and improve thinking. It does this through a sleak, interactive design to provide ease of access for it's users.

## Component Architecture

• App.js: The main component that controls the routing for the pages.

• Menu.js: The menu page that is first rendered when the page loads.

• navbar.js: defines the navbar seen at the top of the screen.

• requests.js: Handles requests for the trivia API.

• question.js: defines the question structure, also handles answer checks and score.

• timer.js: defines and controls the timer for each question.

• Quiz.js: the quiz page that renders all of the quiz components to make the quiz work

• QuizContext.js: defines functions used to set the score and options values inside the question component and Quiz page.

• Result.js: the result page that is rendered after the finish quiz button is pressed.

## Detailed Functionality

• Timer: The timer uses useEffect to render and then update every 1000ms (1s). To reset for the next question, the timer uses the id of the current question and resets when the id changes. The timer also has an event called onTimeout that automatically goes to the next question when the timer runs out if isAnswered is false.

• API Call: Guess it Trivia fetches questions from the Open Trivia Database. The data collected from the json response includes ten question objects and their properties which include the question, correct answer, and an array of incorrect answers for each question. The requests component handles the category and difficulty choices and adds them to the base API url to fetch the question data.

• State Flow: Guess it Trivia uses routing to define the three different pages, or states. The page/state is changed using useNavigate to switch pages. The quiz page uses the category and difficulty in it's definition to keep the API data through a refresh. 

• Data Persistence: Guess it Trivia uses localStorage to make sure the final score and highscore data persist through page refresh. The quiz page also keeps it's data through a refresh because it keeps track of the selected category and difficulty so the questions are feteched again if the page is refreshed.

• Shuffle Logic: The shuffling logic is contained within the question component. The shuffler takes in an array of answers and shuffles it based on a random number. This guarantees that options will be in a unique order for every question.

• Sound/Visuals: If the answer selected is the correct answer, the background of the correct answer button turns green. If the answer selected is not the correct answer, the background of the selected answer button turns red and the correct answer button turns green to show what the correct answer. This is implemented using an isAnswered check where if isAnswered is true, disabled buttons with a conditional className are rendered and the correct (and incorrect answer if necessary) answer is displayed.

• Highscore Display: Once the quiz is over and the results page is being loaded, the highscore gets loaded from localStorage and is checked against the score at the end of the quiz. If the score is greater than the highscore, the score is set as the new highscore. Then once the menu is loaded again, the highscore is loaded from localStorage and displayed on the menu screen.

## User Manual

• Step 1: Click or paste the link for the app in your browser to start the app

• Step 2: Once the menu loads in, select a category and difficulty using the radio buttons and click the "start quiz" button to start the quiz.

• Step 3: Click on one of the answers to answer each question and click the "next" button before the timer runs out

• Step 4: Once you have answered the final question, click the "finish quiz" button to finish the quiz and go to the result screen.

• Step 5: On the result screen, you can either retake the quiz or go back to the menu by clicking one of the two buttons.

## Technical Challenges & Solutions

The largest bug/hurdle I encountered during development was React error #130, meaning that one of my components was undefined. I got stuck on this error for a bit, but I was able to fix it by changing a couple lines in the Menu component from <Form.check> to <Form.Check> and also adding question marks where I am accessing object properties, for example, changing question.correct_answer to question?.correct answer. By fixing this bug, I learned that in React, data may be loaded asynchronously, meaning that some objects could be undefined while some others are already loaded.

## Demo Video Link
URL: YouTube /Google Drive Link
(Note: Ensure the permissions are set so that anyone can view it)
