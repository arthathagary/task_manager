const tasksDom = document.querySelector('.tasks');
const loadingTextDom = document.querySelector('loading-text');

loadingTextDom.style.visibility = 'visible';
const showTasks = async ()=>{
    loadingTextDom.style.visibility = 'visible'
    const {data:tasks} = await axios.get('api/v1/tasks');
    tasks.map((task)=>{
       const {completed,name}=task;
       return `<div>${name} - ${completed}</div>`
    });
    tasksDom.innerHTML = task;
    return task
    }
    
showTasks()