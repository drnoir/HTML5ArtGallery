pc.script.create('lauren_showtext', function (app) {
    // Creates a new Lauren_showtext instance
    var Lauren_showtext = function (entity) {
        this.entity = entity;
    };

    Lauren_showtext.prototype = {
        // Called once after all resources are loaded and before the first update
       initialize: function () 
   { 
   this.entity.collision.on('collisionstart', this.onCollisionStart, this);
 
   },
   

   onCollisionStart: function (result) 
    {
         if (result.other.rigidbody)
         {
          var uiEntity = app.root.findByName('UI');
          uiEntity.script.ui.setVisibility('true');
          uiEntity.script.ui.setText('Artist: Lauren Mele');
         }
    }
 };

    return Lauren_showtext;
});