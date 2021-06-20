import cmapFcn from './src/colormapfcn'

const howmany = 100

const init = () => {
  //cmapFcn.init(rstart, gstart, bstart, rincrement, gincrement, bincrement)
  cmapFcn.randStartLocs()
  cmapFcn.randIncrements()
  const parameters = cmapFcn.getParameters()

  document.getElementById(
    'fcn'
  ).innerHTML = `rgb((${parameters.rstart}+${parameters.rincrement}*index)%256,
                     (${parameters.gstart}+${parameters.gincrement}*index)%256,
                     (${parameters.bstart}+${parameters.bincrement}*index)%256)`

  const colorsHandle = document.getElementById('colors')
  colorsHandle.innerHTML = ''
  for (let i = 0; i < howmany; i++) {
    const newDiv = document.createElement('DIV')
    const newColor = cmapFcn.getValue(i)
    newDiv.innerHTML = newColor.r + ',' + newColor.g + ',' + newColor.b

    newDiv.style.display = 'inline-block'
    newDiv.style.height = '5rem'
    newDiv.style.width = '5rem'
    newDiv.style.backgroundColor = `rgb(${newColor.r},${newColor.g},${newColor.b})`
    colorsHandle.appendChild(newDiv)
  }
}

init()
const rand = () => {
  return Math.floor(Math.random() * 256)
}

document.getElementById('randbutton').onclick = () => {
  init()
}
