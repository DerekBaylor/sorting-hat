# Sorting Hat
Created by: Derek Baylor

Wireframe: https://www.figma.com/proto/Vaqz5TUrOOZHpO8z78LYdo/sorting-hat?node-id=7%3A22&scaling=scale-down&page-id=0%3A1


# Objectives
- button function
- onClick function
- form population function from start sorting button (do not refresh page on submit)
- form fucntion w/ warning text that calls a sorting function
- sorting function that sorts student into 4 houses, populates with house color, and arranges them by house 
- deathEater function delets student card, and populates a death eater card (use array location value)
- create studentName fucntion
- create init funcation

## Goals

- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions along with a link to an issue/discussion ticket to the entire instructional team if you need help. We will guide you to the resources that are available to you.
- On Saturday, everyone will present how far they got AND their favorite piece of code that they wrote for everyone to share in the Glory!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/#header-and-footer) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/5.0/forms/overview/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/5.0/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student array and move them to Moldy Voldy's Army.

In the end, your app will look something like: 

![Sorting Hat Wireframe](https://user-images.githubusercontent.com/29741570/127729524-c6a96f34-0ee7-442e-99c0-016ab48f31db.png)

[See Demo](https://drt-sortinghat.netlify.app/)

## Technical Requirements
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `init()` function
- You should apply responsive design to your page (aka your app should be designed to work on small screens)
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.
- Add filter buttons to filter the non-expelled students by house

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your `renderToDom()` function.  Double hint - put a unique id in the student object when you create them.
-slice the card
-put a unique id in the student object

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted. 
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)

