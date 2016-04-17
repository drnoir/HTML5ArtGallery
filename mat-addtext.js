pc.script.create('mat_addtext', function (app) {
    // Creates a new Mat_addtext instance
    var Mat_addtext = function (entity) {
        this.entity = entity;
    };

    Mat_addtext.prototype = {
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
          uiEntity.script.ui.setText('Artist: Mat Tudor');
         }
    }
 };

    return Mat_addtext;
});