<!-- página 1 -->

050
Citation: Musungate BN, Ercan T (2023) A simple Node-RED implementation for digital twins in the area of manufacturing. Trends Comput Sci Inf Technol 8(2): 
050-054. DOI: https://dx.doi.org/10.17352/tcsit.000068
https://dx.doi.org/10.17352/tcsit
DOI: 
2641-3086
ISSN: 
E N G I N E E R I N G G R O U P
Introduction
In the past decade, there has been an increase in interest 
in the digital twin concept. The recent COVID-19 pandemic has 
encouraged industries to focus on more innovative ways such 
as digital twins to minimize the negative impact of operational 
disruptions. According to a 2022 report by Capgemini Research 
Institute, digital twin implementations are set to increase by 
36% over the next few years [1]. 
Digital twins
A digital twin is a virtual representation that models a 
physical object. There is a bidirectional connection between 
the virtual representation and its physical counterpart. It is 
widely accepted that the concept of digital twins was publicly 
introduced by Michael Grieves in 2002 [2]. Digital twins can be 
used in many industries, including manufacturing, aerospace, 
battery technology, and robotics [3]. There are many beneﬁ ts 
associated with digital twins. These include fast prototyping, 
safer testing, lower cost of testing, and more optimized 
solutions [4]. This is because the virtual environment of the 
digital twin makes it easier and faster to carry out operations 
that can improve the product. Digital twin is a promising 
technology and is expected to continue improving as the 
Industrial Internet of Things develops.
Node-RED
Node-RED is a ﬂ ow-based programming tool that makes 
it easy to build event-driven applications. The framework 
uses the Node.js run time environment and JavaScript is 
the programming language used to write functions in this 
framework. Node-RED provides a browser-based editor that 
makes it easy to wire together ﬂ ows using a wide range of nodes 
in the palette that can be deployed to its runtime in a single 
Abstract
Interest in digital twins continues to strengthen with technological advancements in Industrial IoT. A digital twin is a virtual representation that models a physical 
object and effectively provides a two-way interaction with the real system. Digital twin models can be set up to test or analyze industrial applications before deployment 
thereby improving the eﬃ  ciency of industries. In this work, a Node-RED implementation for digital twins in the manufacturing sector is developed. Plastic injection molding 
is the chosen case study for the implementation of this digital twin. Node-RED is a platform that allows developers to quickly build Internet of Things applications using 
a simple web browser interface. The digital twin uses the Random Forest Classiﬁ er algorithm to do predictive maintenance tasks including classiﬁ cation of quality of 
products. An easy-to-use dashboard is developed to enable the user to interact with the digital twin. Important modules such as communication with the real environment, 
SMS, and email notiﬁ cations are successfully implemented in the digital twin. The ﬁ ndings show that it is feasible to build a Node-RED digital twin. The ﬂ exibility of Node-
RED makes it suitable for building architecture of varying complexity.
Research Article
A simple Node-RED 
implementation for digital twins 
in the area of manufacturing
Blessing Ngonidzashe Musungate1* and Tuncay Ercan2
1Department of Computer Engineering, Yaşar University, Izmir, Turkey
2Department of Management Information Systems, Yaşar University, Izmir, Turkey
Received: 16 August, 2023
Accepted: 24 August, 2023
Published: 25 August, 2023
*Corresponding author: Blessing Ngonidzashe 
Musungate, Department of Computer Engineering, 
Yaşar University, Izmir, Turkey, Tel: +905386106871; 
E-mail: bnmusungate@gmail.com
ORCiD: https://orcid.org/0009-0003-3738-5901
Keywords: Digital twin; Industrial internet of things; 
IIoT; Node-RED; Predictive maintenance; Machine 
learning
Copyright License: © 2023 Musungate BN, et al. 
This is an open-access article distributed under the 
terms of the Creative Commons Attribution License, 
which permits unrestricted use, distribution, and 
reproduction in any medium, provided the original 
author and source are credited.
https://www.peertechzpublications.org

---

<!-- página 2 -->

