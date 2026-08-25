<!-- página 1 -->

Reference number
ISO/IEC 25012:2008(E)
© ISO/IEC 2008
 
 
 
INTERNATIONAL 
STANDARD 
ISO/IEC
25012
First edition
2008-12-15
Software engineering — Software product
Quality Requirements and Evaluation 
(SQuaRE) — Data quality model 
Ingénierie du logiciel — Exigences de qualité et évaluation du produit 
logiciel (SQuaRE) — Modèle de la qualité des données 
 
iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008

---

<!-- página 2 -->

ISO/IEC 25012:2008(E) 
PDF disclaimer 
This PDF file may contain embedded typefaces. In accordance with Adobe's licensing policy, this file may be printed or viewed but 
shall not be edited unless the typefaces which are embedded are licensed to and installed on the computer performing the editing. In 
downloading this file, parties accept therein the responsibility of not infringing Adobe's licensing policy. The ISO Central Secretariat 
accepts no liability in this area. 
Adobe is a trademark of Adobe Systems Incorporated. 
Details of the software products used to create this PDF file can be found in the General Info relative to the file; the PDF-creation 
parameters were optimized for printing. Every care has been taken to ensure that the file is suitable for use by ISO member bodies. In 
the unlikely event that a problem relating to it is found, please inform the Central Secretariat at the address given below. 
 
 
COPYRIGHT PROTECTED DOCUMENT 
 
©   ISO/IEC 2008 
All rights reserved. Unless otherwise specified, no part of this publication may be reproduced or utilized in any form or by any means, 
electronic or mechanical, including photocopying and microfilm, without permission in writing from either ISO at the address below or 
ISO's member body in the country of the requester. 
ISO copyright office 
Case postale 56 • CH-1211 Geneva 20 
Tel.  + 41 22 749 01 11 
Fax  + 41 22 749 09 47 
E-mail  copyright@iso.org 
Web  www.iso.org 
Published in Switzerland 
 
ii 
© ISO/IEC 2008 – All rights reserved
 
 
iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008

---

<!-- página 3 -->

ISO/IEC 25012:2008(E) 
© ISO/IEC 2008 – All rights reserved 
iii
Contents 
Page 
Foreword............................................................................................................................................................ iv 
Introduction ........................................................................................................................................................ v 
1 
Scope ..................................................................................................................................................... 1 
2 
Conformance......................................................................................................................................... 2 
3 
Normative references ........................................................................................................................... 2 
4 
Terms and definitions........................................................................................................................... 2 
5 
Data quality............................................................................................................................................ 4 
5.1 
Overview................................................................................................................................................ 4 
5.1.1 
Inherent data quality............................................................................................................................. 4 
5.1.2 
System dependent data quality........................................................................................................... 4 
5.2 
Data quality model................................................................................................................................ 4 
5.3 
Data quality characteristics ................................................................................................................. 6 
5.3.1 
Inherent point of view........................................................................................................................... 6 
5.3.2 
Inherent and system dependent point of view .................................................................................. 7 
5.3.3 
System dependent point of view....................................................................................................... 10 
Annex A (informative)  Terms and definitions from ISO/IEC 25000 ............................................................. 11 
Bibliography ..................................................................................................................................................... 13 
 
iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008

---

<!-- página 4 -->

ISO/IEC 25012:2008(E) 
iv 
© ISO/IEC 2008 – All rights reserved
 
Foreword 
ISO (the International Organization for Standardization) and IEC (the International Electrotechnical 
Commission) form the specialized system for worldwide standardization. National bodies that are members of 
ISO or IEC participate in the development of International Standards through technical committees 
established by the respective organization to deal with particular fields of technical activity. ISO and IEC 
technical committees collaborate in fields of mutual interest. Other international organizations, governmental 
and non-governmental, in liaison with ISO and IEC, also take part in the work. In the field of information 
technology, ISO and IEC have established a joint technical committee, ISO/IEC JTC 1. 
International Standards are drafted in accordance with the rules given in the ISO/IEC Directives, Part 2. 
The main task of the joint technical committee is to prepare International Standards. Draft International 
Standards adopted by the joint technical committee are circulated to national bodies for voting. Publication as 
an International Standard requires approval by at least 75 % of the national bodies casting a vote. 
Attention is drawn to the possibility that some of the elements of this document may be the subject of patent 
rights. ISO and IEC shall not be held responsible for identifying any or all such patent rights. 
ISO/IEC 25012 was prepared by Joint Technical Committee ISO/IEC JTC 1, Information technology, 
Subcommittee SC 7, Software and systems engineering. 
ISO/IEC 25012 is one of the SQuaRE series of International Standards, which consists of the following 
divisions under the general title Software engineering — Software product Quality Requirements and 
Evaluation (SQuaRE): 
⎯ Quality Management Division (ISO/IEC 2500n), 
⎯ Quality Model Division (ISO/IEC 2501n), 
⎯ Quality Measurement Division (ISO/IEC 2502n), 
⎯ Quality Requirements Division (ISO/IEC 2503n), 
⎯ Quality Evaluation Division (ISO/IEC 2504n). 
iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008

