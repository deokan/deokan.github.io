Underscore.js - bindAll()에 대하여
===

먼저 공식 API 문서의 내용은 아래와 같다.

~~~
bindAll_.bindAll(object, *methodNames) 
Binds a number of methods on the object, specified by methodNames, to be run in the context of that object whenever they are invoked. 
Very handy for binding functions that are going to be used as event handlers, which would otherwise be invoked with a fairly useless this. 
methodNames are required.
~~~
```js
var buttonView = {
  label  : 'underscore',
  onClick: function(){ alert('clicked: ' + this.label); },
  onHover: function(){ console.log('hovering: ' + this.label); }
};
_.bindAll(buttonView, 'onClick', 'onHover');
// When the button is clicked, this.label will have the correct value.
jQuery('#underscore_button').on('click', buttonView.onClick);
```
