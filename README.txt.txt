Adi Sahota 
ad528639@dal.ca

I have re-used the code I did in Assignment-1 and Assignment 2, with a few changes here and there. I also hosted the website using github.io the link to the website is adisahota.github.io.

In this read me, I first explain all the HTML files, then the style sheet, the JavaScript and then finally relative paths, and file structure along with all the ACM citations. 

I have also checked if the site is accessible to everyone using wave, and it only shows two contrast errors. 

Finally I would like to address a few bugs: 
Firstly, there may be an issue when you press the submit button in the contact.html where it opens to another page 

Secondly when viewing it in the device toolbar for the RWD, please click the page name on the navbar to format it properly, for example if you switch from a desktop to mobile view, and are on the about webpage, click about on the navbar to format it properly, thank you.

***index.html***

Lines 3-7 define the title, and character set and used the <link> tag to use the favicon that I made named "icon.png"
using MS paint, and also to link the CSS styles sheet styles.css, and meta tag to include the viewport. 

Lines 13-20 define the navbar, where I used the <a> tag to create a navbar and specify my different web pages.

Lines 22-27 define the header, splash image/welcome page I got from the internet [1] inside the div class "home" 

Lines 29-40 create a subsection to refer to my about me webpage and uses the <a> tag to link to my "About me" page
referring to "about.html" using a picture of me named "me.jpg" in the pictures file. 


--> Lines 33-36 create 3 buttons to change the color palettes of the webpage.

Lines 42-48 create a subsection and use the <a> tag to link to my "Fun" page and refer to "funs.html".

Lines 50-56 use the <a> tag to link to my "Socials" page and refer to "contact.html". 

Lines 68-71 make a footer column

Line 71 adds the JavaScript file - "script.js"

***about.html***

Lines 3-7 define the title, and character set and used the <link> tag to use the favicon that I made named "icon.png"
using MS paint, and also to link the CSS styles sheet styles.css, and meta tag to include the viewport. 

Lines 11-20 define the header, where I used the <a> tag to create a navbar and specify each of my different web pages

Lines 25-27 create 3 buttons to change the color scheme of the website. 

Lines 23-36 create an introduction subsection and uses the <a> tag to reference "movies.html" about a movie tier list I made. 

Lines 38-71 create the profile subsection which includes a table with my personal details

Lines 73-81 create the project subsection which includes a list of my projects in different programming languages 

Lines 82-84 define the footer 

Lines 87 adds the JavaScript file - "script.js"


***contact.html***

Lines 3-7 define the title, and character set and used the <link> tag to use the favicon that I made named "icon.png"
using MS paint, and also to link the CSS styles sheet styles.css, and meta tag to include the viewport. 

Lines 11-20 define the header, where I used the <a> tag to create a navbar and specify each of my different web pages

Lines 25-27 create 3 buttons to change the color scheme of the website. 

Lines 29-43 create a grid that consists of <a> tags referring to my email, social media, and LinkedIn respectively:
email - ad528639@dal.ca
social media - Instagram - https://www.instagram.com/adisahota/
LinkedIn - https://www.linkedin.com/in/adi-sahota-04151b265/

Lines 35-41 create a text box to message me 

Lines 45-47 define the footer

***funs.html*** 

Lines 3-7 define the title, and character set and used the <link> tag to use the favicon that I made named "icon.png"
using MS Paint, and also to link the CSS styles sheet styles.css, and meta tag to include the viewport. 

Lines 11-19 define the header, where I used the <a> tag to create a navbar and specify each of my different web pages.

Lines 21-23 create 3 buttons to change the color scheme of the webpage

Lines 25-78 create a formula 1 subsection.

Line 49 uses the <img> tag to show the picture of Formula 1 driver Daniel Ricciardo sourced from Wikipedia [2]

Line 64-70 create a slideshow of F1 tracks which were sourced from Wikipedia [5]

Line 75 uses the <a> tag to refer to the wiki[3] page of the W11 and shows the picture of the W11[4] formula 1 car sourced from Reddit

Lines 80-90 create a basketball subsection.

