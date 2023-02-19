// const posts = [
//     {title:'post one', body: 'this is post one'},
//     {title:'post two', body:'this is post two'}
// ];

// function getpost (){

//     setTimeout (()=>{
//         let str = "" ;
//         posts.forEach((post)=>{
//             str += `<li>${post.title}</li>`
            
        
//         })
//         document.body.innerHTML = str;
//     },1000)
// }
//  function creatpost (post2,callback){
//     setTimeout (()=>{
    
//         posts.push(post2)
//         callback()
        
//     },0)
//  }
 
 
//  creatpost({title:'post three', body:'this is post three'},getpost)

// --------------------------------------------------------------------------------//

// function bhakti (){
//     console.log("hello");
// }

// function add (v,b,callback){
     
//     console.log(v+b);
//     callback();
// }
// // let v = 1;
// // let b = 1;
// add(1,2, bhakti);
// ------------------------------------------------------------------------------------------//

// function bhakti (){
//         console.log("hello");
//     }
    
//     function add (v,b){
//          return new Promise((resolve,reject)=>{

//             const error = false;
         
//         console.log(v+b);
//         if(!error){
//             resolve();
//         }
//         else {
//             reject('Error : something went wrong')
//         }
//     })
    
//     }

//     // let v = 1;
//     // let b = 1;
//     add(1,2,).then(bhakti);
// -------------------------------------------------------------------------

    //CALL-BACK-HELL//

    // function javascript(callback,callback2){
    //     console.log('script:is synchronos single threaded language')
    //     callback(callback2);
    // };
    // function python (callback){
    //     console.log('python : is easy language to understand')
    //     callback()
    // }
    // function c(){
    //     console.log('C: is the base of any proggraming language')
        
    // };
       
    // javascript(python,c)
//----------------------------------------------------------------

// function pratikesh (cb){
//     console.log("it is brilleint student");
//     cb()
// }

// function vaibhav (callback3,cb){
//     console.log("it is dumb student")
//     callback3(cb);
    
// }

// function karishma(callback,callback2,callback3){
//     console.log("its a cs wala student");
//     callback(callback2,callback3);
    
// }
// function katrina(){
//           console.log('it is EX of salman')
// }

// karishma(vaibhav,pratikesh,katrina)
//----------------------------------------------------------------------

const posts = [{title: 'POST1'},{title: 'POST2'}];

// Do not touch the following function
function printPost() {
        posts.forEach((post) => {
            console.log(post.title)
        })
}
// Do not touch the following function
function create3rdPost() {

        setTimeout( () => {
            posts.push({title: 'POST3'});
            console.log(posts)
        }, 5000)
    
}
 create3rdPost();




