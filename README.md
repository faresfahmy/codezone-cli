
## codeZone-courses-manager 🚀

A simple and powerful Command Line Interface (CLI) tool to manage courses (add, remove, update, and list) and store them locally in a JSON file. Built with **Node.js** using **Commander** and **Inquirer**.


## 🛠️ Prerequisites

Make sure you have **Node.js** installed on your machine (a version that supports ESM Modules) before getting started.


## 📦 Installation

1. Download the project files or copy the code into your workspace directory.
2. Install the required dependencies by running the following command in your terminal:

```bash
npm install commander inquirer

```

3. Make sure to add `"type": "module"` to your `package.json` file to ensure ES Modules run successfully.


## 🚀 Usage

You can run the tool directly using `node` followed by your file name and the desired command:

```bash
node index.js [command]

```

### Available Commands

| Command | Alias | Description | Example Usage |
| --- | --- | --- | --- |
| `list` | `l` | Display all available courses in a formatted table. | `node index.js list` |
| `add` | `a` | Add a new course (interactive prompts for title and price). | `node index.js add` |
| `remove` | `r` | Delete a specific course by its title. | `node index.js remove "NodeJS"` |
| `update` | `u` | Update the price of an existing course by its title. | `node index.js update "NodeJS" --price 150` |

---

## 💡 Examples

### 1. List Available Courses:

```bash
node index.js l

```

*This will display a well-organized table of all courses stored in `courses.json`.*

### 2. Add a New Course:

```bash
node index.js a

```

*When running this command, you will see interactive questions:*

```text
? Please enter course title: ReactJS
? Please enter course price: 100
Add Course Done

```

### 3. Update a Course Price:

```bash
node index.js update "ReactJS" --price 120

```

### 4. Remove a Course:

```bash
node index.js r "ReactJS"

```

---

## 📂 Data Storage

The tool automatically saves data to a file named `courses.json` in the root directory of the project. The data structure looks like this:

```json
[
  {
    "title": "ReactJS",
    "price": 120
  }
]

```

```

```
