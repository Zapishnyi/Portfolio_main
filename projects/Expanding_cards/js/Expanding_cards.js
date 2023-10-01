document.querySelectorAll(".panel").forEach((active_panel)=>{
    active_panel.addEventListener('click',()=>{
        document.querySelectorAll(".panel").forEach((not_active_panel)=>{
            not_active_panel.style.width = '150px';
        })
        active_panel.style.width = '100%';
    })
})
    