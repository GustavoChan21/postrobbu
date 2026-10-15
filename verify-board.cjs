const fs=require('fs'),vm=require('vm'),assert=require('assert');
const seedSource=fs.readFileSync('seed.js','utf8'),source=fs.readFileSync('app.js','utf8');
const els=new Map();function el(key){if(!els.has(key))els.set(key,{innerHTML:'',textContent:'',hidden:true,classList:{toggle(){},remove(){}},addEventListener(){},setAttribute(){},value:'',onclick:null});return els.get(key)}
const document={querySelector:el,querySelectorAll:(s)=>[],addEventListener(){}};
const local=new Map();const context={window:{},document,localStorage:{getItem:k=>local.get(k)||null,setItem:(k,v)=>local.set(k,v)},location:{search:'?view=kds',pathname:'/POSTROBBU/'},history:{replaceState(){}},URLSearchParams,Date,Math,JSON,Object,Array,Set,String,Number,Intl,structuredClone,console,clearTimeout,setTimeout:()=>0,crypto:require('crypto').webcrypto};
vm.createContext(context);vm.runInContext(seedSource,context);vm.runInContext(source.replace("try{init()}","window.__testKDS={setKdsStatus,advance};try{init()}"),context);
const html=el('#content').innerHTML;
assert.equal((html.match(/class="kds-column stage-/g)||[]).length,4,'expected 4 Kanban columns');
assert.equal((html.match(/class="kds-ticket"/g)||[]).length,8,'expected 8 sample cards');
for (const stage of ['Nuevo','En preparación','Listo','Entregado'])assert(html.includes(stage),stage);
assert(html.includes('KANBAN v3'),'version identifier');
context.window.__testKDS.setKdsStatus('demo-1','Preparando');
assert.equal((el('#content').innerHTML.match(/class="kds-column stage-/g)||[]).length,4);
assert.equal((el('#content').innerHTML.match(/class="kds-ticket"/g)||[]).length,8);
assert(local.get('postrobbu-local-board-v3').includes('Preparando'),'status persisted');
console.log('PASS: 4 columns, 8 orders, status labels, and version visible in rendered HTML');
