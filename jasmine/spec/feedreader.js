/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('The URL defined & the URL is not empty', function() {
            allFeeds.forEach(function(feeds) {
            expect(feeds.url).toBeDefined(); //check if the  URL defined
            expect(feeds.url.length).not.toBe(0); //check if URL is not empty 
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('The NAME defined & the NAME is not empty', function() {
            allFeeds.forEach(function(feeds) {
            expect(feeds.name).toBeDefined(); //check if the  NAME defined
            expect(feeds.name.length).not.toBe(0); //check if NAME is not empty
            });
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() { 

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Has a hidden menu by default', function() {
           expect($('body').hasClass('menu-hidden')).toBe(true); //check if the menu element is hidden by default
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('The menu when we clicke', function() {
            $('.menu-icon-link').trigger('click'); //active click event
            expect($("body").hasClass('menu-hidden')).toBe(false); //check if that we don't have class menu-hidden after click
            $('.menu-icon-link').trigger('click'); //active click event
            expect($("body").hasClass('menu-hidden')).toBe(true); //check if that we have class menu-hidden after click it again

        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(done) {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
            loadFeed(0, function() {
                done();
            });
         });

         it('single .entry element within the .feed container', function(done) {
            expect($('.entry').length).not.toBe(0); //should have least one .entry element in .feed container
            done();
         });
});

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         var oldEntry, newEntry;
            // use beforeEach bec loadFeed is asynchronous.
            beforeEach(function(done){
            loadFeed(0, function() {
            oldEntry = $('.entry').html();
            console.log("old Entry" + oldEntry); //print old to compare with new loadFeed.
                done();
            });
         });

         it('The new feed is loaded', function(done) {
         loadFeed(3, function() {
            newEntry= $('.entry').html();  //print new to compare and make sure it's actually changes.
            console.log("new Entry" + newEntry); //print new.
            expect(oldEntry).not.toBe(newEntry); //compare old with the new and make sure it's actually changes.
            done();
            });
         });
    });

}());