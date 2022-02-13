# About Me: Switchfully Interview Presentation

What: a short interactive site to present myself in interview

Why: to have a more original way to present myself, demonstrate my skill as well as motivation.

How: a website with 4 buttons that each reveal a part of my journey towards becoming a developer.

button one: about me
button two: where I've been
button three: where I am
button four: where I will be

Technologies: 
- HTML for the page and text
- javascript to handle the modals: hide / show the right text when a button is clicked
- CSS to structure the page

Challenges:
In the first version I attempted to use only one modal with a placeholder text that would be edited depending on which button was clicked.
it failed because I used a for-loop to handle the image clicks, which just overrode the text until the last iteration.
I also struggled with structuring the text, but that could have been overcome by making a number of <p></p> fields with different class tags to throw the text into.

I pivoted to a far les clean version that uses 4 hidden text fields/modals that each have their own class, open button, open function, close button and close function. At least I can stick to one overlay field to close the modals.
It works as inteded, I will just improve and tweak the text.

In future I aim to learn more on how I can make this code cleaner and DRY (DON'T REPEAT YOURSELF). The interview is tomorrow so this will have to do for now.

# INSTALLATION

to view this website, you can host it locally on google chrome or Brave browser by following these steps:
1. download the repository by going to https://github.com/DracKunn/About-Me-Switchfully and clicking on the green button that says code.
2. in the drop-down menu click on [download zip] and save it.
3. go to where you downloaded the folder and unpack it. It should contain the same files as listed in the github repository.
4. open the index.html file in google chrome or Brave browser. (you can do this in windowws by right clicking the index.html file and selecting [open with> chrome].
5. this will open a new browser tab with the afore described website.