---

<!-- página 5 -->

ISO/IEC 25012:2008(E) 
© ISO/IEC 2008 – All rights reserved 
v
Introduction 
The quantity of data and information handled by computer systems is increasing worldwide; data quality is a 
key component of the quality and usefulness of information derived from that data, and most business 
processes depend on the quality of data. 
A common prerequisite to all information technology projects is the quality of the data which are exchanged, 
processed and used between the computer systems and users and among computer systems themselves. 
Managing and enhancing the quality of data is important because of: 
⎯ the acquisition of data from organizations of which the quality of data production process is unknown or 
weak; 
⎯ the existence of defective data contributing to unsatisfactory information, unusable results and dissatisfied 
customers; 
⎯ the dispersion of such data among various owners and users. Data captured in accordance with the 
workflow needs of a single organization often lack a coherent and integrated vision which is necessary to 
ensure interoperability and co-operation; 
⎯ the need for processing data which are not immediately re-usable because of semantic ambiguity or lack 
of consistency between such data and other existing co-related data; 
⎯ the co-existence of legacy architecture and computer systems with distributed systems designed and 
realized at different times and with different standards; 
⎯ the existence of information systems (such as the world wide web) where data change frequently and 
integration is a special issue. 
The data quality model defined in this International Standard aims to meet these needs, taking into account 
that the data life cycle is often longer than the software life cycle; it could be used, for example, to: 
⎯ define and evaluate data quality requirements in data production, acquisition and integration processes; 
⎯ identify data quality assurance criteria, also useful for re-engineering, assessment and improvement of 
data; 
⎯ evaluate the compliance of data with legislation and/or requirements. 
The detection of errors or inefficiencies due to data gives rise to enhancement and corrective interventions 
concerning data and other components of the system in which data reside, for example: 
⎯ data (e.g. redesigning, parsing, cleansing, enriching, transforming, matching); 
⎯ software (e.g. modifying source programs to implement consistency controls); 
⎯ hardware (e.g. upgrading a computer system to improve response time); 
⎯ human business processes (e.g. user training to avoid errors in the data entry process; improvement of 
accounting processes that manage data). 
iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008

---

<!-- página 6 -->

ISO/IEC 25012:2008(E) 
vi 
© ISO/IEC 2008 – All rights reserved
 
The data quality model defined in this International Standard is intended to be used in conjunction with the 
other SQuaRE series International Standards, which are represented in Figure 1 (adapted from 
ISO/IEC 25000). 
 
 
 
Figure 1 — Organization of the SQuaRE series of International Standards 
The divisions within the SQuaRE series are: 
⎯ ISO/IEC 2500n - Quality Management Division. The International Standards that form this division 
define all common models, terms and definitions referred to further as all other International Standards 
from the SQuaRE series. Referring paths (guidance through SQuaRE documents) and high level practical 
suggestions in applying proper standards to specific application cases provide help to all types of users. 
The division also provides requirements and guidance for a supporting function which is responsible for 
the management of software product requirements specification and evaluation. 
⎯ ISO/IEC 2501n - Quality Model Division. The International Standards that form this division present 
detailed quality models for software and data. Furthermore, in the software quality model the internal and 
external quality characteristics are decomposed into subcharacteristics. Practical guidance on the use of 
the quality models is also provided. 
⎯ ISO/IEC 2502n - Quality Measurement Division. The International Standards that form this division 
include a software product quality measurement reference model, mathematical definitions of quality 
measures, and practical guidance for their application. Presented measures apply to internal software 
quality, external software quality and quality in use. Quality Measure Elements forming foundations for the 
latter measures are defined and presented. 
⎯ ISO/IEC 2503n - Quality Requirements Division. The International Standard that forms this division 
helps to specify quality requirements. These quality requirements can be used in the process of quality 
requirements elicitation for a software product to be developed or as input for an evaluation process. The 
requirements definition process is mapped to technical processes defined in ISO/IEC 15288. 
 
 
 
Quality 
Requirements 
Division 
2503n 
Quality 
Management Division 
2500n 
Quality Model 
Division 
2501n 
 
 
Quality 
Evaluation 
Division 
2504n 
Quality 
Measurement Division 
2502n
Extension Division 25050 to 25099
iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008

