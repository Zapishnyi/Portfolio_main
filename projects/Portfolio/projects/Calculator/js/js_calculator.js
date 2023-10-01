document.querySelector('.screen').textContent = '';
let buttons=document.querySelectorAll("td");
buttons.forEach(function(btn_item){
    btn_item.addEventListener("click",()=>{
        btn_item.className==="btn_clear"? document.querySelector('.screen').textContent = '' : 
        btn_item.className==="btn_backspace" ? document.querySelector('.screen').textContent = document.querySelector('.screen').textContent.slice(0,document.querySelector('.screen').textContent.length-1):
        btn_item.className==="btn_=" ? (
            // Transform screen line to array
            items_array = document.querySelector('.screen').textContent.split(/\b/),
            // Check and combine figures, example - '4'+','+'5'=4,5 and tranform all string figures to to float
            items_array.forEach(function(items_array_item,index){
                if (items_array_item===".") {
                    temp_item=items_array[index-1]+'.'+items_array[index+1],
                    items_array.splice(index-1,3,parseFloat(temp_item))
                }else{
                if (isNaN(parseFloat(items_array_item))===false) {
                        items_array.splice(index,1,parseFloat(items_array_item))
                    }
                }
            }),
            // Square root calculation
            items_array.forEach(function(items_array_item,index){
                if (items_array_item==="√"){
                    if(isNaN(parseFloat(items_array[index-1]))===false){
                        temp_item=Math.sqrt(items_array[index-1]);
                        items_array.splice(index-1,2,parseFloat(temp_item));
                    }else if(isNaN(parseFloat(items_array[index+1]))===false){
                        temp_item=Math.sqrt(items_array[index+1]);
                        items_array.splice(index,2,parseFloat(temp_item));
                    }
                }
            }),
            // Procentage calculation  
            items_array.forEach(function(items_array_item,index){
                if (items_array_item==="%"){
                    switch(items_array[index-2]){
                        case "+": items_array[index-3]+items_array[index-3]*items_array[index-1]/100;
                                  items_array.splice(index-3,4,parseFloat(temp_item));
                                  break;
                        case "-": temp_item=items_array[index-3]-items_array[index-3]*items_array[index-1]/100;
                                  items_array.splice(index-3,4,parseFloat(temp_item));
                                  break;
                        case "×": temp_item=items_array[index-3]*items_array[index-3]*items_array[index-1]/100;
                                  items_array.splice(index-3,4,parseFloat(temp_item));
                                  break;
                        case "÷": temp_item=items_array[index-3]/items_array[index-3]*items_array[index-1]/100;
                                  items_array.splice(index-3,4,parseFloat(temp_item));
                                  break;
                    }
                } 
            }),
            // Multiply
            items_array.forEach(function(items_array_item,index){
                if (items_array_item==="×"){
                    temp_item=items_array[index-1]*items_array[index+1];
                    items_array.splice(index-1,3,parseFloat(temp_item));
                }
            }),
            // Divide
            items_array.forEach(function(items_array_item,index){
                if (items_array_item==="÷"){
                    temp_item=items_array[index-1]/items_array[index+1];
                    items_array.splice(index-1,3,parseFloat(temp_item));
                }
            }),
            // Summ
            items_array.forEach(function(items_array_item,index){
                if (items_array_item==="+"){
                    temp_item=items_array[index-1]+items_array[index+1];
                    items_array.splice(index-1,3,parseFloat(temp_item));
                }
            }),
            // Subtraction
            items_array.forEach(function(items_array_item,index){
                if (items_array_item==="-"){
                    temp_item=items_array[index-1]-items_array[index+1];
                    items_array.splice(index-1,3,parseFloat(temp_item));
                }
            }),
            // Result output
            items_array.length===1 && isNaN(items_array[0])===false ? 
                document.querySelector(".screen").textContent +="="+items_array[0]: 
                document.querySelector(".screen").textContent += "=error"            
        ):document.querySelector('.screen').textContent += btn_item.className;         
               
    })
})