Line 89 uses <video> tag with controls to show a video of Kobe Bryant performing an impressive dunk sourced from youtube [6]

Lines 92 create a surprise subsection.

Line 94 uses Audio of Obi-Wan Kenobi saying "hello there" from youtube [5]

Line 96 uses the <img> tag to show a picture I made named "Funny.png" on MS paint.

Lines 100-102 define the footer. 

*****************************************************************************************************************************************

Now for the styles sheet, 

***styles.css***

Lines 1-5 use the universal selector to make the website seamless using margins and padding, and define the font style as sans-serif

Lines 8-16 change the background of my index page, using a background image to set the background to a picture of a mountain I got from 
the internet, used a linear gradient to give it a transparent look and fixed its position throughout the webpage 

Lines 20-37 create the navbar on the page using a grid to format it, and create a border around the list of elements and fixing 
its position

Lines 40-50 create and format the heading using padding, and make the text color white. 

Lines 55-114 format the about me section of the page using flexbox, aligning the text and picture, creating borders and margins, and making the  text color white

Lines 116-144 format the fun section of the web page, aligning the heading and text, and making the text color white

Lines 146-174 format the contact section of the web page, aligning the heading and text, similar to the fun section 

Lines 176-199 format all the links in the webpage, so that they are white, and use the pseudo-element selector to create a cyan appearing 
underline below every link 

Lines 201-214 format the footer of the webpage, creating a black background with centered text. 

Lines 217-221 create a flexbox to incorporate all the sections in this webpage using flex-direction: column and flex-wrap

Lines 225-249 create another flexbox to incorporate the information section and formats the header and text in this section so that the header is cyan, aligns it towards the left of the text

Lines 252-291 create a flexbox to incorporate the profile section, format the header and make borders around the table, and make it such that if you hover over an element in the table it changes the background of that row slightly hence highlighting it, and also makes the header towards the right of the table 

Lines 293-329 create a flexbox to incorporate the project section and format the header so that it's on the left of the list, which has also been 
changed by changing its bullet points to squares and adding a background to all the list elements. 

***contactStyles.css***


Lines 1-5 use the universal selector to make the website seamless using margins and padding, and define the font style as sans-serif

Lines 8-16 change the background of my index page, using a linear gradient to give it fixed its position throughout the webpage 

Lines 20-71 create the navbar on the page using a grid to format it, and create a border around the list of elements and fixing 
its position 

Lines 74-80 format all headers to be cyan, bigger, and align them towards the left while keeping some space from the top 

Lines 84-112 format a box to link my mail, creating a white box with some text, and another white box with my contact information, and when you hover
over my contact information, it inverts the color from white to black, and the text inside changes from black to white, and assigns 

Lines 115-143 format a box to link my Instagram, and it's formatted similarly to the mailbox. 

Lines 148-175 format a box to link my Linkedin, and it's formatted similarly to the mailbox. 

Lines 177-190 create a grid, to format the boxes and my text box. 

Lines 193-201 create a border around the message box 

Lines 204-208 change the text inside the label to be bigger and aligned properly 

Lines 211-219 style the button to have rounded borders and a black background with white text 

Lines 222-234 format the footer of the webpage, creating a black background with centered text. 

Lines 331-394 create a section and borders to incorporate the formula 1 section, format all the information in the formula 1 section, by creating a flexbox, aligning the text to the left side, and pictures to the right side, I also added borders around the pictures at a margin to make it look better and also added a caption div which floats to the right of the image.

Lines 396-419 are used to make the slideshow of f1 tracks which has been incorporated with javascript

Lines 421-432 create a section and borders to incorporate the basketball section and change the text to be aligned properly 

Lines 436-441 create a section similar to the previous section to incorporate the surprise section

Lines 443-472 create the mail button, style it, and change it so that it inverts color when you hover over it.

Lines 474-504 create the Instagram button, style it, and change it so that it inverts color when you hover over it.

Lines 513-535 create the LinkedIn button, style it, and change it so that it inverts color when you hover over it.

Lines 546-580 create and style the textbox. 

