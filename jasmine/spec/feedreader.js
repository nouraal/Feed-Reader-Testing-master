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

        //Test that each feed in the allFeeds object to ensures it has a URL defined & that the URL is not empty.
        it('The URL defined & the URL is not empty', function() {
            allFeeds.forEach(function(feeds) {
                expect(feeds.url).toBeDefined(); //check if the  URL defined
                expect(feeds.url.length).not.toBe(0); //check if URL is not empty 
            });
        });

        //Test that each feed in the allFeeds object to ensures it has a NAME defined & that the NAME is not empty.
        it('The NAME defined & the NAME is not empty', function() {
            allFeeds.forEach(function(feeds) {
                expect(feeds.name).toBeDefined(); //check if the  NAME defined
                expect(feeds.name.length).not.toBe(0); //check if NAME is not empty
            });
        });

    });


    // A new test suite named "The menu" 
    describe('The menu', function() {

        //Test that ensures the menu element is hidden by default.
        it('Has a hidden menu by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true); //check if the menu element is hidden by default
        });

        // Test that ensures the menu changes visibility when the menu icon is clicked. 
        it('The menu when we clicke', function() {
            $('.menu-icon-link').trigger('click'); //active click event
            expect($("body").hasClass('menu-hidden')).toBe(false); //check if that we don't have class menu-hidden after click
            $('.menu-icon-link').trigger('click'); //active click event
            expect($("body").hasClass('menu-hidden')).toBe(true); //check if that we have class menu-hidden after click it again

        });
    });
    // A new test suite named "Initial Entries" 
    describe('Initial Entries', function(done) {

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });
        // Test that ensures when the loadFeed function is called and completes its work, 
        // And there is at least a single .entry element within the .feed container.
        it('single .entry element within the .feed container', function(done) {
            //using jQuery syntax  $('.parent .child');
            expect($('.feed .entry').length).not.toBe(0); //should have least one .entry element in .feed container
            console.log("feed . entry= " + $('.feed .entry').length);
            done();
        });
    });
    // A new test suite named "New Feed Selection" 
    describe('New Feed Selection', function() {

        var oldEntry, newEntry, originalTimeout;
        // use beforeEach bec loadFeed is asynchronous.
        beforeEach(function(done) {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
            loadFeed(0, function() {
                oldEntry = $('.feed').html();
                console.log("old Entry" + oldEntry); //print old to compare with new loadFeed.
                done();
            });
        });
        
        //Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
        it('The new feed is loaded', function(done) {
            loadFeed(3, function() {
                newEntry = $('.feed').html(); //print new to compare and make sure it's actually changes.
                console.log("new Entry" + newEntry); //print new.
                expect(oldEntry).not.toBe(newEntry); //compare old with the new and make sure it's actually changes.
                done();
            });
        });

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });

}());