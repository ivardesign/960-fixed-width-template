# 960-fixed-width-template
An example fixed-width, HTML5 template utilizing Float and clearfix hack

[ Prerequisites: https://htmldog.com/guides/css/ beginner, intermediate 
  and advanced ]

    This template is circa 2008, fixed-width (960px) in HTML5.
    The page is designed for a screen that can display at least
    960 pixels across and does not adjust to smaller or larger
    resolutions in any way. If you're on a smaller screen, you
    would have to scroll horizonally as well as up and down and
    you may have to do a lot of pinching and zooming to read or
    see anything if you were on a smartphone.

    The developer utilizes the "float hack" as well as the 
    "clearfix hack" to accomplish its layout. This method came
    quickly after float became available and as a way to avoid
    using HTML table for layout.
    
    Float-hack: float was intended to float images to the
    left or right. We started using it on things other than
    images because of the limitations of CSS/browsers.

    Clearfix Hack: when something is 'float-ed', it is
    removed from the flow and the containing block can collapse
    allowing the item to peek out of it's container, often
    an visually unappealing result.  

    Clearfix Example:  .clearfix:after { 
                         display: block;
                         clear: both;
                       }
    
    The clearfix hack has/had a few variations but always had
    'clear: both' on something after the floated element and
    the content intended to wrap around the floated element.

    The purpose of this template demo is to show some of what
    it was like in the past as well as to provide a starting-
    point for replicating this layout but with current 
    techniques to acheive a responsive display that provides 
    a better user experience on screen sizes ranging from small
    to large. This can be done without using float hacks of 
    any kind but they may still be used if needed 
    [why not? it's a tool.].
