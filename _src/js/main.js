/*! main.js */

function $(selector, context) {
  return (context || document).querySelector(selector)
}
 
$.all = function (selector, context) {
  return Array.prototype.slice.call(
    (context || document).querySelectorAll(selector)
  )
}

let main = {
  $cell: true,
  $components: [{
    $type: 'div',
    id: 'colores',
    $components: [{
      $type: 'span', class: 'color rojo', onclick: function (e) {$("#colores")._colorAction(this, 'activo', 'rojo')}},{
      $type: 'span', class: 'color azul', onclick: function (e) {$("#colores")._colorAction(this, 'activo', 'azul')}},{
      $type: 'span', class: 'color verde', onclick: function (e) {$("#colores")._colorAction(this, 'activo', 'verde')}},{
      $type: 'span', class: 'color amarillo', onclick: function (e) {$("#colores")._colorAction(this, 'activo', 'amarillo')}},{
      $type: 'span', class: 'color blanco', onclick: function (e) {$("#colores")._colorAction(this, 'activo', 'blanco')}},{
      $type: 'span', class: 'color negro', onclick: function (e) {$("#colores")._colorAction(this, 'activo', 'negro')}
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
      $('#banderas')._update()
    }
  }, {
    $type: 'div',
    id: 'banderas',
    $init: function() {
      this.$components = flagsData.map(this._template)
    },
    _update: function () {
      $('#banderas .color').style.display = 'none'
      if ($('#colores')._colores.length > 0) {
        let colores = $('#colores')._colores
        for (var i = 0; i < colores.length; i++) {
          $('#banderas .color ' + colores[i]).style.display = 'inline-block'
          
        }
      } else {
        $('#banderas .color').style.display = 'inline-block'
      }
    },
    _template: function (item) {
      return {
        $type: 'img',
        class: 'color ' + item.colores,
        src: 'img/banderas/' + item.nombre + '.png'
      }
    }
  }],  
}
