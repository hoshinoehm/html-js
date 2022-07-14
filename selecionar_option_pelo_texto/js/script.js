function atualizarSelect(){
  
    let select = document.querySelector('#alunos');
    let optionValue = select.options[select.selectedIndex];
    
    let value = optionValue.value;
    let text = optionValue.text;
    
    console.log(value)
   
  }
  
  atualizarSelect()