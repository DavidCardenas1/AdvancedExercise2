describe('exercise 19', function () {
    it('appear immediately', function () {
        var htmlElements = document.querySelector('ul')
        expect(htmlElements.outerHTML).toBe('<ul id="results"><li style="color: green;">Outside and before the test block</li><li>TestBlock A<ul><li style="color: green;">Inside TestBlock A</li></ul></li><li style="color: green;">Outside and after the TestBlock A</li><li>TestBlock B<ul><li style="color: green;">Inside TestBlock B</li></ul></li><li style="color: green;">Outside and after TestBlock B</li></ul>')
    });
    it('after .5 secs',  function (done) {
        setTimeout(function () {
           const htmlElements = document.querySelector('ul').outerHTML
            expect(htmlElements).toBe('<ul id="results"><li style="color: green;">Outside and before the test block</li><li>TestBlock A<ul><li style="color: green;">Inside TestBlock A</li></ul></li><li style="color: green;">Outside and after the TestBlock A</li><li>TestBlock B<ul><li style="color: green;">Inside TestBlock B</li><li style="color: green;">test delayed B</li></ul></li><li style="color: green;">Outside and after TestBlock B</li></ul>')
            done()
        }, 500);
    });
    it('after 1 secs',  function (done) {
        setTimeout(function () {
           const htmlElements = document.querySelector('ul').outerHTML
            expect(htmlElements).toBe('<ul id="results"><li style="color: green;">Outside and before the test block</li><li>TestBlock A<ul><li style="color: green;">Inside TestBlock A</li><li style="color: green;">test delayed A</li></ul></li><li style="color: green;">Outside and after the TestBlock A</li><li>TestBlock B<ul><li style="color: green;">Inside TestBlock B</li><li style="color: green;">test delayed B</li></ul></li><li style="color: green;">Outside and after TestBlock B</li></ul>')
            done()
        }, 1000);
    });

})
/**
 * All non-delayed tests should appear immediately.
Test delayed B should appear after .5 seconds have elapsed.
Test delayed A should appear after 1 second has elapsed.

 */