Lines 582-529 style all buttons in the webpages 

Lines 594-600 use javascript and css to make the content hidden, and visible only on clicking. 

Lines 611-1029 are the media query for mobile phones

Lines 1033-1486 are the media query for tablets
******************************************************************************************************************************************
now for the javascript

***script.js***
Lines 2-9 are for the alert function in the contact.html 

Lines 13-54 are for the color changers on all 4 webpages

Lines 56-66 are for hiding the text in the funs.html

Lines 69-96 are for making the slideshow of images in funs.html

******************************************************************************************************************************************
File Structure: 

A detailed file structure is in the wireframe. 

A3_ad528639
- HTML FILES
	-index.html
	-about.html
	-contact.html
	-funs.html
	-styles.css
	-script.css
- Pictures 
	-DannyRic.jpg
	-Funny.png
	-hello.mp3
	-icon.png
	-KobeDunk.mp4
	-me.jpg
	-MonzaF1.svg
	-mountain.jpg
	-SilverstoneF1.svg
	-SpaF1.svg
- Wireframe.pdf
- README.txt
- CodeReviewJavaScript.pdf


******************************************************************************************************************************************

Citations: 

[1] 
Xavi Yuahanda. 
2023. Daniel Ricciardo. (February 2023). Retrieved February 8, 2023 from 
https://en.wikipedia.org/wiki/Daniel_Ricciardo 

[2]
Anon. 
2023. Mercedes-AMG F1 W11 EQ performance. (February 2023). Retrieved February 9, 2023 from 
https://en.wikipedia.org/wiki/Mercedes-AMG_F1_W11_EQ_Performance 

[3]
Sam Hall. 
2020. F1 reimagined - modern liveries on Classic Cars. (December 2020). Retrieved February 9, 2023, from 
https://www.gpfans.com/en/f1-news/60653/f1-reimagined-modern-liveries-on-classic-cars/ 

[4]
Ivan KyzMang.
2017. Kobe Bryant amazing behind the back reverse poster dunk vs nuggets 2003 season. (June 2017). Retrieved February 9, 2023 
from https://www.youtube.com/watch?v=PMbn5Cuo1Ts&amp;ab_channel=IvanKyzMang 

[5]
Gaming  Sound FX. 
2020. Hello there (Obi Wan) - sound effect (HD). (December 2020). Retrieved March 9, 2023 
from https://www.youtube.com/watch?v=-Rn3j2XQt4s&amp;ab_channel=GamingSoundFX 

[7]
Daniel Leone. 2019.
Mountain Picture . (October 2019). Retrieved March 9, 2023 
from https://www.christianitytoday.com/ct/2019/october-web-only/beatitudes-.html 

[8]
Will  Pittenger. 2009. 
File:spa-francorchamps of Belgium.svg. Wikimedia Commons. Retrieved April 6, 2023 
from https://commons.wikimedia.org/wiki/File:Spa-Francorchamps_of_Belgium.svg 

[9]
Will Pittenger. 2023. 
Italian grand prix. Wikipedia. Retrieved April 6, 2023 
from https://en.wikipedia.org/wiki/Italian_Grand_Prix 

[10]
Will Pittenger. 2008. 
File:circuit silverstone.svg. Wikimedia Commons. Retrieved April 6, 2023 
from https://commons.wikimedia.org/wiki/File:Circuit_Silverstone.svg 


******************************************************************************************************************************************
Relative Paths: 

DannyRic.jpg "\A2_ad528639\Pictures\DannyRic.jpg"
Funny.png 	 "\A2_ad528639\Pictures\Funny.png"
hello.mp3    "\A2_ad528639\Pictures\hello.mp3"
icon.png	 "\A2_ad528639\Pictures\icon.png"
KobeDunk.mp4 "\A2_ad528639\Pictures\KobeDunk.mp4"
me.jpg	 "\A2_ad528639\Pictures\me.jpg"
mountain.jpg "\A2_ad528639\Pictures\mountain.jpg"
suprise.mp4  "\A2_ad528639\Pictures\suprise.mp4"

******************************************************************************************************************************************



