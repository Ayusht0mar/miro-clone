# Miro Clone

## Overview
Miro Clone is a collaborative online whiteboard platform designed for teams to ideate, brainstorm, and collaborate visually. This application replicates core functionalities of Miro, offering users a seamless experience for creating and managing boards, sticky notes, shapes, text, and other visual elements.

---

## Features

- **User Authentication**
  - Secure login and registration.
  - Integration with Auth.js and Prisma.

- **Collaborative Boards**
  - Create, edit, and delete boards.
  - Real-time updates for multiple users.

- **Canvas Tools**
  - Select, pen, shapes, text, and sticky notes.
  - Zoom in/out and pan the canvas.
  - Group, ungroup, and layer elements.

- **Undo/Redo Functionality**
  - Support for multiple history states to undo or redo actions.

- **Responsive Design**
  - Optimized for desktops, tablets, and mobile devices using Tailwind CSS.

- **Performance Optimization**
  - Efficient rendering of large boards.
  - Backend operations powered by Prisma and PostgreSQL.

---

## Tech Stack

### Frontend
- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: Static typing for better code reliability.
- **Tailwind CSS**: For styling the application.

### Backend
- **Prisma**: Database ORM for seamless database interactions.
- **PostgreSQL**: Relational database for storing user and board data.
- **Auth.js**: User authentication and session management.

### Deployment
- **Vercel**: Hosting the application.
- **Supabase**: Database hosting.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ayusht0mar/miro-clone.git
   ```

2. Navigate to the project directory:
   ```bash
   cd miro-clone
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL=
     DIRECT_URL=
     AUTH_SECRET=
     AUTH_GOOGLE_ID=
     AUTH_GOOGLE_SECRET=
     AUTH_GITHUB_ID=
     AUTH_GITHUB_SECRET
     ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Usage

1. Register or log in to the application.
2. Create a new board or select an existing one.
3. Use the toolbar to add elements like sticky notes, shapes, or text.
4. Collaborate in real-time with team members.
5. Save changes and manage boards through the dashboard.

## License

This project is licensed under the [MIT License](LICENSE).

---