const pi = Math.PI;

class Circle {
  constructor(radius) {
    this.radius = radius;
    }
  get diameter() {
    return this.radius * 2;
  }
  get circumference() {
    return pi * (this.radius * 2);
   }
  get area() {
    return pi * (this.radius * this.radius)
   }

  set diameter (diameter) {
    return this.radius = diameter / 2;
  }

  set circumference( circumference ) {
    this.radius = circumference * 1/(pi * 2 )
  }
  set area(area) {
    return this.radius = Math.sqrt(area/pi)
   }
}
