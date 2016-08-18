# (DEPRECATED)

#### Code: ####

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
						dom.create("li", {content: "Item 1", className:"first"}), 
						dom.create("li", {content: "Item 2", attr:{"class":"selected"}}), 
						dom.create("li", {content: "Item 3", id:"unique"})
					])
			})
	]);

document.body.appendChild(el);
```

#### Result: ####
```html
<div class="container">
	<span id="label">Nested Content</span>
</div>
<div style="font-weight: bold; font-size: 2em;">Second Element</div>
<ul class="my-list" id="list">
	<li class="first">Item 1</li>
	<li class="selected">Item 2</li>
	<li id="unique">Item 3</li>
</ul>
```
