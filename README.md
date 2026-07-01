
# codezone-cli 🚀

A simple and powerful Command Line Interface (CLI) tool to manage courses (add, remove, update, and list) and store them locally in a JSON file. Built with **Node.js** using **Commander** and **Inquirer**.

---

## 🛠️ Prerequisites

Make sure you have **Node.js** installed on your machine (a version that supports ESM Modules) before getting started.

---

## 📦 Installation

You can install this CLI tool globally or locally via **npm**:

### Global Installation (Recommended for CLI tools)
```bash
npm install -g codezone-cli

```

### Local Installation

```bash
npm install codezone-cli

```

> 💡 **Note:** If installed locally, make sure to add `"type": "module"` to your `package.json` file to ensure ES Modules run successfully.

---

## 🚀 Usage

If installed **globally**, you can run the tool directly using its name:

```bash
codezone-cli [command]

```

If installed **locally**, run it using `node`:

```bash
node index.js [command]

```

### Available Commands

| Command | Alias | Description | Example Usage |
| --- | --- | --- | --- |
| `list` | `l` | Display all available courses in a formatted table. | `codezone-cli list` |
| `add` | `a` | Add a new course (interactive prompts for title and price). | `codezone-cli add` |
| `remove` | `r` | Delete a specific course by its title. | `codezone-cli remove "NodeJS"` |
| `update` | `u` | Update the price of an existing course by its title. | `codezone-cli update "NodeJS" --price 150` |

---

## 💡 Examples (Global Usage)

### 1. List Available Courses:

```bash
codezone-cli l

```

*This will display a well-organized table of all courses stored in `courses.json`.*

### 2. Add a New Course:

```bash
codezone-cli a

```

*When running this command, you will see interactive questions:*

```text
? Please enter course title: ReactJS
? Please enter course price: 100
Add Course Done

```

### 3. Update a Course Price:

```bash
codezone-cli update "ReactJS" --price 120

```

### 4. Remove a Course:

```bash
codezone-cli r "ReactJS"

```

---

## 📂 Data Storage

The tool automatically saves data to a file named `courses.json` in the directory where the command is executed. The data structure looks like this:

```json
[
  {
    "title": "ReactJS",
    "price": 120
  }
]

```
