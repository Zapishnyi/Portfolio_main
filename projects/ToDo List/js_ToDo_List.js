const button = document.querySelector('.add_list_btn');
const input = document.querySelector('.todo_input_data');
const list = document.querySelector('.todo_list');

button.addEventListener('click', () =>{
    const li = document.createElement('li');
    const delite_btn = document.createElement('button')
    li.innerText = input.value;
    delite_btn.innerText = 'Delite';
    list.appendChild(li);
    li.appendChild(delite_btn);
    input.value='';
    input.focus();
    delite_btn.addEventListener('click',()=>{
        list.removeChild(li);
    })
})
