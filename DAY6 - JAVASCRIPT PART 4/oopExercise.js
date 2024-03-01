class SHAPE{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    calculateArea(){
        throw new Error("Method not implemented.");
    }
}
class Rectangle extends SHAPE{
    displayFormula(){
        console.log("The rectangle are is width*height");
    }

    calculateArea(){
        console.log("The area is",this.width*this.height);
    }
}
const shape1 = new Rectangle(2, 3);
shape1.displayFormula();
shape1.calculateArea();
