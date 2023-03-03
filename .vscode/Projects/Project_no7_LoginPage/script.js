const btn = (btn)=>{
    return btn = document.querySelector('.LoginBut')
}

btn.onClick = ()=>{
    document.getElementById('username').innerHTML = '';
    document.getElementById('gmail').innerHTML = '';
    document.getElementById('password').innerHTML = '';
}
