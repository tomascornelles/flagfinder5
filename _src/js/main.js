/*! main.js */
let colores = {
  $cell: true,
  id: 'colores',
  $type: 'div',
  $components: [{
    $type: 'span', class: 'color rojo', onclick: function (e) {document.querySelector("#colores")._colorAction(this, 'activo', 'rojo')}},{
    $type: 'span', class: 'color azul', onclick: function (e) {document.querySelector("#colores")._colorAction(this, 'activo', 'azul')}},{
    $type: 'span', class: 'color verde', onclick: function (e) {document.querySelector("#colores")._colorAction(this, 'activo', 'verde')}},{
    $type: 'span', class: 'color amarillo', onclick: function (e) {document.querySelector("#colores")._colorAction(this, 'activo', 'amarillo')}},{
    $type: 'span', class: 'color blanco', onclick: function (e) {document.querySelector("#colores")._colorAction(this, 'activo', 'blanco')}},{
    $type: 'span', class: 'color negro', onclick: function (e) {document.querySelector("#colores")._colorAction(this, 'activo', 'negro')}
  }],
  _colores: [],
  _colorAction: function(el,className, valor) {
    var classes = el.className.split(' ')
    var existingIndex = classes.indexOf(className)
    var existingValor = this._colores.indexOf(valor)

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1)
    else
      classes.push(className)

    if (existingValor >= 0)
      this._colores.splice(existingValor, 1)
    else
      this._colores.push(valor)

    el.className = classes.join(' ')

    console.log(this._colores)
  }
}

let banderas = {
  $cell: false,
  $type: 'div'
}