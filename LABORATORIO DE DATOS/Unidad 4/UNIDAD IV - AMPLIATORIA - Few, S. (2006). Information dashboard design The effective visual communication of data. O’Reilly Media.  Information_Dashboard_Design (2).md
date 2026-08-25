<!-- página 1 -->

www.it-ebooks.info

---

<!-- página 2 -->

Information Dashboard Design 
By Stephen Few  
...............................................  
Publisher: O'Reilly 
Pub Date: January 2006 
ISBN: 0‐596‐10016‐7 
Pages: 223 
  
 
www.it-ebooks.info

---

<!-- página 3 -->

Copyright 
Copyright © 2006 Stephen Few All rights reserved. 
Printed in Italy. 
Published by O'Reilly Media, Inc. 1005 Gravenstein Highway North Sebastopol, CA 95472 
O'Reilly books may be purchased for educational, business, or sales promotional use. Online editions are 
also available for most titles (safari.oreilly.com). For more information, contact our corporate/institutional 
sales department: 800‐998‐9938 or corporate@oreilly.com. 
Editor 
Colleen Wheeler 
Production Editor 
Genevieve d'Entremont 
Art Director 
Mike Kohnke 
Cover Designer 
Stephen Few 
Interior Designers 
Mike Kohnke, Terri Driscoll 
Production Services 
Specialized Composition, Inc. 
Print History 
  
January 2006: 
First Edition. 
 
The O'Reilly logo is a registered trademark of O'Reilly Media, Inc. Information Dashboard Design and 
related trade dress are trademarks of O'Reilly Media, Inc. 
Many of the designations used by manufacturers and sellers to distinguish their products are claimed as 
trademarks. Where those designations appear in this book, and O'Reilly Media, Inc. was aware of a 
trademark claim, the designations have been printed in caps or initial caps. 
While every precaution has been taken in the preparation of this book, the publisher and author assume no 
responsibility for errors or omissions, or for damages resulting from the use of the information contained 
herein. 
0‐596‐10016‐7 
  
 
www.it-ebooks.info

---

<!-- página 4 -->

To my parents, Bob and Joyce Few, whose pride in my journeyhowever strange that journey must have 
sometimes seemedinstilled deep down into my bones the resolve to keep placing one foot in front of the 
other. 
 
 
www.it-ebooks.info

---

<!-- página 5 -->

About the Author 
Stephen Few has over 20 years of experience as an IT innovator, consultant, and educator. Today, as 
Principal of the consultancy Perceptual Edge, Stephen focuses on data visualization for analyzing and 
communicating quantitative business information. He is working to raise consciousness and to provide a 
treatment plan that addresses the needs of business in the language of business. His previous book, Show 
Me the Numbers: Designing Tables and Graphs to Enlighten, is a powerful fitness program designed to 
target the data presentation aspects of this problem. 
Today, from his office in Berkeley, California, Stephen provides consulting and training services, speaks 
frequently at conferences, and teaches in the MBA program at the University of California in Berkeley. 
More about his current work can be found at www.perceptualedge.com. 
 
 
www.it-ebooks.info

---

<!-- página 6 -->

Introduction 
Few phenomena characterize our time more uniquely and powerfully than the rapid rise and influence of 
information technologies. These technologies have unleashed a tsunami of data that rolls over and flattens 
us in its wake. Taming this beast has become a primary goal of the information industry. One tool that has 
emerged from this effort in recent years is the information dashboard. This single‐screen display of the 
most important information people need to do a job, presented in a way that allows them to monitor 
what's going on in an instant, is a powerful new medium of communication. At least it can be, but only 
when properly designed. 
Most information dashboards that are used in business today fall far short of their potential. The root of 
the problem is not technologyat least not primarilybut poor visual design. To serve their purpose and fulfill 
their potential, dashboards must display a dense array of information in a small amount of space in a 
manner that communicates clearly and immediately. This requires design that taps into and leverages the 
power of visual perception to sense and process large chunks of information rapidly. This can be achieved 
only when the visual design of dashboards is central to the development process and is informed by a solid 
understanding of visual perceptionwhat works, what doesn't, and why. 
No technology can do this for you. You must bring this expertise to the process. Take heartthe visual design 
skills that you need to develop effective dashboards can be learned, and helping you learn them is the sole 
purpose of this book. 
If the information is important, it deserves to be communicated well. 
 
 
www.it-ebooks.info

---

<!-- página 7 -->

Acknowledgments 
Without a doubt I owe the greatest debt of gratitude to the many software vendors who have done so 
much to make this book necessary by failing to address or even contemplate the visual design needs of 
dashboards. Their kind disregard for visual design has given me focus, ignited my passion, and guaranteed 
my livelihood for years to come. 
Now, on to those who have contributed more directly and personally to this effort. As a man, I will never be 
able to create, shelter, and nourish an emerging life within this body of mine. In recent years, however, I 
have recognized and pursued the opportunity to breathe life into the products of my imagination and pass 
them on to the world in the form of books. Writing a book is a bit like bearing a child. Working with a 
publisher to help the child learn to walk before venturing into the world is a lesson in trust. The folks at 
O'Reilly Media have taught me to entrust to thembeginning with unspeakable angst, but proceeding 
through unfaltering steps toward ever‐increasing comfortthe collegial care of this beloved child. Many at 
O'Reilly have contributed so much, but two in particular have stood by my side from the beginning with 
soothing voices of confidence and calm. My editor, Colleen Wheeler, knew when to listen in silence, when 
to tease me out of myopia, and when to gently remind me that I was in her considerate and considerable 
care. My acquisitions editor, Steve Weiss, sought me out and wooed me through months of thoughtful 
discussion into the O'Reilly fold. He gave assurances and has made sure that they were fulfilled. 
 
 
www.it-ebooks.info

---

<!-- página 8 -->

Sommario 
Copyright ....................................................................................................................................................... 3 
About the Author ........................................................................................................................................... 5 
Introduction ................................................................................................................................................... 6 
Acknowledgments ......................................................................................................................................... 7 
Chapter 1. Clarifying the Vision ....................................................................................................................... 11 
1.1. All That Glitters Is Not Gold .................................................................................................................. 12 
1.2. Even Dashboards Have a History .......................................................................................................... 14 
1.3. Dispelling the Confusion ....................................................................................................................... 15 
1.3.1. What Is a Dashboard?........................................................................................................................ 26 
1.4. A Timely Opportunity ........................................................................................................................... 28 
Chapter 2. Variations in Dashboard Uses and Data ........................................................................................ 29 
2.1. Categorizing Dashboards ...................................................................................................................... 30 
2.1.1. Classifying Dashboards by Role ..................................................................................................... 31 
2.2. Typical Dashboard Data ........................................................................................................................ 33 
2.2.1. The Common Thread in Dashboard Diversity................................................................................ 33 
Chapter 3. Thirteen Common Mistakes in Dashboard Design ........................................................................ 38 
3.1. Exceeding the Boundaries of a Single Screen ....................................................................................... 39 
3.1.1. Fragmenting Data into Separate Screens ...................................................................................... 40 
3.1.2. Requiring Scrolling ......................................................................................................................... 42 
3.2. Supplying Inadequate Context for the Data ......................................................................................... 43 
3.3. Displaying Excessive Detail or Precision ............................................................................................... 45 
3.4. Choosing a Deficient Measure .............................................................................................................. 46 
3.5. Choosing Inappropriate Display Media ................................................................................................ 47 
3.6. Introducing Meaningless Variety .......................................................................................................... 51 
3.7. Using Poorly Designed Display Media .................................................................................................. 52 
3.8. Encoding Quantitative Data Inaccurately ............................................................................................. 56 
3.9. Arranging the Data Poorly .................................................................................................................... 56 
3.10. Highlighting Important Data Ineffectively or Not at All ..................................................................... 57 
3.11. Cluttering the Display with Useless Decoration ................................................................................. 58 
3.12. Misusing or Overusing Color .............................................................................................................. 61 
3.13. Designing an Unattractive Visual Display ........................................................................................... 62 
Chapter 4. Tapping into the Power of Visual Perception ................................................................................ 64 
4.1. Understanding the Limits of Short‐Term Memory ............................................................................... 65 
4.2. Visually Encoding Data for Rapid Perception ....................................................................................... 67 
www.it-ebooks.info

---

<!-- página 9 -->

4.2.1. Attributes of Color ......................................................................................................................... 69 
4.2.2. Attributes of Form ......................................................................................................................... 70 
4.2.3. Attributes of Position .................................................................................................................... 71 
4.2.4. Attributes of Motion ...................................................................................................................... 71 
4.2.5. Encoding Quantitative Versus Categorical Data ............................................................................ 71 
4.2.6. Limits to Perceptual Distinctness .................................................................................................. 73 
4.2.7. Using Vivid and Subtle Colors Appropriately ................................................................................. 74 
4.3. Gestalt Principles of Visual Perception ................................................................................................. 74 
4.3.1. The Principle of Proximity ............................................................................................................. 75 
4.3.2. The Principle of Similarity .............................................................................................................. 75 
4.3.3. The Principle of Enclosure ............................................................................................................. 76 
4.3.4. The Principle of Closure ................................................................................................................. 77 
4.3.5. The Principle of Continuity ............................................................................................................ 78 
4.3.6. The Principle of Connection .......................................................................................................... 78 
4.4. Applying the Principles of Visual Perception to Dashboard Design ..................................................... 79 
Chapter 5. Eloquence Through Simplicity ....................................................................................................... 80 
5.1. Characteristics of a Well‐Designed Dashboard .................................................................................... 81 
5.1.1. Condensing Information via Summarization and Exception ......................................................... 82 
5.2. Key Goals in the Visual Design Process ................................................................................................ 83 
5.2.1. Reduce the Non‐Data Pixels .......................................................................................................... 86 
5.2.2. Enhance the Data Pixels ................................................................................................................ 94 
Chapter 6. Effective Dashboard Display Media ............................................................................................. 101 
6.1. Select the Best Display Medium ......................................................................................................... 102 
6.2. An Ideal Library of Dashboard Display Media .................................................................................... 106 
6.2.1. Graphs ......................................................................................................................................... 107 
6.2.2. Icons ............................................................................................................................................. 131 
6.2.3. Text .............................................................................................................................................. 133 
6.2.4. Images ......................................................................................................................................... 133 
6.2.5. Drawing Objects .......................................................................................................................... 134 
6.2.6. Organizers .................................................................................................................................... 135 
6.3. Summary ............................................................................................................................................. 137 
Chapter 7. Designing Dashboards for Usability ............................................................................................. 138 
7.1. Organize the Information to Support Its Meaning and Use ............................................................... 139 
7.1.1. Organize Groups According to Business Functions, Entities, and Use ........................................ 139 
7.1.2. Co‐locate Items That Belong to the Same Group ........................................................................ 139 
www.it-ebooks.info

---

<!-- página 10 -->

7.1.3. Delineate Groups Using the Least Visible Means ........................................................................ 140 
7.1.4. Support Meaningful Comparisons ............................................................................................... 141 
7.1.5. Discourage Meaningless Comparisons ........................................................................................ 142 
7.2. Maintain Consistency for Quick and Accurate Interpretation ........................................................... 143 
7.3. Make the Viewing Experience Aesthetically Pleasing ........................................................................ 143 
7.3.1. Choose Colors Appropriately ....................................................................................................... 144 
7.3.2. Choose High Resolution for Clarity .............................................................................................. 145 
7.3.3. Choose the Right Text .................................................................................................................. 145 
7.4. Design for Use as a Launch Pad .......................................................................................................... 145 
7.5. Test Your Design for Usability............................................................................................................. 146 
Chapter 8. Putting It All Together .................................................................................................................. 147 
8.1. Sample Sales Dashboard..................................................................................................................... 148 
Critique of Sales Dashboard Example 1 ................................................................................................. 151 
Critique of Sales Dashboard Example 2 ................................................................................................. 152 
Critique of Sales Dashboard Example 3 ................................................................................................. 153 
Critique of Sales Dashboard Example 4 ................................................................................................. 154 
Critique of Sales Dashboard Example 5 ................................................................................................. 155 
Critique of Sales Dashboard Example 6 ................................................................................................. 156 
Critique of Sales Dashboard Example 7 ................................................................................................. 157 
Critique of Sales Dashboard Example 8 ................................................................................................. 158 
8.2. Sample CIO Dashboard ....................................................................................................................... 159 
8.3. Sample Telesales Dashboard .............................................................................................................. 161 
8.4. Sample Marketing Analysis Dashboard .............................................................................................. 162 
8.5. A Final Word ....................................................................................................................................... 164 
Appendix A. Recommended Reading ............................................................................................................ 165 
Colophon ....................................................................................................................................................... 166 
 
 
 
 
www.it-ebooks.info

---

<!-- página 11 -->

Chapter 1. Clarifying the Vision 
Dashboards offer a unique and powerful solution to an organization's need for information, but they usually 
fall far short of their potential. Dashboards must be seen in historical context to understand and appreciate 
how and why they've come about, why they've become so popular, and whydespite many problems that 
undermine their value todaythey offer benfits worth pursuing. To date, little serious attention has been 
given to their visual design. This book strives to fill this gap. However, confusion abounds, demanding a 
clear definition of dashboards before we can explore the visual design principles and practices that must be 
applied if they are to live up to their unique promise. 
 
 
www.it-ebooks.info

---

<!-- página 12 -->

Problems with dashboards today  
Dashboards in historical context  
Current confusion about what dashboards are  
A working definition of "dashboard"  
A timely opportunity for dashboards 
Above all else, this is a book about communication. It focuses exclusively on a particular medium of 
communication called a dashboard. In the fast‐paced world of information technology (IT), terms are 
constantly changing. Just when you think you've wrapped your mind around the latest innovation, the 
technology landscape shifts beneath you and you must struggle to remain upright. This is certainly true of 
dashboards. 
Live your life on the surface of these shifting sands, and you'll never get your balance. Look a little deeper, 
however, and you'll discover more stable ground: a bedrock of objectives, principles, and practices for 
information handling that remains relatively constant. Dashboards are unique in several exciting and useful 
ways, but despite the hype surrounding them, what they are and how they work as a means of delivering 
information are closely related to some long‐familiar concepts and technologies. It's time to cut through 
the hype and learn the practical skills that can help you transform dashboards from yet another fad riding 
the waves of the technology buzz into the effective means to enlighten that they really can be. 
Today, everybody wants a dashboard. Like many newcomers to the technology scene, dashboards are sexy. 
Software vendors work hard to make their dashboards shimmy with sex appeal. They taunt, "You don't 
want to be the only company in your neighborhood without one, do you?" 
They warn, "You can no longer live without one." They whisper sweetly, "Still haven't achieved the 
expected return on investment (ROI) from your expensive data warehouse? Just stick a dashboard in front 
of it and watch the money pour in." Be still my heart. 
Those gauges, meters, and traffic lights are so damn flashy! You can imagine that you're sitting behind the 
wheel of a German‐engineered sports car, feeling the wind whip through your hair as you tear around 
curves on the autobahn at high speeds, all without leaving your desk. 
Everyone wants a dashboard today, but often for the wrong reasons. Rest assured, however, that 
somewhere beyond the hype and sizzle lives a unique and effective solution to familiar business problems 
that are rooted in a very real need for information. That's the dashboard that deserves to live on your 
screen. 
1.1. All That Glitters Is Not Gold 
Dashboards can provide a unique and powerful means to present information, but they rarely live up to 
their potential. Most dashboards fail to communicate efficiently and effectively, not because of inadequate 
technology (at least not primarily), but because of poorly designed implementations. No matter how great 
the technology, a dashboard's success as a medium of communication is a product of design, a result of a 
display that speaks clearly and immediately. Dashboards can tap into the tremendous power of visual 
perception to communicate, but only if those who implement them understand visual perception and apply 
www.it-ebooks.info

---

<!-- página 13 -->

that understanding through design principles and practices that are aligned with the way people see and 
think. Software won't do this for you. It's up to you. 
Unfortunately, most vendors that provide dashboard software have done little to encourage the effective 
use of this medium. They focus their marketing efforts on flash and dazzle that subvert the goals of clear 
communication. They fight to win our interest by maximizing sizzle, highlighting flashy display mechanisms 
that appeal to our desire to be entertained. Once implemented, however, these cute displays lose their 
spark in a matter of days and become just plain annoying. An effective dashboard is the product not of cute 
gauges, meters, and traffic lights (Figure 1‐1), but rather of informed design: more science than art, more 
simplicity than dazzle. It is, above all else, about communication. 
 
Figure 1‐1. A typical flashy dashboard. Can't you just feel the engine revving? 
This failure by software vendors to focus on what we actually need is hardly unique to dashboards. Most 
software suffers from the same shortcomingdespite all the hype about user‐friendliness, it is difficult to 
use. This sad state is so common, and has been the case for so long, we've grown accustomed to the pain. 
On those occasions when this ugly truth breeches the surface of our consciousness, we usually blame the 
problem on ourselves rather than the software, framing it in terms of "computer illiteracy." If we could only 
adapt more to the computer and how it works, there wouldn't be a problemor so we reason. In his 
insightful book entitled The Inmates Are Running the Asylum, master designer Alan Cooper writes: 
The sad thing about dancing bearware [Cooper's term for poorly designed software 
that is difficult to use] is that most people are quite satisfied with the lumbering 
beast. Only when they see some real dancing do they begin to suspect that there is a 
world beyond ursine shuffling. So few software‐based products have exhibited any 
www.it-ebooks.info

---

<!-- página 14 -->

