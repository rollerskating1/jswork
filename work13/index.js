var elements = [
    {tag: 'input', text: '姓  名: ', attr: {type:'text',name: 'user'}},
    {tag: 'input', text: '学  号: ', attr: {type:'text',name: 'sid'}},
    {tag: 'input', text: '班  级: ', attr: {type:'text',name: 'classid'}},
    {tag: 'input', text: '性  别: ', attr: {type:'radio',name: 'gender'},
    option:{m:'男', w: '女'}},
    {tag: 'input', text: '爱  好', attr: {type: 'checkbox',name: 'hobby[]'},
option:{swimming:'游泳', reading:'读书',running:'跑步'}},
{tag: 'select', text: '住址',attr:{name:'area'},
option: {'':'--请选择--',bj: '北京', sh:'上海',sz:'深圳'}},
{tag:'textarea',text: '自我介绍:',
attr: {name:'introduce',cols:'50',rows:'5'}},
{tag:'input',attr:{type:'submit',value:'提交'}}
];
document.getElementById('form').innerHTML = new FormBuilder(elements).create();