051
https://www.peertechzpublications.org/journals/trends-in-computer-science-and-information-technology
Citation: Musungate BN, Ercan T (2023) A simple Node-RED implementation for digital twins in the area of manufacturing. Trends Comput Sci Inf Technol 8(2): 
050-054. DOI: https://dx.doi.org/10.17352/tcsit.000068
click [5]. The framework can be used to develop real-world IoT 
applications as well as simulations. Node-RED was originally 
developed as an open-source project by IBM in 2013 to meet 
the company’s need to quickly connect hardware and devices 
to web services and other software. But as of today, Node-RED 
has developed to be a general-purpose programming tool for 
IoT applications.
Figure 1 shows an example of a Node-RED interface displayed 
on a Chrome browser. The interface can be divided into three 
sections: left, center, and right. The left section of the interface 
is the palette from which installed nodes can be dragged and 
dropped onto the central part. The central part is the work area 
in Node-RED. This is where the nodes are connected. The right 
side shows information about the conﬁ guration and execution 
of the application. Logs and deployment information can be 
shown in this part.
In addition to packages that are built into the platform, there 
are many Node-RED-speciﬁ c packages that can be downloaded 
from the online Node-RED library to add more functionality 
to Node-RED applications [6]. These packages, or nodes, are 
developed by the community. Packages available from this rich 
library include “node-red-dashboard”, “node-red-contrib-
ui-svg” and “node-red-contrib-aedes” which were all used 
in this work. Additionally, since Node-RED is built on Node.
js, users can install packages from the Node Package Manager 
JavaScript (NPMJS) registry [7]. This is a huge beneﬁ t because 
the NPMJS library is an open-source and diverse JavaScript 
package registry. The “mljs” machine learning package used 
in this work was installed from the NPMJS library [8].
Plastic injection molding
Plastic Injection Molding (PIM) is the chosen case study 
for the implementation of a Node-RED digital twin in a 
manufacturing scenario. Because it enables the production of 
complex plastic objects with high precision and productivity, 
PIM is a manufacturing process that is widely used in industry. 
Around 110,000 new injection molding machines are put into 
operation worldwide every year [9]. PIM is a sequential process 
where the plastic is melted, pressed into the mold, cooled to 
solidify, and removed from the mold as a three-dimensional 
shape [10]. Figure 2 shows a pictorial view of a plastic injection 
molding machine with its important parts labeled [11] and 
Figure 3 shows its cross-section [12]. There are sensors 
that collect data in the different parts of the plastic molding 
injection machine. Such readings, called process parameters, 
include mold temperature, melt temperature, speciﬁ c back 
pressure, and cycle time. Analyzing these values can give 
helpful information about a system. 
Aim of the work
The purpose of this work is to develop a simple Node-
RED implementation of a digital twin that can be used on an 
industrial manufacturing site with plastic injection molding as 
the chosen case study. The digital twin is used to make various 
predictive maintenance analyses such as quality prediction 
and anomaly detection based on the received machine process 
data. The effect of quality due to changes in parameters is 
monitored. Also, a notiﬁ cation system is set up to notify 
the factory manager in the event of the products reaching 
undesirable standards.
Methodology
Digital twin architecture
The Node-RED digital twin connects to the physical 
twin using the MQTT protocol. Figure 4 shows the general 
structure of the system. An MQTTX Windows application has 
been used to mimic the real object. This application sends and 
receives data from the Node-RED digital twin. Features of 
the MQTTX application include subscription, publishing, and 
logging of messages [13]. The communication between the two 
environments was done using MQTT. MQTT is a lightweight 
publish/subscribe messaging transport communication protocol 
that is widely used in IoT systems. In the publish/subscription 
model of MQTT nodes subscribe to a particular topic. These 
Figure 1: Node-RED interface.

---

<!-- página 3 -->

