

  
     




  //componetns can only return a single parent element, cant return two sibling components, siblings have to be wrapped in a parent AKA a div



  import React from "react"
import Child1 from "./Child"
import Grandchild from "./Grandchild"
  
  function App() {
      return (
        //parent


        // we change it to react.fragment so we cut down on the confusion
          <React.Fragment>
            {/* //children */}
            <Grandchild/>
              <Child1/>
          </React.Fragment>
      )
  }


//   when we wrap children in divs after divs, makes our html hard to read like below 





// {/* <div id="root">
//     <div>
//         <div>
//             <h1>I'm the Child component</h1>
//             <div>
//                 <hr>
//                 <h3>I'm the Grandchild component</h3>
//                 <p>I'm also a part of the Grandchild component</p>
//             </div>
//         </div>
//     </div>
// </div> */}



// if we use react .fragment, it cuts down on the extra divs/ confusion


// looks more like code below

// changing the parent ro react.frag also changes parent/ child realtionship

// IE now children are all siblings including app.js, so we dont always want to use this just to cut down Html confusion beucase it can mess with the page  and css since all elements are realted aka grid, flex box woudlnt know difference 

// <div id="root">
//     <h1>I'm the Child component</h1>
//     <hr>
//     <h3>I'm the Grandchild component</h3>
//     <p>I'm also a part of the Grandchild component</p>
// </div>
  export default App
