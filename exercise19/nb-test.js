(function (global) {
    let root = document.getElementById('results');
    let a;
    const result = (text, pass) => {
        const el = document.createElement('li');
        el.textContent = text;
        pass !== undefined && (el.style.color = pass ? 'green' : 'red');
        return el;
    }
    const assert = (pass, message) => {
   

        return root.appendChild(result(message, pass));
    }
     function test(description, testBlock) {

        const parent = root;
        root = assert(undefined, description)
            .appendChild(document.createElement('ul'));
        testBlock();    
        root = parent;
    }

    global.oldSetTimeout = global.setTimeout;
    global.setTimeout = function (func, delay,pass,message) {
        const parent=root;
        return window.oldSetTimeout(function () {
            try {
                root=parent
                if (message&&pass)
                    func(pass,message);            
                else
                func();
            }
            catch (err) {
                throw new Error(err)
            }
        }, delay);
    };
    global.assert = assert;
    global.test = test;
})(window);

