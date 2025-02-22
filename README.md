# Task Manager App

## Overview
The **Task Manager App** is a React-based application that enables users to efficiently manage their to-do list. Users can add tasks, filter them by tags, and maintain a structured task list with dynamic updates. This project demonstrates the use of Lists and Keys in React, along with state management and event handling.

## Features
- **Add Tasks**: Users can add tasks by entering a task description and selecting a tag.
- **Filter Tasks**: Tasks can be filtered by clicking on specific tags.
- **Responsive Design**: Works seamlessly across different screen sizes.
- **Dynamic Updates**: The task list updates instantly as tasks are added or filtered.

## Live Demo
[View Live Demo](https://mtaskmanagerm.ccbp.tech)

## Screenshots
<details>
<summary>Click to view</summary>

- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - No Tasks View](https://assets.ccbp.in/frontend/content/react-js/my-tasks-output-no-tasks-view.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/my-tasks-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Filter View](https://assets.ccbp.in/frontend/content/react-js/my-tasks-output-filter-view.png)

</details>

## Installation

### Clone the Repository:
```bash
git clone https://github.com/your-username/task-manager.git
```

### Navigate to the Project Directory:
```bash
cd task-manager
```

### Install Dependencies:
```bash
npm install
```

### Start the Development Server:
```bash
npm start
```

Open your browser and visit **[http://localhost:3000](http://localhost:3000)** to view the app.

## Functionality
### Initial State:
- The task list and input fields are empty.
- The first tag in the `tagsList` is selected by default.

### Adding a Task:
1. Users can enter a task description and select a tag.
2. Clicking the "Add Task" button adds the task to the list.
3. The input fields are reset after adding a task.

### Filtering Tasks:
- Clicking on a tag filters the tasks based on the selected tag.
- If no tag is selected, all tasks are displayed.

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **UUID**: A package for generating unique task IDs.
- **CSS**: For styling the components.
- **HTML**: For structuring the app.

## Color Palette
| Color       | Hex Code  |
|------------|----------|
| Background | #131213  |
| Accent     | #f3aa4e  |
| Light Gray | #f1f5f9  |
| Dark Gray  | #64748b  |
| White      | #ffffff  |
| Black      | #000000  |

## Font
- **Roboto**: The primary font used throughout the app.

## Important Notes
- Use the `uuid` package to generate unique IDs for tasks.
- Ensure the app is fully responsive for all screen sizes.

## Contributing
Contributions are welcome! Follow these steps to contribute:
1. **Fork** the repository.
2. **Create a new branch** for your feature or bugfix.
3. **Commit** your changes.
4. **Push** your branch.
5. **Submit a Pull Request.**

## License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
This README provides a detailed overview of the project, including installation instructions, functionality, and project structure. Feel free to update it with additional details as needed.

