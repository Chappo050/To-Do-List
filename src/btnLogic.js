
function createNewTDBtn(TDLogic) {
    const addTDBtn = document.getElementById('addTDBtn')
    addTDBtn.addEventListener('click', TDLogic)
    const popupAdd = document.getElementById('popupAdd')
    popupAdd.addEventListener('click', openForm);
}

function deleteTDBtn(item) {
    
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  } 


export {createNewTDBtn}