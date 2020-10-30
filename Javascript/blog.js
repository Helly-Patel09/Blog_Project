function addblog(){
    
    var title = document.getElementById('title').value;
    var desc = document.getElementById('description').value;
    var titletext = document.createTextNode(title);
    var desctext = document.createTextNode(desc);
    var li = document.createElement('li');
    var h5 = document.createElement('h5');
    var hr = document.createElement('hr');
    h5.classList.add('card-title')
    h5.classList.add('title')
    var p = document.createElement('p');
    p.classList.add('card-text');
    p.classList.add('desc')
    h5.appendChild(titletext);
    p.appendChild(desctext);
    li.appendChild(hr);
    li.appendChild(h5);
    li.appendChild(p);
    if(title=='' || desc=='')
        alert("You must write Something..!!");
    else{
        document.getElementById("myList").appendChild(li);
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    }

}