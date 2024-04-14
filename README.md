# Tax Calculator

This project implements a simple tax calculator that calculates the tax amount based on the user's income, deductions, and age group. It provides a responsive user interface with error handling and a modal display of the calculated tax information.

## Process

1. **Initial Setup**: Set up the project structure with HTML, CSS, and JavaScript files.
2. **Designing the Interface**: Created the UI layout using HTML and styled it with CSS to make it visually appealing.
3. **Implementing Logic**: Developed the JavaScript logic to handle user input, calculate tax, and display the results.
4. **Error Handling**: Implemented error handling to validate user input and display error messages when necessary.
5. **Modal Display**: Added functionality to display the tax information in a modal window upon form submission.
6. **Responsive Design**: Made the interface responsive using CSS media queries to ensure it looks good on various devices and screen sizes.
7. **Hover Effect Issue**: Encountered an issue where hovering over the error icon did not display the tooltip message. Resolved this issue by adjusting the CSS and JavaScript code.

## Logic

- The tax calculation is based on the user's income, deductions, and age group.
- If the total income (after deductions) is under 8 Lakhs, no tax is applied.
- For income over 8 Lakhs, the tax rate varies based on the

https://github.com/prerak2612/Tax-Calculator/assets/149291735/785bc9d5-3048-4bd0-a657-04144d680d8b

 user's age group:
  - 30% for age < 40<img width="1419" alt="Screenshot 2024-04-14 at 6 19 13 PM" src="https://github.com/prerak2612/Tax-Calculator/assets/149291735/9640bea9-d776-416f-8293-bac6857843ee">

  - 40% for age ≥ 40 but < 60<img width="1427" alt="Screenshot 2024-04-14 at 6 18 48 PM" src="https://github.com/prerak2612/Tax-Calculator/assets/149291735/8b9472ca-dea1-4a5d-994c-195431db7324">

  - 10% for age ≥ 60

## Known Issue

One problem encountered during development was that the tooltip message associated with the error icon did not display when hovering over the icon. This issue was resolved by adjusting the CSS and JavaScript code to ensure proper visibility of the tooltip.


