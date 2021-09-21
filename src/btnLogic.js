
function loadButtons(TDLogic) {
    const addItemBtn = document.getElementById('addItemBtn')
    addItemBtn.addEventListener('click', TDLogic)

    const popupAdd = document.getElementById('popupAdd')
    popupAdd.addEventListener('click', openForm);

    const closeBtn = document.getElementById('closeBtn')
    closeBtn.addEventListener('click', closeForm);
}


function deleteTDBtn(item) {
    
}

function openForm() {
    document.getElementById("myForm").style.display = "block";

  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 


export {loadButtons, closeForm}