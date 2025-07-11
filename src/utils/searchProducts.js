import { products } from "../assets/products.js"

function filterDat(cats) {
    const arr = [products[0][cats]]
    products.forEach((elem) => {
        if (!arr.includes(elem[cats])) {
            arr.push(elem[cats])
        }
    })
    return arr
}

export const allBrands = new filterDat('brand')
export const allCategory = new filterDat('gender')
export const allColor = new filterDat('color')
export const allNames = new filterDat('name')

const all = [allBrands, allNames]

const findingDat = (name) => {
    const arr1 = []
    all.forEach((main) => {
        main.forEach((elem) => {
            if (elem.toLowerCase().startsWith(name.toLowerCase())) {
                products.forEach((item) => {
                    if(item.name === elem){
                        arr1.push( item )
                    }
                })
            }
        });
    })
    return arr1
}

export default findingDat


// function findBrands(){
//     const brands = [products[0].brand]
//     products.forEach((elem) => {
//         if(!brands.includes(elem.brand)){
//             brands.push(elem.brand)
//         }
//     })
//     return brands
// }

// const allBrands = findBrands()
// console.log(allBrands);


// console.log(allBrands);
// console.log(allColor);
// console.log(allCategory);
