document.getElementById('btn').addEventListener('click', fetchFun);


// using Promise then & catch


// function fetchFun() {
//     console.log('hello guys')
//     const promiseObj = fetch('fetch.txt')
//     console.log(promiseObj)
//     promiseObj.then((res) => {
//         console.log(res);
//         return res.text()
//             .then((data) => {
//                 console.log(data)
//             })
//     })
// }


// function fetchFun() {
//    console.log('hiii')
//    fetch('fetch.txt').then((res)=>{
//     console.log(res);
//     return res.text().then((data)=>{
//         console.log(data)
//     })
//    })
// }



// ---------Error handling--------

// function fetchFun() {
//     console.log('hiii')
//     fetch('fetch1.txt').then((res)=>{
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//      console.log(res);
//      return res.text().then((data)=>{
//          console.log(data)
//      })
//     }).catch((error)=>{
//         console.log(error)
//     })
//  }


//-------showing data in Browser--------


// function fetchFun() {
//     console.log('hiii')
//     fetch('fetch.txt').then((res)=>{
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//      console.log(res);
//      return res.text().then((data)=>{
//          console.log(data)
//          document.getElementById('showData').innerText = data;
//      })
//     }).catch((error)=>{
//         console.log(error)
//     })
//  }


// async and await


// async function fetchFun(){
//     console.log("hoooo")
//     const res = await fetch('fetch.txt')
//     console.log(res)
//     const ans = await res.text()
//     console.log(ans)
// }


// async and await | error handling


// async function fetchFun() {
//    try{
//     console.log('hii')
//     const res = await fetch('fetch1.txt')
//     if(!res.ok){
//         throw Error(res.statusText)
//     }
//     console.log(res)
//     const ans = await res.text()
//     console.log(ans)
//    }catch(error){
//     console.log(error)
//    }
// }


// async and await | showing data in browser

// async function fetchFun() {
//        try{
//         console.log('hii')
        
//         const res = await fetch('fetch.txt')
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//         console.log(res)
//         const ans = await res.text()
//         console.log(ans)
//         document.getElementById('showData').innerText = ans
//        }catch(error){
//         console.log(error)
//        }
//     }

// ---------JSON--------

// function fetchFun() {
//     console.log('hiii')
//     fetch('text.json').then((res)=>{
//         if(!res.ok){
//             throw Error(res.statusText)
//         }
//      console.log("Res", res);
//      const dt = res.json()
//      console.log("DT",dt)
//      return dt
//      .then((data)=>{
//          console.log("DATA",data)
//          console.log(data.name)
//          console.log(data.Roll)
//      })
//     }).catch((error)=>{
//         console.log(error)
//     })
//  }


//------- showing data in Browser using JSON --------


function fetchFun() {
    console.log('hiii')
    fetch('text.json').then((res)=>{
        if(!res.ok){
            throw Error(res.statusText)
        }
     console.log(res);
     return res.json().then((data)=>{
         console.log(data)
        // document.getElementById('showData1').innerText = data.name;
        document.getElementById('showData1')
        console.log(document.getElementById('showData1'))
         document.getElementById('showData2').innerText = data.Roll;
     })
    }).catch((error)=>{
        console.log(error)
    })
 }
