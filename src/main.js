import img1 from './assets/images/1.jpg'
import img2 from './assets/images/2.jpg'
import img3 from './assets/images/3.png'

import reset from './assets/style/reset.css'
import style from './assets/style/style.less'


let img = document.createElement('img')
img.src = img1
document.body.append(img)


let img4= document.createElement('img')
img4.src = img3
document.body.append(img4)

async function aa() {
   const a = 1234
   return a
}
aa()

new Promise(function(resolove,reject){
   resolove(123)
})