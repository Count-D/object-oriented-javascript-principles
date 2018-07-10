const barker = (state) => ({
	bark: () => console.log('Woof i am ' + state.name)
});

const driver = (state) => ({
	drive: () => state.position = state.position + state.speed
})
barker({name: 'karo'}).bark();

////////////////////////////////////

const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0
    }
    return Object.assign(
        {},
        barker(state),
        driver(state),
        
    )
}
murderRobotDog('sniffles').bark()

//////////////////////////
var animal = {
    x : 0,
    y : 0,
    locate : function () { 
      console.log(this.x, this.y);
      return this;
    },
    move : function (x, y) { 
      this.x = this.x + x; 
      this.y = this.y + y;
      return this;
    }
 }
 
 var duck = function () {
    return Object.assign(Object.create(animal), {
      speak : function () { 
        console.log("quack");
        return this;
      }
    });
 }
 
 var daffy = duck();
 
 daffy.move(6, 7).locate().speak();

 //SINGLETON - Single instance of an Object
 var duck = Object.assign(Object.create(animal), {
    speak : function () { 
        console.log("quack");
        return this;
    }
});

duck.move(6, 7).locate().speak();