const axios = require("axios");
require("dotenv").config();

async function fetchNotionPageData(pageId) {
  const url = `https://api.notion.com/v1/pages/${pageId}`;

  const headers = {
    "Notion-Version": "2022-06-28",
    Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
    Accept: "application.json",
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error("Error fetching Notion page data:", error);
    throw error; // You can re-throw the error or handle it differently here
  }
}
const pageId = "266ea29ce33e41e08552e38de1c88134"; // Replace with your specific page ID

fetchNotionPageData(pageId)
  .then((data) => {
    // console.log("Notion page data:", data);
    for (project of data.properties.Projects.relation) {
      console.log(project.id);
    }
    // console.log(data.properties);
  })
  .catch((error) => {
    console.error("Error retrieving data:", error);
  });
