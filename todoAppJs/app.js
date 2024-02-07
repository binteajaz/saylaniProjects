var getul = document.getElementById('ul');

function foo() {
    var a = document.getElementById('inp');
    var li = document.createElement('li');
    var litext = document.createTextNode(a.value);
    li.appendChild(litext);
    getul.appendChild(li);
    a.value = '';
    var delBtn = document.createElement('button');
    li.appendChild(delBtn);
    li.setAttribute('class','list');
    var deleteBtnText = document.createTextNode('delete');
    delBtn.appendChild(deleteBtnText);
    delBtn.setAttribute('onclick','del(this)');
    delBtn.setAttribute('class','btn btn-dark');
    delBtn.setAttribute('id','del');
    var updateBtn = document.createElement('button');
    li.appendChild(updateBtn);
    var updateBtnText = document.createTextNode('update');
    updateBtn.appendChild(updateBtnText);
    updateBtn.setAttribute('onclick','update(this)');
    updateBtn.setAttribute('class','btn btn-light');
    updateBtn.setAttribute('id','upd');
}

function deleteall(){
    getul.innerHTML = '';
}

function del(a) {
    a.parentNode.remove()
}

function update(e){
    var b = prompt("Enter a updated value here" , e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = b;
}