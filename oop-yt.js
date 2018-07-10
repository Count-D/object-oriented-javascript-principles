//FACTORY FUNCTION
function createCircle(radius) {
return {
    radius: radius,
    draw: function(){
        console.log('draw')
    }
};
}
const circle = createCircle(1);
//circle.draw();


//Counstructor Function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

//Circle.call({}, 1); //Same as new Circle
//Circle.apply({}, [1, 2, 3]);

const andCircle = new Circle(10);

//ABSTRACTION
function Circle(radius){
    this.radius = radius;
    let defLocation = {x:1,y:1}
   
    this.getDefLocation = function(){
        return defLocation
    }
    this.draw = function(){
        //defLocation()
        //this.radius()

        console.log('draw')
    };
    Object.defineProperty(this, 'defLocation', {get: function(){
        return defLocation
    },
    set: function(value){
        defLocation = value;
    }
    })
}

const aCircle = new Circle(10);
circle.draw();