real dancing ability that most people are honestly unaware that things could be 
bettera lot better.1 
Cooper argues that this failure is rooted in an approach to software development that simply doesn't work. 
In a genuine attempt to please their customers, software engineers focus on checking all the items, one by 
one, off of lists of requested features. This approach makes sense to technology‐oriented software 
engineers, but it results in lumbering beasts. Customers are expert in knowing what they need to 
accomplish, but not in knowing how software ought to be designed to support their needs. Allowing 
customers to design software through feature requests is the worst form of disaster by committee. 
Software vendors should bring design vision and expertise to the development process. They ought to 
know the difference between superficial glitz and what really works. But they're so exhausted from working 
ungodly hours trying to squeeze more features into the next release that they're left with no time to do the 
research needed to discover what actually works, or even to step back and observe how their products are 
really being used (and failing in the process). 
The part of information technology that focuses on reporting and analysis currently goes by the name 
business intelligence (BI). To date, BI vendors have concentrated on developing the underlying technologies 
that are used to gather data from source systems, transform data into a more usable form, store data in 
high‐performance databases, access data for use, and present data in the form of reports. Tremendous 
progress has been made in these areas, resulting in robust technologies that can handle huge repositories 
of data. However, while we have managed to warehouse a great deal of information, we have made little 
progress in using that information effectively. Relatively little effort has been dedicated to engaging human 
intelligence, which is what this industry, by definition, is supposed to be about. 
A glossary on the Gartner Group's web site defines business intelligence as "An interactive process for 
exploring and analyzing structured, domain‐specific information… to discern business trends or patterns, 
thereby deriving insights and drawing conclusions" 
(http://www.gartner.com/6_help/glossary/GlossaryB.jsp). To progress in this worthwhile venture, the BI 
industry must shift its focus now to an engaging interaction with human perception and intelligence. To do 
this, vendors must base their efforts on a firm understanding of how people perceive and think, building 
interfaces, visual displays, and methods of interaction that fit seamlessly with human ability. 
1.2. Even Dashboards Have a History 
In many respects, "dashboard" is simply a new name for the Executive Information Systems (EISs) first 
developed in the 1980s. These implementations remained exclusively in the offices of executives and never 
numbered more than a few, so it is unlikely that you've ever actually seen one. I sat through a few vendor 
demos back in the 1980s but never did see an actual system in use. The usual purpose of an EIS was to 
display a handful of key financial measures through a simple interface that "even an executive could 
understand." Though limited in scope, the goal was visionary and worthwhile, but ahead of its time. Back 
then, before data warehousing and business intelligence had evolved the necessary data‐handling 
methodologies and given shape to the necessary technologies, the vision simply wasn't practical; it couldn't 
be realized because the required information was incomplete, unreliable, and spread across too many 
disparate sources. Thus, in the same decade that the EIS arose, it also went into hibernation, preserving its 
vision in the shadows until the time was ripe… That is, until now. 
                                                           
1The Inmates Are Running the Asylum (Indianapolis, IN: SAMS Publishing, 1999), 59. 
www.it-ebooks.info

---

<!-- página 15 -->

During the 1990s, data warehousing, online analytical processing (OLAP), and eventually business 
intelligence worked as partners to tame the wild onslaught of the information age. The emphasis during 
those years was on collecting, correcting, integrating, storing, and accessing information in ways that 
sought to guarantee its accuracy, timeliness, and usefulness. From the early days of data warehousing on 
into the early years of this new millennium, the effort has largely focused on the technologies, and to a 
lesser degree the methodologies, needed to make information available and useful. The direct beneficiaries 
so far have mostly been folks who are highly proficient in the use of computers and able to use the 
available tools to navigate through large, often complex databases. 
What also emerged in the early 1990s, but didn't become popular until late in that decade, was a new 
approach to management that involved the identification and use of key performance indicators (KPIs), 
introduced by Robert S. Kaplan and David P. Norton as the Balanced Scorecard. The advances in data 
warehousing and its technology partners set the stage for this new interest in management through the use 
of metricsand not just financial metricsthat still dominates the business landscape today. Business 
Performance Management (BPM), as it is now commonly known, has become an international 
preoccupation. The infrastructure built by data warehousing and the like, as well as the interest of BPM in 
metrics that can be monitored easily, together tilled and fertilized the soil in which the hibernating seeds of 
EIS‐type displays were once again able to grow. 
What really caused heads to turn in recognition of dashboards as much more than your everyday fledgling 
technology, however, was the Enron scandal in 2001. The aftermath put new pressure on corporations to 
demonstrate their ability to closely monitor what was going on in their midst and to thereby assure 
shareholders that they were in control. This increased accountability, combined with the concurrent 
economic downturn, sent Chief Information Officers (CIOs) on a mission to find anything that could help 
managers at all levels more easily and efficiently keep an eye on performance. Most BI vendors that hadn't 
already started offering a dashboard product soon began to do so, sometimes by cleverly changing the 
name of an existing product, sometimes by quickly purchasing the rights to an existing product from a 
smaller vendor, and sometimes by cobbling together pieces of products that already existed. The 
marketplace soon offered a vast array of dashboard software from which to choose. 
1.3. Dispelling the Confusion 
Like many products that hit the high‐tech scene with a splash, dashboards are veiled in marketing hype. 
Virtually every vendor in the BI space claims to sell dashboard software, but few clarify what dashboards 
actually are. I'm reminded of the early years of data warehousing, wheneager to learn about this new 
approach to data managementI asked my IBM account manager how IBM defined the term. His response 
was classic and refreshingly candid: "By data warehousing we at IBM mean whatever the customer thinks it 
means." I realize that this wasn't IBM's official definition, which I'm sure existed somewhere in their 
literature, but it was my blue‐suited friend's way of saying that as a salesperson, it was useful to leave the 
term vague and flexible. As long as a product or service remains undefined or loosely defined, it is easy to 
claim that your company sells it. 
Those rare software vendors that have taken the time to define the term in their marketing literature start 
with the specific features of their products as the core of the definition, rather than a generic description. 
As a result, vendor definitions tend to be self‐validating lists of technologies and features. For example, Dr. 
Gregory L. Hovis, Director of Product Deployment for Snippets Software, Inc., asserts: 
www.it-ebooks.info

---

<!-- página 16 -->

Able to universally connect to any XML or HTML data source, robust dashboard 
products intelligently gather and display data, providing business intelligence 
without interrupting work flow… An enterprise dashboard is characterized by a 
collection of intelligent agents (or gauges), each performing frequent bidirectional 
communication with data sources. Like a virtual staff of 24x7 analysts, each agent in 
the dashboard intelligently gathers, processes and presents data, generating alerts 
and revising actions as conditions change.1 
An article in the June 16, 2003 edition of Computerworld cites statistics from a study done by AMR 
Research, Inc., which declares that "more than half of the 135 companies… recently surveyed are 
implementing dashboards."2 
Unfortunately, the author never tells us what dashboards are. He teases us with hints, stating that 
dashboards and scorecards are BI tools that "have found a new home in the cubicles," having moved from 
where they once resided (exclusively in executive suites) under the name Executive Information Systems. 
He gives examples of how dashboards are being used and speaks of their benefits, but leaves it to us to 
piece together a sense of what they are. The closest he comes to a definition is when he quotes John 
Hagerty of AMR Research, Inc.: "Dashboards and scorecards are about measuring." 
While conducting an extensive literature review in 2003 in search of a good working definition, I visited 
DataWarehousingOnline.com and clicked on the link to "Executive Dashboard" articles. In response, I 
received the same 18 web pages of links that I found when I separately clicked on links for "Balanced 
Scorecard," "Data Quality and Integration," and "Data Mining." Either the links weren't working properly, or 
this web portal for the data warehousing industry at the time believed that these terms all meant the same 
thing.3 
I finally decided to begin the task of devising a working definition of my own by examining every example of 
a dashboard I could find on the Web, in search of their common characteristics. You might find it 
interesting to take a similar journey. In the next few pages, you'll see screenshots of an assortment of 
dashboards, which were mostly found on the web sites of vendors that sell dashboard software. Take the 
time now to browse through these examples and see if you can discern common threads that might be 
woven into a useful definition. 
                                                           
1 Gregory L. Hovis, "Stop Searching for InformationMonitor it with Dashboard Technology," DM Direct, February 2002. 
2 Mark Leon, "Dashboard Democracy," Computerworld, June 16, 2003 
3 By including these examples from the web sites of software vendors and a few other sources, I do not mean to 
endorse any of these dashboards or the software products used to create them as examples of good design, nor as 
extraordinary examples of poor design. To varying degrees they all exhibit visual design problems that I'll address in 
later chapters. 
www.it-ebooks.info

---

<!-- página 17 -->

Figure 1‐2. This dashboard from Business Objects relies primarily on graphical means to display a series of performance 
measures. along with a list of alerts, Notice that the title of this dashboard is "My KPIs." Key performance indicators and 
dashboards appear to be synonymous in the minds of most vendors. Notice the gauges as well. We'll see quite a few of them. 
 
www.it-ebooks.info

---

<!-- página 18 -->

Figure 1‐3. This dashboard from Oracle Corporation displays a collection of sales measures for analyzing product performance by 
category. All of the measures are displayed graphically. We'll find that this emphasis on graphical display media is fairly 
common. 
 
Figure 1‐4. This dashboard from Informatica Corporation displays measures of revenue by sales channel along with a list of 
reports that can be viewed separately. The predominance of graphical display media that we observed on the previous 
dashboards appears on this one as well, notably in the form of meters designed to look like speedometers. The list of reports 
adds portal functionality, enabling this dashboard to operate as a launch pad to complementary information. 
www.it-ebooks.info

---

<!-- página 19 -->

Figure 1‐5. This dashboard from Principa provides an overview of a company's financial performance compared to targets for the 
month of March, both in tabular form and as a series of gauges. The information can be tailored by selecting different months 
and amounts of history. Once again, we see a strong expression of the dashboard metaphor, this time in the form of graphical 
devices that were designed to look like fuel gauges. 
www.it-ebooks.info

---

<!-- página 20 -->

Figure 1‐6. This dashboard from Cognos, Inc. displays a table and five graphsone in the form of a world mapto communicate 
sales information. Despite the one table, there's a continued emphasis on graphical media. Notice also that a theme regarding 
the visual nature and need for visual appeal of dashboards is emerging in these examples. 
www.it-ebooks.info

---

<!-- página 21 -->

Figure 1‐7. This dashboard from Hyperion Solutions Corporation displays regional sales revenue in three forms: on a map, in a 
bar graph, and in a table. Data can be filtered by means of three sets of radio buttons on the left. These filtering mechanisms 
build rudimentary analytical functionality into this dashboard. Visual decoration reinforces the theme that dashboards 
intentionally strive for visual appeal. 
www.it-ebooks.info

---

<!-- página 22 -->

Figure 1‐8. This dashboard from Corda Technologies, Inc. features flight‐loading measures for an airline using four panels of 
graphs. Here again we see an attention to the visual appeal of the display. Notice also in the instructions at the top that an 
ability to interact with the graphs has been built into the dashboard, so that users can access additional information in pop‐ups 
and drill into greater levels of detail. 
www.it-ebooks.info

---

<!-- página 23 -->

Figure 1‐9. This dashboard from Visual Mining, Inc. displays various measures of a city's transit system to give the executives in 
charge a quick overview of the system's current and historical performance. Use of the colors green, yellow, and red to indicate 
good, satisfactory, and bad performance, as you can see on the three graphical displays arranged horizontally across the middle, 
is common on dashboards. 
 
www.it-ebooks.info

---

<!-- página 24 -->

Figure 1‐10. This dashboard from Infommersion, Inc. gives executives of a hotel chain the means to view multiple measures of 
performance, one hotel at a time. It is not unusual for dashboards to divide the full set of data into individual views, as this one 
does by using the listbox in the upper‐left corner to enable viewers to select an individual hotel by location. The great care that 
we see in this example to realistically reproduce the dashboard metaphor, even down to the sheen on polished metal, is an 
effort that many vendors take quite seriously. 
 
Figure 1‐11. This dashboard from Celequest Corporation integrates a series of related tables and graphs that allow executives to 
view several aspects of sales simultaneously. It exhibits an effort to combine a rich set of related data on the screen to provide a 
comprehensive overview of a company's sales performance. 
www.it-ebooks.info

---

<!-- página 25 -->

Figure 1‐12. This dashboard from General Electric, called a "digital cockpit," provides a tabular summary of performance, 
complemented by a color‐coded indicator light for each measure's status. Rather than a dashboard designed by a software 
vendor to exhibit its product, this is an actual working dashboard that was designed by a company to serve its own business 
needs. In this example, no effort was made to literally represent the dashboard (or cockpit) metaphor. 
 
www.it-ebooks.info

---

<!-- página 26 -->

Figure 1‐13. This dashboard is used by the Treasury Board of Canada to monitor the performance of a project. Here again we 
have a dashboard that was designed by an organization for its own use. This time, the dashboard metaphor makes a token 
appearance in the form of gauges. The traffic‐light colors green, yellow, and redhere with the addition of blue for the 
exceptionally good status of "ahead of schedule"are also used. Unlike some of the examples that we've seen that displayed 
relatively little information, this one makes the attempt to provide the comprehensive overview that would be needed to 
effectively monitor progress and performance. 
1.3.1. What Is a Dashboard? 
As you have no doubt determined by examining these examples, there's a fair degree of diversity in the 
products that go by the name "dashboard." One of the few characteristics that most vendors seem to agree 
on is that for something to be called a dashboard it must include graphical display mechanisms such as 
traffic lights and a variety of gauges and meters, many similar to the fuel gauges and speedometers found 
in automobiles. This clearly associates BI dashboards with the familiar versions found in cars, thereby 
leveraging a useful metaphorbut the metaphor alone doesn't provide an adequate definition. About the 
only other thread that is common to these dashboard examples is that they usually attempt to provide an 
overview of something that's currently going on in the business. 
After a great deal of research and thought, I composed a definition of my own that captures the essence of 
what I believe a dashboard is (clearly biased toward the characteristics of this medium that I find most 
useful and unique). To serve us well, this definition must clearly differentiate dashboards from other forms 
of data presentation, and it must emphasize those characteristics that effectively support the goal of 
communication. Here's my definition, which originally appeared in Intelligent Enterprise magazine: 
A dashboard is a visual display of the most important information needed to achieve 
one or more objectives; consolidated and arranged on a single screen so the 
information can be monitored at a glance.1 
Just as the dashboard of a car provides critical information needed to operate the vehicle at a glance, a BI 
dashboard serves a similar purpose, whether you're using it to make strategic decisions for a huge 
corporation, run the daily operations of a team, or perform tasks that involve no one but yourself. The 
means is a single‐screen display, and the purpose is to efficiently monitor the information needed to 
achieve one's objectives. 
Visual display of the most information needed to achieve one or more objectives 
which fits entirely on a single computer screen so it can be monitored at a glance 
Let's go over the salient points: 
Dashboards are visual displays. The information on a dashboard is presented visually, usually as a 
combination of text and graphics, but with an emphasis on graphics. Dashboards are highly graphical, not 
because it is cute, but because graphical presentation, handled expertly, can often communicate with 
greater efficiency and richer meaning than text alone. How can you best present the information so that 
human eyes can take it in quickly and human brains can easily extract the correct and most important 
meanings from it? To design dashboards effectively, you must understand something about visual 
perceptionwhat works, what doesn't, and why.  
 
Dashboards display the information needed to achieve specific objectives. To achieve even a 
single objective often requires access to a collection of information that is not otherwise related, 
                                                           
1 Stephen Few, "Dashboard Confusion," Intelligent Enterprise, March 20, 2004. 
www.it-ebooks.info

---

<!-- página 27 -->

often coming from diverse sources related to various business functions. It isn't a specific type of 
information, but information of whatever type that is needed to do a job. It isn't just information 
that is needed by executives or even by managers; it can be information that is needed by anyone 
who has objectives to meet. The required information can be and often is a set of KPIs, but not 
necessarily, for other types of information might also be needed to do one's job.  
 
A dashboard fits on a single computer screen. The information must fit on a single screen, entirely 
available within the viewer's eye span so it can all be seen at once, at a glance. If you must scroll 
around to see all the information, it has transgressed the boundaries of a dashboard. If you must 
shift from screen to screen to see it all, you've made use of multiple dashboards. The object is to 
have the most important information readily and effortlessly available so you can quickly absorb 
what you need to know.  
 
Must the information be displayed in a web browser? That might be the best medium for most 
dashboards today, but it isn't the only acceptable medium, and it might not be the best medium 10 
years from now. Must the information be constantly refreshed in real time? Only if the objectives 
that it serves require real‐time information. If you are monitoring air traffic using a dashboard, you 
must immediately be informed when something is wrong. On the other hand, if you are making 
strategic decisions about how to boost sales, a snapshot of information as of last night, or perhaps 
even the end of last month, should work fine.  
 
Dashboards are used to monitor information at a glance. Despite the fact that information about 
almost anything can be appropriately displayed in a dashboard, there is at least one characteristic 
that describes almost all the information found in dashboards: it is abbreviated in the form of 
summaries or exceptions. This is because you cannot monitor at a glance all the details needed to 
achieve your objectives. A dashboard must be able to quickly point out that something deserves 
your attention and might require action. It needn't provide all the details necessary to take action, 
but if it doesn't, it ought to make it as easy and seamless as possible to get to that information. 
Getting there might involve shifting to a different display beyond the dashboard, using navigational 
methods such as drilling down. The dashboard does its primary job if it tells you with no more than 
a glance that you should act. It serves you superbly if it directly opens the door to any additional 
information that you need to take that action. 
That's the essence of the dashboard. Now let's add to this definition a couple more supporting attributes 
that help dashboards do their job effectively: 
 
Dashboards have small, concise, clear, and intuitive display mechanisms. Display mechanisms that 
clearly state their message without taking up much space are required, so that the entire collection 
of information will fit into the limited real estate of a single screen. If something that looks like a 
fuel gauge, traffic signal, or thermometer fits this requirement best for a particular piece of 
information, that's what you should use, but if something else works better, you should use that 
instead. Insisting on sexy displays similar to those found in a car when other mechanisms would 
work better is counterproductive.  
 
Dashboards are customized. The information on a dashboard must be tailored specifically to the 
requirements of a given person, group, or function; otherwise, it won't serve its purpose. 
A dashboard is a type of display, a form of presentation, not a specific type of information or technology. 
Keep this distinction clear, and you will be freed to focus on what really matters: designing dashboards to 
communicate. 
www.it-ebooks.info

---

<!-- página 28 -->

1.4. A Timely Opportunity 
Several circumstances have recently combined to create a timely opportunity for dashboards to add value 
to the workplace, including technologies such as high‐resolution graphics, emphasis on performance 
management and metrics, and a growing recognition of visual perception as a powerful channel for 
information acquisition and comprehension. Dashboards offer a unique solution to the problem of 
information overloadnot a complete solution by any means, but one that helps a lot. As Dr. Hovis wrote in 
that same article in DM Direct: 
The real value of dashboard products lies in their ability to replace hunt‐and‐peck 
data‐gathering techniques with a tireless, adaptable, information‐flow mechanism. 
Dashboards transform data repositories into consumable information.1 
Dashboards aren't all that different from some of the other means of presenting information, but when 
properly designed the single‐screen display of integrated and finely tuned data can deliver insight in an 
especially powerful way. 
Dashboards and visualization are cognitive tools that improve your "span of control" 
over a lot of business data. These tools help people visually identify trends, patterns 
and anomalies, reason about what they see and help guide them toward effective 
decisions. As such, these tools need to leverage people's visual capabilities. With the 
prevalence of scorecards, dashboards and other visualization tools now widely 
available for business users to review their data, the issue of visual information 
design is more important than ever. 2 
The final sentiment that Brath and Peters expressed in this excerpt from their article underscores the 
purpose of this book. As data visualization becomes increasingly common as a means of business 
communication, it is imperative that expertise in data visualization be acquired. This expertise must be 
grounded in an understanding of visual perception, and of how this understanding can be effectively 
applied to the visual display of datawhat works, what doesn't, and why. These skills are rarely found in the 
business world, not because they are difficult to learn, but because the need to learn them is seldom 
recognized. This is true in general, and especially with regard to dashboards. The challenge of presenting a 
large assortment of data on a single screen in a way that produces immediate insight is by no means trivial. 
Buckle up; you're in for a fun ride. 
 
 
                                                           
1 Gregory L. Hovis, "Stop Searching for InformationMonitor it with Dashboard Technology," DM Direct, February 2002 
2 Richard Brath and Michael Peters, "Dashboard Design: Why Design is Important," DM Direct, October 2004 
www.it-ebooks.info

---

<!-- página 29 -->

Chapter 2. Variations in Dashboard Uses and Data 
Dashboards can be used to monitor many types of data and to support almost any set of objectives business 
deems important. There are many ways to categorize dashboards into various types. The way that relates 
most directly to a dashboard's visual design involves the role it plays, whether strategic, analytical, or 
operational. The design characteristics of the dashboard can be tailored to effectively support the needs of 
each of these roles. While certain differences such as these will affect design, there are also many 
commonalities that span all dashboards and invite a standard set of design practices. 
 
 
www.it-ebooks.info

---

<!-- página 30 -->

Categorizing dashboards  
Common threads in dashboard data  
Non‐quantitative dashboard data 
Dashboards are used to support a broad spectrum of information needs, spanning the entire range of 
business efforts that might benefit from an immediate overview of what's going on. Dashboards can be 
tailored to specific purposes, and a single individual might benefit from multiple dashboards, each 
supporting a different aspect of that person's work. The various data and purposes that dashboards can be 
used to support are worth distinguishing, for they sometimes demand differences in visual design and 
functionality. 
2.1. Categorizing Dashboards 
Dashboards can be categorized in several ways. No matter how limited and flawed the effort, doing so is 
useful because it helps us to examine the benefits and many uses of the medium. I'm one of those people 
who enjoys the process of classifying things, breaking them up into groups. It's an intellectual exercise that 
forces me to dig beneath the surface. I don't, however, assign undue worth to any one way of categorizing 
something, and I certainly don't ever want to give in to the arrogance of claiming that mine is the only way. 
Taxonomiesa scientific term for systems of classificationare always based on one or more variables (that is, 
categories consisting of multiple potential values). For instance, based on the variable "platform," a 
dashboard taxonomy could consist of those that run in client/server mode and those that run in web 
browsers. The following table lists several variables that can be used to structure dashboard taxonomies, 
along with potential values for each. This list certainly isn't comprehensive; these are simply my attempts 
to express the variety and explore the potential of the dashboard medium. 
Table 2‐1.  
Variable 
Values 
Role 
Strategic 
Analytical 
Operational 
Type of data 
Quantitative 
Non‐quantitative 
Data domain 
Sales 
Finance 
Marketing 
Manufacturing 
www.it-ebooks.info

---

<!-- página 31 -->

Human Resources 
Type of measures 
Balanced Scorecard (for example, KPIs) 
Six Sigma 
Non‐performance 
Span of data 
Enterprise‐wide 
Departmental 
Individual 
Update frequency 
Monthly 
Weekly 
Daily 
Hourly 
Real time or near real time 
Interactivity 
Static display 
Interactive display (drill‐down, filters, etc.) 
Mechanisms of display 
Primarily graphical 
Primarily text 
Integration of graphics and text 
Portal functionality 
Conduit to additional data 
No portal functionality 
 
2.1.1. Classifying Dashboards by Role 
Perhaps one of the most useful ways to categorize a dashboard, and the one that I'll focus on, is by its 
rolethe type of business activity that it supports. My breakdown of dashboards into three roles (strategic, 
analytical, and operational) is certainly not the only way to express the types of business activities a 
dashboard can support. However, this is the only classification that significantly relates to differences in 
visual design. 
2.1.1.1. Dashboards for strategic purposes 
The primary use of dashboards today is for strategic purposes. The popular "executive dashboard," and 
most of the dashboards that support managers at any level in an organization, are strategic in nature. They 
provide the quick overview that decision makers need to monitor the health and opportunities of the 
business. Dashboards of this type focus on high‐level measures of performance, including forecasts to light 
the path into the future. Although these measures can benefit from contextual information to clarify the 
www.it-ebooks.info

---

<!-- página 32 -->

meaning, such as comparisons to targets and brief histories, along with simple evaluators of performance 
(for example, good and bad), too much information of this type or too many subtle gradations can distract 
from the primary and immediate goals of the strategic decision maker. 
Extremely simple display mechanisms work best for this type of dashboard. Given the goal of long‐term 
strategic direction, rather than immediate reactions to fast‐paced changes, these dashboards don't require 
real‐time data; rather, they benefit from static snapshots taken monthly, weekly, or daily. Lastly, they are 
usually unidirectional displays that simply present what is going on. They are not designed for the 
interaction that might be needed to support further analysis, because this is rarely the direct responsibility 
of the strategic manager. You'll be lucky if you can get an executive to view the information on a computer 
screen rather than a piece of paper, let alone deal with the navigational demands of interactive online 
analysis. 
2.1.1.2. Dashboards for analytical purposes 
Dashboards that support data analysis require a different design approach. In these cases the information 
often demands greater context, such as rich comparisons, more extensive history, and subtler performance 
evaluators. Like strategic dashboards, analytical dashboards also benefit from static snapshots of data that 
are not constantly changing from one moment to the next. However, more sophisticated display media are 
often useful for the analyst who must examine complex data and relationships and is willing to invest the 
time needed to learn how they work. Analytical dashboards should support interactions with the data, such 
as drilling down into the underlying details, to enable the exploration needed to make sense of itthat is, not 
just to see what is going on but to examine the causes. For example, it isn't enough to see that sales are 
decreasing; when your purpose is analysis, you must be made aware of such patterns so that you can then 
explore them to discover what is causing the decrease and how it might be corrected. The dashboard itself, 
as a monitoring device that tells the analyst what to investigate, need not support all the subsequent 
interactions directly, but it should link as seamlessly as possible to the means to analyze the data. 
2.1.1.3. Dashboards for operational purposes 
When dashboards are used to monitor operations, they must be designed differently from those that 
support strategic decision making or data analysis. The characteristic of operations that uniquely influences 
the design of dashboards most is their dynamic and immediate nature. When you monitor operations, you 
must maintain awareness of activities and events that are constantly changing and might require attention 
and response at a moment's notice. If the robotic arm on the manufacturing assembly line that attaches 
the car door to the chassis runs out of bolts, you can't wait until the next day to become aware of the 
problem and take action. Likewise, if traffic on your web site suddenly drops to half its normal level, you 
want to be notified immediately. 
As with strategic dashboards, the display media on operational dashboards must be very simple. In the 
stressful event of an emergency that requires an immediate response, the meaning of the situation and the 
appropriate responses must be extremely clear and simple, or mistakes will be made. In contrast to 
strategic dashboards, operational dashboards must have the means to grab your attention immediately if 
an operation falls outside the acceptable threshold of performance. Also, the information that appears on 
operational dashboards is often more specific, providing a deeper level of detail. If a critical shipment is at 
risk of missing its deadline, a high‐level statistic won't do; you need to know the order number, who's 
handling it, and where it is in the warehouse. Details like these might appear automatically on an 
operational dashboard, or they might be accessed by drilling down on or hovering the mouse over higher‐
level data, so interactivity is often useful. 
www.it-ebooks.info

---

<!-- página 33 -->

The ways that dashboard design must take different forms in response to different roles are clearly worth 
your attention. We'll examine some of these differences in more detail in Chapter 8, Putting It All Together, 
when we review several examples of what works and what doesn't for various purposes. 
2.2. Typical Dashboard Data 
Dashboards are useful for all kinds of work. Whether you're a meteorologist monitoring the weather, an 
intelligence analyst monitoring potential terrorist chatter, a CEO monitoring the health and opportunities of 
a multi‐billion dollar corporation, or a financial analyst monitoring the stock market, a well‐designed 
dashboard could serve you well. 
2.2.1. The Common Thread in Dashboard Diversity 
Despite these diverse applications, in almost all cases dashboards primarily display quantitative measures 
of what's currently going on. This type of data is common across almost all dashboards because they are 
used to monitor the critical information needed to do a job or meet one or more particular objectives, and 
most (but not all, as we'll see later) of the information that does this best is quantitative. 
The following table lists several measures of "what's currently going on" that are typical in business. 
Table 2‐2.  
Category 
Measures 
Sales 
Bookings 
Billings 
Sales pipeline (anticipated sales) 
Number of orders 
Order amounts 
Selling prices 
Marketing 
Market share 
Campaign success 
Customer demographics 
Finance 
Revenues 
Expenses 
Profits 
Technical Support 
Number of support calls 
Resolved cases 
Customer satisfaction 
www.it-ebooks.info

---

<!-- página 34 -->

Call durations 
Fulfillment 
Number of days to ship 
Backlog 
Inventory levels 
Manufacturing 
Number of units manufactured 
Manufacturing times 
Number of defects 
Human Resources 
Employee satisfaction 
Employee turnover 
Count of open positions 
Count of late performance reviews 
Information Technology 
Network downtime 
System usage 
Fixed application bugs 
Web Services 
Number of visitors 
Number of page hits 
Visit durations 
 
These measures are often expressed in summary form, most often as totals, slightly less often as averages 
(such as average selling price), occasionally as measures of distribution (such as a standard deviation), and 
rarer still as measures of correlation (such as a linear correlation coefficient). Summary expressions of 
quantitative data are particularly useful in dashboards, where it is necessary to monitor an array of 
business phenomena at a glance. Obviously, the limited real estate of a single screen requires concise 
communication. 
2.2.1.1. Variations in timing 
Measures of what's currently going on can be expressed in a variety of timeframes. A few typical examples 
include: 
 
This year to date 
 
This week to date 
 
This quarter to date 
 
Yesterday 
www.it-ebooks.info

---

<!-- página 35 -->

 
This month to date 
 
Today so far 
The appropriate timeframe is determined by the nature of the objectives that the dashboard supports. 
2.2.1.2. Enrichment through comparison 
These measures can be displayed by themselves, but it is usually helpful to compare them to one or more 
related measures to provide context and thereby enrich their meaning. Here are perhaps the most typical 
comparative measures, and an example of each. 
Table 2‐3.  
Comparative measure 
Example 
The same measure at the same point in time in the past 
The same day last year 
The same measure at some other point in time in the past  The end of last year 
The current target for the measure 
A budgeted amount for the current period 
Relationship to a future target 
Percentage of this year's budget so far 
A prior prediction of the measure 
Forecast of where we expected to be today 
Relationship to a future prediction of the measure 
Percentage of this quarter's forecast 
Some measure of the norm for this measure 
Average, normal range, or a bench mark, such 
as the number of days it normally takes to 
ship an order 
An extrapolation of the current to measure in the form of 
a probable future, either at a specific point in the future 
or as a time series 
Projection out into the future, such as the 
coming year end 
Someone else's versions of the same measure 
A competitor's measure, such as revenues 
A separate but related measure 
Order count compared to order revenue 
 
These comparisons are often expressed graphically to clearly communicate the differences between the 
values, which might not leap out as dramatically through the use of text alone. However, text alone is often 
adequate. For example, when only the comparison itself is required and the individual measures (a primary 
measure and a comparative measure) aren't necessary, a single number expressed as a percentage can be 
used (such as 119% of budget or7% of where we were this time last year). 
Measures of what's currently going on may be displayed either as a single measure, as a single measure 
combined with one or more individual comparative measures, or as one of the following: 
www.it-ebooks.info

---

<!-- página 36 -->

 
Multiple instances of a measure, each representing a categorical subdivision of the measure (for 
example, sales subdivided into regions or a count of orders subdivided into numeric ranges in the 
form of a frequency distribution) 
 
Temporal instances of a measure (that is, a time series, such as monthly instances of the measure) 
Time series in particular provide rich context for understanding what's really going on and how well it's 
going. 
2.2.1.3. Enrichment through evaluation 
Because with a dashboard a great deal of data must be evaluated quickly, it also is quite useful to explicitly 
declare whether something is good or bad. Such evaluative information is often encoded as special visual 
objects (for example, a traffic light) or as visual attributes (for example, by displaying the measure in bright 
red to indicate a serious condition). When designed properly, simple visual indicators can clearly alert users 
to the state of particular measures without altering the overall design of the dashboard. Evaluative 
indicators need not be limited to binary distinctions between good and bad, but if they exceed the limit of 
more than a few distinct states (for example, very bad, bad, acceptable, good, and very good), they run the 
risk of becoming too complex for efficient perception. 
2.2.2. Non­Quantitative Dashboard Data 
Many people think of dashboards and KPIs as nearly synonymous. It is certainly true that dashboards are a 
powerful medium for presenting KPIs, but not all quantitative information that might be useful on a 
dashboard belongs to the list of defined KPIs. In fact, not all information that is useful on dashboards is 
even quantitativethe critical information needed to do a job cannot always be expressed numerically. 
Although most information that typically finds its way onto a dashboard is quantitative, some types of non‐
quantitative data, such as simple lists, are fairly common as well. Here are a few examples: 
 
Top 10 customers 
 
Issues that need to be investigated 
 
Tasks that need to be completed 
 
People who need to be contacted 
Another type of non‐quantitative data occasionally found on dashboards relates to schedules, including 
tasks, due dates, the people responsible, and so on. This is common when the job that the dashboard 
supports involves the management of projects or processes. 
A rarer type involves the display of entities and their relationships. Entities can be steps or stages in a 
process, people or organizations that interact with one another, or events that affect one another, to name 
a few common examples. This type of display usually encodes entities as circles or rectangles and 
relationships as lines, often with arrows at one or both ends to indicate direction or influence. It is often 
useful to integrate quantitative information that is associated with the entities and relationships, such as 
the amount of time that passed between events in a process (for example, by associating a number with 
the line that links the events or by having the length of the line itself encode the duration) or the sizes of 
business entities (perhaps expressed in revenues or number of employees). 
www.it-ebooks.info

---

<!-- página 37 -->

Now that you know a bit about how and why dashboards are used, it's time to take a closer look at some 
design principles. In the next chapter, we'll delve into some of the mistakes that are commonly made in 
dashboard design. 
 
 
www.it-ebooks.info

---

<!-- página 38 -->

Chapter 3. Thirteen Common Mistakes in Dashboard Design 
Preoccupation with superficial and functionally distracting visual characteristics of dashboards has led to a 
rash of visual design problems that undermine their usefulness. Thirteen visual design problems are 
frequently found in dashboards, including in the examples featured as exemplary by software vendors. 
 
 
www.it-ebooks.info

---

<!-- página 39 -->

Exceeding the boundaries of a single screen  
Supplying inadequate context for the data  
Displaying excessive detail or precision  
Choosing a deficient measure  
Choosing inappropriate display media  
Introducing meaningless variety  
Using poorly designed display media  
Encoding quantitative data inaccurately  
Arranging the data poorly  
Highlighting important data ineffectively or not at all  
Cluttering the display with useless decoration  
Misusing or overusing color  
Designing an unattractive visual display 
The fundamental challenge of dashboard design is the need to squeeze a great deal of information into a 
small amount of space, resulting in a display that is easily and immediately understandable. If this doesn't 
sound challenging, either you are an expert designer with extensive dashboard experience, or you are 
basking in the glow of naiveté. Attempt the task, and you will find that dashboards pose a unique data 
visualization challenge. And don't assume that you can look to your software vendor for helpif they have 
the necessary design talent, they're doing a great job of hiding it. 
Sadly, it is easy to find many examples of the mistakes you should avoid by looking no further than the web 
sites of the software vendors themselves. Let's use some of these examples to examine design that doesn't 
work and learn why it doesn't. 
Note: In almost every case, I've chosen to use actual examples from vendor web sites to illustrate 
dashboard design mistakes. In doing so, I am not saying that the software that produced the example is 
badI'm not commenting on the quality of the software one way or another. What I am saying is that the 
design practice is bad. This results primarily from vendors' lack of expertise in or inattention to visual 
design. These vendors should know better, but they've chosen to focus their energies on other aspects of 
their products, often highlighting glitzy visual features that actually undermine effective communication. I 
hope that seeing their work used to illustrate poor dashboard design will serve as a wake‐up call to start 
paying attention to the features that really matter. 
 
3.1. Exceeding the Boundaries of a Single Screen 
My insistence that a dashboard should confine its display to a single screen, with no need for scrolling or 
switching between multiple screens, might seem arbitrary and a bit finicky, but it is based on solid and 
practical rationale. After studying data visualization for a while, including visual perception, one discovers 
that something powerful happens when things are seen together, all within eye span. Likewise, something 
www.it-ebooks.info

---

<!-- página 40 -->

critical is lost when you lose sight of some data by scrolling or switching to another screen to see other 
data. Part of the problem is that we can hold only a few chunks of information at a time in short‐term 
memory. Relying on the mind's eye to remember information that is no longer visible is a rocky venture. 
One of the great benefits of a dashboard as a medium of communication is the simultaneity of vision that it 
offers: the ability to see everything that you need at once. This enables comparisons that lead to 
insightsthose "Aha!" experiences that might not occur in any other way. Clearly, exceeding the boundaries 
of a single screen negates this benefit. Let's examine the two versions of this problemfragmenting data into 
separate screens and requiring scrollingindependently. 
3.1.1. Fragmenting Data into Separate Screens 
Information that appears on dashboards is often fragmented in one of two ways: 
 
Separated into discrete screens to which one must navigate 
 
Separated into different instances of a single screen that are accessed through some form of 
interaction 
Enabling users to navigate to discrete screens or different instances of a single screen to access additional 
information is not, in general, a bad practice. Allowing navigation to further detail or to a different set of 
information that achieves its purpose best by standing alone can be a powerful dashboard feature. 
However, when all the information should be seen at the same time to gain the desired insights, that 
fragmentation undermines the unique advantages of a dashboard. Fragmenting data that should be seen 
together is a mistake. 
Let's look at an example. The dashboard in Figure 3‐1 fragments the data that executives need into 10 
separate dashboards. This would be fine if the executives wouldn't benefit from seeing these various 
measures together, but that is hardly the case. 
Figure 3‐1. This dashboard fragments the data in a way that undermines the viewer's ability to see meaningful relationships. 
www.it-ebooks.info

---

<!-- página 41 -->

In this example, a banking executive is forced to examine the performance of the following aspects of the 
business separately: 
 
Highlights 
 
Deposits 
 
Past due loans 
 
Profitability 
 
Growth 
 
Loans 
 
Risk 
 
Deposit mix 
 
Channels 
 
Market share 
Each of these screens presents a separate, high‐level snapshot of a single set of measures that ought to be 
integrated into a single screen. Despite what you might assume about the available screen labeled 
"Highlights," it does not provide a consolidated visual overview of the data but consists primarily of a text 
table that contains several of the measures. A banking executive needs to see these measures together in a 
way that enables comparisons to understand how they relate to and influence one another. 
Splitting the big picture into a series of separate small pictures is a mistake whenever seeing the big picture 
is worthwhile. 
A similar example, from the same software vendor, is shown in Figure 3‐2. This time the picture of daily 
sales has been split into a separate dashboard for each of 20 products. If the intention is to serve the needs 
of product managers who are each exclusively interested in a single product and never want to compare 
sales of that product to others, this design doesn't fragment the data in a harmful way. If, however, any 
benefit can be gained by viewing the sales of multiple products together, which is almost surely the case, 
this design fails. 
www.it-ebooks.info

---

<!-- página 42 -->

Figure 3‐2. This dashboard requires viewers to click on a desired product and view information for only one product at a time. 
3.1.2. Requiring Scrolling 
The dashboard in Figure 3‐3 illustrates the problem that's created when scrolling is required to see all the 
data. Not only are we left wondering what lies below the bottom of the screen in the dashboard as a 
whole, but we're also given immediate visual access only to the first of many metrics that appear in the 
scrollable box at the top right, beginning with "No. Transactions." We'd be better off reading a printed 
report extending across multiple pages, because at least then we could lay out all of the pages at once for 
simultaneous viewing. People commonly assume that anything that lies beyond their immediate field of 
vision and requires scrolling to see is of less importance than what's immediately visible. Many viewers 
won't bother to look at what lies off the screen, and those who take the time will likely resent the effort. 
www.it-ebooks.info

---

<!-- página 43 -->

Figure 3‐3. This dashboard demonstrates the effectiveness that is sacrificed when scrolling is required to see all the information. 
3.2. Supplying Inadequate Context for the Data 
Measures of what's currently going on in the business rarely do well as a solo act; they need a good 
supporting cast to succeed. For example, to state that quarter‐to‐date sales total $736,502 without any 
context means little. Compared to what? Is this good or bad? How good or bad? Are we on track? Are we 
doing better than we have in the past, or worse than we've forecasted? Supplying the right context for key 
measures makes the difference between numbers that just sit there on the screen and those that enlighten 
and inspire action. 
The gauges in Figure 3‐4 could easily have incorporated useful context, but they fall short of their potential. 
For instance, the center gauge tells us only that 7,822 units have sold this year to date, and that this 
number is good (indicated by the green arrow). A quantitative scale on a graph, such as the radial scales of 
tick marks on these gauges, is meant to provide an approximation of the measure, but it can only do so if 
the scale is labeled with numbers, which these gauges lack. If the numbers had been present, the positions 
of the arrows might have been meaningful, but here the presence of the tick marks along a radial axis 
suggests useful information that hasn't actually been included. 
Figure 3‐4. These dashboard gauges fail to provide adequate context to make the measures meaningful. 
www.it-ebooks.info

---

<!-- página 44 -->

These gauges use up a great deal of space to tell us nothing whatsoever. The same information could have 
been communicated simply as text in much less space, without any loss of meaning: 
Table 3‐1.  
YTD Units 
7,822 
October Units 
869 
Returns Rate 
0.26% 
 
Another failure of these gauges is that they tease us by coloring the arrows to indicate good or bad 
performance, without telling us how good or bad it is. They could easily have done this by labeling the 
quantitative scales and visually encoding sections along the scales as good or bad, rather than just encoding 
the arrows in this manner. Had this been done, we would be able to see at a glance how good or bad a 
measure is by how far the arrow points into the good or bad ranges. 
The gauge that appears in Figure 3‐5 does a better job of incorporating context in the form of meaningful 
comparisons. Here, the potential of the graphical display is more fully realized. The gauge measures the 
average duration of phone calls and is part of a larger dashboard of call‐center data. 
Supplying context for measures need not always involve a choice of the single best comparisonrather, 
several contexts may be given. For instance, quarter‐to‐date sales of $736,502 might benefit from 
comparisons to the budget target of $1,000,000; sales on this day last year of $856,923; and a time‐series 
of sales figures for the last six quarters. Such a display would provide much richer insight than a simple 
display of the current sales figure, with or without an indication of whether it's "good" or "bad." You must 
be careful, however, when incorporating rich context such as this to do so in a way that doesn't force the 
viewer to get bogged down in reading the details to get the basic message. It is useful to provide a visually 
prominent display of the primary information and to subdue the supporting context somewhat, so that it 
doesn't get in the way when the dashboard is being quickly scanned for key points. 
Figure 3‐5. This dashboard gauge (found in a paper entitled "Making Dashboards Actionable," written by Laurie M. Orlov and 
published in December 2003 by Forrester Research, Inc.) does a better job than those in Figure 3‐4 of using a gauge effectively. 
www.it-ebooks.info

---

<!-- página 45 -->

The amount of context that ought to be incorporated to enrich the measures on a dashboard depends on 
its purpose and the needs of its viewers. More is not always better, but when more provides real value, it 
ought to be included in a way that supports both a quick overview without distraction as well as contextual 
information for richer understanding.1 
3.3. Displaying Excessive Detail or Precision 
Dashboards almost always require fairly high‐level information to support the viewer's need for a quick 
overview. Too much detail, or measures that are expressed too precisely (for example, $3,848,305.93 
rather than $3,848,305, or perhaps even $3.8M), just slow viewers down without providing them any 
benefit. In a way, this problem is the opposite extreme of the one we examined in the previous sectiontoo 
much information rather than too little. 
The dashboard in Figure 3‐6 illustrates this type of excess. Examine the two sections that I've enclosed in 
red rectangles. The lower‐right section displays from 4 to 10 decimal digits for each measure, which might 
be useful in some contexts, but doubtfully in a dashboard. The highlighted section above displays time 
down to the level of seconds, which also seems like overkill in this context. With a dashboard, every 
unnecessary piece of information results in time wasted trying to filter out what's important, which is 
intolerable when time is of the essence. 
Figure 3‐6. This dashboard shows unnecessary detail, such as times expressed to the second and measures expressed to 10 
decimal places. 
                                                           
1 I believe that the circular shape used by gauges like this one wastes valuable space on a dashboard, as I'll explain in 
Chapter 6, Effective Dashboard Display Media. Nevertheless, I commend this gauge for displaying richer information 
than most. 
www.it-ebooks.info

---

<!-- página 46 -->

3.4. Choosing a Deficient Measure 
For a measure to be meaningful, we must know what is being measured and the units in which the measure 
is being expressed. A measure is deficient if it isn't the one that most clearly and efficiently communicates 
the meaning that the dashboard viewer should discern. It can be accurate, yet not the best choice for the 
intended message. For example, if the dashboard viewer only needs to know to what degree actual 
revenue differs from budgeted revenue, it would be more direct to simply express the variance as9% (and 
perhaps display the variance of$8,066 as well) rather than displaying the actual revenue amount of $76,934 
and the budgeted revenue amount of $85,000 and leaving it to the viewer to calculate the difference. In 
this case, a percentage clearly focuses attention on the variance in a manner that is directly intelligible. 
Figure 3‐7 illustrates this point. While this graph displays actual and budgeted revenues separately, its 
purpose is to communicate the variance of actual revenues from the budget. 
 
Figure 3‐7. This graph illustrates the use of measures that fail to directly express the intended message. 
The variance, however, could have been displayed more vividly by encoding budgeted revenue as a 
reference line of 0% and the variance as a line that meanders above and below budget (expressed in units 
of positive and negative percentages, as shown on the next page in Figure 3‐8). The point here is to always 
think carefully about the message that most directly supports the viewer's needs, and then select the 
measure that most directly supports that message. 
www.it-ebooks.info

---

<!-- página 47 -->

Figure 3‐8. This graph is designed to emphasize deviation from a target, which it accomplishes in part by expressing the 
difference between budgeted and actual revenues using percentages. 
3.5. Choosing Inappropriate Display Media 
Choosing inappropriate display media is one of the most common design mistakes made, not just in 
dashboards, but in all forms of quantitative data presentation. For instance, using a graph when a table of 
numbers would work better, and vice versa, is a frequent mistake. Allow me to illustrate using several 
examples beginning with the pie chart in Figure 3‐9. 
 
Figure 3‐9. This chart illustrates a common problem with pie charts. 
This pie chart is part of a dashboard that displays breast cancer statistics. Look at it for a moment and see if 
anything seems odd. 
Pie charts are designed specifically to present parts of a whole, and the whole should always add up to 
100%. Here, the slice labeled "Breast 13.30%" looks like it represents around 40% of the piea far cry from 
13.3%. Despite the meaning that a pie chart suggests, these slices are not parts of a whole; they represent 
the probability that a woman will develop a particular form of cancer (breast, lung, colon, and six types that 
aren't labeled). This misuse of a pie chart invites confusion. 
The truth is, I never recommend the use of pie charts. The only thing they have going for them is the fact 
that everybody immediately knows when they see a pie chart that they are seeing parts of a whole (or 
www.it-ebooks.info

---

<!-- página 48 -->

ought to be). Beyond that, pie charts don't display quantitative data very effectively. As you'll see in 
Chapter 4, Tapping into the Power of Visual Perception, humans can't compare two‐dimensional areas or 
angles very accuratelyand these are the two means that pie charts use to encode quantitative data. Bar 
graphs are a much better way to display this information.1 
The pie chart in Figure 3‐10 shows that even when correctly used to present parts of a whole, these graphs 
don't work very well. Without the value labels, you would only be able to discern that opportunities rated 
as "Fair" represent the largest group, those rated as "Field Sales: 2‐Very High" represent a miniscule group, 
and the other ratings groups are roughly equal in size. 
 
Figure 3‐10. This example shows that even when they are used correctly to present parts of a whole, pie charts are difficult to 
interpret accurately. 
Figure 3‐11 displays the same data as Figure 3‐10, this time using a horizontal bar graph that can be 
interpreted much more efficiently and accurately. 
 
Figure 3‐11. This horizontal bar graph does a much better job of displaying part‐to‐whole data than the preceding pie charts. 
                                                           
1 Refer to my book Show Me the Numbers: Designing Tables and Graphs to Enlighten (Oakland, CA: Analytics Press, 
2004) for a thorough treatment of the types of graphs that work best for the most common quantitative messages 
communicated in business. 
www.it-ebooks.info

---

<!-- página 49 -->

Other types of graphs can be equally ineffective. For example, the graph in Figure 3‐12 shows little regard 
for the viewer's time and no understanding of visual perception. This graph compares revenue to operating 
costs across five months, using the size of overlapping circles (sometimes called bubbles) to encode the 
quantities. Just as with the slices of a pie, using circles to encode quantity relies on the viewer's ability to 
compare two‐dimensional areas, which we simply cannot accurately do. Take the values for the month of 
February as an example. Assuming that operating costs equal $10,000, what is the revenue value? 
 
Figure 3‐12. This graph uses the two‐dimensional area of circles to encode their values, which needlessly obscures the data. 
Our natural tendency is to compare the sizes of the two circles using a single dimensionlength or 
widthequal to the diameter of each, which suggests that revenue is about three times that of operating 
costs, or about $30,000. This conclusion is wrong, however, to a huge degree. The two‐dimensional area of 
the revenue circle is actually about nine times bigger than that of the operating costs circle, resulting in a 
value of $90,000. Oops! Not even close. 
Now compare operating costs for the months of February and May. It appears that costs in May are greater 
than those in February, right? In fact, the interior circles are the same sizemeasure them and see. The 
revenue bubble in May is smaller than the one in February, which makes the enclosed operating costs 
bubble in May seem bigger, but this is an optical illusion. As you can see, the use of a bubble chart for this 
financial data was a poor choice. A simple bar graph like the one in Figure 3‐13 works much better. 
 
Figure 3‐13. This bar graph does a good job of displaying a time series of actual versus budgeted revenue values. 
Actual versus budgeted revenue is also the subject of Figure 3‐14, but this time it's subdivided into 
geographical regions rather than time slices and displayed as a radar graph. The quantitative scale on a 
radar graph is laid along each of the axis lines that extend from the center to the perimeter, like radius lines 
www.it-ebooks.info

---

<!-- página 50 -->

of a circle. The smallest values are those with the shortest distance between the center point and the 
perimeter. 
 
Figure 3‐14. This radar graph obscures the straightforward data that it's trying to convey. 
The lack of labeled axes in this graph limits its meaning, but the choice of a radar graph to display this 
information in the first place is an even more fundamental error. Once again, a simple bar graph like the 
one in Figure 3‐15 would communicate this data much more effectively. Radar graphs are rarely 
appropriate media for displaying business data. Their circular shape obscures data that would be quite clear 
in a linear display such as a bar graph. 
 
Figure 3‐15. This bar graph effectively compares actual to budgeted revenue data. 
The last example that I'll use to illustrate my point about choosing inappropriate means of display appears 
in Figure 3‐16. 
www.it-ebooks.info

---

<!-- página 51 -->

Figure 3‐16. This display uselessly encodes quantitative values on a map of the United States. 
There are times when it is very useful to arrange data spatially, such as in the form of a map or the floor 
plan of a building, but this isn't one of them. We don't derive any insight by laying out revenue 
informationin this case, whether revenues are good (green light), mediocre (yellow light), or poor (red 
light), in the geographical regions South (brown), Central (orange), West (tan), and East (blue)on a map. 
If the graphical display were presenting meaningful geographical relationshipssay, for shipments of wine 
from California, to indicate where special taxes must be paid whenever deliveries cross state linesperhaps a 
geographical display would provide some insight. With this simple set of four regions with no particular 
factors attached to geographical location, however, the use of a map simply takes up a lot of space to say 
no more than we find in the table that appears on this same dashboard, which is shown in Figure 3‐17. 
 
Figure 3‐17. This table, from the same dashboard, provides a more appropriate display of the regional revenue data that appears 
in Figure 3‐16. 
3.6. Introducing Meaningless Variety 
The mistake of introducing meaningless variety into a dashboard design is closely tied to the one we just 
examined. I've found that people often hesitate to use the same type of display medium multiple times on 
a dashboard, out of what I assume is a sense that viewers will be bored by the sameness. Variety might be 
the spice of life, but if it is introduced on a dashboard for its own sake, the display suffers. You should 
always select the means of display that works best, even if that results in a dashboard that is filled with 
nothing but multiple instances of the same type of graph. If you are giving viewers the information that 
they desperately need to do their jobs, the data won't bore them just because it's all displayed in the same 
way. They will definitely get aggravated, however, if forced to work harder than necessary to get the 
information they need due to arbitrary variety in the display media. In fact, wherever appropriate, 
www.it-ebooks.info

---

<!-- página 52 -->

consistency in the means of display allows viewers to use the same perceptual strategy for interpreting the 
data, which saves time and energy. 
Figure 3‐18 illustrates variety gone amok. This visual jumble requires a shift in perceptual strategy for each 
display item on the dashboard, which means extra time and effort on the user's part. 
 
Figure 3‐18. This dashboard exhibits an unnecessary variety of display media. 
3.7. Using Poorly Designed Display Media 
It isn't enough to choose the right medium to display the data and its messageyou also must design the 
components of that medium to communicate clearly and efficiently, without distraction. Most graphs used 
in business today are poorly designed. The reason is simple: almost no one has been trained in the 
fundamental principles and practices of effective graph design. This content is thoroughly covered in my 
book Show Me the Numbers: Designing Tables and Graphs to Enlighten, so I won't repeat myself here. 
Instead, I'll simply illustrate the problem with a few examples. 
In addition to the fact that a bar graph would have been a better choice to display this data (the division of 
revenue between six sales), Figure 3‐19 exhibits several design problems. Look at it for a moment and see if 
you can identify aspects of its design that inhibit quick and easy interpretation. 
www.it-ebooks.info

---

<!-- página 53 -->

Figure 3‐19. This pie chart illustrates several design problems. 
Here are the primary problems that I see: 
A legend was used to label and assign values to the slices of the pie. This forces our eyes to bounce back 
and forth between the graph and the legend to glean meaning, which is a waste of time and effort when 
the slices could have been labeled directly.  
The order of the slices and the corresponding labels appears random. Ordering them by size would have 
provided useful information that could have been assimilated instantly.  
The bright colors of the pie slices produce sensory overkill. Bright colors ought to be reserved for specific 
data that should stand out from the rest. 
The pie chart in Figure 3‐20 also illustrates a problem with color choice. 
 
Figure 3‐20. This pie chart uses of colors for the slices that are too much alike to be clearly distinguished. 
In this case, the 11 colors that were chosen are too similar. It is difficult to determine which of the hues 
along the yellow through orange to red spectrum in the legend corresponds to each slice of the pie. This 
kind of eye‐straining exercise is deadly, especially on a dashboard. 
Another example of an ineffective display medium is shown in Figure 3‐21. These meters are an attempt to 
be true to the metaphor of a car dashboard. Notice that the numbers look just like they would on an 
odometer: they lack the commas normally used to delineate every set of three digits to help us distinguish 
thousands from millions, and so on. In a misguided effort to make these meters look realistic, their 
developers made the numbers harder to readengineers designed these meters, not business people. Notice 
also that numbers along the quantitative scale are positioned inside rather than outside the axis, which will 
cause them to be obscured by the needle when it points directly to them, and that the positioning of the 
www.it-ebooks.info

---

<!-- página 54 -->

text at the bottom of each meter (for example, "4382934 Amount Sold" on the "Internet Revenue" meter) 
obstructs the needle for measures near the bottom or top of the scale. 
 
Figure 3‐21. These dashboard meters have definitely taken the dashboard metaphor too far. 
In the last section, I spoke of bar graphs as a preferable alternative to certain other display media. 
However, while bar graphs can do an excellent job of displaying quantitative data, they can be misused as 
well. Examine the graph in Figure 3‐22, and take a moment to list any problems with its design that you see. 
Write down your observations below before reading on, if you'd like. 
 
Figure 3‐22. This bar graph, found on a dashboard, exhibits several design problems. 
You might have noticed that the grid lines on the graph (not to mention the background pattern of colored 
rectangles) do nothing but distract from the data. Grid lines such as these, especially when visually 
prominent, make it more difficult to see the shape of the data. Perhaps you also noticed that the 3‐D effect 
of the graph not only added no value, but also made the values encoded by the bars harder to interpret. 
Anything else? Well, this graph illustrates a common problem with color. Why is each of the bars a different 
color? The colors aren't being used to identify the bars, as each one has a label to its left. Differences in the 
color of data‐encoding objects should always be meaningful; otherwise, they needlessly grab our attention 
and cause us to search for meaning that isn't there. 
The distinct colors of the bars in Figure 3‐23 do, thankfully, carry meaning, but here the colors are 
distractingly bright and the 3‐D effect makes them hard to read. 
www.it-ebooks.info

---

<!-- página 55 -->

Figure 3‐23. This bar graph, found on a dashboard, was poorly designed in a number of ways. 
However, this isn't the problem that I most want you to notice. The purpose of the graph is to compare 
actual to budgeted revenues for each of the four regions, but something about its design makes this 
difficult. Can you see the problem? Given its purpose, the bars for actual and budgeted revenues for each 
region should have been placed next to one another. As they are, it is unnecessarily difficult to compare 
them. Simple design mistakes like this can significantly undermine the success of a dashboard. 
Several of the examples that we've examined have been rendered in 3D, even though the third dimension 
of depth doesn't encode any meaning. Even when the third dimension is used to encode a separate 
variable, however, it still poses a problem. The graph in Figure 3‐24 uses the third dimension of depth to 
represent time (the four quarters of the year 2001). The problem in this case isn't that the third dimension 
is meaningless, but rather that you can't read everything on the chart. This is caused by occlusion. Adding 
the dimension of depth causes some of the bars to be hidden behindor occluded byothers. For instance, 
what were fax revenues for Quarter 3? You can't tell because the bar is completely hidden. Whether the 
third dimension is used to encode data or not, you should almost always avoid 3‐D graphs. Exceptions to 
this rule are rare when displaying typical business data. 
 
Figure 3‐24. This 3‐D bar graph illustrates the problem of occlusion. 
www.it-ebooks.info

---

<!-- página 56 -->

3.8. Encoding Quantitative Data Inaccurately 
Sometimes graphical representations of quantitative data are mistakenly designed in ways that display 
inaccurate values. In Figure 3‐25, for instance, the quantitative scale along the vertical axis was improperly 
set for a graph that encodes data in the form of bars. The length of a bar represents its quantitative value. 
The bars in this graph that represent revenue and costs for the month of January suggest that revenue was 
about four times costs. An examination of the scale, however, reveals the error of this natural assumption: 
the revenue is actually less than double the costs. The problem is that the values begin at $500,000 rather 
than $0, as they always should in a bar graph. 
 
Figure 3‐25. This bar graph encodes the quantitative values as bars inaccurately, by failing to begin the scale at zero. 
3.9. Arranging the Data Poorly 
Dashboards often need to present a large amount of information in a limited amount of space. If the 
information isn't organized well, with appropriate placement of information based on importance and 
desired viewing sequence, along with a visual design that segregates data into meaningful groups without 
fragmenting it into a confusing labyrinth, the result is a cluttered mess. Most examples of dashboards 
found on the Web are composed of a small amount of data to avoid the need for skilled visual design, but 
they still often manage to look cluttered and thrown together. The goal is not simply to make the 
dashboard look good, but to arrange the data in a manner that fits the way it's used. The most important 
data ought to be prominent. Data that require immediate attention ought to stand out. Data that should be 
compared ought to be arranged and visually designed to encourage comparisons. 
The dashboard in Figure 3‐26 illustrates some of the problems often associated with poor arrangement of 
data. Notice first of all that the most prominent position on this dashboardthe top leftis used to display the 
vendor's logo and navigational controls. What a waste of prime real estate! As you scan down the screen, 
the next information that you see is a gauge that presents the average order size. It's possible that average 
order size might be someone's primary interest, but it's unlikely that, of all the information that appears on 
this dashboard, this is the most important. As I'll discuss in Chapter 5, Eloquence Through Simplicity, the 
least prominent real estate on the screen is the lower‐right corner. However, in this example the large 
amount of space taken up by the graphs that present "Computers Returns Across Models," as well as the 
larger font sizes used in this section, tends to draw attention to data that seems tangential to the rest. This 
dashboard lacks an appropriate visual sequence and balance based on the nature and importance of the 
www.it-ebooks.info

---

<!-- página 57 -->

data. Notice also that the bright red bands of color above each section of the display, where the titles 
appear in white, are far more eye‐catching than is necessary to declare the meanings of the individual 
displays. This visually segments the space to an unnecessary degree. Lastly, note that the similarity of the 
line graphs that display order size and profit trends invites our eyes to compare them. This is probably a 
useful comparison, but the positional separation and side‐by‐side rather than over‐under arrangement of 
the two graphs makes close comparison difficult. As this example illustrates, you can't just throw 
information onto the screen wherever you can make it fit and expect the dashboard to do its job 
effectively. 
 
Figure 3‐26. This dashboard exemplifies poorly arranged data. 
3.10. Highlighting Important Data Ineffectively or Not at All 
When you look at a dashboard, your eyes should immediately be drawn to the information that is most 
important, even when it does not reside in the most visually prominent areas of the screen. In Chapter 5, 
Eloquence Through Simplicity, we'll examine several visual techniques that can be used to achieve this end. 
For now, we'll look at what happens when this isn't done at all, or isn't done well. 
The problem with the dashboard in Figure 3‐27 is that everything is visually prominent, and consequently 
nothing stands out. The logo and navigation controls (the buttons on the left) are prominent both as a 
result of their placement on the screen and the use of strong borders, but these aren't data and therefore 
shouldn't be emphasized. Then there are the graphs where the data reside: all the data are equally bold 
and colorful, leaving us with a wash of sameness and no clue where to focus. Everything that deserves 
space on a dashboard is important, but not equally sothe viewer's eyes should always be directed to the 
most crucial information first. 
www.it-ebooks.info

---

<!-- página 58 -->

Figure 3‐27. This dashboard fails to differentiate data by its importance, giving relatively equal prominence to everything on the 
screen. 
3.11. Cluttering the Display with Useless Decoration 
Another common problem on the dashboards that I find on vendor web sites is the abundance of useless 
decoration. They either hope that we will be drawn in by the artistry or assume that the decorative 
flourishes are necessary to entertain us. I assure you, however, that even people who enjoy the decoration 
upon first sight will grow weary of it in a few days. 
The makers of the dashboard in Figure 3‐28 did an exceptional job of making it look like an electronic 
control panel. If the purpose were to train people in the use of some real equipment by means of a 
simulation, this would be great, but that isn't the purpose of a dashboard. The graphics dedicated to this 
end are pure decoration, visual content that the viewer must process to get to the data. 
www.it-ebooks.info

---

<!-- página 59 -->

Figure 3‐28. This dashboard is trying to look like something that it is not, resulting in useless and distracting decoration. 
I suspect that the dashboard in Figure 3‐29 looked too plain to its designer, so she decided to make it look 
like a page in a spiral‐bound bookcute, but a distracting waste of space. 
 
Figure 3‐29. This dashboard is another example of useless decorationthe designer tried to make the dashboard look like a page 
in a spiral‐bound notebook. 
www.it-ebooks.info

---

<!-- página 60 -->

Likewise, I'd guess that the designer of the dashboard in Figure 3‐30 after creating a map, a bar graph, and 
a table that all display the same data decided that he had to fill up the remaining space, so he went wild 
with an explosion of blue and gray circles. Blank space is better than meaningless decoration. Can you 
imagine yourself looking at this every day? 
 
Figure 3‐30. This dashboard is a vivid example of distracting ornamentation. 
The last example, Figure 3‐31, includes several elements of decoration that ought to be eliminated. To 
begin with, a visually ornate logo and title use up the most valuable real estate across the entire top of the 
dashboard. If a logo must be included for branding purposes, make it small and visually subtle, and place it 
somewhere out of the way. The background colors of gold and blue certainly draw our eyes to the data, but 
they do so in an unnecessarily heavy‐handed manner. Also, the color gradients from dark to light provide 
visual interest that supports no real purpose and is therefore distracting. Lastly, the maps in the 
background of the three upper graphs, though visually muted, still distract from the data itself. 
www.it-ebooks.info

---

<!-- página 61 -->

Figure 3‐31. This dashboard exhibits several examples of dysfunctional decoration. 
As data visualization expert Edward Tufte observes: 
Inept graphics also flourish because many graphic artists believe that statistics are 
boring and tedious. It then follows that decorated graphics must pep up, animate, 
and all too often exaggerate what evidence there is in the data… If the statistics are 
boring, then you've got the wrong numbers.1 
3.12. Misusing or Overusing Color 
We've already seen several examples of misused or overused color. The remaining point that I want to 
emphasize here is that color should not be used haphazardly. 
                                                           
1 Edward R. Tufte, The Visual Display of Quantitative Information (Cheshire, CT: Graphics Press, 1983), 80. 
www.it-ebooks.info

---

<!-- página 62 -->

Color choices should be made thoughtfully, with an understanding of how we perceive color and the 
significance of color differences. Some colors are hot and demand our attention, while others are cooler 
and less visible. When any color appears as a contrast relative to the norm, our eyes pay attention and our 
brains attempt to assign meaning to that contrast. When colors in two different sections of a dashboard are 
the same, we are tempted to relate them to one another. We merrily assume that we can use colors such 
as red, yellow, and green to assign important meanings to data, but in doing so we exclude the 10% of 
males and 1% of females who are color‐blind. In Chapter 4, Tapping into the Power of Visual Perception, 
we'll learn a bit about color and how it can be used meaningfully and powerfully. 
3.13. Designing an Unattractive Visual Display 
Not being one to mince words for the sake of propriety, I'll state quite directly that some dashboards are 
just plain ugly. When we see them, we're inclined to avert our eyes hardly the desired reaction to a screen 
that's supposed to be supplying us with important information. You might have assumed from my earlier 
warning against unnecessary decoration that I have no concern for dashboard aesthetics, but that's not the 
case. When a dashboard is unattractive unpleasant to look at the viewer is put in a frame of mind that is 
not conducive to its use. I'm not advocating that we add touches to make dashboards pretty, but rather 
that we attractively display the data itself, without adding anything that distracts from or obscures it. (We'll 
examine the aesthetics of dashboard design a bit in Chapter 7, Designing Dashboards for Usability.) 
Figure 3‐32 on the next page is a stellar example of unattractive dashboard design. It appears that the 
person who created this dashboard attempted to make it look nice, but he just didn't have the visual design 
skills needed to succeed. For instance, in an effort to fill up the space, some sections (such as the graph at 
the bottom right) were simply stretched. Also, although shades of gray can be used effectively as the 
background color of graphs, this particular shade is too dark. The image that appears under the title 
"Manufacturing" is clearly an attempt to redeem this dreary dashboard with a splash of decoration, but it 
only serves to distract from the data and isn't even particularly nice to look at. The guiding design principle 
of simplicity alone would have saved this dashboard from its current agony. 
www.it-ebooks.info

---

<!-- página 63 -->

Figure 3‐32. This is an example of a rather unattractive dashboard. 
You don't need to be a graphic artist to design an attractive dashboard, but you do need to understand a 
few basic principles about visual perception. We'll examine these in the next chapter. 
 
 
www.it-ebooks.info

---

<!-- página 64 -->

Chapter 4. Tapping into the Power of Visual Perception 
Vision is by far our most powerful sense. Seeing and thinking are intimately connected. To display data 
effectively, we must understand a bit about visual perception, gleaning from the available body of scientific 
research those findings that can be applied directly to dashboard design: what works, what doesn't, and 
why. 
 
 
www.it-ebooks.info

---

<!-- página 65 -->

Understanding the limits of short‐term memory  
Visually encoding data for rapid perception  
Gestalt principles of visual perception 
It isn't accidental that when we begin to understand something we say, "I see." Not "I hear" or "I smell," but 
"I see." Vision dominates our sensory landscape. As a sensophile, I cherish the rich abundance of sounds, 
smells, tastes, and textures that inhabit our world, but none of these provides the rich volume, bandwidth, 
and nuance of information that I perceive through vision. Approximately 70% of the sense receptors in our 
bodies are dedicated to vision, and I suspect that there is a strong correlation between the extensive 
brainpower and dominance of visual perception that have co‐evolved in our species. How we see is closely 
tied to how we think. 
I've learned about visual perception from many sources, but one stands out above the others in its 
application to information design: the book Information Visualization: Perception for Design by Colin Ware. 
Dr. Ware expresses the importance of studying visual perception beautifully: 
Why should we be interested in visualization? Because the human visual system is a 
pattern seeker of enormous power and subtlety. The eye and the visual cortex of the 
brain form a massively parallel processor that provides the highest‐bandwidth 
channel into human cognitive centers. At higher levels of processing, perception and 
cognition are closely interrelated…However, the visual system has its own rules. We 
can easily see patterns presented in certain ways, but if they are presented in other 
ways, they become invisible…The more general point is that when data is presented 
in certain ways, the patterns can be readily perceived. If we can understand how 
perception works, our knowledge can be translated into rules for displaying 
information. Following perception‐based rules, we can present our data in such a 
way that the important and informative patterns stand out. If we disobey the rules, 
our data will be incomprehensible or misleading.1 
We'll concentrate our look at visual perception on the following areas: 
 
The limits of short‐term visual memory 
 
Visual encoding for rapid perception 
 
Gestalt principles of visual perception 
Each of these topics can be applied directly to the design of dashboards. 
4.1. Understanding the Limits of Short­Term Memory 
In truth, we don't see with our eyes; we see with our brains. Our eyes are the sensory mechanisms through 
which light enters and is translated by neurons into electrical impulses that are passed on to and around in 
our brains, but our brains are where perceptionthe process of making sense of what our eyes 
registeractually occurs. 
                                                           
1 Colin Ware, Information Visualization: Perception for Design, Second Edition (San Francisco: Morgan Kauffman, 
2004), xxi. 
www.it-ebooks.info

---

<!-- página 66 -->

Our eyes do not register everything that is visible in the world around us, but only what lies within their 
span of perception. Only a portion of what our eyes sense becomes an object of focus. Only through focus 
does what we see become more than a vague sense. Only a fraction of what we focus on becomes the 
object of attention or conscious thought. Finally, only a little bit of what we attend to gets stored away for 
future use. Without these limits and filters, perception would overwhelm our brains. 
Our memories store information starting the moment we see something, continuing as we consciously 
process the information, and finally accumulating over years in a permanent (or nearly so) storage area 
where information remains ready for use if ever needed againthat is, until access to that information 
eventually begins to atrophy. 
Memory comes in three fundamental types: 
 
Iconic memory (a.k.a. the visual sensory register) 
 
Short‐term memory (a.k.a. working memory) 
 
Long‐term memory 
Iconic memory is a lot like the visual memory buffer of a computer: a place where images are briefly held 
until they can be moved to random access memory (RAM), where they reside while being processed by the 
CPU. Even though what goes on in iconic memory is preconscious, a certain type of processingknown as 
preattentive processing occurs nonetheless. Certain attributes of what we see are recognized during 
preattentive processing at an extraordinarily high speed, which results in certain things standing out and 
particular sets of objects being grouped together, all without conscious thought. Preattentive processing 
plays a powerful role in visual perception, and we can intentionally design our dashboards to take 
advantage of this if we understand a bit about it. 
Short‐term memory is where information resides during conscious processing. The most important things 
to know about short‐term memory are: 
 
It is temporary.1 
 
A portion of it is dedicated to visual information. 
 
It has a limited storage capacity. 
We can store only three to nine chunks of visual information at a time in short‐term memory. When its 
capacity is full, for something new to be brought into short‐term memory, something that's already there 
must either be moved into long‐term memory or simply removed altogether (that is, forgotten). What 
constitutes a "chunk" of visual information varies depending on the nature of the objects we are seeing, 
aspects of their design, and our familiarity with them. For instance, individual numbers on a dashboard are 
stored as discrete chunks, but a well‐designed graphical pattern, such as the pattern formed by one or 
more lines in a line graph, can represent a great deal of information as a single chunk. This is one of the 
great advantages of graphs (when used appropriately and skillfully designed) over text. Dashboards should 
be designed in a way that supports optimal chunking together of information so that it can be perceived 
and understood most efficiently, in big visual gulps. 
                                                           
1 Information remains in short‐term memory from a few seconds to as long as a few hours if periodically rehearsed; 
then it is flushed. If rehearsed in a particular way, information is moved from short‐term memory to long‐term 
memory, where it is stored more permanently for later recall. When information is recalled from long‐term memory, 
it is temporarily moved once again into short‐term memory, where it is processed. 
www.it-ebooks.info

---

<!-- página 67 -->

The limited capacity of short‐term memory is also the reason why information that belongs together should 
never be fragmented into multiple dashboards, and scrolling shouldn't be required to see it all. Once the 
information is no longer visible, unless it is one of the few chunks of information stored in short‐term 
memory, it is no longer available. If you scroll or page back to see it again, you then lose access to what you 
were most recently viewing. As long as everything you need remains within eye span on a single dashboard, 
however, you can rapidly exchange information in and out of short‐term memory at lightning speed. 
4.2. Visually Encoding Data for Rapid Perception 
Preattentive processing, the early stage of visual perception that rapidly occurs below the level of 
consciousness, is tuned to detect a specific set of visual attributes. Attentive processing is sequential, and 
therefore much slower. The difference is easy to demonstrate. Take a moment to examine the four rows of 
numbers in Figure 4‐1, and try to determine as quickly as you can the number of times the number 5 
appears in the list. 
 
Figure 4‐1. How many fives are in this list? Note the slow speed at which we process visual stimuli that lack preattentive 
attributes. 
How many did you find? The correct answer is six. Whether you got the answer right or not, the process 
took you a while because it involved attentive processing. The list of numbers did not exhibit any 
preattentive attributes that you could use to distinguish the fives from the other numbers. Now try it again, 
this time using the list of numbers in Figure 4‐2. 
 
Figure 4‐2. How many fives do you see now? Note the fast speed at which we process visual stimuli that exhibit preattentive 
attributes. 
Much easier this time, wasn't it? In this figure the fives could easily be distinguished from the other 
numbers, due to their differing color intensity (one of the preattentive attributes we'll discuss below): the 
fives are black while all the other numbers are gray, which causes them to stand out in clear contrast. Why 
couldn't we easily distinguish the fives in the first set of numbers (Figure 4‐1) based purely on their unique 
shape? Because the complex shapes of the numbers are not attributes that we perceive preattentively. 
Simple shapes such as circles and squares are preattentively perceived, but the shapes of numbers are too 
elaborate. 
In Information Visualization: Perception for Design, Colin Ware suggests that the preattentive attributes of 
visual perception can be organized into four categories: color, form, spatial position, and motion. For our 
present interest related to dashboard design, I've reduced his larger list of 17 preattentive attributes to the 
following 11: 
www.it-ebooks.info

---

<!-- página 68 -->

Table 4‐1.  
 
Category  Attribute 
Illustration 
Color 
Hue 
 
Intensity 
Position 
2‐D location 
Form 
Orientation 
 
Line length 
 
Line width 
 
Size 
www.it-ebooks.info

---

<!-- página 69 -->

Shape 
 
Added 
marks 
 
Enclosure 
Motion 
Flicker 
A visual attribute of an object, such as color, continuously changes back and forth 
between two values, or the entire object it‐self repeatedly appears and then 
disappears. 
 
Each of these visual attributes can be consciously applied to dashboard design to group or highlight 
information. Some can be used to encode quantitative information as well, as we'll discuss below. 
4.2.1. Attributes of Color 
A common way to describe color combines three attributes: hue, saturation, and lightness/brightness. This 
is sometimes referred to as the HSL or HSB system of describing color. Hue is a more precise term for what 
we normally think of as color (red, green, blue, purple, etc.). Saturation measures the degree to which a 
particular hue exhibits its full, pure essence. The saturation of the red hue in Figure 4‐3 ranges from 0% 
saturation on the left to 100% saturation on the right. 
 
Figure 4‐3. The full range of color saturation, in this case of the hue red, with 0% saturation on the left and 100% saturation on 
the right. 
Lightness (or brightness) measures the degree to which any hue appears dark or light, ranging from fully 
dark (black) to fully light (white). The full range of lightness is shown for the red hue in Figure 4‐4. 
 
www.it-ebooks.info

---

<!-- página 70 -->

Figure 4‐4. The full range of color lightness, in this case of the hue red, with 0% lightness on the left (pure black) and 100% 
lightness on the right (pure white). 
Intensity refers to both saturation and lightness. The illustration of color intensity on Section 4.2 shows a 
circle that varies from the others not as a different hue but as a lighter (that is, less intense) version of the 
same hue. Both are different points along a color scale that ranges from white (no brown) to a rich dark 
shade of brown (fully brown). It really isn't necessary to fully understand the technical distinction between 
saturation and lightness, which is why I describe them both more simply as intensity. 
One of the interesting (but hardly intuitive) things about color is that we don't perceive color in an absolute 
way. What we see is dramatically influenced by the context that surrounds it. Take a look at the gray 
squares in Figure 4‐5. They appear to vary in intensity, but in fact they are all exactly the same as the lone 
square that appears against a white background at the bottom. 
 
Figure 4‐5. Context affects our perception of color intensity. The small square is actually the exact same shade of gray 
everywhere it appears. 
All five squares have a color value of 50% black, yet the surrounding gray‐scale gradient, ranging from light 
on the left to dark on the right, alters our perception of them. This perceptual illusion applies not only to 
intensity, but to hue. In Figure 4‐6, the word "Text" appears against two backgrounds: red and blue. In both 
cases, the color of the word "Text" is the same. However, it not only looks different, but it's much less 
visible against the red background. 
 
Figure 4‐6. Context also affects our perception of hue. The word "Text" is exactly the same hue in both boxes. 
Color must be used with a full awareness of context. We not only want data to be fully legible, but also to 
appear the same when we wish it to appear the same and different when we wish it to appear different. 
4.2.2. Attributes of Form 
Some of the visual attributes of form have no obvious connection to dashboard design, but their relevance 
should become clear with a little explanation. The most common application of orientation is in the form of 
www.it-ebooks.info

---

<!-- página 71 -->

italicized text, which is text that has been reoriented from straight up and down to slightly slanted to the 
right. I usually discourage the use of italicized text as a means of making some words stand out from the 
rest, because italics are harder to read than normal vertically oriented text. However, it is sometimes useful 
in a pinch. 
In dashboard design, the attribute of line length is most useful for encoding quantitative values as bars in a 
bar graph. Line width, on the other hand, can be useful for highlighting purposes. You can think of line 
width as the thickness or stroke weight of a line. When lines are used to underline content or, in the form 
of boxes, to form borders around content, you can draw more attention to that content by increasing the 
thickness of the lines. 
The relative sizes of objects that appear on a dashboard can be used to visually rank their importance. For 
instance, larger titles for sections of content, or larger tables, graphs, or icons, can be used to declare the 
greater importance of the associated data. Simple shapes can be used in graphs to differentiate data sets 
and, in the form of icons, to assign distinct meanings, such as different types of alerts. Added marks are 
most useful on dashboards in the form of simple icons that appear next to data that need attention. Any 
simple mark (such as a circle, a square, an asterisk, or an X), when placed next to information only when it 
must be highlighted, works as a simple means of drawing attention. Last on the list of form attributes is 
enclosure, which is a powerful means of grouping sections of data or, when used sparingly, highlighting 
content as important. To create the visual effect of enclosure, you can use either a border or a fill color 
behind the content. 
4.2.3. Attributes of Position 
The preattentive attribute 2‐D position is the primary means that we use to encode quantitative data in 
graphs (for example, the position of data points in relation to a quantitative scale). This isn't arbitrary. Of all 
the preattentive attributes, differences in 2‐D position are the easiest and most accurate to perceive.1 
4.2.4. Attributes of Motion 
As I type these words, I am aware of my cursor flickering on and off on the screen. Flicker was chosen as 
the means to help us locate the cursor because it is a powerful attention‐getter. Evolution has equipped us 
with a heightened sensitivity to something that suddenly appears within our field of vision. Our ancient 
ancestors found it very valuable to become instantly alert when a saber‐toothed tiger suddenly sprang into 
their peripheral vision. As I'm sure you're aware, flickering objects on a screen can be quite annoying and 
thus should usually be avoided. Still, there are occasions when flicker is useful. This is especially true for 
dashboards that are constantly updated with real‐time data and are used to monitor operations that 
require immediate responses. 
4.2.5. Encoding Quantitative Versus Categorical Data 
Some of the preattentive attributes that we've examined can be used to communicate quantitative data, 
while others can be used only to communicate categorical data. That is, while some attributes allow us to 
perceive one thing as greater than others in some way (bigger, taller, more important), others merely 
indicate that items are distinct from one another, without any sense of some being greater than or less 
than others. For example, different shapes can be perceived as distinct, but only categorically. Squares are 
                                                           
1 Perhaps you've noticed that I've specified "2‐D" positionan object's location relative to the vertical and horizontal 
dimensions onlyand have ignored 3‐D position, also known as stereoscopic position. 3‐D position is also a preattentive 
attribute, but the pseudo‐3‐D effect that can be produced on the flat surface of a computer screen comes with a bevy 
of perceptual problems that complicate its use. 3‐D elements are so rarely necessary to communicate business 
information and so difficult to design effectively that I recommend that you avoid using them altogether. 
www.it-ebooks.info

---

<!-- página 72 -->

not greater than triangles or circlesthey're just different. The following table again lists each of the 
preattentive attributes and indicates which are quantitatively perceived: 
Table 4‐2.  
Category 
Attribute 
Quantitative 
Color 
Hue 
Intensity 
No 
Yes, but limited 
Position 
2‐D position 
Yes 
Form 
Orientation 
Line length 
Line width 
Size 
Shape 
Added marks 
Enclosure 
No 
Yes 
Yes, but limited 
Yes, but limited 
No 
No 
No 
Motion 
Flicker 
Yes, based on speed, but limited 
 
 
Note: You might argue that we can perceive orientation and curvature quantitatively, but there is no 
natural association of greater or lesser value with different orientations or degrees of curvature (for 
example, which is greater, a vertical or horizontal line?).  
 
We can use those attributes with quantitative perception described as "Yes, but limited" to encourage 
perception of one thing as greater than, equal to, or less than another, but not with any degree of 
precision. For example, in Figure 4‐7, it is obvious that the circle on the right is bigger than the circle on the 
left, but how much bigger? If the small circle has a size of one, what is the size of the bigger circle? 
 
Figure 4‐7. This illustrates our inability to assign precise quantitative values to objects of different sizes. 
The correct answer is 16, but it's likely that you guessed a lower number. Humans tend to underestimate 
differences in 2‐D areas, and hence you must be wary of using 2‐D areas of different sizes to encode 
quantitative values especially on a dashboard, where speed of interpretation is essential. 
www.it-ebooks.info

---

<!-- página 73 -->

It is important to understand the different ways that the preattentive attributes can be used to group and 
encode data, but by splitting them along these lines quantitative and categorical do not mean to imply that 
only those attributes that enable viewers to make quantitative comparisons are of use to dashboard 
designers. Our inability to perceive certain preattentive attributes quantitatively does not render them 
useless to us. Each of them can be used to divide data into distinct categories, to visually link data together 
even when it is separated spatially, and to highlight data. 
4.2.6. Limits to Perceptual Distinctness 
When designing dashboards, bear in mind that there is a limit to the number of distinct expressions of a 
single preattentive attribute that we can quickly and easily distinguish. For example, when using varying 
intensities of the color gray to distinguish data sets in a line graph, you must make sure that the color of 
each line is different enough from those closest in color to it to clearly stand out as distinct. When you 
place enough perceptual distance between the color intensities of the separate lines to make them 
sufficiently distinct, there's a practical limit of about five to the number of distinct expressions that are 
available across the gray scale. In Figure 4‐8, it is easy to see that it would be difficult to include more gray 
lines that would stand out as distinct without requiring careful, conscious, and thus slow examination on 
the part of the viewer. 
 
Figure 4‐8. There is a practical limit of about five distinct color intensities on the gray‐scale continuum that can be used to 
encode separate lines in a graph. 
Similar limits apply to every one of the preattentive attributes, except line length (such as the length of a 
bar on a graph) and 2‐D location (such as the location of a data point on a graph). When organizing data 
into distinct groups using different expressions of any preattentive attribute, you should be careful not to 
exceed five distinct expressions. When using the shape attribute, in addition to this limit you must also be 
careful to choose shapes that are simple, such as circles, squares, triangles, dashes, and crosses (or Xs). 
Remember that complex shapes, including most icons, are not perceived preattentively. When using hue, 
keep in mind that even though we can easily distinguish more than five hues, short‐term memory can't 
simultaneously retain the meaning of more than about nine in total. Also, the use of too many hues results 
in a dashboard that looks cluttered, with too many distinctions to sort through quickly. When designing 
dashboards, it helps to prepare standard sets of hues, color intensities, shapes, and so on from which to 
www.it-ebooks.info

---

<!-- página 74 -->

choose, and then stick to them. This will keep the display perceptually simple and will eliminate the need to 
select visual attributes from scratch each time you must choose one. 
4.2.7. Using Vivid and Subtle Colors Appropriately 
Color is so often misused in dashboard design that I'm compelled to emphasize one more principle of its 
use. Some colors are soothing, and some take hold of us and shake us around. Knowing the difference is 
quite important. There are times when particular information needs to grab the viewer's attention in an 
unavoidable way, but using color for this purpose works only if it's done sparingly. Reserve the use of 
bright, fully saturated color for these special cases. Colors that are common in nature, such as soft grays, 
browns, oranges, greens, and blues, work very well as a standard color palette for dashboards. They allow 
the viewer to peruse the dashboard calmly with an open mind, rather than stressfully, with pinpoint 
attention in response to assaulting colors. Figure 4‐9 displays examples of standard and bold color palettes. 
 
Figure 4‐9. Examples of two color palettes: one for standard use and one for emphasis. 
4.3. Gestalt Principles of Visual Perception 
Back in 1912, the Gestalt School of Psychology began its fruitful efforts to understand how we perceive 
pattern, form, and organization in what we see. The German term "gestalt" simply means "pattern." These 
researchers recognized that we organize what we see in particular ways in an effort to make sense of it. 
Their work resulted in a collection of Gestalt principles of perception that reveal those visual characteristics 
that incline us to group objects together. These principles still stand today as accurate and useful 
descriptions of visual perception, and they offer several useful insights that we can apply directly in our 
dashboard designs to intentionally tie data together, separate data, or make some data stand out as 
distinct from the rest. 
We'll examine the following six principles: 
 
Proximity 
 
Closure 
 
Similarity 
 
Continuity 
 
Enclosure 
 
Connection 
www.it-ebooks.info

---

<!-- página 75 -->

4.3.1. The Principle of Proximity 
We perceive objects that are located near one another as belonging to the same group. Figure 4‐10 clearly 
illustrates this principle. Based on their relative locations, we automatically see the dots as belonging to 
three separate groups. This is the simplest way to link data that you want to be seen together. White space 
alone is usually all you need to separate these groups from the other data that surrounds them. 
 
Figure 4‐10. The Gestalt principle of proximity explains why we see 3 groups instead of just 10 dots in this image. 
The principle of proximity can also be used to direct viewers to scan data on a dashboard predominantly in 
a particular direction: either left to right or top to bottom. Placing sections of data closer together 
horizontally encourages viewers' eyes to group the sections horizontally, and thus to scan from left to right. 
Placing sections of data closer together vertically achieves the opposite effect. 
Notice how subtly this works in Figure 4‐11. You are naturally inclined to scan the small squares that appear 
on the left horizontally as rows and the ones on the right vertically as columns, all because of how they are 
positioned in relation to each other. 
 
Figure 4‐11. The Gestalt principle of proximity can be used to encourage either horizontal or vertical scanning. 
4.3.2. The Principle of Similarity 
We tend to group together objects that are similar in color, size, shape, and orientation. Figure 4‐12 
illustrates this tendency. 
www.it-ebooks.info

---

<!-- página 76 -->

Figure 4‐12. When objects share some visual attribute in common, we tend to see them as belonging to the same group. 
This principle reinforces what we've already learned about the usefulness of color (both hue and intensity), 
size, shape, and orientation to encode categorical variables. The principle of similarity applies very 
effectively to groups of visual objects that vary as different expressions of preattentive attributes such as 
these. It works especially well as a means of identifying different data sets in a graph (for example, income, 
expenses, and profits). Even when data that we wish to link resides in separate locations on a dashboard, 
the principle of similarity can be applied to establish that link. 
For instance, if you wish to tie together revenue information that appears in various graphs, you can do so 
by using the same color to encode it wherever it appears. This technique can be useful for encouraging 
comparisons of any data that appear in various places, such as order count, order size, and order revenue. 
4.3.3. The Principle of Enclosure 
We perceive objects as belonging together when they are enclosed by anything that forms a visual border 
around them (for example, a line or a common field of color). This enclosure causes the objects to appear 
to be set apart in a region that is distinct from the rest of what we see. Notice how strongly your eyes are 
induced to group the enclosed objects in Figure 4‐13. 
 
Figure 4‐13. The Gestalt principle of enclosure points out that any form of visual enclosure causes us to see the enclosed objects 
as a group. 
The arrangement of the two sets of circles in this figure is exactly the same, yet the differing enclosures 
direct us to group the circles in very different ways. This principle is exhibited frequently in the use of 
borders and fill colors or shading in tables and graphs to group information and set it apart. As you can see, 
it does not take a strong enclosure (e.g., bright, thick lines or dominant colors) to create a strong 
perception of grouping. 
www.it-ebooks.info

---

<!-- página 77 -->

4.3.4. The Principle of Closure 
Humans have a keen dislike for loose ends. When faced with ambiguous visual stimuliobjects that could be 
perceived either as open, incomplete, and unusual forms or as closed, whole, and regular formswe 
naturally perceive them as the latter. The principle of closure asserts that we perceive open structures as 
closed, complete, and regular whenever there is a way that we can reasonably do so. Figure 4‐14 illustrates 
this principle. 
 
Figure 4‐14. The Gestalt principle of closure explains why we see these as closed shapes, despite the fact that they are not 
finished. 
It is natural for us to perceive what appears on the left in Figure 4‐14 as a rectangle rather than two sets of 
three connected lines connected at right angles and to perceive the object on the right as a complete oval 
rather than simply a curved line. 
We can apply this tendency to perceive whole structures in dashboards, especially in the design of graphs. 
For example, we can group objects (points, lines, or bars in a graph, etc.) into visual regions without the use 
of complete borders or background colors to define the space. This is preferable, because the need to 
display a large collection of data in a small amount of space requires that we eliminate all visual content 
that is not absolutely necessary, to avoid clutter. As shown in Figure 4‐15, it is sufficient to define the area 
of a graph through the use of a single set of X and Y axes, rather than by lines that form a complete 
rectangle around the graph, with or without a fill color. 
 
Figure 4‐15. The Gestalt principle of closure also explains why only two axes, rather than full enclosure, are required on a graph 
to define the space in which the data appears. 
www.it-ebooks.info

---

<!-- página 78 -->

4.3.5. The Principle of Continuity 
We perceive objects as belonging together, as part of a single whole, if they are aligned with one another or 
appear to form a continuation of one another. In Figure 4‐16, for instance, we tend to see the individual 
lines as a continuation of one another, more as a dashed line than separate lines. 
 
Figure 4‐16. The Gestalt principle of continuity explains why we see this as a single wavy line. 
Things that are aligned with one another appear to belong to the same group. In the table in Figure 4‐17, it 
is obvious which items are division names and which are department names, based on their distinct 
alignment. Divisions, departments, and headcounts are clearly grouped, without any need for vertical grid 
lines to delineate them. Even though the division and department columns overlap with no white space in 
between, their distinct alignment alone makes them easy to distinguish. This same technique can be used 
to tie together separate sections of data on a dashboard. 
 
Figure 4‐17. The Gestalt principle of continuity also explains how the indentation of text works as a means to group information. 
4.3.6. The Principle of Connection 
We perceive objects that are connected in some way, such as by a line, as part of the same group. In Figure 
4‐18, even though the circles are nearer to one another vertically than horizontally, the lines that connect 
them create a clear perception of two horizontally attached pairs. 
www.it-ebooks.info

---

<!-- página 79 -->

Figure 4‐18. The Gestalt principle of connection explains why we see these dots grouped by rows rather than columns. 
As Figure 4‐19 illustrates, the perception of grouping produced by connection is stronger than that 
produced by proximity or similarity (color, size, and shape); it is weaker only than that produced by 
enclosure. The principle of connection is especially useful for tying together non‐quantitative datafor 
example, to represent relationships between steps in a process or between employees in an organization. 
 
Figure 4‐19. When objects are connected, such as by the lines in these examples, they are grouped together more powerfully 
than by just about any other visual means. Only the enclosure in the rightmost example more strongly groups the two squares 
on the right than the connections formed by the lines. 
4.4. Applying the Principles of Visual Perception to Dashboard Design 
Two of the greatest challenges in dashboard design are to make the most important data stand out from 
the rest, and to arrange what is often a great deal of disparate information in a way that makes sense, gives 
it meaning, and supports its efficient perception. An understanding of the preattentive attributes of visual 
perception and the Gestalt principles provides a useful conceptual foundation for facing these challenges. It 
is much more helpful to understand how and why something works than to simply understand that 
something works. If you understand the how and why, when you're faced with new challenges you'll be 
able to determine whether or not the principles apply and how to adapt them to the new circumstances. If 
you've simply been told that something works in a specific situation, you'll be stuck when faced with 
conditions that are even slightly different. 
As you proceed into the coming chapters, you'll have several opportunities to reinforce your grasp of visual 
perception by applying what you've learned to several real‐world dashboard design problems. 
 
 
www.it-ebooks.info

---

<!-- página 80 -->

Chapter 5. Eloquence Through Simplicity 
Now that you're familiar with some of the science behind dashboard design, it's time to take a look at a few 
strategies you can employ to create effective displays. The guiding principle in dashboard design should 
always be simplicity: display the data as clearly and simply as possible, and avoid unnecessary and 
distracting decoration. 
 
 
www.it-ebooks.info

---

<!-- página 81 -->

Characteristics of a well‐designed dashboard  
Reducing the non‐data pixels  
Enhancing the data pixels 
In earlier chapters, we concentrated on what doesn't work. Now it's time to shift our focus to what does, 
beginning with the design process itself the goals and steps necessary to produce dashboards that inform 
rapidly with impeccable clarity. 
5.1. Characteristics of a Well­Designed Dashboard 
The fundamental challenge of dashboard design involves squeezing a great deal of useful and often 
disparate information into a small amount of space, all the while preserving clarity. This certainly isn't the 
only challenge others abound, such as selecting the right data in the first place but it is the primary 
challenge that is particular to dashboards. Limited to a single screen to keep all the data within eye span, 
dashboard real estate is extremely valuable: you can't afford to waste an inch. Fitting everything in without 
sacrificing meaning doesn't require muscles, it requires finesse. 
 
Figure 5‐1. The fundamental challenge of dashboard design is to effectively display a great deal of often disparate data in a small 
amount of space. 
Unless you know what you're doing, you'll end up with a cluttered mess. Think for a moment about the 
cockpit of a commercial jet. Years of effort went into its design to ensure that despite the many things 
www.it-ebooks.info

---

<!-- página 82 -->

pilots must monitor, they can see everything that's going on at a glance. Every time I board a plane, I'm 
grateful that skilled designers worked hard to present this information effectively. Similar care is needed for 
the design of dashboards, but unlike aircraft cockpit design, few of those who create dashboards have 
actually studied the science of design. You can become an exception to this unfortunate and costly norm. It 
is unlikely that people will lose their lives if you fail, but businesses do occasionally crash and burnand 
frequently lose moneydue to failed communication of just this sort. 
Henry David Thoreau once penned the same word three times in succession to emphasize an important 
quality of life that applies to design as well: "Simplify, simplify, simplify!"1 Though I often fail, I strive to live 
my life and to design all forms of communication according to Thoreau's sage advice to keep things simple. 
Eloquence in communication is often achieved through simplification. Too often we smear a thick layer of 
gaudy makeup over data in an effort to impress or entertain, rather than focusing on communicating the 
truth of the matter in the clearest possible way. 
When designing dashboards, you must include only the information that you absolutely need, you must 
condense it in ways that don't decrease its meaning, and you must display it using visual display 
mechanisms that, even when quite small, can be easily read and understood. Well‐designed dashboards 
deliver information that is: 
 
Exceptionally well organized 
 
Condensed, primarily in the form of summaries and exceptions 
 
Specific to and customized for the dashboard's audience and objectives 
 
Displayed using concise and often small media that communicate the data and its message in 
the clearest and most direct way possible 
Dashboards tell people what's happening and should help them immediately recognize what needs their 
attention. Just like the dashboard of a car, which provides easily monitored measures of speed, remaining 
fuel, oil level, battery strength, engine trouble, and so on, a business information dashboard provides an 
overview that can be assimilated quickly, but doesn't necessarily give you all the information you might 
need to thoroughly respond to any problems or opportunities that are revealed. 
A full diagnosis to determine how to respond to the data gleaned from a dashboard often requires 
additional information. This is as it should be, because a dashboard that tried to give you everything you 
need to do your job, including all the details, would be unreadable. Instead, dashboards should provide a 
broad and high‐level overview that informs you instantly about the state of things. If they go further by 
providing quick and easy access to the additional information that you might need, that's wonderful but 
that journey takes you beyond the dashboard itself. 
5.1.1. Condensing Information via Summarization and Exception 
The best way to condense a broad spectrum of information to fit onto a dashboard is in the form of 
summaries and exceptions. Summarization involves the process of reduction. Summaries represent a set of 
numbers (often a large set) as a single number. The two most common summaries that appear on 
dashboards are sums and averages. Measures of distribution and correlation are sometimes appropriate, 
but these are relatively rare. 
Given the purpose of a dashboard to help people monitor what's going on, much of the information it 
presents is necessary only when something unusual is happening; something that falls outside the realm of 
                                                           
1 Henry David Thoreau, Walden (originally published in 1864). 
www.it-ebooks.info

---

<!-- página 83 -->

normality, into the realm of problems and opportunities. Why make someone wade through hundreds of 
values when only one or two require attention? We call these critical values exceptions. 
The best dashboards are designed to specifically address information needs related to a particular objective 
or set of objectives. Not only should the information be narrowed to what directly applies, but the 
communication of that information should use its audience's vocabulary. You wouldn't express the 
relationship between the costs of marketing and resulting revenues as a linear correlation coefficient if the 
audience had no idea what that was or how to make sense of it. A familiar graph would do a better job. 
Likewise, you wouldn't break the data into months if the audience were composed of sales managers who 
think entirely in terms of weeks. Customization is vital to the success of a dashboard. 
An aspect of customization that is often overlooked involves expressing quantitative data at a level of 
precision that is appropriate to the task at hand. The greater the numeric precision, the more time it will 
take viewers to absorb the data. When examining financials, most executives rarely need to see numbers 
down to the level of cents or even beyond the nearest thousand, ten thousand, hundred thousand, or even 
million, but the manager of accounting might need to see every penny. 
Display media must be designed to say exactly what they need to sayno moredirectly, clearly, and without 
any form of distraction, in a way that communicates the maximum meaning in the minimum amount of 
space. If a display mechanism that looks like a fuel gauge, thermometer, or traffic signal communicates the 
necessary information in this manner, then that's what you ought to use. If, however, it fails any of these 
tests, it ought to be replaced with something that does the job better. Insisting on cute displays when other 
means would work better is counterproductive, even if everyone seems to be in love with them. This love is 
fickle. The appeal of cuteness will fade quickly, and the only thing that will matter then is how well the 
display device works: how efficiently and effectively it communicates. 
Two fundamental principles should guide the selection of the ideal dashboard display media: 
 
It must be the best way to display a particular type of information that is commonly found in 
dashboards. 
 
It must be able to serve its purpose even when sized to fit into a small space. 
In the next chapter, we'll examine an ideal library of dashboard display media that fulfill these 
requirements. For now, let's examine some design principles. 
5.2. Key Goals in the Visual Design Process 
Edward R. Tufte introduced a concept in his 1983 classic The Visual Display of Quantitative Information that 
he calls the "data‐ink ratio." When quantitative data is displayed in printed form, some of the ink that 
appears on the page presents data, and some presents visual content that is not data (a.k.a. non‐data). 
Figure 5‐2 shows two displays of quantitative data: one in the form of a table and the other in the form of a 
graph. Take a minute to examine them and try to differentiate the data ink from the non‐data ink. 
www.it-ebooks.info

---

<!-- página 84 -->

Figure 5‐2. This table and graph consist of both data ink and non‐data ink. 
There isn't much non‐data ink in either the table or the graph, because they were intentionally designed to 
keep it to a minimum. Figure 5‐3 shows the same table and graph, this time with the non‐data ink encoded 
as red. 
 
Figure 5‐3. Here, the non‐data ink is highlighted in red. 
Tufte defines the data‐ink ratio in the following way: 
A large share of ink on a graphic should present data‐information, the ink changing 
as the data change. Data‐ink is the non‐erasable core of a graphic, the non‐
redundant ink arranged in response to variation in the numbers represented. Then, 
Data‐ink ratio 
= data‐ink / total ink used to print the graphic  
= proportion of a graphic's ink devoted to the non‐redundant display of data‐
information  
= 1.0 ‐ proportion of a graphic that can be erased without loss of data‐information.1 
He then applies it as a principle of design: "Maximize the data‐ink ratio, within reason. Every bit of ink on a 
graphic requires a reason. And nearly always that reason should be that the ink presents new information."2 
This principle applies perfectly to the design of dashboards, with one simple revision: because dashboards 
are always displayed on computer screens, I've changed the word "ink" to "pixels." Across the entire 
dashboard, non‐data pixels any pixels that are not used to display data, excluding a blank background 
should be reduced to a reasonable minimum. Take a moment to examine the dashboard in Figure 5‐4 on 
the next page and try to identify the non‐data pixels that can be eliminated without sacrificing anything 
meaningful. 
                                                           
1 Edward R. Tufte, The Visual Display of Quantitative Information (Cheshire, CT: Graphics Press, 1983), 93. 
2 Ibid., 96. 
www.it-ebooks.info

---

<!-- página 85 -->

Figure 5‐4. This dashboard displays an excessive amount of non‐data pixels. 
The non‐data pixels that you could easily eliminate without any loss of meaning include: 
 
The third dimension of depth on all the pie charts and on the bars in the upper bar graph 
 
The grid lines in the bar graphs 
 
The decoration in the background of the upper bar graph 
 
The color gradients in the backgrounds of the graphs, which vary from white at the top through 
shades of blue as they extend downward 
Some of the data pixels on this dashboard could also be removed without a loss of useful meaningwe'll 
come back to that in a moment. 
Reducing the non‐data pixels to a reasonable minimum is a key objective that places us on the path to 
effective dashboard design. Much of visual dashboard design revolves around two fundamental goals: 
1. Reduce the non‐data pixels. 
2. Enhance the data pixels. 
www.it-ebooks.info

---

<!-- página 86 -->

You start by reducing the non‐data content as much as possible, and then proceed to enhance the data 
content with as much clarity and meaning as possible, working to make the most important data stand out 
above the rest (Figure 5‐5). 
 
Figure 5‐5. Key goals and steps of visual dashboard design. 
5.2.1. Reduce the Non­Data Pixels 
The goal of reducing the non‐data pixels can be broken down into two sequential steps: 
1. Eliminate all unnecessary non‐data pixels. 
2. De‐emphasize and regularize the non‐data pixels that remain. 
Let's take a look at how to accomplish these two goals. 
5.2.1.1. Eliminate all unnecessary non­data pixels 
Dashboard design is usually an iterative process. You begin by mocking up a sample dashboard, and then 
you improve it through a series of redesigns, each followed by a fresh evaluation leading to another 
redesign, until you have it right. As you get better and better at this, the number of iterations that will be 
required will decrease, partly because you won't be including unnecessary non‐data pixels in the first place. 
No matter how far you advance, however, the step of looking for unnecessary non‐data pixels will never 
cease to be productive. 
The next few figures provide examples of non‐data pixels that often find their way onto dashboards but can 
usually be eliminated without loss. 
Graphics that serve merely as decoration (Figure 5‐6). 
 
Figure 5‐6. You should eliminate graphics that provide nothing but decoration. 
Variations in color that don't encode any meaning (Figure 5‐7). 
 
Figure 5‐7. These bars vary in color for no meaningful reason. 
www.it-ebooks.info

---

<!-- página 87 -->

Borders that are used to delineate sections of data when the simple use of white/blank space alone would 
work as well (Figure 5‐8). 
 
Figure 5‐8. Unnecessary borders around sections of data fragment the display. 
Fill colors that are used to delineate sections of content such as a title, the data region or legend of a graph, 
the background of a table, or an entire section of data, when a neutral background would work as well 
(Figure 5‐9). 
 
Figure 5‐9. Fill colors to separate sections of the display are unnecessary. 
Gradients of fill color when a solid color would work as well (Figure 5‐10). 
www.it-ebooks.info

---

<!-- página 88 -->

Figure 5‐10. Gradients of color both on the bars of this graph and across the entire background add distracting non‐data pixels. 
Grid lines in graphs (Figure 5‐11). 
 
Figure 5‐11. Grid lines in graphs are rarely useful. They are one of the most prevalent forms of distracting non‐data pixels found 
in dashboards. 
Grid lines in tables, which divide the data into individual cells or divide either the rows or the columns, 
when white space alone would do the job as well (Figure 5‐12). 
 
Figure 5‐12. Grid lines in tables can make otherwise simple displays difficult to look at. 
www.it-ebooks.info

---

<!-- página 89 -->

Fill colors in the alternating rows of a table to delineate them when white space alone would work as well 
(Figure 5‐13). 
 
Figure 5‐13. Fill colors should be used to delineate rows in a table only when this is necessary to help viewers' eyes track across 
the rows. 
Complete borders around the data region of a graph when one horizontal and one vertical axis would 
sufficiently define the space (Figure 5‐14). 
 
Figure 5‐14. A complete border around the data region of a graph should be avoided when a single set of axes would adequately 
define the space. 
3D in graphs when the third dimension doesn't correspond to actual data (Figure 5‐15). 
 
Figure 5‐15. 3D should always be avoided when the added dimension of depth doesn't represent actual data. 
Visual components or attributes of a display medium that serve no purpose but to make it look more like a 
real physical object or more ornate (Figure 5‐16). 
www.it-ebooks.info

---

<!-- página 90 -->

Figure 5‐16. This dashboard is filled with visual components and attributes that serve the sole purpose of simulating real physical 
objects. 
This is by no means a comprehensive list, but it does cover much of the non‐data content that I routinely 
run across on dashboards. When you find that you've included useless non‐data pixels such as those in any 
of the above examples, simply remove them. 
5.2.1.2. De­emphasize and regularize the non­data pixels that remain 
Not all non‐data pixels can be eliminated without losing something useful. Some support the structure, 
organization, or legibility of the dashboard. For instance, when data is tightly packed, sometimes it is 
necessary to use lines or fill colors to delineate one section from another, rather than white space alone. In 
these cases, rather than eliminating these useful non‐data pixels, you should simply mute them visually so 
they don't attract attention. Focus should always be placed on the information itself, not on the design of 
the dashboard, which should be almost invisible. The trick is to de‐emphasize these non‐data pixels by 
making them just visible enough to do their job, but no more. 
Beginning on the next page are a few examples of non‐data pixels that are either always or occasionally 
useful. I've shown each of these examples in two ways: 1) a version that is too visually prominent, which 
illustrates what you should avoid; and 2) a version that is just visible enough to do the job, which is the 
objective. 
Axis lines that are used to define the data region of a graph (Figure 5‐17). 
 
www.it-ebooks.info

---

<!-- página 91 -->

Figure 5‐17. Axis lines used to define the data region of a graph are almost always useful, but they can be muted, like those on 
the right. 
Lines, borders, or fill colors that are used to delineate sections of data when white space is not enough 
(Figure 5‐18). 
 
Figure 5‐18. Lines can be used effectively to delineate adjacent sections of the display from one another, but the weight of these 
lines can be kept to a minimum. 
Grid lines in graphs when necessary to read the graph effectively (Figure 5‐19). 
 
Figure 5‐19. Grid lines are useful when they help viewers compare specific subsections of graphs, such as the range of values that 
fall within 65 to 75 on the vertical scale and 35,000 to 45,000 on the horizontal scale. 
Grid lines and/or fill colors in tables when white space alone cannot adequately delineate columns and/or 
rows (Figure 5‐20). 
www.it-ebooks.info

---

<!-- página 92 -->

Figure 5‐20. Grid lines and fill colors can be used in tables to clearly distinguish some columns from others, but this should be 
done in the muted manner seen below rather than the heavy‐handed manner seen above. 
Fill colors in the alternating rows of a table when white space alone cannot adequately delineate them 
(Figure 5‐21). 
 
Figure 5‐21. Fill colors can be used to delineate rows in a table when necessary to help viewers' eyes scan across the rows, but 
this should always be done in the muted manner seen below rather than the visually weighty manner seen above. 
These examples demonstrate how the visual prominence of non‐data pixels can usually be de‐emphasized 
by using light, lowly saturated colors, such as light grays, and minimal stroke weights (that is, thin lines). 
Non‐data pixels also can be pushed further from notice by regularizing them (that is, by making them 
consistent). If the axis lines of all graphs look the same say, if you use the same light gray lines wherever 
they appear no one graph is likely to catch a viewer's eyes more than the others. Differences seldom go 
unnoticed, even when they are expressed in muted tones. Don't vary the color, weight, or shape of non‐
data pixels that serve the same purpose in the dashboard. 
Another category of content often found on dashboards that can be considered non‐data pixels is that 
which supports navigation and data selection. Buttons and selection boxes are often used to allow users to 
navigate to another screen or to choose the data that appears on the dashboard (for example, by selecting 
a different subset, such as hardware rather than software). These elements might serve an important 
function, but they don't display data. As such, they should not be given prominence. If they must exist, 
www.it-ebooks.info

---

<!-- página 93 -->

place them in an out‐of‐the‐way location such as the bottom‐right corner of the screen and mute them 
visually, so they won't compete with the data for attention. Notice how much of the dashboard in Figure 5‐
22 is dedicated to buttons and data selection controls, which I've highlighted with red borders. These 
elements take up far more valuable and prominent real estate on the dashboard than is required. 
 
Figure 5‐22. This dashboard gives navigational and data selection controls far more dominance and space than they deserve. 
Similarly, while it may sometimes be necessary to include on the dashboard instructions that provide 
important support information, any nonessential text just takes up space that could be used by data, 
attracts attention away from the data, and clutters the dashboard's appearance. It usually works best to 
place most instructional or descriptive content either on a separate screen that can easily be reached when 
needed or, if possible, in the form of pop‐ups that can be accessed when necessary with a click of the 
mouse. Notice how much prime real estate is wasted on the dashboard in Figure 5‐23 to provide 
instructions that viewers will probably only need the first time they use the dashboard. 
www.it-ebooks.info

---

<!-- página 94 -->

Figure 5‐23. As you can see in the area highlighted in red, this dashboard uses up valuable space to display instructions that 
could have been provided only when needed through a separate screen or a pop‐up menu. 
5.2.2. Enhance the Data Pixels 
Just like the reductionof non‐data pixels, the process of enhancing the data pixels can be broken down into 
two sequential steps: 
 
Eliminate all unnecessary data pixels. 
 
Highlight the most important data pixels that remain. 
Let's examine these two tasks. 
5.2.2.1. Eliminate all unnecessary data pixels 
When you're designing a dashboard, it is tempting to throw everything you think anyone could ever 
possibly want onto it. Those of us who have worked in the field of business intelligence for a while have 
grown weary of being asked for more (always more!), so the thought of heading off this demand by giving 
folks everything up front can be appealing. On a dashboard, however, where immediate insight is the goal, 
this is a costly mistake. I'm not suggesting that you force people to get by with less than they really need, 
but rather that you honor the consideration of what they really need for the task at hand as a strict 
www.it-ebooks.info

---

<!-- página 95 -->

criterion for the selection of data. By removing any information that isn't really necessary, you 
automatically increase focus on the information that remains. 
Elimination of unnecessary data pixels is achieved not only through the complete removal of less relevant 
data but also by condensing data through the use of summaries and exceptions, so that the level of detail 
that is displayed doesn't exceed what's necessary. For most applications, it would be absurd to include 
detailed information such as transaction‐level sales data on a dashboardsome level of summarization is 
needed, and it is often up to you to determine what that level is. You might choose to display a single 
quarter‐to‐date value, a value per region, or a value per month, just to name a few possibilities. 
Exceptions are an especially useful means to reduce the data on a dashboard to what is essential for the 
task at hand. Often, the state of something need not be presented unless there is a problem or an 
opportunity that requires action. If you care about staff expenses only when someone has exceeded a 
defined threshold, why clutter the dashboard with a complete list of all staff members and their expenses? 
Beware of taking this useful practice of managing by exception too far, however. I received an email 
recently from an executive of a software company that specializes in dashboards. We were discussing my 
definition of a dashboard, and in the course of this discussion he stated that a customer once asserted that 
his ideal dashboard would display a single traffic signal to indicate if everything was all right or if anything 
needed attention. The idea was that he didn't want to be bothered with unnecessary information if all was 
well, and when something was wrong, he could drill down from that single alert to additional, more 
detailed dashboards or reports to determine exactly what was wrong before taking action. For an instant I 
found myself enamored with this idea, attracted to its Spartan simplicity but only for a moment. The next 
moment my mind became haunted by visions of executives trying to run their businesses in ignorant bliss, 
completely out of touch unless thresholds built into the software determined that they ought to be 
informed. Anyone who has a job to do needs to keep up with a basic picture of what's going on, even when 
all is well. Too often leaders whether in business, academia, religion, or politics forge ahead with their 
agendas, relying entirely on others to tell them what they think they should know, only to discover after the 
dust of some destructive event settles that they knew far too little to lead effectively. 
Before departing from the topic of summaries and exceptions, I want to focus in on a particular 
summarizing technique that I find useful on occasion. This technique involves what I call multi‐foci displays. 
When it is useful to display historical context for a measure, such as the last 12 months or the last 5 years, 
often information that is more distant from the present is less important than recent history. In such cases, 
there is no reason to display the full range of data at the same level of detail. For instance, you might want 
to display the current month as daily measures, the preceding 12 months as monthly measures, and the 
preceding 4 years as annual measures. This display would consist of three sections, each expressed in 
different intervals of time, with longer intervals and more summarization used for the period the most 
distant from the present. Graphic displays can be designed to present time series in this manner, as 
illustrated in Figure 5‐24. 
www.it-ebooks.info

---

<!-- página 96 -->

Figure 5‐24. These three time‐series graphs displaying public transportation rider statistics contain three levels of detail: daily for 
the current month, monthly for the current year, and yearly for the last 10 years. 
Varying interest can correspond to distances in space as well as time. For instance, a viewer might be most 
interested in data from his immediate geographical region, and gradually less interested in data from 
increasingly distant geographical areas.1 
5.2.2.2. Highlight the most important data pixels that remain 
All the information that finds its way onto a dashboard should be important, but not all data is created 
equal: some data is more important than other data. The most important information can be divided into 
two categories: 
 
Information that is always important 
 
Information that is only important at the moment 
When you consider the entire collection of information that belongs on a dashboard, you should be able to 
prioritize it according to what is usually of greatest interest to viewers. For instance, a dashboard that 
serves the needs of a corporation's executives might display several categories of financial, sales, and 
personnel data. On the whole, however, the executives usually care about some key measures more than 
others. 
The other category of especially important information is that which is important only when it reveals 
something out of the ordinary. A measure that has fallen far behind its target, an opportunity that has just 
arisen and won't last for long, or an operational condition that demands immediate attention all fall into 
this category. 
These two categories of important information require different means of highlighting on a dashboard. The 
first category information that is always important can be emphasized using static means, but the second 
category information that is important only at the moment requires a dynamic means of emphasis. 
The location of data on the screen the layout is an aspect of a dashboard's appearance that doesn't, or at 
least shouldn't, change dynamically. This is true not only because it would be technically difficult to 
dynamically rearrange the placement of data on the screen, but also because after some use viewers will 
come to expect specific data to appear in specific locations, which is good because it helps them to scan the 
                                                           
1 Multi‐foci displays are not exclusively relevant to dashboards. I have a fondness for beautifully rendered maps, and I 
enjoy exploring geography and tracing my travels across the surface of maps. In fact, I keep three maps mounted on 
the walls of my office: an extremely large one of California, my home state; a slightly smaller one of the entire United 
States; and an even smaller one of the entire world. This might seem counter to the logical arrangement, because the 
world is certainly larger than California, but it serves my needs precisely. I want to see great detail in places close to 
home, where I spend most of my time, and gradually less and less detail as the distance from home grows. 
www.it-ebooks.info

---

<!-- página 97 -->

dashboard quickly. Because location is static, this is a variable that we can leverage to highlight information 
that is always important. 
Few aspects of visual design emphasize some data above the rest as effectively as its location. Figure 5‐25 
identifies the emphasizing effect that different regions of a dashboard provide. The top‐left and center 
sections of the dashboard are the areas of greatest emphasis. The greater emphasis tied to the upper left is 
primarily due to the conventions of most western languages, which sequence words on a page from left to 
right and top to bottom. Contrary to the influence of reading conventions, however, the very center of the 
screen is also a region of strong emphasis, due to a more fundamental inclination of visual perception. I've 
found, however, that placing information in the center results in emphasis only when it is set apart 
somewhat from what surrounds it, such as through the use of white space. 
 
Figure 5‐25. Different degrees of visual emphasis are associated with different regions of a dashboard. 
As much as possible, place the information that is always of great importance in the upper‐left or center 
regions of the dashboard. Never waste this valuable real estate by placing a company logo or controls for 
navigation or data selection in these areas. Figure 5‐26 provides a vivid example of what you should avoid 
when designing the layout of a dashboard. 
www.it-ebooks.info

---

<!-- página 98 -->

Figure 5‐26. The most valuable real estate on this dashboard is dedicated to a company logo and meaningless decoration. 
Visual attributes other than location on the screen are usually easy to manipulate in a dynamic manner on a 
dashboard. As such, dynamic techniques can be used to highlight information that is of great importance 
only at particular times. These techniques can also be used to highlight information that is always 
important, once you've used up the prime screen locations for other important data. 
Many of the visual attributes that we examined in Chapter 4, Tapping into the Power of Visual Perception, 
can be used effectively to highlight data, both statically and dynamically. Here are two approaches that you 
can take: 
 
Use expressions of visual attributes that are greater than the norm (for example, brighter or 
darker colors). 
 
Use expressions of visual attributes that simply contrast with the norm (for example, blue text 
when the norm is black or gray). 
Expressions of visual attributes don't need to be greater than others to stand out; contrast from a 
predominant pattern is all it takes. Visual perception is highly sensitive to differences and ever vigilant to 
assign meaning to them when they are detected. 
Some useful expressions of visual attributes that are perceived as greater than others include the following: 
Table 5‐1.  
Visual 
attribute 
Useful expressions 
Illustrations
Color 
A darker or more fully saturated version of any hue is naturally perceived as 
 
www.it-ebooks.info

---

<!-- página 99 -->

intensity 
greater than a lighter or less‐saturated version. 
Size 
Bigger things clearly stand out as more important than smaller things. 
 
Line width 
Thicker lines stand out as more important than thinner lines. 
 
 
Some useful expressions of visual attributes that stand out merely through contrast to the norm include the 
following: 
Table 5‐2.  
Visual 
attribute 
Useful expressions 
Illustrations
Hue 
Any hue that is distinct from the norm will stand out. 1 
 
Orientation 
Anything oriented differently than the norm will stand out. 
 
Enclosure 
Anything enclosed by borders or surrounded by a fill color will stand out if 
different from the norm. 
 
Added marks 
Anything with something distinctly added to it or adjacent to it will stand 
out. 
 
 
Any of these visual attributes can be used to make the most important information stand out from the rest. 
Color is especially useful because distinct differences in color stand out very clearly and because it is a 
variable that is normally easy to change dynamically using dashboard software based on predefined data 
conditions. 
I've also found that one of the best ways to draw attention to particular items, especially those expressed 
as text, involves the use of an added mark with a distinct color. For example, causing a simple symbol such 
as a circle, checkmark, or asterisk to appear next to items that need attention does the job nicely. Choosing 
one color and varying its intensity to indicate varying degrees of importance or urgency works better than 
using different colors, because even those who are colorblind can detect distinct intensities of the same 
color. Figure 5‐27 illustrates this practice. Different symbols could also be used to indicate different levels 
of importance or urgency with no need to vary their colors, but increasing color intensities corresponding 
to increasing levels of importance or urgency are understood more intuitively. 
                                                           
1 Red does not signify that something is important, urgent, or a problem in all cultures. For example, in China, red 
connotes happiness. Bear in mind also when choosing symbolic colors that a significant chunk of the population is 
colorblind. 
www.it-ebooks.info

---

<!-- página 100 -->

Figure 5‐27. Simple symbols can be used along with varying color intensities to dynamically highlight data. 
When highlighting important information, you must always be careful to restrict the definition of what's 
important. If you highlight too much information, nothing will stand out and your effort to communicate 
will fail. When used with discretion, however, visual highlighting can achieve the goal of immediate 
recognition and quick response. 
 
 
www.it-ebooks.info

---

<!-- página 101 -->

Chapter 6. Effective Dashboard Display Media 
Dashboards must be able to condense a lot of information onto single screen and present it at a glance 
without sacrificing anything important or compromising clarity. Consequently, they require display media 
that communicate effectively, despite these conditions. Every section of data on a dashboard should be 
displayed using the clearest and richest possible means, usually in small amount of space. This requires an 
available library of display media that have been selected, customized, and sometimes created especially for 
dashboards, and an understanding of the circumstances in which each medium of display should be applied. 
 
 
www.it-ebooks.info

---

<!-- página 102 -->

Select the best display medium  
An ideal library of dashboard display media 
A dashboard must be built using appropriately chosen and designed display media to reach its unique 
potential for clear and immediate communication. We'll begin this chapter with some basic guidelines for 
matching your data and message to the right form of display, and then proceed to the heart of the chapter: 
the description of a full library of display media that are ideal for dashboards. 
6.1. Select the Best Display Medium 
The best medium for displaying data will always be based on the nature of the information, the nature of 
the message, and the needs and preferences of the audience. A single dashboard generally displays a 
variety of data and requires a variety of display media, each matched to specific data. In the next section 
we'll pair specific data and messages with the graphic media that display them best, but let's begin here 
with a more fundamental question: "Should the information be encoded as text, graphics, or both?" The 
appropriateness of each medium for a given situation, either verbal language in written form (text) or visual 
language (graphics), isn't arbitrary. 
Verbal language is processed serially, one word at a time. Some people are much faster readers than 
othersan ability that I envybut everyone processes language serially. Especially when communicating 
quantitative information, the strength of written words and numbers compared to graphics is their 
precision. If your sole purpose is to precisely communicate current year‐to‐date expenses of $487,321, for 
example, nothing works better on a dashboard than a simple display like this: 
Table 6‐1.  
YTD Expenses 
$487,321 
 
Displaying individual values does not require graphicsindeed, their use would only retard communication. 
Let's continue to enhance this data to see if there is a point where switching from pure text to the addition 
of graphics adds clear value. 
Sometimes just providing an individual number and label is appropriate, but often you want to say more. 
Let's enhance the data with a simple evaluative remark that this year‐to‐date expense figure is higher than 
it should be: 
Table 6‐2.  
YTD Expenses 
$487,321 
 
This certainly isn't the only way to communicate this evaluative information, but it is sufficient. As long as 
only measures in this condition are displayed in this fashion, even those who are color‐blind will be able to 
recognize that we are calling attention to this expense amount (because we've boldfaced the number). 
Now let's add to the general declaration that this expense amount is bad the specific criterion that was 
used to determine this, which in this case is the target for year‐to‐date expenses: 
Table 6‐3.  
 
Actual 
Target 
YTD Expenses 
$487,321 
$450,000 
www.it-ebooks.info

---

<!-- página 103 -->

At this stage we're beginning to venture into the territory where a graphical display might be useful, but it 
certainly isn't imperative yet. The viewer must do a little math to interpret the extent of the expense 
overage, but in this case the math is simple and fast. You could even remove the need for the viewer to do 
the calculation by adding the amount of variance from the target, or perhaps by displaying the variance 
alone, without the actual expense amount, if the variance is all that's needed. Here are some examples of 
how you could choose to present this data, using text alone: 
Table 6‐4.  
 
Actual 
Target 
Varience 
YTD Expenses 
$487,321 
$450,000 
+$37,321 
 
Table 6‐5.  
 
Actual 
Target 
Varience% 
YTD Expenses 
$487,321 
$450,000 
+$8% 
 
Table 6‐6.  
 
Actual 
Variance to Target 
YTD Expenses 
$487,321 
+$37,321 
 
Table 6‐7.  
 
Actual 
Variance to Target% 
YTD Expenses 
$487,321 
+8% 
YTD Expenses Variance 
+$37,321 
 
YTD Expenses Variance 
+8% 
 
 
Any one of these approaches might be appropriate for a single measure that has been enhanced with 
contextual data such as the target and some indication of whether it is good or bad. 
An entire dashboard full of individual measures expressed textually in this manner would work fine if its 
purpose were to draw attention to individual measures one at a time, but what if you want a bigger picture 
of the whole or comparisons of multiple measures to emerge? Text alone doesn't support this. 
Text, especially when organized into tables (that is, as rows and columns of data), is a superb medium for 
looking up information. Bus schedules, tax rate tables, and the indexes of books, to name but a few 
examples, are all organized as tables to support this use. If you need to look up the Consumer Price Index 
(CPI) rate for September 1996 using the table in Figure 6‐1, for example, you can easily find the precise 
value of 157.8. Graphs don't support looking up individual values as efficiently, and certainly not as 
precisely. 
www.it-ebooks.info

---

<!-- página 104 -->

Figure 6‐1. This CPI table illustrates the strength of tables as a means to look up precise individual values. 
Now look at the CPI table again, but this time try to determine the shape of the values as they change 
through the course of the year 1996. Text doesn't support this view of the data, but look at how clearly the 
graph in Figure 6‐2 on the next page presents it. 
 
Figure 6‐2. This graph of the CPI for the year 1996 illustrates how well graphs reveal the shape of data, in this case as it changes 
through time. 
Notice also, however, that the previous task of looking up the index value for September is not supported 
very well by the graph. 
When, in the late 18th century, the British social scientist William Playfair invented many of the graphs that 
we still use today, he created a powerful language for communicating quantitative information. Giving 
values shape through the use of grid coordinates along two axes enabled us to visualize numbers, which 
dramatically extended our ability to think quantitatively. This is the strength of graphs: they give shape to 
numbers and, in doing so, bring to light patterns that would otherwise remain undetected. 
Let's see some of these concepts at work on a dashboard. Look at the predominantly text‐based dashboard 
in Figure 6‐3. 
www.it-ebooks.info

---

<!-- página 105 -->

Figure 6‐3. A predominantly text‐based dashboard. 
Notice how the textual medium primarily supports the process of lookup. Each measure is isolated from the 
rest, and comparisons are difficult. 
The only big‐picture information that is provided is conveyed through the visual attribute of hue. Assuming 
that you are not color‐blind and can distinguish these hues, with a quick scan the many red and yellow 
boxes reveal that much is wrong. Beyond that, you are forced to consider each measure individually. If no 
comparisons or patterns are useful for this dashboard, the predominance of text is fine. But even if this 
were the case, which is unlikely, the textual display of this information could have been presented in a less 
fragmented way, such as the redesign that you see in Figure 6‐4. Here, the measures are arranged in tables 
to make scanning easier. The red, yellow, and green color‐coding has been replaced with boldface, black, 
and gray text, respectively, to enable perception by people who are color‐blind. Note that this redesign has 
improved the dashboard's use for lookup, but not for gleaning additional meaning. 
www.it-ebooks.info

---

<!-- página 106 -->

Figure 6‐4. Redesign of the text‐based dashboard in Figure 6‐3, arranged in tables to better support lookup. 
Effective dashboards need to combine text and graphics in a way that supports a rich and meaningful 
display of data, along with the desired level of quantitative precision, in a way that can be perceived 
efficiently. With each measure or set of related measures, you must ask what the viewer needs, how the 
data will be used, and what message the data must convey, and then blend the use of text and graphics to 
achieve these communication objectives. 
6.2. An Ideal Library of Dashboard Display Media 
So far we've considered only the first, most fundamental step in selecting the best medium of display. Once 
you've chosen between text, graphics, or some combination of the two, you must then determine how to 
organize the text and/or what kinds of graphics to use. These choices are vital. A poorly chosen graph, for 
example, could completely obscure otherwise clear data. In this section, we'll focus specifically on the best 
choice of graphical display to use when you determine that a visual rather than a textual display is 
appropriate. 
Most display media that work well on dashboards are probably familiar to you already. Quantitative graphs 
and several other types of charts that are commonly used in business reporting (for example, process flow 
and organization charts) work well on dashboards, provided their design is kept clear and simple. 
This discussion focuses on dashboard display media that are used to present actual data. Other display 
media, such as command buttons, are sometimes needed, but they fall outside our scope of interest. Two 
fundamental principles have guided the selection of each display medium in this proposed library: 
 
It must be the best means to display a particular type of information that is commonly found 
on dashboards. 
 
It must be able to serve its purpose even when sized to fit into a small space. 
The library is divided into six categories: 
 
Graphs 
 
Images 
 
Icons 
www.it-ebooks.info

---

<!-- página 107 -->

 
Drawing objects 
 
Text 
 
Organizers 
6.2.1. Graphs 
Most dashboard display media fall into the graph category. Given the predominance of quantitative data on 
most dashboards, this isn't surprising. All but one of the items (treemaps) in this category display 
quantitative data in the form of a 2‐D graph with X and Y axes. Most of these are familiar business graphs, 
but one or two will probably be new to you, because they were designed or adapted specifically for use in 
dashboards. Here's the list: 
 
Bullet graphs 
 
Bar graphs (horizontal and vertical) 
 
Stacked bar graphs (horizontal and vertical) 
 
Combination bar and line graphs 
 
Line graphs 
 
Sparklines 
 
Box plots 
 
Scatter plots 
 
Treemaps 
6.2.1.1. Bullet graphs 
This is the one graph on the list that is almost certainly new to you. I assume this because a bullet graph is a 
simple invention of my own, created specifically for dashboards. It is my answer to the problems exhibited 
by most of the gauges and meters that have become synonymous with dashboards. Gauges and meters 
typically display a single key measure, sometimes compared to a related measure such as a target, and 
sometimes in the context of quantitative ranges with qualitative labels that declare the measure's state 
(such as good or bad). Figure 6‐5 provides two examples of the gauges and meters that are commonly 
found on dashboards. Both display a key measure in comparison to a target, which is represented by zero 
on the gauge on the right and, I assume, by the top of the thermometer on the left. 
 
www.it-ebooks.info

---

<!-- página 108 -->

Figure 6‐5. These are typical examples of meters and gauges with contextual data.1 
The question that you should ask when considering gauges and meters such as these is: "Do they provide 
the clearest, most meaningful presentation of the data in the least amount of space?" In my opinion, they 
do not. Radial gauges such as the example on the right in Figure 6‐5 waste a great deal of space, due to 
their circular shape. This problem is magnified when you have many radial display mechanisms on a single 
dashboard, for they cannot be arranged together in a compact manner. The linear nature of the 
thermometer style of display potentially avoids this problem, but in displays such as this, space tends to be 
wasted on meaningless realism. If dashboard display media were designed by expert communicators, 
rather than by graphic artists who clearly haven't focused on the communication needs, they would look 
much different. 
The bullet graph achieves the communication objective without the problems that usually plague gauges 
and meters. It is designed to display a key measure, along with a comparative measure and qualitative 
ranges to instantly declare if the measure is good, bad, or in some other state. Figure 6‐6 provides a simple 
example. 
 
Figure 6‐6. A simple horizontally oriented bullet graph. 
Now, I am well aware that it sounds a bit too high and mighty for me to call the bullet graph my invention. 
It's not much more than a bar graph with a single bar, or a thermometer without the reservoir at the end to 
hold the mercury while at rest. Simple as it is, why hasn't anyone else come up with this idea before? Any 
software vendor who wants to use it can be my guest, free of charge. I'll even supply the design 
specification. Figure 6‐7 shows the same bullet graph, this time with each of its components identified. 
 
Figure 6‐7. A simple bullet graph with each of its components labeled. 
The linear design of the bullet graph, which can be oriented either horizontally or vertically, allows several 
to be placed next to one another in a relatively small space. Figures 6‐8 and 6‐9 show how closely they can 
be packed togetherimagine how much room would be required to display the same data using circular 
gauges. 
                                                           
1 Can you make sense of the thermometer on the left in Figure 6‐5? Do sales increase as they rise or as they fall on the 
thermometer? Given the fact that actual sales are 75.93% of target and the mercury in the thermometer extends 
about 75% of the way to the top of the thermometer, we must assume that sales rise as the mercury rises, but then, 
as red on a dashboard usually means bad, why is the red range at the top? 
www.it-ebooks.info

---

<!-- página 109 -->

As you scan a collection of bullet graphs such as those in Figures 6‐8 and 6‐9, notice how easy it is to detect 
those measures that have met or exceeded the comparative measures represented by the short line that 
intersects each bar. When a measure exceeds this bar, a cross shape is formed. This form is easy to see 
because it is perceived preattentively. You can scan the bullet graphs on a dashboard and immediately 
know which measures are doing well and which are not simply by the presence or absence of these cross 
shapes. 
 
Figure 6‐8. A collection of horizontally oriented bullet graphs. 
 
Figure 6‐9. A collection of vertically oriented bullet graphs. 
Notice also that the background fill colors that encode the qualitative categories (such as bad, satisfactory, 
and good) are variables of color intensity rather than of hue. This assures that viewers who are color‐blind 
www.it-ebooks.info

---

<!-- página 110 -->

can still see the distinctions. Even though various shades of gray have been used in the examples so far, any 
hue will work. Figure 6‐10 uses various intensities of beige. 
 
Figure 6‐10. This bullet graph uses various intensities of beige to encode qualitative states. 
You can encode more than three qualitative states with background fill colors, but to avoid complexity that 
cannot be perceived efficiently and to maintain a clear distinction between the colors, you shouldn't 
exceed five. Figure 6‐11 illustrates this practical limit. 
 
Figure 6‐11. This bullet graph uses five distinct color intensities to encode qualitative states. 
It is sometimes useful to compare a key measure to more than one other measure. For instance, you might 
want to compare revenue to the revenue target and to the revenue amount at this time last year. The 
bullet graph easily handles multiple comparisons by using a distinct marker for each. These distinctions can 
be displayed using variables of color intensity, line width (a.k.a. stroke weight), or even symbol shapes in a 
pinch. Figure 6‐12 illustrates how two comparisons can be included using markers with different stoke 
weights. 
 
Figure 6‐12. This bullet graph includes two comparisons, which have been made visually distinct through the use of different 
stroke weights. 
When I originally developed the design specification for the bullet graph, I called it by a different name: a 
performance bar. This original name possessed chutzpah and evoked a sense of good health, due to its 
similarity to those popular ultra‐performance nutrition snacks like the PowerBar. I had to change the name, 
however, because I eventually realized that there were times when the key measure should be encoded 
using something other than a bar. 
Whenever you use a bar to encode a quantitative value, as you've seen in each of the examples of bullet 
graphs so far, the quantitative scale should start at zero. The length of the bar represents the value, not just 
the location of its endpoint, so a scale that starts anywhere but zero will produce a bar with a length that 
doesn't correspond to its value. This makes accurate comparisons between bars very difficult. 
It is sometimes useful with bullet graphs, however, to avoid starting the quantitative scale at zero so that 
the scale can be narrowed to display more quantitative detail. For instance, suppose that all of the values 
that need to be included in the bullet graph fall between the range of $150,000 and $300,000, and you 
want to focus exclusively on this range of values to show more subtlety in the differences between the key 
measure and its comparisons (for example, a target). In this case, you should use some means other than a 
bar to accurately encode the key measure. For example, you can use a marker (a simple symbol shape) to 
www.it-ebooks.info

---

<!-- página 111 -->

encode the key measure and differently shaped markers for any comparative measures. Figure 6‐13 
illustrates this approach. 
 
Figure 6‐13. Because the quantitative scale of this bullet graph does not begin at zero, it uses a symbol marker rather than a bar 
to encode the key measure. In this case, the key measure is encoded as a circle and the target measure is encoded as a short 
line. 
Using a bar to encode the key measure has the advantage of superior visual weight to highlight the key 
value, but a symbol marker allows you to narrow the quantitative scale to display greater subtlety in the 
values and their differences (using the symbol marker serves as a visual alert to the viewer that the scale 
does not start at zero). Both work well on a dashboard. 
Let's look at one more way you can use bullet graphs. Whenever you compare a current measure to a 
future target, such as revenue as of January 15 compared to a Quarter 1 target, you can easily see how far 
you are from the target, but it's not always so easy to tell if you are on track to meet or surpass that future 
target, which could still be weeks or even months away. This is true whether you are using a bullet graph or 
any other graphical means to display this information. This shortcoming in the usefulness of the 
comparison can be ameliorated by adding a projection of where you'll be at the end of the period of time 
that is relevant to the target. The bullet graph in Figure 6‐14 on the next page splits the revenue measure 
into two segments: the actual measure as of today and the projected measure of revenue based on current 
performance. This provides a rich display that tells you not only how far along you are on the path to the 
future target, but also how well you're doing today in relation to that target. 
 
Figure 6‐14. This bullet graph displays both the actual quarter‐to‐date revenue and a projection of expected quarter‐end revenue 
based on current performance. 
I can state with some confidence that bullet graphs work well, because I've tested them in controlled 
experiments to compare them to simple radial gauges. In my tests, bullet graphs outperformed radial 
gauges both in efficiency and accuracy of perception. The number of test subjects was far too small to 
satisfy scientific standards, so I'll refrain from claiming specific measures of superior performance. These 
tests were sufficient, however, to enable me to state without reservation that bullet graphs work every bit 
as well on dashboards as radial gauges and are able to convey the same information in much less space. I 
believe that makes them superior. 
6.2.1.2. Bar graphs 
Unlike bullet graphs, bar graphs are designed to display multiple instances, rather than a single instance, of 
one or more key measures. In fact, every graph in this proposed library other than the bullet graph is 
designed to display more than one instance of one or more measures. Bar graphs are great for displaying 
measures that are associated with items in a category, such as regions or departments. The graph in Figure 
6‐15 is a typical example that could be found on a dashboard: it displays two key measuresbookings and 
billings revenuesubdivided into sales regions. 
www.it-ebooks.info

---

<!-- página 112 -->

Figure 6‐15. A typical bar graph. 
I use the term "bar graph" in reference to all graphs that use bars to encode data, whether they are 
oriented vertically or horizontally. 
Figure 6‐16 shows another example of a typical bar graph, this time with the bars running horizontally. 
 
Figure 6‐16. A bar graph with horizontally oriented bars. 
To fully understand when it is appropriate to encode data in a graph as bars rather than as lines (as in a line 
graph), you must understand a little about the three types of categorical scales that appear commonly in 
graphs: 
Nominal scales consist of discrete items that belong to a common category but really don't relate to one 
another in any particular way. They differ in name only (that is, nominally). The items in a nominal scale, in 
and of themselves, have no particular order and don't represent quantitative values in any way. Typical 
examples in dashboards include regions (for example, The Americas, Asia, and Europe) and departments 
(for example, Sales, Marketing, and Finance).  
www.it-ebooks.info

---

<!-- página 113 -->

Ordinal scales consist of items that, unlike the items in a nominal scale, do have an intrinsic order, but in 
and of themselves still do not correspond to quantitative values. Typical examples involve rankings, such as 
"A, B, and C," "small, medium, and large," and "poor, below average, average, above average, and 
excellent."  
Interval scales, like ordinal scales, also consist of items that have an intrinsic order, but in this case they 
represent quantitative values as well. An interval scale starts out as a quantitative scale that is then 
converted into a categorical scale by subdividing the range of values in the entire scale into a sequential 
series of smaller ranges of equal size and giving each range a label. Consider the quantitative range made 
up of values extending from 55 to 80. 
This range could be converted into a categorical scale of the interval type consisting of the following 
sequence of smaller ranges: 
 
Greater than 55 and less than or equal to 60 
 
Greater than 60 and less than or equal to 65 
 
Greater than 65 and less than or equal to 70 
 
Greater than 70 and less than or equal to 75 
 
Greater than 75 and less than or equal to 80 
Figure 6‐17 shows an example of each type of scale. 
 
Figure 6‐17. The three types of categorical scales found in graphs. 
Here's a quick (and somewhat sneaky) test to see how well you've grasped these concepts. Can you identify 
the type of categorical scale that appears in Figure 6‐18? 
 
Figure 6‐18. This is a categorical scale that is commonly used in graphs. Can you determine which of the three types it is? 
Months of the year obviously have an intrinsic order, which begs the question: "Do the items in a time 
series correspond to quantitative values?" In fact, they do. Units of time such as years, quarters, months, 
weeks, days, hours, and so on are measures of quantity, and the individual items in any given unit of 
measurefor example, yearsrepresent equal intervals. (Actually, months aren't exactly equal, and even years 
vary in size occasionally due to leap years, but they are close enough in size to constitute an interval scale 
for reporting purposes.) 
Bar graphsnever line graphsare the best means to display measures subdivided into discrete instances 
along a nominal or ordinal scale. The visual weight of bars places emphasis on the individual values in the 
www.it-ebooks.info

---

<!-- página 114 -->

graph and makes it easy to compare individual values to one another by simply comparing the height of the 
bars. Lines, on the other hand, emphasize the overall shape of the values, and by connecting the individual 
values they give a sense of continuity from one value to the next throughout the entire series. This sense of 
connection between the values is appropriate only along an interval scale, which subdivides a continuous 
range of quantitative values into equal, sequential intervals; it's not appropriate along a nominal or ordinal 
scale, where the values are discrete and not intimately connected. Figure 6‐19 shows some examples of 
inappropriate and appropriate usage of lines to encode data in graphs. 
 
Figure 6‐19. Examples of inappropriate (top two) and appropriate (bottom two) uses of lines to encode data in graphs. 
Line graphs are useful for encoding values along an interval scale, but there are occasions when it is 
preferable to use a bar graph to display such measures. For example, when you wish to emphasize the 
individual values rather than the overall trends or other patterns of the values, or when you wish to enable 
close comparisons of values that are located next to one another, a bar graph is a better choice. Figure 6‐20 
on the next page displays the same interval data in two ways: as a bar graph and as a line graph. Notice the 
differences in what the two images emphasize, despite the fact that the data are precisely the same. The 
bar graph emphasizes the individual values in each interval and makes it easy to compare those values to 
one another, while the line graph does a much better job of revealing the overall shape of the distribution. 
www.it-ebooks.info

---

<!-- página 115 -->

Figure 6‐20. These two graphsone a bar graph and one a line graphdisplay exactly the same data but highlight different aspects 
of it. 
Because bar graphs emphasize individual values, they also enable easy comparisons between adjacent 
values. Figure 6‐21 illustrates the ease with which you can compare measuresin this case the productivity 
of the daytime and the nighttime crews in any given monthusing this type of graph. 
 
Figure 6‐21. Bars are preferable to lines for encoding data along an interval scalein this case, a time series divided into 
monthswhen the graph is intended to support comparisons of individual measures. 
Even when you wish to display values that represent parts of a whole, you should use a bar graph rather 
than the ever‐popular pie chart. This will present the data much more clearlyjust be sure to indicate 
somewhere in text (for example, in the graph's title) that the bars represent parts of a whole. Figure 6‐22 
provides an example of both a pie chart and a bar graph used to present the same part‐to‐whole data. 
Notice how much easier it is to make accurate visual judgments of the relative sizes of each part in the bar 
graph. 
www.it-ebooks.info

---

<!-- página 116 -->

Figure 6‐22. You can use a bar graph to more clearly display the same part‐to‐whole data that is commonly displayed with a pie 
chart. 
6.2.1.3. Stacked bar graphs 
A variation of the bar graph that is sometimes used to display business data is the stacked bar graph. This 
type of graph is useful for certain purposes, but it can easily be misused. I recommend against ever using a 
stacked bar graph to display a single series of part‐to‐whole data. A regular bar graph works much better. 
As you can see, it is much harder and more time‐consuming to read the stacked bar graph in Figure 6‐23 
than the bar graph showing the same data in Figure 6‐22. 
 
Figure 6‐23. A stacked bar graph is not the best way to display a single series of part‐to‐whole data. 
www.it-ebooks.info

---

<!-- página 117 -->

Stacked bar graphs are the right choice only when you must display multiple instances of a whole and its 
parts, with emphasis primarily on the whole. Figure 6‐24 provides an example with a separate instance of 
sales revenue per quarter, each subdivided by sales channel. 
 
Figure 6‐24. The only circumstance when a stacked bar graph is useful is when you must display multiple instances (for example, 
one for each quarter) of a whole (total sales) and its parts (in this case, per sales channel), with a greater emphasis on the whole 
than the parts. 
The changes in the distribution tend to be somewhat difficult to detect for all the segments except the one 
that appears at the bottom of each bar (in this case, "Direct" sales), which is why a stacked bar graph 
should not be used if these changes must be shown more precisely. Notice the detail regarding the changes 
in distribution of sales that can easily be seen in the bar graphs in Figure 6‐25 (especially the one on the 
right). If you want to clearly display both the whole and its parts, you can use either two graphs next to one 
anotherone for the whole and one for its partsor a combination bar and line graph with two quantitative 
scalesone for the parts, encoded as individual bars, and one for the whole, encoded as a line. 
 
Figure 6‐25. These bar graphs reveal the shifts in the distribution of sales between the four channels much more clearly than the 
stacked bar graph in Figure 6‐24. 
6.2.1.4. Combination bar and line graphs 
When you combine bars and lines together in a single graph, you shouldn't do so arbitrarily. This 
combination should be used only when some data can be displayed best using bars, with an emphasis on 
www.it-ebooks.info

---

<!-- página 118 -->

individual values and local comparisons, and some using a line, with an emphasis on the overall shape of 
the data. A common example involves displaying revenues and expenses (using bars to highlight the 
individual months) along with profits (using a line to highlight the trend), as seen in Figure 6‐26. 
 
Figure 6‐26. This graph combines bars and a line to highlight monthly revenues and expenses on the one hand and the overall 
trend of profits on the other. 
A less common use of combination bar and line graphs is one that I suggested in the bar graph section 
above as a way to clearly display multiple instances through time of both the individual parts of a whole 
and the whole itself. The example in Figure 6‐27 solves this problem. 
 
Figure 6‐27. Example of a combination bar and line graph that displays quarterly instances of revenue by sales channel, encoded 
as bars, and total revenue, encoded as a line. 
This is a combination bar and line graph with one quantitative scale for the bars and another for the line. It 
isn't necessary to use two quantitative scales, one on the left axis and one on the right, but doing so 
www.it-ebooks.info

---

<!-- página 119 -->

eliminates the wasted space that would otherwise appear in the gap between the total sales values and the 
much smaller values for the individual sales channels. 
Another useful combination of bars and a line breaks a rule that I declared earlier, when I said that you 
should use lines only to encode data along an interval scale. There is one exception to this rule, which 
involves a special kind of graph called a Pareto chart (named after its inventor, Vilfredo Paretothe same 
fellow who formulated the well‐known 80:20 rule of distribution1). Let's look at an example, and I'll explain 
why the Pareto chart deserves to be an exception to my general rule about the use of lines in graphs. 
Pareto charts display individual values as bars and the cumulative total of those values as a line along a 
categorical scale. The categorical scale in a Pareto chart may be a time series, such as months of the year; 
this is an interval scale, so the use of a line in this case doesn't need an explanation. The example in Figure 
6‐28 does not have an interval scale, but a line still works well in this example. 
 
Figure 6‐28. This Pareto chart displays sales revenue by sales representatives, encoded as bars, as well as the cumulative 
revenue, encoded as a line. 
This graph has been designed to clearly show that the top 3 of 10 total sales representatives were 
responsible for 75% of total revenue for the quarter. The categorical scale, consisting of sales 
representatives, is an ordinal scale by virtue of the fact that the salespeople have been arranged in order by 
rank, based on their sales. Cumulative sales, as they increase from one salesperson to the next in ranked 
order, represent meaningful change. Each successive value is intimately connected to the one that 
precedes it, because it is the sum of itself and the previous value. This intimate connection merits the use 
of a line to encode changes in values from one to the next. The slope of the line provides useful information 
in this context: the steeper the line from one salesperson to the next, the greater that salesperson's 
revenue contribution was relative to the next‐best salesperson's. By viewing the line as a whole, you can 
easily see how evenly distributed the contributions of the salespeople are, or how much they are skewed 
toward the top performers. 
                                                           
1 The 80:20 rule of distribution is often used in reference to a company's revenue, usually stating that 80% of the 
revenue comes from 20% of the customers. Pareto's original observation that led to the formulation of this rule in 
19th‐century Italy was that 80% of the country's wealth was owned by 20% of the population. 
www.it-ebooks.info

---

<!-- página 120 -->

6.2.1.5. Line graphs 
Line graphs do an exceptional job of revealing the shape of dataits movement up and down from one value 
to the nextespecially as it changes through time. Any time that you wish to emphasize patterns in the data, 
such as trends, fluctuations, cycles, rates of change, and how two data sets vary in relation to one another, 
line graphs provide the best means. Keep in mind that when you display time‐series data on a dashboard, 
the shape of the data ("Is it going up or down?" "Is it volatile?" "Does it go through seasonal cycles?") is 
generally the picture that is needed, rather than the emphasis on individual values that bar graphs provide. 
In the context of dashboards, line graphs are often the best means to present a quick overview of a time 
series. 
Figure 6‐29 shows the same time‐series data in two ways: on the left using a bar graph and on the right 
using a line graph. Notice how much more quickly and clearly the overall shape of the data comes through 
in the line graph. Unlike a bar graph, the quantitative scale of a line graph need not begin at zero, but it can 
be narrowed to a range of values beginning just below the lowest and just above the highest values in the 
data, thereby filling the data region of the graph and revealing greater detail. Always be sure to make the 
lines that encode the data more prominent than any other part of the graph so that the data stands out 
above all else. 
 
Figure 6‐29. Two graphs of the same time‐series data: a bar graph on the left and a line graph on the right. Notice how the 
overall shape of the data is much easier to see in the line graph. 
6.2.1.6. Sparklines 
Sparklines are the brainchild of Edward R. Tufte, a true aficionado of data display. He has dedicated a full 
chapter to them in his book Beautiful Evidence (as yet unpublished but expected in 2006). My treatment of 
the subject is brief and far from definitive; my purpose here is to describe sparklines only to the extent 
necessary to demonstrate their valuable contribution to dashboards. Figure 6‐30 provides an example of a 
simple sparkline. 
 
Figure 6‐30. A simple sparkline that displays the 12‐month history of a checking account balance. 
Tufte created the sparkline to provide a bare‐bones and space‐efficient time‐series context for measures. 
Assuming that the sparkline in Figure 6‐30 encodes a rolling 12‐month history of an account balance, the 
ups and downs are instantly available to the viewer who wishes to consider the meaning of the current 
balance in light of its history. 
www.it-ebooks.info

---

<!-- página 121 -->

Tufte describes sparklines as "data‐intense, design‐simple, word‐size graphics."1 As such, they are ideal for 
dashboards and anything else that requires highly condensed forms of data display, such as medical 
diagnostic reports that include patient histories. 
You might be wondering, "Where's the quantitative scale?" It's nowhere to be seen, and that's intentional. 
Sparklines are not meant to provide the quantitative precision of a normal line graph. Their whole purpose 
is to provide a quick sense of historical context to enrich the meaning of the measure. This is exactly what's 
required in a dashboard. Instead of details, you must display a quick view that can be assimilated at a 
glance. The details can come later, if needed, in the form of supplemental graphs and reports. 
Although always small and simple, sparklines can include a bit more information than what I've illustrated 
so far. Figure 6‐31 shows a sparkline that includes a light gray rectangle to represent the number of 
manufacturing defects that are acceptable, which reveals that in the last 30 days (the full range of the 
sparkline) the number of defects has exceeded the acceptable range on three occasions. The optional red 
dot marking the final value in the sparkline ties the end of the sparkline to the current value of five by 
making them both red. 
 
Figure 6‐31. This sparkline displays 30 days of manufacturing defect history compared to the acceptable range. 
People commonly use simple up or down trend arrows to display the direction in which a measure is 
moving, but these are often ambiguous. In looking at the MTD Revenue measure in Figure 6‐32, for 
example, it isn't obvious if the upward trend arrow indicates that revenue is trending upward overall for 
the year, the quarter, the month, or just since yesterday. 
 
Figure 6‐32. Simple trend arrows are often used on dashboards, but what they mean is sometimes unclear. 
A sparkline, however, as shown in Figure 6‐33, is not ambiguous, because it displays the entire period of 
history across which the trend applies. 
 
Figure 6‐33. This sparkline provides a clear picture of the historical trend leading up to the present measure. 
As you can see, sparklines are ideal for dashboards. Every dashboard vendor ought to support them. 
6.2.1.7. Box plots 
The box plot is a fairly recent addition to the lexicon of graphs. It was invented in the 1970s by an 
extraordinary mathematician named John Wilder Tukey, who specialized in data display. This particular 
type of graph displays the distribution of value sets across the entire range, from the smallest to the 
largest, with many useful measures in between. 
It is often inadequate to describe a set of values as a single summarized measure such as a sum or average. 
At times it is important to describe how those values are distributed across the entire range. For instance, 
to fully understand the nature of employee compensation in your company in each of the salary grades 
(that is, specified levels of compensation with prescribed ranges), you would certainly need to see more 
                                                           
1 Edward R. Tufte, Beautiful Evidence (Cheshire, CT: Graphics Press, 2006). 
www.it-ebooks.info

---

<!-- página 122 -->

than the sum of salaries for each salary grade. Even a measure of average compensation, such as the mean 
or median, wouldn't tell you enough. Let's look at a few different ways that this data could be presented. 
Figure 6‐34 presents the median salary in each gradethat is, the value that's in the middle of each range. 
 
Figure 6‐34. This graph displays employee salaries per salary grade as a single median value for each grade. 
The adequacy of this display depends on your purpose. If your purpose requires a sense of how salaries are 
distributed across each range, this display won't tell enough of the story. The median expresses the exact 
center of the range, but not how the values are distributed around that center. Figure 6‐35 shows six quite 
different examples of how the individual salaries in a single salary grade with a potential range of $20,000 
to $30,000 and a median precisely in the middle at $25,000 might be distributed across that range. As you 
can see, the median alone tells a limited story, so it is often useful to display the data in a way that reveals 
more about how the values are distributed. 
www.it-ebooks.info

---

<!-- página 123 -->

Figure 6‐35. Six examples of how a set of salaries with the same median value might be differently distributed. The scale on the 
vertical axes represents the number of employees whose salaries fall into each of the ranges that run along the scale on the 
horizontal axes. 
The graph in Figure 6‐36 on the next page illustrates the simplest (and least informative) way to display 
how sets of values are distributed. It uses range bars to display two values for each salary grade: the lowest 
and the highest. Although it is useful to see the full range of each salary grade, this simple approach still 
tells us nothing about how individual values are distributed across those ranges. Do the values cluster near 
the bottom, center, or top, or are they evenly distributed? 
www.it-ebooks.info

---

<!-- página 124 -->

Figure 6‐36. This is the simplest but least informative way to display ranges of values. It uses range bars that encode the lowest 
and highest salaries in each salary grade. 
With a combination of range bars and a measure of the median, as shown in Figure 6‐37, a bit more insight 
begins to emerge. 
 
Figure 6‐37. This graph combines range bars with data points to mark the medians as well as the high and low salaries in each 
salary grade. 
Knowing that by definition half of the values are larger than the median and half are smaller, we know that 
when the median is closer to the low end of a range of values, more values fall into the lower half than the 
upper half of the range. The closer the median is to the bottom of the range, the more skewed the values 
are in the opposite direction. The opposite is true when the median lies closer to the top of the range. The 
understanding of the distribution that is revealed by this relatively simple display certainly isn't complete, 
but it's definitely getting better and is probably sufficient for many purposes on a dashboard. 
www.it-ebooks.info

---

<!-- página 125 -->

You can think of the combination of range bars with data points to mark the medians as a simplistic version 
of a box plot. A true box plot, as introduced by Tukey, provides more information. The box portion of a box 
plot is simply a rectangle (or bar) with or without a fill color. As with a range bar, the bottom of the box 
represents a value and the top represents a value, but these are usually not the lowest and highest values 
in the range. Figure 6‐38 illustrates a full‐grown version of a single box plot with "whiskers" (known as a 
box‐and‐whisker plot). This is just one of the many variations that are commonly used. 
 
Figure 6‐38. An individual box plot with whiskers. Outliers are individual data values that fall outside the range that is defined by 
the whiskers. 
A graph with boxes like this conveys a rich picture of data distributionperhaps too rich for most dashboards 
and most of the folks who use them. A simpler version of the box plot, such as the one in Figure 6‐39 on the 
next page, may be preferable for dashboard use 
www.it-ebooks.info

---

<!-- página 126 -->

Figure 6‐39. A simplified version of a box plot such as this one is usually more appropriate for dashboards than the one shown in 
Figure 6‐38. 
6.2.1.8. Scatter plots 
A scatter plot does only one thing, but it does it quite well: it displays whether or not, in what direction, and 
to what degree two paired sets of quantitative values are correlated. For instance, if you want to show that 
there is a relationship between the number of broadcast ads and sales revenues, a scatter plot such as the 
one in Figure 6‐40 would work nicely. 
 
Figure 6‐40. This scatter plot displays the correlation between the number of broadcast ads and the amount of sales revenue for 
24 months. 
In this case, both the number of times ads were aired and the sales revenues for each month were 
collected as a paired set of values for 24 months. This graph tells us the following: 
www.it-ebooks.info

---

<!-- página 127 -->

 
There is a correlation between ads and sales revenue, indicated by the fact that a change in the 
number of ads almost always corresponded to a change in sales revenue. 
 
The correlation is positive (upward sloping from left to right), indicating that as the number of 
ads increased the sales revenue also usually increased. 
 
The correlation is fairly strong. This is indicated by the tight grouping of the data values around 
the trend line, showing that an increase or decrease in ads from one measure to another 
almost always corresponded to a similar amount of increase or decrease in sales revenue. 
Given that each pair of measures was collected for a given month across 24 consecutive months, this data 
could have been displayed as a timeseries line graph, but the nature of the correlation would not have 
stood out as clearly. 
The scatter plot will still work nicely if you split the measures into multiple sets. For instance, you could split 
the ads into two typesradio and televisionas shown in Figure 6‐41. A quick examination of this display tells 
us that the correlation of television ads to sales revenue is more positive (upward sloping) than that of 
radio ads, though the strength of each correlation (the proximity of the data values to the trend line) 
appears to be about the same. 
 
Figure 6‐41. This scatter plot displays the correlation between the number of radio and television ads and their respective 
amount of sales revenue for 24 months. 
Scatter plots are sometimes rendered three‐dimensionally, in order to display the correlation of three 
quantitative variables, rather than just two. Other methods are sometimes used as well to increase the 
number of correlated variables in a single scatter plot. I recommend against using any of these approaches 
on a dashboard, however, because even when they are designed as well as possible, they require too much 
study to understandtime that dashboard viewers don't have. 
One other point I'd like to mention is that the use of a straight trend line (also known as a line of best fit) in 
a scatter plot makes the direction and strength of the correlation stand out more than just the individual 
data points by themselves. The graph in Figure 6‐42 is precisely the same as the one in Figure 6‐41, except 
that it lacks trend lines. It is easy to see that the direction and especially the strength of the correlations 
would require more time to discern without the trend lines. Lines of best fit come in several types, some of 
www.it-ebooks.info

---

<!-- página 128 -->

which are curved, and each works best for data sets that exhibit particular patterns. Knowledge of when to 
use them and how to interpret them, however, is not common except among statisticians, so it is best to 
avoid all but the simple straight line of best fit unless you and the dashboard's users have the necessary 
training to understand the other forms. 
 
Figure 6‐42. This scatter plot displays the correlation between the number of radio and television ads and their respective 
amount of sales revenue for 24 months, this time without the trend lines that appear in Figure 6‐41. 
6.2.1.9. Treemaps 
Treemaps, developed in the 1990s by Ben Shneiderman of the University of Maryland, are graphs used to 
display large sets of hierarchically or categorically structured data in the most space‐efficient way possible. 
Shneiderman is one of the most inspiring researchers and innovators working in information 
visualizationone who played a major role in defining the domain. Treemaps completely fill available screen 
space with a set of contiguous rectangles that have each been sized to encode a quantitative variable. 
Hierarchies and categories are represented as rectangles contained within larger rectangles. In addition to 
the quantitative variable that is associated with rectangle size, color can also be used to encode a second 
quantitative variable for providing a richer multivariate display. 
The purpose of treemaps is not to make fine quantitative comparisons or to rank items, but rather to spot 
particular conditions of interest. The 2‐D areas of rectangles and variations in color do not support easy, 
efficient, or accurate value comparisons, but when these visual attributes are combined in the treemap, 
they can make particular conditions jump out and thereby enable the process of discovery. 
Due to their space‐efficient design, treemaps can be used quite effectively on dashboards, but they should 
be reserved for those circumstances for which they were developed, and, when used, should be designed 
with care. The example in Figure 6‐43 illustrates an appropriately applied and effectively designed treemap 
for a business dashboard. 
www.it-ebooks.info

---

<!-- página 129 -->

Figure 6‐43. This treemap, created using Treemap 4.3 software developed at the University of Maryland's Human‐Computer 
Interaction Lab (HCIL), displays sales data (revenue and percentage of quota) by region. 
It displays sales by region, with revenue encoded as rectangle size and the percentage of sales quota 
achieved encoded as color (ranging from bright red as the lowest percentage and pure white as the 
highest). Notice how your eyes are mostly drawn to the large red rectangles, which represent states with 
large revenues that are performing poorlyin other words, states whose performance results in the greatest 
negative affect on revenue (for example, California). If you're interested in spotting those states whose 
good performance is having the greatest positive affect on revenue, you simply look for the largest light‐
colored rectangles (for example, Florida). 
I chose to use a single hue rather than several to encode the percentage of sales quota, varying the values 
by intensity from completely unsaturated red (that is, white) to fully‐saturated, bright red. It is common for 
this type of data to be encoded in a treemap using multiple hues, such as red for values that are below 
quota and green for those that are above quota. Typically, these colors would range from bright red at the 
low end through darker and darker shades, reaching black in the middle (for values close to the quota), and 
proceeding through dark shades of green all the way to bright green at the high end. If a clear distinction 
between values that are below quota and those above is necessary, then multiple hues would work, but I 
believe that often when such distinctions are displayed, they are unwarranted. If you are responsible for 
monitoring sales performance by state, do you really want to see a qualitative distinction between a state 
that is slightly below quota (dark red) and one that is slightly above quota (dark green)? Are these values 
really that different? 
Treemaps are usually interactive, providing the means to select a particular item in the hierarchy and then 
drill down into the next level of items that belong to the higher‐level item that you selected. This enables 
easy navigation through the hierarchy to investigate particular conditions of interest, potentially revealing 
www.it-ebooks.info

---

<!-- página 130 -->

what is going on at lower levels that is creating these conditions. This provides a simple path for more fully 
exploring and responding to those conditions that jump out on the dashboard as needing attention. 
6.2.1.10. Final thoughts about graphs 
You might be wondering why some of the other graphs that are familiar to you are missing from this 
proposed library. Each is missing for one of the following two reasons: 
 
It communicates less effectively than an alternative that I've included. 
 
It is too complex for the typical needs of a dashboard. 
The pie chart probably tops the list of often‐used graphs that were left out of this library of graphs because 
they communicate less effectively than other means. Pie charts were designed to display part‐to‐whole 
information, such as the individual products that make up an entire product line. As we've already 
discovered, however, part‐to‐whole information can be communicated more clearly using a bar graph. 
Another comparison of the two types of graph used to display the same set of part‐to‐whole data is shown 
in Figure 6‐44. 
 
Figure 6‐44. This pie chart and bar graph both display the same part‐to‐whole data. The values are much easier to interpret and 
compare when a bar graph is used. 
Viewers can process the information in the bar graph on the right much more quickly and easily than in the 
pie chart on the left. Why? Whereas a bar graph uses the preattentive visual attribute of line length (that is, 
the lengths or heights of the bars) to encode quantitative values, pie charts encode values as the two‐
dimensional areas of the slices and their angles as they extend from the center toward the circumference 
of the circle. Our visual perception does a poor job of accurately and efficiently comparing 2‐D areas and 
angles. The only thing that a pie chart has going for it is that when you see one you automatically know that 
you are looking at measures that are parts of a whole. Because bar graphs can be used for other types of 
comparisons, when you use them to display part‐to‐whole data, you must label them in a manner that 
makes this clear. As long as this is done, bar graphs are far superior. 
A pie chart falls into a larger class of graphs called area graphs. Area graphs use 2‐D space to encode 
quantitative values, which is prone to inaccurate interpretation and often to occlusion (a problem that is 
caused when one object is hidden entirely or in part behind another). The area graph in Figure 6‐45 on the 
www.it-ebooks.info

---

<!-- página 131 -->

next page illustrates the problem of occlusionrevenues for Quarters 2 and 3 in the West and Quarter 4 in 
the North are completely hidden. 
 
Figure 6‐45. Area graphs can suffer from the problem of occlusion. 
Another type of graph that's surfacing more and more often these days is the radar graph, a circular graph 
that encodes quantitative values using lines that radiate from the center of the circle to meet the boundary 
formed by its circumference. It is nothing but a line graph with the categorical scale arranged along a 
circular axis, as you can see on the left in Figure 6‐46. For common business data a radar graph is not as 
effective as a bar graph (shown on the right in Figure 6‐46), because it is more difficult to read values 
arranged in a circular fashion. The only time I've found a radar graph to be tolerable for displaying typical 
business data was when the categorical scale could naturally be envisioned as circularfor example, when 
the measures on the scale are the hours of a day, due to the familiar circular arrangement of time on a 
clock. 
 
Figure 6‐46. This radar graph (left) and bar graph (right) display the same expense data. In the radar graph, departments are 
arranged along the circumference and the quantitative scale for expenses resides along the radial axes that extend from the 
center. The bar graph is much easier and faster to read. 
6.2.2. Icons 
Icons are simple images that communicate a clear and simple meaning. Only a few are needed on a 
dashboard. The most useful icons are typically those that communicate the following three meanings: 
www.it-ebooks.info

---

<!-- página 132 -->

 
Alert 
 
Up/down 
 
On/off 
6.2.2.1. Alert icons 
It is often useful to draw attention to particular information on a dashboard. This is especially true when 
something is wrong and requires attention. An icon that works as an alert shouts at the viewer, "Hey, look 
here!" For an icon to play this role well, it needs to be exceptionally simple and noticeable. Ten variations 
of an alert icon, each with its own slightly different meaning, are far too complex for a dashboard. Try to 
limit alert levels to a maximum of two, and ideally to one. A single alert icon catches the eye much more 
effectively than multiple alerts with various meanings. 
A common alert scheme on dashboards uses the traffic light metaphor, composed of three colors with 
different meanings. Green is typically used to indicate that all is wellbut what's the point? If everything's 
fine, you don't need to draw attention to the data. Alerts that are always there draw less attention than 
alerts that appear only when attention is required. This is because a simple icon that appears only in certain 
circumstances is perceived preattentively as an "added mark." This preattentive attribute is not tapped into 
when the traffic light alert system is used, because although the color used to encode the data may change, 
nothing is being added. 
I've found that a simple shape, such as a circle or square, usually works best as an alert icon. If you must 
communicate multiple levels of alerts, rather than using distinct icons, stick with one shape and vary the 
color. Traffic signal colors of red, yellow, and green are conventional, but they don't work for the 10% of 
males and 1% of females who are color‐blind. Figure 6‐47 illustrates this point by showing the colors green, 
yellow, and red on the left and what a person with the predominant form of color‐blindness would see on 
the right. 
 
Figure 6‐47. The icons on the right simulate what someone who is color‐blind would see when looking at those on the left. 
A solution that works for everyone involves distinct intensities of the same hue, such as light red (in place 
of yellow) and dark red, as shown in Figure 6‐48. 
 
Figure 6‐48. The simple alert icons on the left use varying intensities of a single hue to encode different meanings. The two on 
the right simulate what a person who is color‐blind would see. Varying intensities of any single hue are distinguishable by 
everyone. 
6.2.2.2. Up/down icons 
Up/down icons convey the simple message that a measure has gone up or down compared to some point 
in the past or is greater or lesser than something else, such as the target. Financial information is common 
www.it-ebooks.info

---

<!-- página 133 -->

on dashboards, and a quick way to indicate the up or down movement of stocks, profits, and so on is often 
useful. Fortunately, a conventional symbol is already in use to communicate these meanings: a triangle or 
arrow with the tip pointing either up or down. The color of the icons may vary as well (usually green for 
good and red for bad) so they stand out more clearly, but again, this is a problem for those who are color‐
blind. This problem can be avoided by using colors that vary greatly in intensity as well as hue, such as fully 
saturated red for the icon that indicates movement in the wrong direction and less eye‐catching pale green 
for the other. Figure 6‐49 illustrates a possible presentation of two versions of this simple icon. 
 
Figure 6‐49. Simple up and down icons. 
6.2.2.3. On/off icons 
On/off icons serve as flags to identify some items as different from others. For example, if you display a list 
of the top 10 current sales opportunities and you want to flag some as being closer to closing than others, a 
simple on/off icon would do this nicely. Other typical uses include marking featured items, such as products 
in a list, and pointing out where you currently are on a schedule that includes events that extend into the 
past and future. Any one of many simple icons could be used to serve this purpose, but checkmarks, 
asterisks, and Xs (Figure 6‐50) are probably the most common and intuitively understood. Regardless of 
which icon you choose for this purpose, it is best to pick one and stick to it. Consistency might seem boring, 
but on dashboards it makes things clear. 
 
Figure 6‐50. Sample on/off icons. 
6.2.3. Text 
All dashboards, no matter how graphically oriented, include some information that is encoded as text. This 
is both necessary and desirable, for some information is better communicated textually rather than 
graphically. Text is used for the categorical labels that identify what items are on graphs, but it is often 
appropriate in other places as well. Any time it is appropriate to report a single measure alone, without 
comparing it to anything, text communicates the number more directly and efficiently than a graph (Figure 
6‐51). Note that in these instances some means to display the text on a dashboard, such as a simple text 
box, is necessary.1 
 
Figure 6‐51. Text can be used on a dashboard to clearly convey a single measure on its own. 
6.2.4. Images 
The means to display images such as photos, illustrations, or diagrams is sometimes useful on a dashboard, 
but rarely, in my experience. A dashboard that is used by a trainer might include photographs of the people 
                                                           
11 See Chapter 7, Designing Dashboards for Usability, for a discussion of choosing fonts for use on a dashboard. 
www.it-ebooks.info

---

<!-- página 134 -->

scheduled to attend the day's class, one used by a maintenance worker might highlight the areas of the 
building where light bulbs need to be replaced, or one used by a police department might use a map to 
show where crimes have occurred in the last 24 hours. However, images will be unnecessary for most 
typical business uses. 
6.2.5. Drawing Objects 
It is sometimes useful to arrange and connect pieces of information in relation to one another in ways that 
simple drawing objects handle with clarity and ease. For instance, when displaying information about a 
process, it can be helpful to arrange separate events in the process sequentially and to indicate the path 
along which the process flows, especially when branching along multiple paths is possible. Another 
example is when you need to show connections between entities, perhaps including a hierarchical 
relationship, such as in an organization chart. Entities can easily be displayed as rectangles and circles, and 
relationships can be displayed using lines and arrows. For instance, rectangles or circles could represent 
tasks in a project, with arrows connecting them to indicate their relationships and order. 
Figures 6‐52 and 6‐53 provide examples of how some of these objects might be used. They can also be used 
to highlight and group information, which is a common need in dashboard design. Switching between 
rectangles and circles provides an easy way to distinguish different types of entities. Lines and arrows both 
show connections between entities, but arrows display the additional element of direction. 
 
Figure 6‐52. Simple drawing objects can be used to clarify relationships between the components of net revenue. 
 
Figure 6‐53. Simple drawing objects can be used to display relationships between tasks in a project plan. 
www.it-ebooks.info

---

<!-- página 135 -->

6.2.6. Organizers 
It is often the case that sets of information need to be arranged in a particular manner to communicate 
clearly. Three separate ways of organizing and arranging related information stand out as particularly useful 
when displaying business information on dashboards: 
 
Tables 
 
Spatial maps 
 
Small multiples 
6.2.6.1. Tables 
Tables arrange data into columns and rows. This is a familiar arrangement for text (Figure 6‐54), but it can 
also be used to arrange any of the other display media that we've already examined. Arranging graphs, 
icons, and images into columns and rows is often useful. 
 
Figure 6‐54. A tabular arrangement of text. 
6.2.6.2. Spatial maps 
Spatial maps offer a more specialized and less often needed form of organization. They can be used to 
associate databoth categorical and quantitativewith physical space. When data is tied to physical space and 
its meaning can be enhanced by making that arrangement visible, spatial maps are useful. 
The most common arrangement of data related to physical space is a geographical arrangement in the form 
of a map. When the geographical location of the thing being measured must be seen to understand the 
data, placing the measures on a map supports this understanding. However, this doesn't mean that any 
time measures can be shown in relation to geography, they should be; only when the meaning of the data 
is tied to geography and that meaning cannot easily be understood without actually seeing the data 
arranged on a map should this approach be taken. For example, sales revenue can be understood in 
relation to a small number of sales regions without displaying the data on a map (see Figure 6‐55), but 
displaying concentrations of absenteeism among employees in stores located throughout the United States 
on a map could reveal patterns related to location that might not be obvious otherwise. 
www.it-ebooks.info

---

<!-- página 136 -->

Figure 6‐55. Spatial maps can be useful when they add to our understanding of the data, but, as in this case, they are often used 
unnecessarily. 
The second most useful type of spatial map on a dashboard is probably the floor plan of a building. If, for 
example, it is your job to monitor temperatures throughout a large building and respond whenever 
particular areas exceed established norms, seeing the temperatures arranged on a floor plan could bring 
relationships between adjacent areas to light that you might miss otherwise. 
6.2.6.3. Small multiples 
The last organizer arranges graphs in a manner that Edward Tufte calls "small multiples." This arrangement 
is tabular, consisting of a single row or column of related graphs, or multiple rows and columns of related 
graphs arranged in a matrix. I list small multiples separately from tables because organizers that display 
small multiples ought to have some intelligence built into them to handle aspects of this arrangement that 
would be time‐consuming to arrange manually in a table. 
In a display of small multiples, the same basic graph appears multiple times, each time differing along a 
single variable. Let's look at an example. If you need to display revenue data as a bar graph across four sales 
regions, with bookings and billings revenue shown separately, you could do so in a single graph, as shown 
in Figure 6‐56. 
www.it-ebooks.info

---

<!-- página 137 -->

Figure 6‐56. This bar graph displays three variables. 
If, however, you must simultaneously display the revenue split between three sales channels (for example, 
sold directly, through distributors, and through resellers), a single graph won't work. To the rescue comes 
the small multiples display. As shown in Figure 6‐57, by arranging three versions of the same graph next to 
one anotherone graph per sales channelyou can show the entire picture within eye span, making 
comparisons easy. To eliminate unnecessary redundancy, you could avoid repeating the region labels in 
each graph, as well as the legend and the overall title. This not only saves valuable space, which is always 
important on a dashboard, but it also reduces the amount of information that the viewer must read when 
examining the display. 
 
Figure 6‐57. This series of horizontally aligned small multiples displays revenue split between three sales channels. 
An intelligent organizer for small multiples built into the software would allow you to reference the data, 
indicate which variable goes on which axis of the graph, which should be encoded as lines of separate 
colors, which should vary per graph, and finally whether you want the graphs to be arranged vertically, 
horizontally, or in a matrix; the organizer would then handle the rest for you. As of this writing, I have yet to 
see dashboard software that makes this easy to do. I reserve the hope, however, that this will soon change. 
6.3. Summary 
The library of dashboard display media that I've proposed in this chapter is certainly not comprehensive, 
nor will it remain unchanged as time goes on. As new graphic inventions emerge that suit the purpose and 
design constraints of dashboards, this library will continue to grow, but I expect that it will do so slowly. 
www.it-ebooks.info

---

<!-- página 138 -->

Just because a vendor introduces a new visualization technique doesn't mean it belongs on a dashboard. 
Let's keep the vision true to form and effective for enlightening and efficient communication. 
Chapter 7. Designing Dashboards for Usability 
A few important aspects of dashboard's visual design remain to be considered. One of the most challenging 
is the need to arrange many items of informationoften related solely by the viewer's need to monitor them 
allin a manner that doesn't result in a cluttered mess. This arrangement must support the intrinsic 
relationships between the various items and the manner in which they must be navigated and used to 
support the task at hand. A dashboard's design must optimally and transparently support its use. The whole 
also must be pleasing to look upon, or it will be ignored. 
 
 
www.it-ebooks.info

---

<!-- página 139 -->

Organize the information to support its meaning and use  
Maintain consistency for quick and accurate interpretation  
Make the viewing experience aesthetically pleasing  
Design for use as a launch pad  
Test your design for usability 
Beyond selecting appropriate display media and reducing the non‐data pixels to a minimum, attention also 
must be given to several other aspects of design to guarantee that your dashboards are easy to use and do 
everything they can to support the viewer's need to respond to the information. Having knowledge of a few 
more design strategies under your belt will help you blend all the visual aspects of your dashboard into a 
pleasing and functional display. 
7.1. Organize the Information to Support Its Meaning and Use 
You can't just take information and throw it onto the dashboard any way you please. How the pieces are 
arranged in relation to one another can make the difference between a dashboard that works and one that 
ends up being ignored, even though the information they present is the same. Keep the following 
considerations in mind when you determine how to arrange data on the screen: 
 
Organize groups according to business functions, entities, and use. 
 
Co‐locate items that belong to the same group. 
 
Delineate groups using the least visible means. 
 
Support meaningful comparisons. 
 
Discourage meaningless comparisons. 
7.1.1. Organize Groups According to Business Functions, Entities, and Use 
A good first cut at organizing data is to form groups that are aligned with business functions (for example, 
order entry, shipping, or budget planning), with entities (departments, projects, systems, etc.), or with uses 
of the data (for instance, the need to compare revenues and expenses). These are the natural ways to 
organize most business data. 
In a business, because entities and functions are parts of an interconnected system, someone whose role 
spans many of these individual units might prefer to see data organized in a way that is more integrated 
and aligned with the way she uses that information. For instance, a CEO stands above the divisions found in 
an organization's structure and usually wants to see relationships among data that are more holistic, 
perhaps based on the relative importance of each item to the company's bottom line, from greatest to 
least. In a case like this, items that others might naturally see as belonging to distinct groups might be 
grouped together to better serve the needs of the CEO. If there is a particular order in which the data ought 
to be scanned to build the desired overview as efficiently as possible, grouping and ordering items 
accordingly might work best. 
When organizing data on a dashboard, start by learning precisely how the information will be used and how 
the pieces ought to be arranged to best serve these uses. 
7.1.2. Co­locate Items That Belong to the Same Group 
Once you've determined those items that belong together relative to the task at hand, the best means to 
connect them is to place them close to one another, yet delineated in some simple manner from 
www.it-ebooks.info

---

<!-- página 140 -->

surrounding groups. Using position to group items visually is a strategy that is preattentively and thus 
rapidly perceived. 
7.1.3. Delineate Groups Using the Least Visible Means 
Visual means that are used to delineate groups of data, such as grid lines, borders, and background fill 
colors, qualify as non‐data pixels. As such, they should be only as visible as necessary to do the job. What is 
the least visible means to visually delineate groups of data? The answer is white space. When enough blank 
space surrounds a group of data to set it apart from the other groups, the objective is accomplished 
without adding any visual content to the dashboard that might distract attention from the data. Use white 
space to delineate groups of data whenever possible. 
Of course, as dashboards are often high‐density displays, they do not always have the spare space 
necessary to use white space alone to delineate the groups. When that is the case, subtle borders are 
usually the best means to distinguish the groups. You might be surprised at how light lines can be and still 
do the job. Take a look at Figure 7‐1 for an example of how you can use white space or light borders to 
delineate the same groups of data. 
 
www.it-ebooks.info

---

<!-- página 141 -->

Figure 7‐1. The four tables on the top have been separated effectively using white space alone, but the four on the bottom, 
because they are closer together, have been separated using light borders. 
7.1.4. Support Meaningful Comparisons 
Measures of performance come alive only when you compare them to other measures. For example, 
knowing that quarter‐to‐date sales revenue is $92,354 is meaningful only when compared to one or more 
other measures that can be used as yardsticks to determine its merit, such as a target or the amount of 
revenue that had come in at this point in the prior quarter. You can encourage meaningful comparisons by 
doing the following: 
 
Combining items in a single table or graph (if appropriate) 
 
Placing items close to one another 
 
Linking items in different groups using a common color 
 
Including comparative values (for example, ratios, percentages, or actual variances) whenever 
useful for clarity and efficiency 
Figure 7‐2 illustrates two of these practices. The graph on top shows several measures that share the same 
unit of measure, displayed in a single graph to encourage comparison. The graph on the bottom combines 
two data sets with different units of measure in a single graph by placing one quantitative scale on the left 
vertical axis and another on the right. 
 
Figure 7‐2. Two examples of combining multiple measures in a single graph to encourage comparisons. 
www.it-ebooks.info

---

<!-- página 142 -->

The table in Figure 7‐3 illustrates how values can be expressed directly as comparative units of measure to 
encourage comparisons. Both the "% of Total" and "% of Fcst" columns contain values that are comparative 
by their very nature. Especially when you want to communicate the degree to which one value differs from 
another, percentages express this more directly than raw values. 
 
Figure 7‐3. You can use comparative values to directly support comparisons. 
7.1.5. Discourage Meaningless Comparisons 
Even if it's all important to some job or set of objectives, not all the data that appears on a dashboard is 
meant to be compared. However, without vigilance, you might inadvertently make design choices that 
encourage the comparison of unrelated data. For instance, in Figure 7‐4, some of the color choices produce 
this unintended effect. The colors green and red mean "good" and "bad" wherever they appear, which 
encourages us to assume that all the colors used on this dashboard mean the same wherever they appear. 
However, this isn't the case notice that the color yellow means "satisfactory" in some contexts, but in one 
graph it represents forecast balances and in another the month of June. In this case, our natural inclination 
to link like colors is misleading. 
 
Figure 7‐4. This dashboard inadvertently encourages meaningless comparisons. 
www.it-ebooks.info

---

<!-- página 143 -->

You can discourage meaningless comparisons by doing the opposite of the practices mentioned in the 
previous section: 
 
Separate items from one another spatially (if appropriate). 
 
Use different colors. 
7.2. Maintain Consistency for Quick and Accurate Interpretation 
Differences in appearance always prompt us to search, whether consciously or unconsciously, for the 
significance of those differences. Anything that means the same thing or functions in the same way ought 
to look the same wherever it appears on a dashboard. Even something as subtle as arbitrarily using dark 
axis lines on one graph and light axis lines on another will lead viewers to suspect that this difference, 
which is in fact arbitrary, is significant. 
It's important to maintain consistency not only in the visual appearance of the display media, but in your 
choice of display media as well. If two sections of data involve the same type of quantitative relationship 
(such as a time series) and are intended for similar use (for example, to compare a measure to a target 
measure for each month), you should use the same type of display for both (for example, a bar graph). 
Never vary the means of display for the sake of variety. Always select the medium that best communicates 
the data and its message, even if that means that your dashboard consists of the same type of graph 
throughout. 
7.3. Make the Viewing Experience Aesthetically Pleasing 
In 1988 Donald Norman, a cognitive scientist, wrote a wonderful book entitled The Design of Everyday 
Things (New York: Basic Books). It is a classic in the field of design that convincingly argues that the 
effectiveness of something's design should be judged by how well it works and how easy it is to use. In the 
years since its publication, designers have often accused Norman of ignoring the value of aesthetics. This 
frequent critique was one of his motives for writing the recent book entitled Emotional Design: Why We 
Love (or Hate) Everyday Things (New York: Basic Books, 2004). 
In this book, Norman describes the psychological and physiological benefits of aesthetically pleasing design. 
If applied to dashboard design, Norman's point would argue that aesthetically pleasing dashboards are 
more enjoyable, which makes them more relaxing, which prepares the viewer for greater insight and 
creative response. This is not a departure from his earlier assertions in The Design of Everyday Things, but 
rather an extension asserting that aesthetics, when not in conflict with a product's usability, possess 
intrinsic qualities that also contribute to usability. This new book convincingly reframes the discussion 
about the importance of usability as a matter not of usability versus aesthetics but of usability versus 
anything that flagrantly undermines usability, which good, aesthetically pleasing design manages to avoid. 
I love visual art. I appreciate beauty for its own sake. Moments of great beauty exalt me. Information 
design, however, is about communication: getting an intended message across in a way that results in 
useful understanding. Aesthetics are an important component of information design, but not in the same 
way that they are in art. If a dashboard is not designed in an aesthetically pleasing way, the unpleasant 
experience that results for the viewer undermines the dashboard's ability to communicate. On a 
dashboard, your aesthetic talent ought to be applied directly to the display of the data itself, not to 
meaningless and distracting ornamentation. The aesthetics of dashboard design should always express 
themselves simply, striving for the eloquence that emerges uniquely from simplicity. 
www.it-ebooks.info

---

<!-- página 144 -->

The dashboard shown in Figure 7‐5, while simple enough, is a glaring example of design that is anything but 
aesthetically pleasing. How can you avoid creating a similar monstrosity? Let's look at a few guidelines that 
will help you achieve a simple aesthetic without compromising the data. 
 
Figure 7‐5. An example of a downright ugly dashboard. 
7.3.1. Choose Colors Appropriately 
Poor use of color is perhaps the most common offense to a dashboard's appearance. Colors that are bright 
or dark naturally demand more attention. Too many bright or dark colors can quickly become visually 
exhausting. When selecting colors, keep the following guidelines in mind: 
 
Keep bright colors to a minimum, using them only to highlight data that requires attention. 
 
Except for content that demands attention, use less saturated colors such as those that are 
predominant in nature (for example, the colors of the earth and sky). 
 
Use a barely discernable pale background color other than pure white to provide a more 
soothing, less starkly contrasting surface on which the data can reside. 
Figure 7‐6 illustrates these principles. 
www.it-ebooks.info

---

<!-- página 145 -->

Figure 7‐6. Avoid the use of bright colors except to highlight particular datastick with more subdued colors for most of what's 
displayed. Use a background color that is slightly off‐white to avoid the stark contrast between foreground colors against a pure 
white background. 
7.3.2. Choose High Resolution for Clarity 
The high density of information that typically appears on a dashboard requires that the graphical images be 
displayed with exceptional visual clarity. Images with poor resolution are hard to read, which slows down 
the process of scanning the dashboard for information (and is just plain annoying). Visual clarity does not 
require fancy shading or photo‐realism; simple high‐resolution images will do. 
7.3.3. Choose the Right Text 
My final recommendation regarding dashboard aesthetics involves the use of text. Use the most legible 
font you can find. You don't need to set a mood or reinforce a theme by using an unusual font. Ornate text 
might be appropriate for a poster advertising the circus, but not for a dashboard. You want a font that can 
be read the fastest with the least amount of strain on the eyes. Find one that works and stick with it 
throughout the dashboard. You can use a different font for headings to help them stand out if you wish, but 
that's the practical limit. Figure 7‐7 illustrates a few of the good and bad choices that are available. 
 
Figure 7‐7. Examples of some fonts that are easy to ready and some that are not. 
7.4. Design for Use as a Launch Pad 
As single‐screen displays, dashboards do not always provide all the information needed to perform a job or 
to pursue a particular set of objectives. They can provide the initial overview that is needed for monitoring 
at a high level, but they might need to be supplemented with additional information for more 
comprehensive understanding and response. Dashboards should almost always be designed for interaction. 
The most common types of dashboard interaction are: 
 
Drilling down into the details 
 
Slicing the data to narrow the field of focus 
www.it-ebooks.info

---

<!-- página 146 -->

Whichever of these you intend, when your dashboard serves as a launch pad to additional, complementary 
information, be sure to keep the following principles in mind: 
 
Allow the viewer to initiate the launch by clicking the data itself. 
 
Use consistent launch actions. 
Enabling the viewer to access additional data (such as the details beneath the overview) via direct 
interaction is easy and intuitive, and it saves space on the dashboard by eliminating separate controls such 
as buttons. If you display a bar graph in which each bar represents the revenue of a different sales region, 
for example, it might be ideal to allow the viewer to click directly on a particular bar to see a graph that 
further subdivides that region's revenue according to the individual states that belong to the region. 
Likewise, if there are times when a viewer might want to know the precise value for a particular data point 
along a line graph, the ability to hover over that position and have the value pop up temporarily as text is 
ideal. Whatever mechanism you decide to build into the dashboard to initiate links to additional data, make 
sure that it is consistent wherever it appears, to avoid confusion. 
7.5. Test Your Design for Usability 
No matter how well designed your final product turns out to be, it is always hard to dissuade people from 
predetermined notions of how it should look. Do your best to prevent those who will eventually use your 
completed dashboard from developing expectations about its look and feel apart from your input and 
expert advice. Present your users with a single prototype of the most effective design that you can create, 
and let that be the starting point for discussions about how it might be tweaked to better serve their needs. 
Don't present them with several alternative designs, because even though your users probably know what 
they need to accomplish, they don't know how the dashboard ought to be visually designed to achieve that 
result. You are the designer, so it is up to you to bring this expertise to the process. 
You will never get everything right on the first try, no matter how skilled you are. You must put your design 
to the test. Only those who will actually use the dashboard are qualified to determine if it actually works 
and works well. Show it to them populated with real data, and observe them as they look it over and learn 
to make sense of the data. If you are introducing display media that are new to them, begin with simple 
instruction in how they work and explain why you chose those mechanisms rather than others that might 
be more familiar. If you've done your homework and your users really care about doing their jobs well 
rather than doing them in a particular way, usability testing will usually result in relatively minor additions 
and tweaks to refine the effectiveness of the dashboard, rather than major revisions. Although there are 
certainly exceptions when dealing with the foibles of human beings, good design usually results in a good 
reception. 
 
 
www.it-ebooks.info

---

<!-- página 147 -->

Chapter 8. Putting It All Together 
A great deal of information has been amassed as the lessons in this book have been unveiled step by step, 
concept by concept, and principle by principle. Now it is time to tie it all together, to see these principles 
combined in the form of sample dashboards. The proof is in the efficacy of the result: dashboards that can 
be monitored and understood at a glance. We'll look at four examples of effectively designed dashboards, 
and put our knowledge to the test by critiquing eight alternate solutions to one of these design problems. 
 
 
www.it-ebooks.info

---

<!-- página 148 -->

Sample sales dashboards  
Sample CIO dashboard  
Sample telesales dashboard  
Sample marketing analysis dashboard 
In this final chapter, we'll bring together the principles and practices taught throughout the book. We'll 
examine some dashboards that illustrate the clear and efficient communication that results from informed 
design, and we'll test your knowledge by critiquing several others. These samples address four different 
business scenarios, including dashboards that support strategic, analytical, and operational purposes: 
Sample sales dashboard A sales manager might use this dashboard to monitor sales performance and 
opportunities (strategic).  
Sample CIO dashboard A Chief Information Officer (CIO) might use this dashboard to monitor several 
aspects of a company's information systems (strategic and operational).  
Sample telesales dashboard The supervisor of a team of sales representatives who take orders and answer 
questions by phone might use this dashboard to monitor performance (operational).  
Sample marketing analysis dashboard A marketing analyst might use this dashboard to monitor the 
marketing performance of the company's web site (analytical). 
These examples will not only put flesh on the bones of the design principles that I've taught in this book, 
but (I hope) will also suggest ideas for the types of information you might display on a dashboard and some 
interesting and effective ways to do so. 
8.1. Sample Sales Dashboard 
Apart from executive dashboards, I suspect that no one type of dashboard is implemented more often than 
a sales dashboard. Sales activity is the life‐giving heart of most businesses. Those in charge of sales need to 
keep their fingers on the pulse at all times, even when all is well. Sales strategies might need to change 
quickly when new opportunities, problems, or competitive pressures arise. A well‐designed dashboard can 
be a powerful tool for a sales manager. 
I began designing the sample sales dashboard by selecting the information that seemed most important for 
a sales manager to monitor. Each item that I selected is a measure of what's currently going on in sales. 
Here's the list:1 
 
Sales revenue 
 
Sales revenue in the pipeline (expected revenue divided into categories of probability) 
 
Profit 
 
Customer satisfaction rating 
 
Top 10 customers 
 
Market share 
                                                           
1 Keep in mind that the purpose of the samples in this chapter is not to define the data that you should include on any 
particular type of dashboard, but rather to illustrate how the visual design principles that you've learned in this book 
can be applied to real‐world situations, and how they might look. It isn't possible to determine the precise data that 
will be appropriate for all dashboards of any particular type, such as a sales dashboard. 
www.it-ebooks.info

---

<!-- página 149 -->

For each of these items, I needed to make several decisions, including: 
 
At what level of summarization should I express this measure? 
 
What unit of measure should I use to express this measure? 
 
What complementary information should I include as context to enhance this measure's meaning? 
 
What means of display would best express this measure? 
 
How important is this measure to a sales manager compared to the other measures? 
 
At what point in the sequence of viewing the items on the dashboard might a sales manager want 
to see this measure? 
 
To what other measures might a sales manager want to compare this measure? 
If I were designing a sales dashboard for a particular person or group, I would involve them in answering 
these questions. For my present purposes, however, I made several assumptions based on my knowledge 
of sales and produced the dashboard in Figure 8‐1. 
 
Figure 8‐1. A sample sales dashboard that puts into practice the principles we've discussed throughout this book. 
Examine this dashboard on your own, through eyes that can now recognize what works and what doesn't, 
with an understanding of why. Look at each measure, at what I included as context, and at every aspect of 
the visual design, both on its own and in relation to the whole. Ask yourself, "Why was it designed in this 
way?" Take some time now to do this before reading on. Hopefully, you'll be able to identify and explain 
the reasons for most of my design choices. 
Here are a few of the highlights: 
Color has been used sparingly. Other than the light‐brown headings to clearly group the data into 
meaningful sections, the only other color that is not a gray‐tone appears on the red alerts. This judicious 
use of color makes those items that must grab attention do so clearly, without competition from other 
colors that might also attract attention.  
The prime real estate on the screen has been used for the most important data. Assuming that the 
measures that have been identified as the "key metrics" are generally the most important items on the 
dashboard, placing them in the upper‐left corner of the screen gives them the prominence that they 
deserve.  
Small, concise display media have been used to support the display of a dense set of data in a small 
amount of space. This dashboard displays a great deal of information, yet it isn't cluttered. Space‐efficient 
and simple display media such as sparklines and bullet graphs are required to achieve this effect.  
Some measures have been presented both graphically and as text. People who monitor sales activity are 
www.it-ebooks.info

---

<!-- página 150 -->

generally interested in knowing both the actual sales amounts and how well sales are doing compared to 
targets.  
The display of quarter‐to‐date revenue per region combines the actual and pipeline values in the form of 
stacked bars. This approach enables viewers to easily see the result of adding anticipated to actual revenue 
in relation to the target.  
White space alone has been used to delineate and group data. Borders, grid lines, and background fill 
colors are unnecessary and would severely clutter the screen.  
The dashboard has not been cluttered with instructions and descriptions that will seldom be needed. A 
single help button has been provided to allow the viewer to access information that will probably be 
needed only once or twice, at the beginning of the dashboard's use. 
Looking at this sample dashboard, you might see ways that different choices could have been made to 
further improve its effectiveness. I fully expect and even hope to receive feedback from readers like you to 
point out improvements that could be made. 
You might find it useful to compare my sales dashboard to several others that were designed to meet the 
same exact set of requirements. I recently judged a data visualization competition for DM Review 
magazine. One of the four business scenarios that participants were asked to address with data 
visualization solutions required a sales dashboard with the same measures that I included in mine. The 
contestants were given the requirements without any design instruction or sample solutions. I'd like to 
show you a few of the solutions that were submitted, all of which are quite different from mine. Examine 
them to judge how the choices their designers made might have been improved. I believe that by doing this 
you will see how applying the design principles that you've learned in this book will offer clear advantages 
over these other approaches. 
I've included a few comments following each of these alternative sales dashboard solutions, but take the 
time to examine each of them on your own before reading my critique. This effort will strengthen your 
understanding of dashboard design and help to more seamlessly integrate the principles we've covered 
into your thinking. I haven't bothered to list every one of the problems that I've discovered in each of the 
dashboards, but have focused primarily on unique problems. 
www.it-ebooks.info

---

<!-- página 151 -->

Critique of Sales Dashboard Example 1 
 
Figure 8‐2. This text‐based sample sales dashboard could be improved. 
This sales dashboard uses an approach that relies almost entirely on text to communicate, using visual 
means only in the form of green, light red, and vibrant red hues to highlight items as "good," "satisfactory," 
or "poor." Expressing quantitative data textually provides precise detail, but this isn't usually the purpose of 
a dashboard. Dashboards are meant to provide immediate insight into what's going on, but text requires 
reading a serial process that is much slower than the parallel processing of a visually oriented dashboard 
that makes good use of the preattentive attributes of visual perception.  
To compare actual measures to their targets, mental math is required. Graphical support of these 
comparisons would have been easier and faster to interpret.  
Numbers have been center‐justified in the columns, rather than right‐justified. This makes them harder to 
compare when scanning up and down a column.  
Some important measures are missing. This dashboard does not include pipeline revenue or the top 10 
customers.  
All four quarters of the current year have been given equal levels of emphasis. A sales manager would have 
greater interest in the current quarter. The design of the dashboard should have focused on the current 
quarter and comparatively reduced emphasis on the other quarters.  
Proper care has not been given to make important distinctions. The greater intensity of the vibrant red hue 
that is used to highlight measures that are performing poorly will stand out clearly even to color‐blind 
users, but the subdued shade of red and the equally subdued shade of green might not be distinguishable. 
www.it-ebooks.info

---

<!-- página 152 -->

Also, the numbers that ought to stand out most and be very easy to read the poorly performing measures 
are the hardest to read against the dark red background. 
Critique of Sales Dashboard Example 2 
 
Figure 8‐3. This solution exhibits some of the same problems as the previous example, but also a few different ones. 
The grid lines that appear in the tables are not needed at all. Even if they were needed, they should have 
been muted visually. In their current heavy form, they imprison the numbers.  
The grid lines that appear in the graphs are also unnecessary. They distract from the data. Especially in the 
context of a dashboard, you can't afford to include any unnecessary visual content.  
The drop shadows on the bars and lines in two of the graphs and on the pie chart are visual fluff. These 
elements serve only to distract.  
www.it-ebooks.info

---

<!-- página 153 -->

All of the numbers in the tables have been expressed as percentages. If those who use this dashboard only 
care about performance relative to targets, this is fine, but it is likely that they will want a sense of the 
actual amounts as well.  
The pie chart is not the most effective display medium. Assuming that it is worthwhile to display how the 
90% probability portion of the revenue pipeline is distributed among the regions, a bar graph with the 
regions in ranked order would have communicated this information more effectively.  
Overall, this dashboard exhibits too many bright colors. The dashboard as a whole is visually overwhelming 
and fails to feature the most important data.  
There is no comparison of trends in the revenue history. The 12‐month revenue history shown in the line 
graph is useful, but it would also have been useful to see this history per region and per product, to allow 
the comparison of trends. 
Critique of Sales Dashboard Example 3 
 
Figure 8‐4. This solution illustrates several of the problems that I pointed out in Chapter 3, Thirteen Common Mistakes in 
Dashboard Design. 
This design fragments the data that a sales manager would want to see into separate instances of the 
dashboard. Notice the radio buttons above the graph on the left, which are used to select the quarter that 
you want to see. This gives you no means to compare sales performance over time.  
The photographs are chartjunk (a term coined by Edward Tufte to describe visual content in an information 
display that serves only as decoration). This useless decoration serves only to distract from the data. After 
seeing these faces for a couple of days, viewers will tire of them and wish the space had been better used. 
www.it-ebooks.info

---

<!-- página 154 -->

Furthermore, the most important real estate on the screen (at the top left) is taken up by photographs and 
a company logo. This is a waste of valuable space.  
The bar graph in the upper left fails to visually display clear comparisons to the targets. You must read the 
numbers printed on the bars to determine the relationships to the targets.  
The two graphs on the right make an attempt to visually compare the revenue measures to their targets, 
but they use a line to encode the targets, which is inappropriate for this data. Using a line to connect values 
in a graph suggests a relationship of change between the values, but revenue values for individual products 
or regions are not intimately connected to one anotherthey are discrete values along a nominal scale. The 
patterns formed by the lines are meaningless. 
Critique of Sales Dashboard Example 4 
 
Figure 8‐5. This example used headache‐inducing colors. 
The use of color is too dramatic, especially in the areas with the dark backgrounds. A light, slightly off‐white 
background throughout would have worked better. Also, the use of extremely different background colors 
to separate the data into four sections isn't necessary.  
White space is overused. Rather than surrounding the two tables on the left in a large amount of white 
space, the tables could have been enlarged to make them easier to read. 
www.it-ebooks.info

---

<!-- página 155 -->

Critique of Sales Dashboard Example 5 
 
Figure 8‐6. This solution exhibits some of the problems found in previous examples, and a few others. 
Once again, we have a design that has fragmented the data. Notice the radio buttons or sliders next to each 
of the graphs. We can only see one measure at a time in each graph, yet much of this data ought to be 
displayed together to enable us to make useful comparisons (such as between the regions).  
The beautiful, brightly colored pie charts look so much like candy, I get a sugar‐rush just looking at them. 
The colors are much too bright, and the photo‐realistic shading to give them a 3‐D appearance is simply not 
necessary. This effect makes the pie charts jump out as the dominant features of the dashboard, which is 
not warranted. Also, once again, pie charts are not the most effective means of displaying data on a 
dashboard, because they don't allow for comparisons as easily as bar graphs.  
The visual shading on the bars and buttons, like that on the pie charts, is unnecessary and distracting. This 
contributes to the effect of making these objects pop out inappropriately. 
www.it-ebooks.info

---

<!-- página 156 -->

Critique of Sales Dashboard Example 6 
 
Figure 8‐7. While visually appealing in some ways, this solution has some serious weaknesses. 
Despite the visual appeal of the left half of this dashboard, the display media were not well chosen. The 
circular representations of time‐series data using hues to encode states of performance (good, satisfactory, 
and poor) are clever, but for the purpose of showing history, these are not as intuitive or informative as a 
linear display, such as a line graph.  
None of the measures that appear on the left side of the dashboard is revealed beyond its performance 
state. Knowing the actual revenue amount and more about how it compares to the target would certainly 
be useful to a sales manager. Unlike some of the previous examples that used hues to encode states of 
performance, however, I believe that these hues were carefully chosen to be recognizable by those who 
are color‐blind.  
The circular display mechanisms treat all periods of time equally. There is no emphasis on the current 
quarter.  
Gradient fill colors in the bar graphs add meaningless visual interest. They also influence perception of the 
values encoded by the bars in subtle ways. Bars that extend into the darker sections of the gradient appear 
slightly different from those that extend only into the lighter sections. Dashboard designers should be 
conscious of even these subtle effects and avoid them. 
www.it-ebooks.info

---

<!-- página 157 -->

Critique of Sales Dashboard Example 7 
 
Figure 8‐8. This dashboard has a problem that we haven't seen so far that undermines its effectiveness. 
Some of these graphs are too complex for easy interpretation. The revenue performance by product and 
region graphs at the lower left and the quarter‐to‐date sales pipeline by region graph in the center bottom 
position all use bars that encode values in two dimensions, using both the height and width of each bar. 
This is a worthwhile attempt to save space, but one that requires too much study to interpret due to 
limitations in visual perception. The two graphs on the left both use the X (horizontal) axis to encode 
revenue performance compared to target, and the Y (vertical) axis to encode the portion of each product or 
region to the whole, functioning like stacked bar graphs. The pipeline revenue graph in the center displays 
the different parts of the pipeline (90% probability, etc.) as segments of the bar running horizontally from 
left to right, and the regional portions of the total pipeline as vertical segments. Using both the height and 
width of the bars to encode quantitative valuesrectangles that tempt us to compare their 2‐D areas to one 
anotherresults in inaccurate comparisons. 
www.it-ebooks.info

---

<!-- página 158 -->

Critique of Sales Dashboard Example 8 
 
Figure 8‐9. This final example is quite a departure from the others and has some serious (and probably obvious) flaws. 
This dashboard, while an interesting contrast to the others, is confusing at first glance and likely to remain 
that way for some while. Much of the data it presents is also fairly imprecise. Colors and shapes have been 
used to encode values in the rectangles that appear throughout the dashboard. In the upper‐right corner, 
you find a legend that tells you what each of the rectangles represents (revenue, market share, profit, etc.) 
wherever you see them arranged in this particular configuration. Although a key for the meaning of the 
various colors and shapes that appear in the rectangles does not appear on the dashboard, the key shown 
in Figure 8‐10 was provided separately when it was submitted for the competition. You could certainly 
memorize the meanings of the various rectangle locations and of the colors and shapes inside them, but 
even after that effort, these rectangles would still never give you more than a rough sense of how the 
measures compare to their targets. For instance, seeing these measures encoded in this way and arranged 
side by side to represent months or quarters does not come close to providing the understanding of 
historical trend that a simple line graph could convey. 
www.it-ebooks.info

---

<!-- página 159 -->

Figure 8‐10. Key for interpreting the data in Figure 8‐9. 
Now that you've taken this little tour through several solutions to the same dashboard design challenge, go 
back and take a look once more at the dashboard in Figure 8‐1. As you can see, there is an eloquence to 
data displayed simply that cannot be achieved if we stray from the essential goal of communication. 
8.2. Sample CIO Dashboard 
A Chief Information Officer must keep track of many facts regarding the performance of the company's 
information systems and activities, including projects that serve the company's information needs. I chose 
to include the following data in my sample dashboard: 
 
System availability (uptime) 
 
Expenses 
 
Customer satisfaction 
 
Severe problem count 
 
CPU usage relative to capacity 
 
Storage usage relative to capacity 
 
Network traffic 
 
Application response time 
 
Major project milestones 
 
Top projects in the queue 
 
Other critical events 
This is a mixture of strategic and frequently updated operational information that a CIO might need. 
Examine Figure 8‐11 closely and try to get a sense for how it might work in the real world. 
Only one section of this dashboardthe upper‐left cornerdisplays near real‐time data. This section consists of 
a series of five alerts: one for each of the systems that the CIO might need to respond to immediately when 
a problem arises. If no red circles appear in this section, nothing critical is currently wrong with any of these 
systems. To better grab the CIO's attention, red alerts that appear in this section could blink until clicked, or 
www.it-ebooks.info

---

<!-- página 160 -->

even emit along with the blinks a sound that gradually increases in volume. The red alert objects could also 
serve as links to other screens that describe precisely what is wrong. 
The rest of this dashboard provides the CIO with information that is more strategic in nature. Notice that a 
great deal of contextual information has been provided to complement the measuresespecially 
comparisons to measures of acceptable performance. This is the kind of context that could help the CIO 
easily make sense of these measures. 
 
Figure 8‐11. A sample CIO dashboard. 
There is a great deal of information on this dashboard, yet it doesn't seem cluttered. This is largely due to 
the fact that non‐data pixels have been reduced to a minimum. For instance, white space alone has been 
used to separate the various sections of the display. A judicious use of color has also contributed to this 
effect. Besides gray‐scale colors, the only other hues you see are a muted green for the name of each 
section and two intensities of red, which in every case serves as an alert. It is easy to scan the dashboard 
and quickly find everything that needs attention, because the red alert objects are unique, visually unlike 
anything else. 
Including information about project milestones, pending projects, and other critical events on this 
dashboard not only locates all the most important information the CIO needs in one place, but also 
supports useful comparisons. Being reminded about coming events that might affect existing systems and 
www.it-ebooks.info

---

<!-- página 161 -->

being able to look immediately at the current performance of those systems could raise useful questions 
about their readiness. 
8.3. Sample Telesales Dashboard 
This sample dashboard was designed to monitor real‐time operations so that a telesales supervisor can 
take necessary actions without delay. This isn't a dashboard that's likely to be looked at once a day, but one 
that will be kept available and examined throughout the day. It doesn't display as many measures as the 
examples you've seen so far in this chapter, because too many measures can be overwhelming when the 
dashboard is used to monitor real‐time operations that require quick responses. Only the following six 
measures are included: 
 
Call wait time 
 
Call duration 
 
Abandoned calls (that is, callers who got tired of waiting and hung up) 
 
Call volume 
 
Order volume 
 
Sales representative utilization (representatives online compared to the number available) 
That's it and that's plenty for a dashboard of this type. 
Imagine that you're responsible for a team of around 25 telesales representatives and are using the 
dashboard in Figure 8‐12 to keep on top of their activities throughout the day. 
The primary metrics that you must vigilantly monitor are the length of time customers are waiting to 
connect with a sales representative, the length of time sales representatives are spending on calls, and the 
number of customers who are getting discouraged and hanging up while waiting to get through. Because of 
their importance, these three metrics are located in the upper‐left corner of the dashboard and are 
extremely easy to read. 
When problems arise, such as the lengthy hold times and excessively lengthy calls shown in this example, 
you must quickly determine the cause before taking action. This is when you would switch your focus to the 
performance of the individual sales representatives, which you can see on the right side of the dashboard. 
Individuals are ranked by performance, with those performing poorly at the top and a red rectangle 
highlighting those who are performing outside the acceptable range. 
www.it-ebooks.info

---

<!-- página 162 -->

Figure 8‐12. A sample telesales dashboard. 
As a dashboard for monitoring real‐time operations, the data would probably change with updates every 
few seconds. This can be distracting when you're trying to focus on a problem, however, so a "Freeze 
Data/Unfreeze Data" button has been provided to temporarily put a halt to updates. When updates are 
frozen, the button shines yellow to remind you of this fact. If the display remains frozen for too long, the 
button begins to blink with a brighter yellow until clicked to once again allow updates. When alerts first 
appear (the red circles), they blink to attract attention and perhaps even emit an audio signal to alert you if 
you aren't watching the screen. To stop these signals, you click the red alert. To remind you that you've 
blocked the alerts from providing urgent signals, the "Reset Alerts" button turns yellow, and after a while 
begins to blink. Once clicked, all alerts can once again signal urgent conditions if necessary. 
8.4. Sample Marketing Analysis Dashboard 
The last sample dashboard we'll look at is an example of one that supports analysis (Figure 8‐13). Like all 
dashboards, it is used to monitor the information needed to do a job, but in this case that job happens to 
primarily involve analysis. Dashboards can provide a useful means for analysts to watch over their domains 
and spot conditions that warrant examination. Ideally, they can also serve as direct launch pads to the 
additional data and tools necessary to perform comprehensive analyses. 
This particular scenario involves an analyst whose work supports the marketing efforts of the company's 
web site. She monitors customer behavior on the site to identify both problems that prevent customers 
from finding and purchasing what they want and opportunities to interest customers in additional 
www.it-ebooks.info

---

<!-- página 163 -->

products. To expose activities on the web site that could lead to insight if studied and understood, the 
following data appears on the dashboard: 
 
Number of visitors (daily, monthly, and yearly) 
 
Number of orders 
 
Number of registered visitors 
 
Number of times individual products were viewed on the site 
 
Occasions when products that were displayed on the same page were rarely purchased together 
 
Occasions when products that were not displayed on the same page were purchased together 
 
Referrals from other web sites that have resulted in the most visits 
The information that appears at the top of this dashboard provides an overview of the web site's 
performance through time and lists missed opportunities and ineffective marketing efforts. Notice that the 
time‐series information regarding visitors to the site is segmented into three sections, each featuring a 
different interval of time. The intervals have been tailored to reveal greater detail for the recent past and 
increasingly less detail the farther back the data goes. 
Much of the information on this dashboard has been selected and arranged to display a ranking 
relationship. This is common when a dashboard is used to feature exceptional conditions, both good and 
bad. Much of this ranked information is communicated in the form of text, with little graphical content. 
Given the purpose to inform the analyst of potential areas of interest with a brief explanation of why, text 
does the job nicely. The analyst must read each entry to decide if she'll investigate the matter, but graphical 
displays, which could be scanned faster, would not do the job as well. The fact that an item appears on one 
of these lists already implies its importance, so graphical devices such as alerts would add nothing. 
www.it-ebooks.info

---

<!-- página 164 -->

Figure 8‐13. A sample web marketing analysis dashboard. 
8.5. A Final Word 
To design dashboards that really work, you must always focus on the fundamental goal: communication. 
More than anything else, you must care that the people who use your dashboards can look at them and 
understand themsimply, clearly, and quickly. Dashboards designed for any other reason, no matter how 
impressive or entertaining, will become tiresome in a few days and will be discarded in a few weeksand few 
things are more discouraging than having your hard work tossed aside as useless. 
When I design something that makes people's lives better, helps them work smarter, or gives them what 
they need to succeed in something that is important to them, I am reminded that one of the great 
cornerstones of a life worth living is the joy of doing good work. This doesn't just happen; it is the result of 
effort that you make because you care. Your dashboards may not change the world in any big way, but 
anything you do well will change you to some degree for the better. Even if the business goals that you're 
helping someone achieve through a well‐designed dashboard don't ultimately matter to you or are not 
intrinsically worthy of great effort, you're worth the effort, and that's enough. In fact, that's plenty. 
 
 
www.it-ebooks.info

---

<!-- página 165 -->

Appendix A. Recommended Reading 
Books by three authors in particular stand out as complementary to the information that I've presented 
about dashboard design, and each deserves a place in your library: 
Wayne W. Eckerson, Director of Research, The Data Warehousing Institute (TDWI). 
Performance Dashboards: Measuring, Monitoring, and Managing Your Business 
(Indianapolis, IN: Wiley Publishing, Inc., 2005)  
Wayne is one of the top industry analysts focused on business intelligence and data warehousing. In his 
book, he covers several aspects of dashboards that fall outside of my exclusive concentration on visual 
design, including how they can be used to improve business performance. 
Edward R. Tufte, Professor Emeritus at Yale University 
The Visual Display of Quantitative Information (Cheshire, CT: Graphics Press, 1983)  
Visual Explanations (Cheshire, CT: Graphics Press, 1990)  
Envisioning Information (Cheshire, CT: Graphics Press, 1997)  
Beautiful Evidence (Cheshire, CT: Graphics Press, 2006)  
No one in recent history has contributed more to our understanding of visual information display than Dr. 
Tufte. All of his books are beautifully designed, eloquently written, and overflowing with insights. 
Colin Ware, Director of the Data Visualization Research Laboratory, University of New Hampshire 
Information Visualization: Perception for Design, Second Edition (San Francisco, CA: 
Morgan Kaufmann Publishers, 2004)  
What we know today about visual perception comes from the work of many researchers from many 
scientific disciplines, but Dr. Ware applies this knowledge to the visual presentation of information better 
than anyone else. 
 
 
www.it-ebooks.info

---

<!-- página 166 -->

Colophon  
Genevieve d'Entremont was the production editor for Information Dashboard Design. Rachel Wheeler was 
the copyeditor. Claire Cloutier provided quality control. Specialized Composition, Inc. provided production 
services. 
Stephen Few designed the cover of this book. Karen Montgomery produced the cover layout in Adobe 
InDesign CS, using Sabon and News Gothic Condensed fonts. 
Mike Kohnke and Terri Driscoll designed the interior layout. The text font is Sabon, and the heading font is 
News Gothic Condensed. The original illustrations that appear in this book were produced by the author, 
Stephen Few, using Microsoft Excel and Adobe Illustrator CS. 
 
www.it-ebooks.info