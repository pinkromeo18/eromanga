/*

body{
  margin:4rem;
  min-height:100vh;
  background:linear-gradient(135deg,orange 1%,#f26)
}
*/

eromanga();


function eromanga(){
  const cls='.eromanga'
  var el=document.querySelector(cls)
  if(!el)return console.log('need class .eromanga')
  const temp=el.innerHTML||''
  const cr='\n'
  var ret=temp.split(cr).map(d=>d.trim())
  .map(maketag)
  .join(cr)
  //
  el.innerHTML= setStyle() + ret
  return el;
  //
  //local

  
  function isimg(str){
    var re_img=/.(jpg|jpeg|png|gif|bmp|svg|webp|avif)/
    return re_img.test(str)
  }
  function maketag(d){
    const flg= /^!|^！/.test(d)
    d=flg?d.slice(1):d
    if( flg&&isimg(d) )return `<img src="${d}">`
    else if(flg)return `<h1>${d}</h1>`  
    return `<p>${d}</p>`  
  }
  function setStyle(){
    var css =`
.eromanga{
  background:#f5f5f5;
  color:#000;
  min-width:calc(400px - 1rem);
  width:calc(400px - 1rem);
  max-width:calc(400px - 1rem);
  padding:0.5rem;
  transition:all 0.2s ease;
}
.eromanga,.eromanga *{
  box-sizing:border-box;
}
.eromanga img{
  object-fit:cover;
  object-position:top;
  width:100%;
  max-height:400px;  
}
.eromanga h1{font-size:1.9rem;}
    `
    return `<style>${css}</style>\n`
  }
  ////
}
