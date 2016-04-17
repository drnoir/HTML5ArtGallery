pc.script.create('matt_textshow', function (app) {
    // Creates a new Matt_textshow instance
    var Matt_textshow = function (entity) {
        this.entity = entity;
    };

    Matt_textshow.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
   this.entity.collision.on('collisionstart', this.onCollisionStart, this);
 
   },
   

   onCollisionStart: function (result) 
    {
         if (result.other.rigidbody)
         {
          var uiEntity = app.root.findByName('UI');
          uiEntity.script.ui.setVisibility('true');
          uiEntity.script.ui.setText('Artist: Matt Randle');
         }
    }
     
 
    
};   

    return Matt_textshow;
});