'use strict';
{
  const btn = document.getElementById('btn');
  const face = document.getElementById('face');

  const faces = ['smile!!!','angry!!!','sad!!!'];
  //   {f:'๐', c:'smile!!!'},
  //   {f:'๐ฃ', c:'angry!!!'},   //ใชใใธใงใฏใใง็ฎก็ใใๆนๆณใฏใงใใชใใฃใใปใปใปใ
  //   {f:'๐ญ', c:'sad!!!'},
  // ];

  btn.addEventListener('click', () => {
    const result = Math.floor(Math.random()*faces.length); //๏ผ๏ผ๏ผใฎใคใณใใใฏในใใฉใณใใ ใซ้ธๆใใใ
    btn.textContent = faces[result];
    
    switch(faces[result]){
      case 'smile!!!':
        face.textContent = '๐';
        break;

      case 'angry!!!':
        face.textContent = '๐ฃ';
        break;

      case 'sad!!!':
        face.textContent = '๐ญ';
        break;
    }

  });

}
