describe("Homepage FAQ Accordion", function(){
    it("should show first section on page load", function(){
     browser.url("./");
     // browser.debug()

     var firstHeight = browser.getElementCSSValue(".accordion .accordion-item:first-child .accordion-content");
     console.log(firstHeight);
     expect(firstHeight.parsed.value).to.be.greaterThan(0);

    } );

    it("should now how other content",function(){
    var secondDisplay = browser.getElementCSSValue(".accordion .accordion-item:nth-of-type(2) .accordion-content", "display");

    console.log(secondDisplay);
    expect(secondDisplay.parsed.value).to.equal(0);
    })

})