052
https://www.peertechzpublications.org/journals/trends-in-computer-science-and-information-technology
Citation: Musungate BN, Ercan T (2023) A simple Node-RED implementation for digital twins in the area of manufacturing. Trends Comput Sci Inf Technol 8(2): 
050-054. DOI: https://dx.doi.org/10.17352/tcsit.000068
nodes get the data once a node publishes data on the topic 
subscripted. An MQTT broker manages the communication 
ﬂ ow in this system ensuring that nodes can connect, publish, 
and subscribe without any issues. In this work, the MQTT 
broker was set up in the Node-RED application. The node-red-
contrib-aedes module from the online Node-RED library was 
used as the broker. Figure 5 shows the implementation of the 
MQTT modules in Node-RED.
Node-RED dashboard
This is an easy-to-build dashboard layout provided by 
the node-red-dashboard module (available from the online 
Node-RED library) that provides the users with a simple way 
to interact with the Node-RED digital twin. Figure 6 shows the 
Node-RED dashboard home tab. This tab provides an overview 
of the system, and the user can quickly see the status of the 
digital twin. A pictorial representation of the plastic injection 
molding machine is shown in the display section of the home 
tab. This representation was built using a special library 
called “node-red-contrib-ui-svg” available from the online 
Node-RED library. An animation of a product is run in the 
representation whenever a prediction result is made by the 
digital twin to mimic the production process.
Machine learning algorithm and dataset
The digital twin needs to have at least one machine learning 
algorithm implemented to carry out predictive maintenance 
tasks. For this implementation, the Random Forest (RF) 
classiﬁ er was chosen for the digital twin because it performed 
better than the “Decision Tree” and “Support Vector Machine” 
in our previous work [14]. The RF algorithm is trained with the 
dataset, provided by this research paper [15], which contains 
plastic injection molding data for the quality prediction of 
the products. Hence, the main predictive maintenance task 
examined in this work is the quality prediction of products 
based on the machine process parameters. 
The dataset used for quality prediction had 1457 samples 
and contained actual readings from a plastic injection molding 
company taken from a plastic injection molding machine [15] 
The dataset classiﬁ ed products into four different classes based 
on quality. Quality is the target class label that can take values 
1, 2, 3, and 4. Table 1 shows part of the dataset used in the 
experiment. The meaning of each possible target class value is 
explained below:
• 
1 - Waste – This product cannot be used because of its 
low quality.
Figure 2: Plastic injection molding machine.
Figure 3: A cross-section through a plastic molding machine.
Figure 4: General diagram of the digital twin architecture.
Figure 5: Implementation of the MQTT modules in Node-RED.
Figure 6: Digital Twin Dashboard.

---

<!-- página 4 -->

