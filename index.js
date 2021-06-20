import cmapFcn from './src/colormapfcn'

const howmany = 100
let showRGBcode = false

const init = (recalculate) => {
  //cmapFcn.init(rstart, gstart, bstart, rincrement, gincrement, bincrement)
  if (recalculate) {
    cmapFcn.randStartLocs()
    cmapFcn.randIncrements()
  }
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
    if (showRGBcode) {
      newDiv.innerHTML = newColor.r + ',' + newColor.g + ',' + newColor.b
    }

    // newDiv.style.display = 'inline-block'
    newDiv.style.height = '6rem'
    newDiv.style.width = '6rem'
    newDiv.style.backgroundColor = `rgb(${newColor.r},${newColor.g},${newColor.b})`
    colorsHandle.appendChild(newDiv)
  }
}

init(true)

document.getElementById('randbutton').onclick = () => {
  init(true)
}

document.getElementById('showrgbutton').onclick = () => {
  showRGBcode = !showRGBcode
  init(false)
}
