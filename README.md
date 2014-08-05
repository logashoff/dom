### Code: ###

```javascript
var el = dom([
    dom.create("div", {
			  attr: {"class":"container"},
				content: dom.create("span", {
						id: "label",
						content: "Nested Content"
					})
			}),

		dom.create("div", {
				styles: {
					fontWeight: "bold",
					fontSize: "2em"
				},
				content:"Second Element"
			}),

		dom.create("ul", {
				id: "list",
				className: "my-list",
				content: dom([
						dom.create("li", {content: "Item 1"}), 
						dom.create("li", {content: "Item 2", attr:{"class":"selected"}}), 
						dom.create("li", {content: "Item 3"})
					])
			})
	]);

document.body.appendChild(el);
```

### Result: ###
```html
<div class="container">
	<span id="label">Nested Content</span>
</div>
<div style="font-weight: bold; font-size: 2em;">Second Element</div>
<ul class="my-list" id="list">
	<li>Item 1</li>
	<li class="selected">Item 2</li>
	<li>Item 3</li>
</ul>
```
