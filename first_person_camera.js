pc.script.create('first_person_camera', function (context) {
    var FirstPersonCamera = function (entity) {
        this.entity = entity;
        
        // Calculate camera azimuth/elevation
        var temp = this.entity.forward.clone();
        temp.y = 0;
        temp.normalize();
        this.azimuth = Math.atan2(-temp.x, -temp.z) * (180 / Math.PI);

        var rot = new pc.Mat4().setFromAxisAngle(pc.Vec3.UP, -this.azimuth);
        rot.transformVector(this.entity.forward, temp);
        this.elevation = Math.atan(temp.y, temp.z) * (180 / Math.PI);

        // Disabling the context menu stops the browser displaying a menu when 
        // you right-click the page
        context.mouse.disableContextMenu();
        context.mouse.on(pc.input.EVENT_MOUSEMOVE, this.onMouseMove, this);
        context.mouse.on(pc.input.EVENT_MOUSEDOWN, this.onMouseDown, this);
    };

    FirstPersonCamera.prototype = {
        initialize: function () {
        },

        update: function (dt) {
            // Update the camera's orientation
            this.entity.setEulerAngles(this.elevation, this.azimuth, 0);
        },
    
        onMouseMove: function (event) {
            if (pc.input.Mouse.isPointerLocked()) {
                // Update the current Euler angles, clamp the pitch.
                this.elevation -= event.dy / 5;
                this.elevation = pc.math.clamp(this.elevation, -90, 90);
                this.azimuth -= event.dx / 5;
            }
        },
        
        onMouseDown: function (event) {
            // When the mouse button is clicked try and capture the pointer
            if (!pc.input.Mouse.isPointerLocked()) {
                context.mouse.enablePointerLock();    
            }            
        }
    };

    return FirstPersonCamera;
});