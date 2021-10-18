import img1 from './assets/images/1.jpg'
import img2 from './assets/images/2.png'
import img3 from './assets/images/3.jpg'

import reset from './assets/style/reset.css'
import style from './assets/style/style.less'

function add(x,y){
   return x + y
}
const sum = add(2,3);
console.log(sum)
let img = document.createElement('img')
img.src = img1
document.body.append(img)

