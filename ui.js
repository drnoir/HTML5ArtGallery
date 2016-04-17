pc.script.create('ui', function (app) {
    // Creates a new Ui instance
    var UI = function (entity) {
        this.entity = entity;
    };

   UI.prototype = {
        initialize: function () {
            // Create a div centred inside the main canvas
            var div = document.createElement('div');
            div.style.position = 'absolute';
            div.style.width = '650px';
            div.style.top = '80%';
            div.style.left = '50%';
            div.style.marginLeft = '-250px';            
            div.style.textAlign = 'center';
            div.style.color = 'black';
            div.style.background= 'white';
            div.style.fontSize = 'x-large';
            div.style.font = 'verdana'; 
            div.style.visibility = 'hidden';

            // Add the div to the DOM as a child of the document's body element
            document.body.appendChild(div);

            this.div = div;

            // Set some default state on the UI element
            this.setText('Welcome to The Tunnel Virtual Art Gallery use the arrows keys to move and the mouse to look around');
            this.setVisibility(true);
        },

        // Some utility functions that can be called from other game scripts
        setVisibility: function (visible) {
            this.div.style.visibility = visible? 'visible' : 'hidden';
        },

        setText: function (message) {
            this.div.innerHTML = message;
        }
    };

    return UI;
});