# Waste Mapping in Malawi

# Problem Statement

The Malawi State of Environment report (2010) indicates that objective decision making in environmental management is being challenged by lack of accurate and updated data on the state of the environment in Malawi. One major explanation for dearth in data resource is lack of monitoring systems and institutions to monitor implementation of environmental activities. To help addressing the problem, we are developing a Waste Management Monitoring System that will make use of data from multiple sources. The project is inspired by community projects from Lilongwe where a voluntary youth group – Youth for Environmental Development (YED) – utilized citizen science to monitor unlawful waste disposal practices, coverage of waste collection programs and community cleanup projects in one of Lilongwe City's peri urban communities.  

The maps for unlawful waste disposal from Lilongwe City highlighted that urban communities commonly treat open and public spaces such as roadsides and river channels as dumping locations. Maps for waste collection service clearly highlight sections of the community covered most and those covered least by the service. We hope such maps offer great opportunities for improvement and programming of interventions that can help addressing the problem. We have deliberately made this project open so as to get as much support from like minds as we can.

<p align="center">
  <img height="500" src="https://github.com/Kalondepatrick/community_waste_Management/blob/main/image.jpeg">
</p>

# Context

In Malawi, the issue of waste management has attracted political support.  The President of the Republic of Malawi, Dr Razarus Chakwera declared that every second friday of the month to be dedicated to clean up activities. The impact of such waste clean up activities is curently unknown but most of the clean ups have been done in the major cities. Malawi has four major cities: Lilongwe (capital city), Blantyre (commercial city), Zomba (old capital city) and Mzuzu. Waste disposal issues have been reported in all the cities. We are working with Youth for Environmental Development in Lilongwe, Mr Manota Mphande of Clean Mudi River project for Blantyre, and Mzuzu E-hub for Mzuzu. We do not have any current connections with the city of Zomba, but we would be glad if we establish such connection. 

# Practical Significance

The need for robust tools for monitoring the environment has been widely acknowledged. Monitoring of presence of waste and plastics in the environment has been recommended in various national and international guidelines, particularly for persistent pollutant such as plastics in freshwater ecosystems (UNEP 2021). Conversely, tools for monitoring waste and plastics on land remain to be in infancy stage. Specifically, the use of emerging low-cost technologies such as UAV’s has not been integrated in environmental monitoring programs. Different methodologies exist for monitoring plastics and waste, and regarding UAV technology it is not clear on how data can be captured and processed to detect plastics and waste. In addition, although most of the waste are poorly managed in developing countries, attempts to explore usage of low-cost tools such UAV’s have been done in developed countries. There is no operational protocol on how UAV’s can be used for monitoring of plastic and waste accumulation in communities with poor waste management infrastructure. 

Noteworthy, exploring the potential of using UAV’s in mapping plastics and waste can strengthen understanding of abundance of plastic and waste materials in the environment, this can help understanding disposal, accumulation and transportation mechanisms.  Certainly, this can provide quantitative indicators for measuring impact of programs designed to mitigate plastic and waste pollution. Additionally, pattens of plastic and waste piles can serve as a baseline to identify bottlenecks enabling setting of priorities and effective development of remedial strategies for land based plastic pollution (J. Jambeck et al. 2018). With flexibility of usage of UAV’s, environmental management programs can easily generate updated data on waste presence in the environment. This emerging approach can provide valuable information that can help policy makers and environmental authorities to investigate waste materials that are abundant in the environment, this can help to guide efforts towards implementing producer pay principle. Furthermore, the use of UAS equally provide an opportunity for design of studies aiming at studying the impacts of plastics. 
![image](https://user-images.githubusercontent.com/39599487/153117465-515bf5cc-4a4c-4fe1-b934-c25cdbaf350e.png) 

# Data Resources

The dashboard uses multiple data sources. We are intergrating data from the following sources:
- Raster tiles made from drone data of the study area
- Waste Piles detected by Random Forest (Orfeo-toolbox).
- Waste Piles detected by Convolution Neural Networks (ArcGIS Pro)


# How it works

The dashboard takes data on unlawful waste disposal and waste collection from OLM and ODK surveys. Data is then prepared and stored on cloud using ArcGIS online. ArcGIS online follow a robust and effective security framework. The data is pulled from ArcGIS online to authorized outlets (in this case our github page). Every friday, all contributions on OLM will be synced into our dashboard together with contributions from authorized ODK surveys. This will provide near-real time information about waste management in the city in terms of extent of unlawful waste dumping and waste collection. In the future, we will also include capabilities to collect data using social media (Twitter and Facebook). 

# Key insights and next step

Disclaimer. Our solution should not be assumed to be a perfect solution to addressing the problem of waste. Addressing the problem of waste in cities will require far beyond what the current solution is offering - strenghening monitoring of waste management. To address the problem of waste, there will be a need for developing effective waste collection system, investing in waste handling (including recycling) and behavioral changes among the general population. We are interested to explore opportunities through which our proposed monitoring system can accelerate progress in all such aspcects of waste management. We know for sure that our system is key towards strenghtening program impact and enhancing adaptive management in such processes. 

Our next step will involve, integrating emerging sources of data. Such data include Social Media and much work has already been done elsewhere. Patrick, our project lead is working on a masters level research study that is exploring the possibility of mapping plastic waste dumpsites using images capture by unmanned aerial vehicles (UAV's), commonly known as drones. But as a team, we are working on exploring potential determinants of waste disposal. We have been awarded Neville-Shurman Award and we are using that grant funding to understand how household social economic profile relate to choice of waste disposal. Aside from this, we have also been exploring how spatial factors such as distance to a waste dumpsite influence household decision to subscribe to private waste collection services. While that all these studies are being done in a scientifically sound manner, we would like to develop strategic partenerships with other stakeholders including universities, research institutions, start-ups and non-profit organizations. Our belief is that partenerships are fundamental to strenghten the impact of our work. 

You can check out our prototype here: https://kalondepatrick.github.io/wastemapping/

Feedback and comments can be sent to me directly. 

# Scholarly work cited

Government of Malawi State of environment and outlook report 2010, Environmental Affairs Department, Lilongwe (2010)

Lynch, Seán. "OpenLitterMap. com–open data on plastic pollution with blockchain rewards (littercoin)." Open Geospatial Data, Software and Standards 3, no. 1 (2018): 1-10.

Medina, Martin (2010) : Solid wastes, poverty and the environment in developing country 	cities: 	Challenges and opportunities, WIDER Working Paper, No. 2010/23, ISBN 978-	92-9230-258-0, 	The United Nations University World Institute for 	Development Economics Research (UNU-	WIDER), Helsinki