053
https://www.peertechzpublications.org/journals/trends-in-computer-science-and-information-technology
Citation: Musungate BN, Ercan T (2023) A simple Node-RED implementation for digital twins in the area of manufacturing. Trends Comput Sci Inf Technol 8(2): 
050-054. DOI: https://dx.doi.org/10.17352/tcsit.000068
• 
2 - Acceptable – This product is of acceptable quality 
and can be used.
• 
3 - Target – This product has the desired quality and is 
of the standards that the factory regards as optimal.
• 
4 - Inefﬁ cient – This product is of acceptable quality 
but has used more resources than expected.
Optimizing parameters 
Using the dashboard, parameter inputs can be changed, and 
prediction results of the digital twin can be seen immediately. 
The parameter values entered are fed to the ML model that 
predicts the quality of the product. This approach can be used 
to optimize the parameters so that they produce products of 
high quality.
Notiﬁ cations system
Notiﬁ cations can be sent to a system user when certain 
conditions happen. For example, if the mold temperature 
exceeds a certain value, or if the product quality is very low 
a notiﬁ cation can be sent. In this work, there are two types of 
notiﬁ cations sent: SMS and email. SMS notiﬁ cations are sent 
using the “node-red-node-twilio” package found in the Node-
RED online library. The email notiﬁ cations are sent using the 
“node-red-node-email” package, also available on the Node-
RED online library.
Results
80% of the dataset was used to train the digital twin and 
the rest of the data was used for testing. The RF algorithm used 
in the digital twin had an accuracy of 92.76%. Accuracy shows 
the percentage of correct predictions made by the algorithm. 
The obtained precision, recall, and f-score values for each of 
the four quality classes are shown in Table 2.
Email and SMS notiﬁ cations were sent whenever the 
predicted value reached one. The connection between the 
Windows MQTT application and the Node-RED digital twin was 
successful and data was transferred in a bidirectional manner.
Discussion
The work in this section shows that it is feasible to develop 
a Node-RED digital twin representation for an industrial use 
case. Important modules like machine learning, notiﬁ cations, 
display, and communications were all successfully implemented 
in this work. The ﬂ exibility of the Node-RED platform makes it 
suitable for the implementation of various architectures.
Node-RED has been used in a number of works related to 
digital twins. The authors in [16] Node-RED model as a digital 
twin and the Carla simulator to mimic the real smart physical 
environment. The authors use a Car-as-a-Service (CaaS) use 
case to demonstrate that the proposed solution can work. This 
example is consistent with the work discussed in this paper. 
Some works have used Node-RED with other software in the 
digital twin to improve database connections and visualizations 
[17,18].
On the other hand, there are some works where Node-
RED acts as a bridge between the digital twin and the physical 
object. For example, some authors in [19] develop a digital twin 
system that uses AutoCAD for simulation and Node-RED as a 
transport medium. In this scenario data is sent from the actual 
sensors of the machines to Node-RED, then Node-RED sends 
the data to AutoCAD. This process is done vice-versa to send 
data from the digital twin to the actual devices.
Conclusion and future work
In this work, a simple Node-RED digital twin was 
developed. This digital twin contained a Random Forest 
classiﬁ cation algorithm and was used to perform predictive 
maintenance tasks mainly classiﬁ cation of the quality of the 
plastic injection molding products. The digital twin had other 
important modules such as a dashboard, notiﬁ cations, and 
communication working properly. Hence, it was concluded 
that the development of a digital twin in Node-RED is feasible.
The ﬂ exibility of the Node-RED makes it possible to make 
many development enhancements to the digital twin model 
in this work. More animation work can be added to make the 
model more interactive. Research can be made into appropriate 
performance metrics for Node-RED in this speciﬁ c model. 
Instead of using the MQTTX application, a real device can be 
connected to the Node-RED platform.
Table 1: Part of the dataset used to train the machine learning algorithm.
DataId
1
2
3
4
5
6
Melt temp (°C)
106.141 106.018 105.944 106.104 147.789
106.273
Mold temp (°C)
81.291
80.371
81.402
81.995
82.099
81.402
Time to ﬁ ll (s)
6.968
10.764
7.228
11.128
11.128
6.864
Plasticizing time (s)
3.19
2.81
3.16
3.01
2.94
3.19
Cycle time (s)
74.82
75.64
74.83
75.62
75.65
74.83
Closing force (N)
910.5
903.8
908.6
900
900.9
886.9
Clamping force peak (N)
929.9
920.1
938.2
917.3
915.6
902.7
Torque peak value (Nm)
114.5
117.8
120.5
120.5
116
120.5
Torque mean value (Nm)
105
107.8
104.9
102.1
104.4
106.7
Speciﬁ c back pressure 
peak value (Bar)
146.6
146.1
145.9
145.4
146.4
145.8
Speciﬁ c injection 
pressure peak value 
(Bar)
917.7
926.6
917.5
870.6
887.3
920.2
Screw position (cm)
8.85
9.02
8.85
8.74
8.86
8.83
Shot volume (cm3)
18.72
18.54
18.89
18.83
18.71
18.73
Quality
2
3
1
4
4
1
Table 2: Precision, recall, and f-scores values for the RF classiﬁ cation algorithm in 
the digital twin.
Algorithm
Class
Precision
Recall
F score
Random 
Forest (RF)
1
0.973
0.889
0.929
2
0.892
0.925
0.908
3
0.898
0.930
0.914
4
0.946
0.972
0.959

---

<!-- página 5 -->

