function openModal(md) {
    let modal=document.getElementById(md)
    if(typeof modal=='undefined'||modal==null){
        return
    }modal.style.display='block'
}

function closeModal(mn) {
    let modal=document.getElementById(mn)
    if(typeof modal=='undefined'||modal==null){
        return
    }modal.style.display='none'
}