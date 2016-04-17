pc.script.create('christextshow', function (app) {
    // Creates a new Jesstriggertext instance
    var christextshow = function (entity) {
        this.entity = entity;
    };

christextshow.prototype = {
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
          uiEntity.script.ui.setText('Artist: Chris Godber');
         }
    }
     
 
    
};   
   

    return christextshow;
});