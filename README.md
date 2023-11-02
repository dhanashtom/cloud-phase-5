# Cloud_Phase5
# My Travel Blog - Deployment Guide

Welcome to the deployment guide for "My Travel Blog." In this document, we will provide step-by-step instructions on how to deploy this website using IBM Cloud Static Web Apps. You'll also find information on how to navigate the website, update its content, and manage dependencies.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Deployment Instructions](#deployment-instructions)
- [Navigating the Website](#navigating-the-website)
- [Updating Content](#updating-content)
- [Managing Dependencies](#managing-dependencies)

## Prerequisites
Before you begin, make sure you have the following prerequisites:
- An IBM Cloud account (You can sign up at [IBM Cloud](https://cloud.ibm.com/))
- A local copy of the website's source code.

## Deployment Instructions
1. **IBM Cloud Account:**
   - If you don't have an IBM Cloud account, sign up for one.

2. **Install the IBM Cloud CLI:**
   - Install the [IBM Cloud CLI](https://cloud.ibm.com/docs/cli?topic=cli-install-ibmcloud-cli) on your local machine.

3. **Login to IBM Cloud:**
   - Open a terminal and run `ibmcloud login` to log in to your IBM Cloud account.

4. **Change Directory:**
   - Navigate to the directory containing your website's source code.

5. **Create a Static Web App:**
   - Run the following command to create a Static Web App:
     ```bash
     ibmcloud app create --name my-travel-blog --staticweb
     ```

6. **Deploy the Website:**
   - Deploy your website by running the following command:
     ```bash
     ibmcloud app deploy
     ```

7. **Access Your Website:**
   - Once the deployment is complete, you can access your website by running:
     ```bash
     ibmcloud app show my-travel-blog
     ```

## Navigating the Website
- The website consists of the following pages:
  - **Home:** An introduction to the blog.
  - **Blog:** Detailed blog posts about travel experiences.
  - **About:** Information about the author.
  - **Contact:** A way for readers to get in touch.

- Use the navigation menu to switch between pages.

## Updating Content
To update the content of your travel blog, follow these steps:

1. **Locate the Content:** Navigate to the source code directory on your local machine.

2. **Edit HTML Files:** Open the HTML files for the pages you want to update (e.g., `home.html`, `blog.html`, `about.html`, `contact.html`) in a text editor.

3. **Make Changes:** Update the content, images, or links in the HTML files as needed.

4. **Save Changes:** Save the modified files.

5. **Redeploy:** After making changes, redeploy your website using the instructions provided in the "Deployment Instructions" section.

## Managing Dependencies
- The website uses an external stylesheet called `styles.css` for styling. To update the styles, you can modify this CSS file.

- Make sure all dependencies, such as the CSS file and images, are included in the source code directory before deployment.

Feel free to customize and enhance your travel blog to make it unique. Happy traveling and blogging!
