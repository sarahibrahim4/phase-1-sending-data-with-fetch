// Add your code here
function submitData(name,email){
return fetch('http://localhost:3000/users',{
  method: 'POST',
  headers: {'Content-Type': 'application/json',
Accept :'application/json'},
body: JSON.stringify({name: name,email: email})
})
.then((res)=>res.json())
.then((data)=>console.log(data))
.catch((error)=>{alert('error!')
console.log(error.message)})
}
submitData('Sarah','saraibrahim4121@gmail.com')
submitData('Sara','saraibrahim@gmail.com')