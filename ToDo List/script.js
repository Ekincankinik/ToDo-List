const container = document.getElementById('container')
const input = document.getElementById('input')
const button = document.getElementById('button')
const list = document.getElementById('list')

function create() {
  const li = document.createElement('li')
  li.classList.add("d-flex", "justify-content-between", "align-items-center", "border", "border-black", "rounded-2", "p-1", "bg-secondary")

  const p = document.createElement('p')
  p.textContent = input.value

  if(p.textContent== ""){

    alert('You did not write anything!')
  }

else{

  p.classList.add("mt-2", "ms-2", "text-white")
  li.appendChild(p)

  const icons = document.createElement('div')
  icons.classList.add("d-flex", "gap-3")

  const check = document.createElement('i')
  check.classList.add("fa-solid", "fa-check", "fa-lg", "text-white")

  const trash = document.createElement('i')
  trash.classList.add("fa-solid", "fa-trash", "fa-lg", "text-white")

  icons.appendChild(check)
  icons.appendChild(trash)
  li.appendChild(icons)

  check.addEventListener('click', function() {
    p.classList.toggle('myStyle')
    
  })

  trash.addEventListener('click', function() {
    li.remove()
  })

  list.appendChild(li)
  input.value = ''}
}


input.addEventListener('keydown', (event) =>{

if(event.key==='Enter'){ create()}


})
button.addEventListener('click', create)