---

<!-- página 7 -->

ISO/IEC 25012:2008(E) 
© ISO/IEC 2008 – All rights reserved 
vii
⎯ ISO/IEC 2504n - Quality Evaluation Division. The International Standards that form this division provide 
requirements, recommendations and guidelines for software product evaluation, whether performed by 
evaluators, acquirers or developers. The support for documenting a measure as an Evaluation Module is 
also presented. 
⎯ ISO/IEC 25050 to ISO/IEC 25099 are reserved for SQuaRE extension International Standards, Technical 
Specifications, Publicly Available Specifications (PAS) and/or Technical Reports. 
 
iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008

---

<!-- página 8 -->

iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008

---

<!-- página 9 -->

INTERNATIONAL STANDARD 
ISO/IEC 25012:2008(E)
 
© ISO/IEC 2008 – All rights reserved 
1
Software engineering — Software product Quality 
Requirements and Evaluation (SQuaRE) — Data quality model 
1 
Scope 
This International Standard defines a general data quality model for data retained in a structured format within 
a computer system. 
This International Standard focuses on the quality of the data as part of a computer system and defines quality 
characteristics for target data used by humans and systems. 
Target data are those that the organization decides to analyse and validate through the model; the term non-
target data covers two cases: the first refers to data that are not persistent such as data handled by an 
operating system; the second refers to data that could be within the scope of the standard, but an organization 
chooses to not apply the standard to them. 
In Figure 2 the structure of a general system is displayed in a diagram: this can include information systems 
which in turn can include one or more computer systems. 
 
Figure 2 — Target domain of the data quality model 
This International Standard can be used with other standards in the SQuaRE series to establish data quality 
requirements, define data quality measures, or plan and perform data quality evaluations. 
Data quality requirements and data quality measures can be categorized with the data quality characteristics 
in 5.2 and used by an evaluation process to analyse data independently from other computer system's 
components. 
   
Information system
System 
Human  
business  
Mechanical 
system 
Computer 
hardware 
Software 
Target 
Data 
Computer system 
Communication 
Non target 
Data 
Data Quality Model 
iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008

---

<!-- página 10 -->

ISO/IEC 25012:2008(E) 
2 
© ISO/IEC 2008 – All rights reserved
 
This International Standard aims to support the implementation of system's life cycle processes, such as 
those defined in ISO/IEC 15288. 
This International Standard takes into account all data types (e.g. character strings, texts, dates, numbers, 
images, sounds, etc.), assigned data values and relationships between data (e.g. consistency between data in 
the same or in different entities); the scope does not include data produced by embedded devices or real time 
sensors that are not retained for further processing or historical purposes. 
This International Standard does not dictate physical organization of data (i.e. data base management 
systems); moreover the activities of conceptual, logical and physical schema design are outside the scope of 
this International Standard; all processes and deliverables related to such data benefit from the application of 
this International Standard. 
Conformance of data to the data design is included within the scope of this International Standard. 
The definition of metadata is addressed by ISO/IEC 11179 and is outside the scope of this International 
Standard, even if it refers to metadata to evaluate data quality. 
The relationship of this International Standard to industry- and domain-specific data quality standards and its 
precedence over these standards are determined by the user in a specific context of use. 
2 
Conformance 
When this International Standard is used for conformance, the user shall provide evidence that each data 
quality characteristic in 5.2 has been addressed, give reasons in the event of exclusion, or describe its own 
categorization of data quality attributes and provide a mapping to the characteristics in 5.2. 
3 
Normative references 
The following referenced documents are indispensable for the application of this document. For dated 
references, only the edition cited applies. For undated references, the latest edition of the referenced 
document (including any amendments) applies. 
ISO/IEC 25000, Software engineering — Software product Quality Requirements and Evaluation 
(SQuaRE) — Guide to SQuaRE 
4 
Terms and definitions 
For the purposes of this document, the terms and definitions given in ISO/IEC 25000 and the following apply. 
4.1 
computer system 
system containing one or more components 
NOTE 1 
Components include computers (hardware), associated software and data. 
NOTE 2 
Adapted from ISO/IEC 24765. 
4.2 
data 
reinterpretable representation of information in a formalized manner suitable for communication, interpretation, 
or processing 
NOTE 1 
Data can be processed by humans or by automatic means. 
[ISO/IEC 2382-1:1993] 
iTeh Standards
(https://standards.iteh.ai)
Document Preview
ISO/IEC 25012:2008
https://standards.iteh.ai/catalog/standards/iso/ee940d9b-8b26-4242-8bc0-b694d0c513b0/iso-iec-25012-2008