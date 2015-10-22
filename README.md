# jQuery Desktop Mode
Use jQuery to create a cookie that modifies the viewport so that you can disable responsive design on devices. 

Very simple to use. Include jQuery in the head of your page, then call desktopMode.js before header in order to avoid the page loading with initial viewport settings and then changing them.

Use the following two links (assuming you also have a .hidden class set to display: none) wherever you want the toggle: 

```
<a href="#" id="view-full">Desktop Mode</a>
<a href="#" id="view-regular" class="hidden">Regular Mode</a>
```

Should be good to go. 
