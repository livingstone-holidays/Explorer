const config = {
  style: "mapbox://styles/mapbox/streets-v11",
  accessToken:
    "pk.eyJ1IjoibGl2aW5nc3RvbmVzdGF5cyIsImEiOiJja3EyOGZoNTEwbTJ0MndwODVvdmlsMzNpIn0.1RIytc5O3-uTZHCjysTAuw",
CSV: "https://docs.google.com/spreadsheets/d/1n8vdoGi86H6-3dgfL9zI2L_N6n2i9VzJkvpSP9LRWV4/export?format=csv&id=1n8vdoGi86H6-3dgfL9zI2L_N6n2i9VzJkvpSP9LRWV4&gid=0",
  center: [79.904,31.357,],
  zoom: 6.5,
  title: "LivingStone Stays",
  description:
    "Explore LivingStone Stays to plan a memorable holiday!",
  sideBarInfo: ["Property_Name", "Region", "Property_Type", "Activities"],
  popupInfo: ["Property_Name"],
  filters: [
    {
      type: "dropdown",
      title: "Region: ",
      columnHeader: "Region",
      listItems: [
       "Kufri/Fagu",
        "Karjat",
        "Kasauli",
        "Shimla",
        "Bhimtal",
        "Tirthan",
        "Alibaug",
        "Shimla",
        "Bir",
        "Kasauni",
        "Manali",
        "Jibhi",
        "Naukachiatal",
        "Dharamshala",
        "Shimla",
        "Narkanda",
        "Dehradun",
        "Kinnaur",
      ],
    },
    {
      type: "dropdown",
      title: "Pets:",
      columnHeader: "Pets", // Case sensitive - must match spreadsheet entry
      listItems: ["Pets"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Trip Purpose:",
      columnHeader: "RANGER_Tagging", // Case sensitive - must match spreadsheet entry
      listItems: ["Relaxing", "Get-Together", "Exploratory", "Adventure", "Romantic"], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: "dropdown",
      title: "Property Type: ",
      columnHeader: "Property_Type",
      listItems: [
        "Cottage",
        "Farmhouse",
        "Homestay",
        "Villa",
        "Resort",
        "Camps",
        "Farmstay",
        "Cottages",
        "Hotel",
        "Mud Houses",
      ],
    },
  ],
};
