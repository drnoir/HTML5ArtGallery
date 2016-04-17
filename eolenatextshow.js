pc.script.create('eolenatextshow', function (app) {
    // Creates a new Jesstriggertext instance
    var eolenatextshow = function (entity) {
        this.entity = entity;
    };

eolenatextshow.prototype = {
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
          uiEntity.script.ui.setText('Artist: Elena Dimitrova');
         }
    }
     
     
 
    
};   
   

    return eolenatextshow;
});