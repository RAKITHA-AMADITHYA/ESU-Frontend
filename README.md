# Esu-Web-Next

## Project Setup

This project is built with Next.js and uses React components. Follow these steps to set up the project:

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd Esu-Web-Next
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    *   Create a `.env.local` file in the root directory of the project.
    *   Add the following environment variables to the `.env.local` file:

        ```properties
        GMAIL_USER=your_gmail_username@gmail.com
        GMAIL_APP_PASSWORD=your_gmail_app_password
        EMAIL_TO=recipient_email@example.com
        ```

        Replace `your_gmail_username@gmail.com`, `your_gmail_app_password`, and `recipient_email@example.com` with your actual Gmail username, Gmail app password, and the recipient email address, respectively.

        **Note:** For Gmail, you might need to generate an App Password if you have 2-Step Verification enabled. Go to your Google Account settings, then Security, and find "App Passwords".

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    This will start the Next.js development server, and you can view the project in your browser at `http://localhost:3000`.

## Project Structure