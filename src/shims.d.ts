// 报错原因：typescript 只能理解 .ts 文件，无法理解 .vue文件

// 解决方法：在项目根目录或 src 文件夹下创建一个后缀为 .d.ts 的文件，并写入以下内容：
// declare module '*.vue' {
//     import { ComponentOptions } from 'vue'
//     const componentOptions: ComponentOptions
//     export default componentOptions
// }