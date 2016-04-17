pc.script.create('jesstriggertext', function (app) {
    // Creates a new Jesstriggertext instance
    var Jesstriggertext = function (entity) {
        this.entity = entity;
    };

Jesstriggertext.prototype = {
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
          uiEntity.script.ui.setText('Artist: Jessica Ballantyne');
         }
    }
     
 
    
};   
   

    return Jesstriggertext;
});