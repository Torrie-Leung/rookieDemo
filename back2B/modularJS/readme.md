some ground rules:
-self-contained module
  -everything to do with my module is in my module
  -no global variables
  -if a module manages more than one thing, it should be split up
-separation of concers
-DRY code
-efficient DOM usagr
  -very few $(selection)
-no memory leaks
  -all events can be unbound