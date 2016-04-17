pc.script.create('julieannshowtext', function (app) {
    // Creates a new Julieannshowtext instance
    var Julieannshowtext = function (entity) {
        this.entity = entity;
    };

    Julieannshowtext.prototype = {
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
          uiEntity.script.ui.setText('Artist: Julie Ann');
         }
    }
 };

    return Julieannshowtext;
});