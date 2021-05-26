'use strict';
{
  const btn = document.getElementById('btn');
  const face = document.getElementById('face');

  const faces = ['smile!!!','angry!!!','sad!!!'];
  //   {f:'😂', c:'smile!!!'},
  //   {f:'😣', c:'angry!!!'},   //オブジェクトで管理する方法はできなかった・・・。
  //   {f:'😭', c:'sad!!!'},
  // ];

  btn.addEventListener('click', () => {
    const result = Math.floor(Math.random()*faces.length); //０－２のインデックスがランダムに選択される
    btn.textContent = faces[result];
    
    switch(faces[result]){
      case 'smile!!!':
        face.textContent = '😂';
        break;

      case 'angry!!!':
        face.textContent = '😣';
        break;

      case 'sad!!!':
        face.textContent = '😭';
        break;
    }

  });

}
