// task 6 -1: movie object .filtering movie with rating PG

class movie {
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(){
        const movieOut=[];
        for(var movie of movieBuff  ){
            if(movie.rating === "PG"){
                movieOut.push(movie);
            }
            return movieOut;

        }


    }
}
var movie1 = new movie("indian2","rajkamal","PG");
var movie2 = new movie("kaala","studioBlue","P");
var movie3 = new movie("leo","redGaint","UG");
 
var movieBuff=[movie1,movie2,movie3];
 
console.log(movie1.getPG());

// task 6 -2 object for circle diagram.

class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    };
    getRadius(){
        return `${this.radius}`;

    }
setRadius(value){
    this.radius = value;
    

}
getColor(){

    return `${this.color}`
}
setColor(clr){
    this.color = clr;
}
getArea(){
    var area = 22/7*(this.radius*this.radius);
    return area;
};
getCircumference(){
    var circ = 2*22/7*this.radius;
    return circ;
}


}
var circle1 = new circle(1.0,"red");
console.log(circle1.setRadius(76));
console.log(circle1.getRadius());

// task 6-3: object created with resume

class person {
    constructor(name,age,gender,nationality,pincode){
        this.name=name;
        this.age = age ;
        this.gender = gender;
        this.nationality = nationality;
        this.pincode = pincode;
    }
}
 
var person1 = new person(max,23,male,australian,927982);
var person2 = new person(amy,34,female,unitedKingdom,532877);

console.log(person1);

// task 6 -4 : object in the uber . and rate is calculated depending on the amount of km travelled.

class uber{
    constructor(varient,noOfPerson,km){
        this.varient = varient;
       this.noOfPerson = noOfPerson;
       this.km = km ;

    }
    getkm(){
        return `This is the total amount of km travelled  ${this.km}`;
    }
    static setkm(kms){
        
        var rate = kms * 25;
        return rate;
}
}

var ride1 = new uber("sedan",4,75);
var ride2 = new uber("hatchpack",5,40);

console.log(uber.setkm(25));