054
https://www.peertechzpublications.org/journals/trends-in-computer-science-and-information-technology
Citation: Musungate BN, Ercan T (2023) A simple Node-RED implementation for digital twins in the area of manufacturing. Trends Comput Sci Inf Technol 8(2): 
050-054. DOI: https://dx.doi.org/10.17352/tcsit.000068
References
1. https://www.capgemini.com/gb-en/news/press-releases/digital-twins-
are-a-catalyst-to-fulﬁ lling-organisations-sustainability-agenda/ 
(Accessed 
13/07/2023)
2. Grieves M. Digital Twin: Mitigating Unpredictable, Undesirable Emergent 
Behavior in Complex Systems (Excerpt), no. August 2016. doi: 10.13140/
RG.2.2.26367.61609.
3. Fang X, Wang H, Liu G, Tian X, Ding G, Zhang H. Industry application of digital 
twin: from concept to implementation, Int. J. Adv. Manuf. Technol. 2022; 
4289–4312. doi: 10.1007/s00170-022-09632-z.
4. Singh M, Fuenmayor E, Hinchy EP, Qiao Y, Murray N, Devine D. Digital Twin: 
Origin to Future. 2021: 1–19
5. Node-RED, Low-code programming for event-driven applications. https://
nodered.org/ (Accessed 25.04.2023)
6. Node-RED Library, Find new nodes, share your ﬂ ows and see what other people 
have done with Node-RED. https://ﬂ ows.nodered.org/ (Accessed 25.04.2023)
7. Build amazing things. https://www.npmjs.com/ (Accessed 20.04.2023)
8. https://github.com/mljs/ (Accessed 27.04.2023)
9. Bogedale L, Doerfel S, Schrodt A, Heim HP. Online Prediction of Molded Part 
Quality in the Injection Molding Process Using High-Resolution Time Series. 
Polymers (Basel). 2023 Feb 16;15(4):978. doi: 10.3390/polym15040978. 
PMID: 36850265; PMCID: PMC9959070. 
10. Aslantas G, Ozsarac M, Rumelli M, Alaygut T. Prediction of Remaining Useful 
Life for Plastic Injection Molding Machines Using Artiﬁ cial Intelligence 
Methods. 2022; 2(1):8–15.
11. Introduction to Injection Molding for Mass Production of Custom Plastic 
Parts. https://predictabledesigns.com/introduction-to-injection-molding/ 
12. Polyplastics. https://www.polyplastics.com/en/support/mold/outline/
13. Discover the Power of MQTTX. https://mqttx.app/features (28/04/2023)
14. Musungate BN, Ercan AT. Edge computing-based predictive maintenance 
middleware for Industrial IoT. Bursa 4. International Conference on Scientiﬁ c 
Researches [Bursa]. 2023; 8-10: 86-98.
15. Polenta A, Tomassini S, Sernani P, Falcionelli N, Contardo P, Dragoni AF. A 
Comparison of Machine Learning Techniques for the Quality Classiﬁ cation of 
Molded Products. 2022.
16. Steinmetz C, Schroeder GN, Binotto A, Panikkar S, Papenfuß B, Schmidt C, 
Rettberg A, Pereira C. Digital Twins modeling and simulation with Node-RED 
and Carla. 2022; IFAC Pap. 55;19:97–102. doi:10.1016/j.ifacol.2022.09.190.
17. Yasin A, Pang TY, Cheng CT, Miletic M. A Roadmap to Integrate Digital Twins 
for Small and Medium-Sized Enterprises. Appl.Sci. 2021; 11:9479. https://doi.
org/10.3390/app11209479
18. Messi L, Naticchia, B, Carbonari A, Ridolﬁ  L, Martino G, Giuda D. Development 
of a Digital Twin Model for Real-Time Assessment of Collision Hazards. 2020: 
14–19.
19. Lind A, Syberfeldt A, Hanson L. Evaluating a Digital Twin Concept for an 
Automatic Up-to-Date Factory Layout Setup. 2022. https://doi.org/10.3233/
ATDE220166