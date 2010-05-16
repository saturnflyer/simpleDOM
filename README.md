# simpleDOM

simpleDOM is a utility script I wrote in 2006 when my feet were still 
wet with writing javascript and things like PrototypeJS, MooTools, and 
jQuery were new.

## DOM.create

* Document fragment: `DOM.create()`
* Array of document fragments: `DOM.create(3)` (resulting array contains 3 fragments)
* Text node: `DOM.create('hello')` (returns a text node with 'hello')
* Operate on an array: `DOM.create(['hello', 'goodbye'])` (returns 2 text nodes with the given text)
* Error with dates or regexp: `DOM.create(/wtf/i)` (throw an error)
* JSON for a new node: `DOM.create({tag: 'span', text: 'my message', style: {color: 'red'}})` (returns a 'span' node with the text 'my message' and the color 'red')
* A node list: `DOM.create(myNodeList)` (returns a cloned node list)

## Utility methods

These methods are used internally to make the `create` method function,
but you can use them too. They return boolean values based on the provided
argument.

*	isNodeList
*	isJSON
*	isDate
*	isNumber
*	isRegExp
*	isString
*	isArray

## License

Copyright (c) 2006 Jim Gay, http://www.saturnflyer.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
