# Unit 15 Homework: Visualizing Data with Leaflet

## Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, we will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Before You Begin

1. Create a new repository for this project called `leaflet-challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the Leaflet challenge. Use the folder names to correspond to the challenges: **Leaflet-Part-1** and **Leaflet-Part-2**.

4. This homework uses both **HTML** and **JavaScript**, so be sure to add all the necessary files. These will be the main files to run for analysis.

5. Push the above changes to GitHub.

## Instructions

The instructions for this activity are broken into two parts: 

* Part 1: Create the Earthquake Visualization 

* Part 2: Gather and Plot More Data (Optional)

### Part 1: Create the Earthquake Visualization

![2-BasicMap](Images/2-BasicMap.png)

To visualize an earthquake dataset, following steps were completed:

1. Dataset: 

   * All Earthquakes for the past 30 days retrevied from [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page. URL of this JSON used to pull in the data for the visualization.

2. Import and visualization:  

   * Using Leaflet, created a map that plots all the earthquakes from the dataset based on their longitude and latitude.

       * Data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color.
       * Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth appear darker in color.

   * Included popups that provide additional information about the earthquake when its associated marker is clicked.

   * Created a legend that provides context for the map data.

3. The Visualization can be seen here: (link to page)

___
© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
