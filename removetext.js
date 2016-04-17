pc.script.create('removetext', function (app) {
    // Creates a new Removetext instance
    var removetext = function (entity) {
        this.entity = entity;
    };

    removetext.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
        this.entity.collision.on('collisionend', this.onCollisionEnd, this);
        },

        // Called every frame, dt is time in seconds since last update
    onCollisionEnd: function (result) 
    {
        var uiEntity = app.root.findByName('UI');
          uiEntity.script.ui.setVisibility('false');
          uiEntity.script.ui.setText('');
    }
    
    };
    
    return removetext;
});