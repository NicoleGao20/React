
// import React, { FC } from 'react';
// import styled from "./Input.module.css"
// interface Init {
//   children?: any,
//   type: string,
//   value?: string,
//   handler: Function,
//   placeholder?: string,
//   styles?: object,
// }
// //参数接受props对象== 解构{} 使用泛型接口约束
// //  //React.FC<>为typescript使用的泛型
// const Input: FC<Init> = ({ children, type, value, handler, placeholder, styles }) => {
//   return (
//     <div className={styled.input}>
//       {
//         children ? <label>
//           {children}
//           <input
//             placeholder={placeholder}
//             type={type}
//             value={value}
//             onChange={(e) => handler(e.target.value)}
//             style={styles}
//           />
//         </label> :
//           <input
//             placeholder={placeholder}
//             type={type}
//             value={value}
//             onChange={(e) => handler(e.target.value)}
//             style={styles}
//           />
//       }

//     </div>
//   )
// }

// export default Input




import React, { FC } from 'react'
import styled from './Input.module.css'


//定义接口的形状
interface Init {
  children?: any,
  type: string,
  value?: string,
  placeholder?: string,
  handler: Function,
  styles?: Object
}


const Input: FC<Init> = ({ children, type, value, placeholder, handler, styles }) => {
  return (
    <div className={styled.input}>
      {
        children ? <label>
          {children}
          <input
            value={value}
            placeholder={placeholder}
            type={type}
            style={styles}
            onChange={(e) => handler(e.target.value)}
          />
        </label> :
          <input
            value={value}
            placeholder={placeholder}
            type={type}
            style={styles}
            onChange={(e) => handler(e.target.value)}
          />
      }
    </div>
  )
}


export default Input



