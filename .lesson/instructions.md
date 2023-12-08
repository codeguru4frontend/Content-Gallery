# Project: Content Gallery

Sites like Pinterest, YouTube, and SoundCloud are all about browsing content, and then 'zooming in' on a particular piece of content.

In this project, you'll build a content gallery - like Pinterest, without the ability to pin new items.

The core feature of a content gallery is that as you browse, you can 'focus' on one of the elements by clicking it. Focusing an element brings it front and center, makes it big, and distinguishes it from the rest of the gallery.

## Instructions

The basic design of the content gallery is a grid or list of items. When you click on one of the items, it becomes 'focused'. The focused item moves to the top of the screen, becomes bigger, more information is shown about it, and overall, the styles make it more 'important' than the other content.

You've probably seen lots of pages that are like this, but [Unsplash](https://unsplash.com/s/photos/puppy) is a nice example in case you want a refresher.

Building a complicated feature like this requires you to connect your HTML, CSS, and JavaScript skills. It's also much easier if you take the pieces step by step.

### Choose Content

Choose content for your gallery.

You can use images, videos, or audio files. Images are probably the easiest choice. Audio files may be the hardest, since you'll have to find and download them, and then figure out how to display them visually. Videos are a middle ground. They are fairly easy to find, but dealing with iframe embeds will likely be slightly more challenging than images.

Whichever content you choose, be sure to find at least 6 items. That way, you'll have enough for a meaningful gallery.

For images or audio, download the files and then upload them to the project replit. For video, copy the iframe embed snippets that you'll need.

### Add the content as HTML elements

Add the content you picked above as plain HTML elements in `index.html`.

For each of the items, add text content labeling the items, like titles, tags, and descriptions. You will probably find it helpful to group the item with the text in an enclosing `<div>`.
 
Also add a site title, a page description, and any other text content you want to include on the page.

At this point, the site won't look very good, and the interactions won't work, but it will have content!

### Style the selected element

Now you'll start working in `style.css` in addition to `index.html`.

Add the class `selected` to one of the elements, and use the CSS selector `.selected` to start your styling. Later on, you'll add and remove this class with JavaScript.

Change the size and position of the element and whatever content is associated with it. The selected item should end up with a different layout, positioning, and other styles from the other items.

Be sure that the element with the selected class gets styled correctly no matter where it is in the HTML. Try manually changing which item has the class 'selected' and confirming that the styles still work, no matter where the element is in your HTML.

### Style the gallery

Lay out the rest of the items as cards or list items.

Usually, gallery items go below the selected item. They are often smaller, and arranged in a grid or list.

Use the skills you learned about the box model and layout - add margins and padding, and maybe a border. Cards often look nice with a `border-radius` set.

Style the text content so that they look like titles, tags, etc. You might look back at past projects where you've styled cards for ideas on some ways to do this. You may also hide some text content when an item is in the gallery, and only show it when the item is selected.

Add a different background color for the gallery items and the background for the rest of the page, to help distinguish the items from the rest of the page.

At this point, the page should look good, but it will be missing the interactivity.

### Handle selecting with JavaScript

The goal of your JS code is to add and remove the `selected` class from different gallery items when clicked, so that a different item is styled as the 'selected' item.

First, add JavaScript to listen for a click on an item. When the item is clicked, run `console.log("clicked")` so that you can tell that the item was clicked. Test this code.

Update the code in your event handler to change which item is selected. It should remove the `selected` class from the currently selected element, and add the `selected` class to the element that was clicked.

Once you have one gallery item selecting on click, you can add the same event listener to the rest of your items.

Test that clicking on an item makes it the selected element, and unselects whichever element was selected before.

**Hints**:
- You can find the currently selected element with `document.querySelector('.focused')`
- You can use `element.classList.remove('selected')` and `element.classList.add('selected')` to add and remove the class
- You can add an listener for click events to an element with `element.addEventListener('click', () => { console.log('clicked')})`

JavaScript is new and tricky! Feel free to ask for help with this part of the project.

## Examples

* Here's a simple example of an image gallery from MDN: https://mdn.github.io/learning-area/javascript/building-blocks/gallery/, and [instructions on how to build it](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Image_gallery)
* As linked above, here's [Unsplash's search result page](https://unsplash.com/s/photos/puppy)

## Bonus

There's tons of further ideas you could add to your gallery if you have more time and want to make the project even cooler.

* Add more content. Galleries are more fun when there is more stuff to browse.
* Style the cursor, hover state, and the gallery cards or list items to make the gallery more appealing.
* Add a 'load more' button that shows more content. One way to do this is to have that content hidden at the start, then have the button remove a class that was hiding the content.
* Style the focused item as a modal. See  https://codeshack.io/pure-css3-modal-example/ for a suggestion on how you could style this.
* If you have videos or audio, play them when the item is focused, and stop playing when it gets unfocused.

There's tons more features that you could try to add, if you want. Be creative!