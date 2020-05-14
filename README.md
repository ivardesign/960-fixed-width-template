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

I've added a hamburger-style menu which expands at a 768px wide
screen to an inline list of links. This addition to the 
stylesheet introduces my first breakpoint for media queries.

Custom Properties and Media Queries are at the top of the style-
sheet just below some resets.  Then follow some adjustments to
margins and paddings to keep texts from rubbing edges. Mainly,
the definitions are ordered in the same order as the DOM 
elements flow, top to bottom, beginning with 'header'.

