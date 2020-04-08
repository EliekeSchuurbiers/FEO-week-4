// const car = {
//     brand: "Nissan",
//     getBrand: function () {
//         console.log(this.brand);
//     }
// };

// const getCarBrand = car.getBrand;

// getCarBrand();   // output brand: nissan ??

// const car = {
//     brand: "Nissan",
//     getBrand: function () {
//         console.log(this.brand);
//     }
// };

// const getCarBrand = car.getBrand;

// console.log(getCarBrand);   // output: zie hieronder

// const car = {
//     brand: "Nissan",
//     getBrand: function () {
//         console.log(this.brand);
//     }
// };
// const getCarBrand = car.getBrand.bind(car);
// getCarBrand();   // output: Nissan omdat de functie verbonden is met de const. 

// <button id="btn" type="button">Get the car's brand</button>

//      const car = {
//        brand: "Nissan",
//        getBrand: function(){
//          console.log(this.brand);
//        }
//      };

//      const el = document.getElementById("btn");
//      el.addEventListener("click", car.getBrand); //Dit werkt niet omdat this in dit geval terug slaat op getBrand en niet op de const. Ook in dit geval moet die dus verbonden worden. 
//      el.addEventListener("click", car.getBrand.bind(car)); // dit gaat dus wel werken. 


//D
const car = {
    brand: "Nissan",
    getBrand: function () {
        const printBrandName = function () {
            console.log(this.brand);
        };
        return printBrandName();
    }
};

car.getBrand();