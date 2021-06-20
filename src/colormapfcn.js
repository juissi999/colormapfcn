export default {
  set: function (rstart, gstart, bstart, rincrement, gincrement, bincrement) {
    this.rstart = rstart
    this.gstart = gstart
    this.bstart = bstart
    this.rincrement = rincrement
    this.gincrement = gincrement
    this.bincrement = bincrement
  },
  getValue: function (index) {
    return {
      r: (this.rstart + this.rincrement * index) % 256,
      g: (this.gstart + this.gincrement * index) % 256,
      b: (this.bstart + this.bincrement * index) % 256
    }
  },
  randStartLocs: function () {
    this.rstart = Math.floor(Math.random() * 256)
    this.gstart = Math.floor(Math.random() * 256)
    this.bstart = Math.floor(Math.random() * 256)
  },
  randIncrements: function () {
    this.rincrement = Math.floor(Math.random() * 256)
    this.gincrement = Math.floor(Math.random() * 256)
    this.bincrement = Math.floor(Math.random() * 256)
  },
  rstart: 0,
  gstart: 0,
  bstart: 0,
  rincrement: 1,
  gincrement: 1,
  bincrement: 1
}
