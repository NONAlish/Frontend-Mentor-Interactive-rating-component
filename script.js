const container = document.querySelector('.container');
const nums = document.querySelectorAll('.num');

container.addEventListener('mouseover', ()=>{
    container.style.opacity = '1';
});

container.addEventListener('mouseout', ()=>{
    container.style.opacity = '0.4';
});

var count = 0;

nums.forEach((target)=>{
    let clicked = false;
    target.addEventListener('click', ()=>{
        if (!clicked) {
            target.style.backgroundColor = '#FC7614';
            target.style.color = 'white';
            clicked = true;
            count++;
        } else {
            target.style.backgroundColor = '#7C8798';
            target.style.color = 'white';
            clicked = false;
            count--;
        }
    })
    target.addEventListener('mouseover', () => {
        if (!clicked) {
            target.style.backgroundColor = '#7C8798';
            target.style.color = 'white';
        }
    });
    target.addEventListener('mouseout', () => {
        if (!clicked) {
            target.style.backgroundColor = '#262E38';
            target.style.color = '#7C8798';
        }
    });
})





const submit = document.querySelector('.submit');
const btn = document.querySelector('.btn'); 
const p = document.querySelector('.p')

btn.addEventListener('click', ()=>{
    p.textContent = `You selected ${count} out of 5`;
    submit.style.display = 'grid';
    container.style.display = 'none'
})

