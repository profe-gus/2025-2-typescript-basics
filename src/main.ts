//import { gus } from './classes/class-minify'
//import { gustavo, studentsIds } from './objects/objects'
import { gus } from './classes/classes'
import './style.css'
//import { finalAge, height, isValid, message, name } from './type-basics/type-basics';

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <h1>Hello my name is ${name} and my height is ${height}
//   my status is: ${isValid}
//   my age is: ${finalAge}
//   </h1>
// `

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <h2>
//   ${message}
//   </h2>
// `

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h2>
  ${JSON.stringify(gus.getName)}

  </h2>
`