# VEE CALCULATOR

Overview: 

I'm going to be building a simple calculator by incorporating what I've learned about React state.

Link to Heroku https://vee-calculator.herokuapp.com/

Link to  Github https://github.com/veshena/my-calcutator
 



Wireframe: 

https://wireframepro.mockflow.com/editor.jsp?editor=on&publicid=M70ba3652329c214e792d6ff405cd6c5b1651073748716&perm=Create&projectid=MghY35NyCnb&spaceid=MyeoLtNyCnb&ptitle=Untitled&bgcolor=white&category=M9fed2da50c6980c8a4f3699a6836e9c91596189396438&pcompany=Ca6f2d1e7da404a4787a17d419b1589e6&store=yes#/page/5a65c82e2d4a4398867541efc2a359cd




User stories: 

When you click any number button and use any operator button you must get an accurate answer after clicking the equal button.

1. The number buttons are labled ( 0 - 9 including the . button )
2. The 5 operator buttons are ( / , * , + , - , and = )
3. I also included a clear button ( C ) that would erase the entire input field.
4. The result would display in the input field after clicking equal opp




React components tree: 

I have 3 files
1. App.js  (Where I imported App.css, and my Calculator.js from it's components folder. Inside my function App() I have my h1> title and I rendered my Calculator/> to the page.)

2. ./component/Calculator.js  (Where I imported useState from "react". Inside my function Calculator() my [result, setResult] is set to an empty string. I also used onClick for all my buttons 
    1. My click button controls both the operator and the number buttons. I setResult using the concat() method in order to create a new array everytime you input somthing. 
    2. My clear button clears everything from the input field so I setResult to an empty string that way it remains empty.
    3. My equal button gives an accurate answer to the equation. I setReult using the eval() method which functions as a string and is used to evaluate expressions or multiple statements.
    4. After my return I included an input field where I set the type to "text" and it's value to result. I also have 5 divs> which contains the specific buttons.)

3. App.css  (Where I did all my styling for the classNames from my Calculator.js.)
