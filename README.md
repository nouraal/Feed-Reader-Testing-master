Feed Reader Testing project Version 1.0 29/10/2017
===============================

it's Project six in Frond-End Developer Nanodegree program from Udacity to reads RSS feeds using Jasmine!.

You can visit [Udacity]( https://www.udacity.com/) site and register in any courses that you love to join, Trust me you will have lot of learning and fun at udacity.

===============================

### Instructions :

1.  visit my github [here.](https://github.com/nouraal/Feed-Reader-Testing-master) 
2. download ZIP file green button on the right of the screen,  then extract the zip file to your computer.
3. to open file  Double-click on " index.html " to open the portfolio in your browser.

* Or you can opne the file online from [here.](https://nouraal.github.io/Feed-Reader-Testing-master/)

===============================

### what I tests:

#### For RSS Feeds:
1. Test if The URL defined & the URL is not empty, using forEach method to calls allFeeds array.
2. Test if The NAME defined & the NAME is not empty, using forEach method to calls allFeeds array.
3. For expectations part i use toBeDefined() and not.toBe() case.

#### For The menu:
1. Has a hidden menu by default, using .hasClass() to search for menu-hidden class.
2. The menu visibility when we clicke, using .trigger() event click type.
3. For expectations part i use .toBe() case.

#### For Initial Entries:
1. Single .entry element within the .feed container, using .length to measure length of .feed .entry.
2. The loadFeed() is asynchronous so i use of Jasmine's beforeEach and asynchronous done() function.
3. For expectations part i use .not.toBe() case.

#### For Initial Entries:
1. The new feed is loaded, by compare old with the new.
2. The loadFeed() is asynchronous so i use of Jasmine's beforeEach and asynchronous done() function.
3. For expectations part i use .not.toBe() case.

### References:

*   [ JavaScript Testing course from Udacity.](https://www.udacity.com/course/javascript-testing--ud549)
*   [ Jasmine documentation.](https://jasmine.github.io/)
*   [Jasmine introduction.js.](https://jasmine.github.io/2.0/introduction.html)

===============================

if you have any suggest features, ask questions or report bugs  Please communicate with me via
Email: noura_alkhateeb@outlook.com