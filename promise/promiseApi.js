 const p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 1 rejected');
    }, 2000);});
const p2=new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 2 rejected');
    }, 1000);  });
const p3=new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Promise 3 rejected');
    }, 3000);});


    Promise.any([p1, p2, p3]).then((values) => {
        console.log(values);
    }).catch((error) => {
        console.error(error);
        console.log(error.errors); // Array of all rejection reasons
    });
   
    