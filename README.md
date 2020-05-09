# 960-fixed-width-template Remodel for Responsiveness
## Step One: Getting a Small Screen Presentation Started

  In this branch, the HTML will be "cleaned" and the stylesheet
  will be removed. Viewport Meta will be added to the head of
  the document.

  Working with small screen presentation only, use the least
  possible CSS to get the bare HTML & content usable. No 
  Hamburger menu at this point, no colors or font assignments
  of any kind, just the exposed links, content and making sure
  the content is presented in the right way. This is the 
  critical CSS that goes directly in the Head of the HTML
  document.  Let the browser do as much work  as possible
  without overriding it to get better accessibility + keep
  your CSS work lighter.

  Note the font proportions. Are they too big or small?
  Accessibility standards dictate a font size shouldn't range
  higher than 150% between H2 to H1, P to the next heading
  on the page, etc.

  Notice the 'Hero' image left over from the original
  incarnation of this page; it fits the window now, but it's 
  very small and not very well proportioned on a small screen.
  Think about how this should be different to be more useable
  and appealing. Also note how the default browser margin and
  padding settings keep the Hero boxed-in looking.

## Step Two: Atomization, Design & Development
  ### Atomization

  At this stage we've examined our HTML architecture some and
  can break it down into components, perhaps something like:
    
    A. Header
        I. Title-group (logo, title, tagline) 
       II. Main Navigation
    B. Main Content
        I. Hero
       II. Feature
      III. Article
    C. Footer
        I. Sitemap
       II. Links
      III. Contact  
     
  Think about things like:
    - How components like a header, main content and footer 
      contain smaller components and how each may affect and/or
      connect to others at various screen sizes. 
    - How modular do these components need to be? 
    - How many components are needed to make up a button?    
    - Can I turn my navigation into a mobile-friendly navigation
      using the HTML that exists or can I edit my HTML more?
    - What approach am I going to use for my varying screen sizes;
      will I use Flexbox? Grid? Both? How and where?
    - Can I target each component with my CSS without assigning
      ID's and Classes? 
    - Where are classes/ID's needed and should my component have
      isolated classes or can I rely on more global styles?
    - How will my component and its styles fit with/in the larger 
      picture?

  It may be helpful when starting to put a border on each of the
  components to help visualize their box-model and interaction.

  ### Design, Color Palette/Style Guide:

  Color choices are a common task (not required for this exercise
  but not prohibited).  When choosing a color palette be sure to
  work toward good accessibility (eg.: contrast ratios), your site
  purpose and mood, your target audience and the voice of the 
  content.

  Consistentcy in the style of links, buttons and form elements,
  font choices, headings and font proportions are important for 
  producing and conveying a well planned, professional looking
  site.  Even with a single page, some thought and planning ahead
  of time makes a big difference.

  It has been argued that it's best for accessibility to not set
  a default font-size but instead to focus on font proportions,
  leaving the font-size up to the users preference and/or browser
  settings.  If setting a font-size, instead of setting something
  like 'font-size: 20px' use something like 'font-size: 120%' or
  use 'rem' or 'em'.  Setting font-sizes on specific things, like
  h1, h2, .content, etc., instead of on html or body to make sure
  difference in font-size falls within good accessible ranges, not
  to little, not too much difference.

  ### Development

  Always remember that development and design are not exclusive or
  independant of each other; they are deeply connected and everyone
  should always be aware and considerate of art direction.  From
  the janitor to the receptionist, from the cold-calling sales
  people and marketing to the jr. designer to the CEO, everyone
  represents the company/business. 
  
  Your business card, your front door, your personal attire, all 
  convey a message to your target audience about you and your 
  product. With this awareness we can take the real responsibilty 
  we all have to work with each other to put the best product out 
  we're capable of. 
  
  It's not just about the code but obviously the code is a critical 
  ingredient of the cake. Keep your code neat and style consistent. 
  Add comments to your code. Commit frequently with meaningful 
  commit messages. Use meaningful class names so future-you and/or 
  the developer after you can easily figure out what your system is 
  and get to work quickly and with ease.

  Whatever your approach is to developing this site, try to focus
  on the main topics of Responsive, Flexbox and Grid. For this 
  exercise, your product should be useable and relatively pleasing 
  on screen sizes in a range from 320px wide + 480px tall, and 
  everything in between up to at least 1920px wide.

  Start with mobile first and test in your browser.  When you're
  satisfied there move on to larger sized display and adjust where
  you need.

  **It's at this point where Custom Property and Media
  Query usage can become useful.**

  Not all responsive sites need Custom Properties or even Media
  Queries. You can write whole responsive sites just using Flexbox. 
  But there's a good chance these tools will come in handy for this 
  project.

  Although you could have started using them already by this point,
  you'll certainly want to start using them now. 

  **Keep your Custom Property definitions and Media Queries at the top of your CSS.** 

  Custom Properties and Media Queries don't need to be the **very first**
  thing, but very nearly. Keep them all near the top to better 
  organize the page and make the sheet more understandable in the 
  end. Coding this way is akin to practices used in other programming
  languages (like Java) where we define variables at the top of the
  page. After getting the hang of how this works, more benefits 
  will become clear.


  Use Custom Properties to define the chosen color palette and font
  proportions for the entire site ahead of time.

  You can tell you need a Custom Property (CP) when you feel you 
  need to use a media query to adjust something. An example could
  be your navigation that needs to be a Hamburger on small screens,
  but a regular inline block of links on larger screens.

  In your media query, define your CP:

      @media screen and (min-width: 750px) {
        --hamburger-display: none;
      } 

  Then go back to the definition you are adjusting and swap out the
  setting if you had one (if you didn't, add one now) using the 
  variable (CP):

      .hamburger {
        display: var(--hamburger-display, block);
      }

  Note the use of the default after the varible name and comma. Use
  a default in this case because the CP wasn't defined until the
  media query.





