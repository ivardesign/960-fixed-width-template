# Small Screen Presentation

## Changes

  - More simplification of HTML by removing unnecessary 'wrapper' 
    div's and classes
  - Changes to placeholder image dimensions 
  - Added Mobile 'hamburger' menu which includes basic, larger-
    screen version
  - Break-point (included with hamburger styles) at 768px

  - Margins/paddings added/adjusted for texts in:
      - #hgroup    - h1, h2
      - #services  - figcaption, h2, p, footer.more
      - #intro     - figcaption, h2, p, footer.more
      - #footer    - section, h2, nav, ul
      - #copyright - p

With my continuing examination of the HTML I decided to remove 
some of the prior 'div' elements used to wrap components of the 
page, and more classes that appear to be unnecessary.

I also wanted the smaller images to be at least 320px wide and 
all the images to be proportioned closer to a 'golden rectangle'
proportion.

I've added a CSS-only, hamburger-style menu which expands at a 
768px wide screen to an inline list of links. This addition to 
the stylesheet introduces my first breakpoint for media queries.

The stylesheet already violates my rule for keeping media queries
at the top of the stylesheet, although this may not be a real 
'violation' because at this point, the styles are quite minimal. 

Nevertheless, I will look at refactoring this before moving on 
by studying whether it can be improved with Custom Properties.
