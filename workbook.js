'use strict';
let workbookGroup=null;
function workbookItems(group){return (group.items||[]).map(i=>{
 const extra={alternatives:i.alternatives||[],hint:'Kezdőbetű: '+i.answer[0]+'.',workbookGroup:group.id};
 // The normal level uses written answers for gaps and selection for long sentence tasks.
 if(level==='sni'||i.answer.split(' ').length>4)return choices([i.prompt,i.answer,...i.wrong],extra);
 return {prompt:i.prompt,answer:i.answer,...extra};
});}
function workbookPool(lesson){return (workbook[lesson.id]||[]).flatMap(g=>workbookItems(g));}
function workbookHome(){
 const groups=workbook[current().id]||[];
 workbookGroup=null;
 content.append(node('h3','Interaktív munkafüzet'),node('p','Válassz feladatcsoportot! A zárt feladatok azonnal javíthatók; az önálló írásokat a saját eszközöd tárolja.'));
 if(!groups.length){content.append(node('p','Ehhez a leckéhez még nem készült munkafüzet.','note'));return;}
 const scores=load('workbookBest',{}), drafts=load('workbookDrafts',{});
 groups.forEach(g=>{const panel=node('div',undefined,'panel'),key=current().id+'|'+g.id+'|'+level;
 panel.append(node('h4',g.title));if(g.help)panel.append(node('p',g.help,'note'));
 if(g.free){const done=g.free.filter((_,i)=>(drafts[current().id+'|'+g.id+'|'+i]||'').trim()).length;panel.append(node('p',done+' / '+g.free.length+' kitöltött válasz'),button('Írás megnyitása',()=>workbookWriting(g),'primary'));}
 else {const best=scores[key];panel.append(node('p',g.items.length+' feladat'+(best===undefined?'':' · Legjobb eredmény: '+best+'%')),button('Gyakorlás indítása',()=>{workbookGroup=g;startRound(workbookItems(g))},'primary'));}
 content.append(panel);});
}
function workbookWriting(g){
 stopAudio();content.replaceChildren();workbookGroup=g;const l=current().id;
 content.append(node('h3',g.title),button('Vissza a munkafüzethez',workbookHome),node('p',g.help||'Írj saját mondatokat!'),node('p','A válaszok automatikusan mentődnek ezen a böngészőn. A minták nem automatikus nyelvtani javítások.','note'));
 const draft=load('workbookDrafts',{}), fields=[];const status=node('p',undefined,'note');status.setAttribute('role','status');
 function update(){status.textContent=fields.filter(f=>f.value.trim()).length+' / '+fields.length+' válasz kitöltve.';}
 g.free.forEach((item,i)=>{const key=l+'|'+g.id+'|'+i,row=node('div',undefined,'row'),lab=node('label',(i+1)+'. '+item.prompt,'en');const field=node('textarea');field.id='wb-write-'+i;lab.htmlFor=field.id;field.lang='en';field.rows=2;field.value=draft[key]||'';field.placeholder='Írd ide angolul a saját válaszodat!';field.addEventListener('input',()=>{draft[key]=field.value;save('workbookDrafts',draft);update();});fields.push(field);row.append(lab,field);const hint=detail('Mintaválasz',row);hint.append(english('p',item.model,'en'));if(level==='sni')hint.open=true;content.append(row);});
 content.append(status,button('Vissza a munkafüzethez',workbookHome,'primary'));update();
}
