# Contributing to Nomen 📝

Welcome to Nomen – where resumes transform into artistic career narratives. We're thrilled that you want to contribute to this innovative platform. Your contributions will help shape the future of resume building!

## Getting Started 🚀

Before diving into your contribution journey, let's ensure everything is set up for you to get started.

## Types of Contributions ⚛ 

You can contribute to **Nomen** in the following ways:

*   **Resume:** Submit your resume to enhance the creative resume-building experience.
*   **Feature/UI:** Implement new features, fix bugs, or improve existing functionality & UI.
*   **Bug Reports:** Report bugs by creating detailed issue reports with clear steps to reproduce.

## Frameworks Used

This project utilizes the following frameworks:

- **Next.js**: For more information, visit the [Next.js Documentation](https://nextjs.org/docs).

- **Tailwind CSS**: For more information, visit the [Tailwind CSS Documentation](https://tailwindcss.com/docs).

## Requirements 👨‍💻 

To contribute to **Nomen**, you will need the following:
*   GitHub Account
*   Git
*   Node.js
*   **pnpm**

> - If you don't have Node.js, [install it here](https://nodejs.org/).
> - If you don't have `pnpm`, install it globally with this command:

```bash
npm install -g pnpm
```

Once everything is set up, you're ready to move on to the next steps:

1. **Create an Issue**  
   - Head over to the [Main Repo Issues](https://github.com/luciferlocas/nomen/issues) and create a new issue for your contribution (bug fix, feature, etc.).  
   - Once the issue is assigned to you, you're free to proceed.
   > For hacktoberfest participants, make sure you add `hacktoberfest` label to your issue, to get your issue/PR get counted for the same.

3. **Fork and Clone**  
   - Fork the repository to your GitHub account. This will create your personal copy.  
   - Now, clone your forked repository to your local machine.

   ```bash
   git clone https://github.com/{YOUR_GITHUB_USERNAME}/nomen.git
   ```
   
   * After cloning, do not forget to create a new branch for your changes, you can do so by running:
  
   ```bash
      git checkout -b YOUR_BRANCH_NAME
   ```
   
 4. **Install Dependencies ⬇**
    - Navigate to your project directory.
    - Open your terminal and run:

    ```
    pnpm install
    ```
    - This will install all the required dependencies using pnpm.
    
 5. **Start The Local Server 🔧**
    - Start the local server to test the project locally by running:

    ```
    pnpm dev
    ```
    - This should start a local instance on your system at localhost:3000.

 6. **Adding your Resume 📖**

    - Once your local server is running, you are ready to add your resume. To add your resume simply copy the code from [Example Resume](./app/_content/exampleResume.ts).
    - In the [folder](./app/_content/contributors) create a file of your full_name as firstName-LastName.ts and paste the code you copied earlier and change it accordingly.

 7. **Adding your Card📖**

    - Now headover to [CardInfo](./app/_content/CardInfo.ts) and add your details in order to appear on the card page.
    - Check if everything is working fine by refreshing the server.

 8. **Commit Time! 🔼** 

    - Once you've added your resume and your card information, it's time to contribute!
    - Use the following Git commands to add, commit, and push your changes:

    ```bash
        git add .
        git commit -m "YOUR_NAME added resume"
        git push -u origin YOUR_BRANCH_NAME
    ```

    - Now, go back to your GitHub fork and open a Pull Request (PR). We'll review your contribution and, if all is well, merge it into the main project.

🎊 Congratulations! 🎊  You've just made your contribution. 

Havin' Peace with code!
