# 960-fixed-width-template
## Step One: Getting a Small Screen Presentation Started

    Let's create the new site with semantic HTML5.  We can use
    the old structure and start by cleaning it up (one approach,
    but you could just start from scratch with new), simplifying
    wherever possible, while keeping in mind some parts may be
    as helpful as they were in this old version (don't rip out
    important support beams unless you plan to replace them).
    On the other hand, some of it may need to be rebuilt
    completely.

    1) Remove all the old CSS entirely.
    2) Add the Viewport Meta to the head of the document and 
       view the naked HTML in a browser. What happens to the 
       layout and content?
    3) How can this lay out on a phone? Med. screen? For 960px
       we already have our target layout and skeleton design
       but some screens are much larger.
       Consider what HTML architecture will be needed to 
       acheive the presentation(s). It's probably a good idea
       to at least take a pencil and paper and draw out the 
       skeleton.  Keep these drawings very simple but clear.
    4) Clean up/simplify HTML if needed. Consider semantics and
       accessibility, replace/add where needed.
    5) Working with small screen presentation only, use the least
       possible CSS to get the bare HTML & content usable.
       No Hamburger menu at this point, no colors or font
       assignments of any kind, just the exposed links, content
       and making sure the content is presented in the right way.
       This is the critical CSS that goes directly in the Head
       of the HTML document (not in a stylesheet).  Let the
       browser do as much work for you as you can without over-
       riding it to get better accessibility + keep your CSS
       work lighter.
