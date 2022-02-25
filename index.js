let pass1El = document.getElementById("password1")
let pass2El = document.getElementById("password2")
let pass3El = document.getElementById("password3")
let pass4El = document.getElementById("password4")


function gen() {
  let srt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
  'abcdefghijklmnopqrstuvwxyz0123456789@#$!@"}{?><|}{?#$%^&*()_+'
  let pass = ''
  let size = srt.length

  for (let i = 0; i <= 10; i++) {
    let char = Math.floor(Math.random() * srt.length + 1)
    pass += srt.charAt(char)
  }
  return pass
  
}


function generator() {
  pass1El.value = gen()
  pass2El.value = gen()
  pass3El.value = gen()
  pass4El.value = gen()
}