function makeobj(arr) {


    let obj = {};

    arr.forEach((v) => {

    
        let key = v[0];
        let value = v[1];

    
        obj[key] = value;
    });


    return obj;
}

console.log(
    makeobjobj([
        ["NAME", "VIKAS"],
        ["CITY","DELHI" ],
        ["CPI", 9],
    
    ])
);