#!/usr/bin/env node
import { Command } from "commander"
import inquirer from 'inquirer';
import { writeFile, readFile, existsSync } from "node:fs"
const program = new Command()


//Path Name
const pathName = "./courses.json"

//The way questions
const questions = [{
    type: 'input',
    name: "title",
    message: "Please enter course title"
},
{
    type: 'number',
    name: "price",
    message: "Please enter course price"
}]
program
    .name("codeZone-courses-manager")
    .description("CLI to make courses")
    .version("1.0.0")


//Add Course
program.command("add")
    .alias("a")
    .description("Add a course")
    .action(() => {
        inquirer
            .prompt(questions)
            .then((answers) => {
                if (existsSync(pathName)) {
                    readFile(pathName, 'utf-8', (err, data) => {
                        if (err) {
                           
                            process.exit()
                        }
                        writeFileData(data ? JSON.parse(data) : [], answers)
                    })
                }
                else{
                     writeFileData([], answers)
                }
            })
    })

//Remove Course
program.command("remove")
    .alias("r")
    .description("Remove a course")
    .argument("<title>")
    .action((options) => {
        if (existsSync(pathName)) {
            readFile(pathName, 'utf-8', (err, data) => {
                if (err) {
                    console.log("Not Data")
                    process.exit()
                }
                removeFileData(data ? JSON.parse(data) : [], options)
            })
        }
        else {
            console.log("don't exist file")
            process.exit()
        }
    })


//Update Course
program.command("update")
    .alias("u")
    .description("update a course")
    .argument("<title>")
    .option("--price <price>")
    .action((params, options) => {
        if (existsSync(pathName)) {
            readFile(pathName, 'utf-8', (err, data) => {
                if (err) {
                    console.log("Not Data")
                    process.exit()
                }
                const course = {
                    title: params,
                    price: options.price
                }
                updateFileData(data ? JSON.parse(data) : [], course)
            })
        }
        else {
            console.log("don't exist file")
            process.exit()
        }
    })

//Show All Courses    
program.command("list")
    .alias("l")
    .description("List All Courses")
    .action(() => {
        if (existsSync(pathName)) {
            readFile("./courses.json", 'utf-8', (err, data) => {
                if (err) {
                    console.log("Error : ", err)
                    process.exit()
                }
                else {
                    console.table(JSON.parse(data).length > 0 ? JSON.parse(data) : `don't exist Courses`)
                }
            })
        }
        else {
            console.log("don't exist file")
            process.exit()
        }

    })
program.parse(process.argv)



//Write in Courses File 
function writeFileData(data, answers) {
    writeFile(pathName, JSON.stringify([...data, answers]), (error) => {
        if (error) console.log("Error Save Course Info", error)
        else console.log("Add Course Done")
    })
}

//Remove in Courses File 
function removeFileData(data, course) {
    const dataAfterRemove = data.filter((c) => c.title != course)
    writeFile(pathName, JSON.stringify([...dataAfterRemove]), (error) => {
        if (error) console.log("Error Remove Course", error)
        else console.log(dataAfterRemove.length == data.length ? "don't exist" : "Remove Course Done")
    })
}



//Updata in Courses File 
function updateFileData(data, course) {
    const dataAfterUpdate = data.map((c) => {
        if (c.title == course.title) {
            return c = course
        }
        return c
    }) || []
    writeFile(pathName, JSON.stringify(dataAfterUpdate), (error) => {
        if (error) console.log("Error Update Course", error)
        else console.log(dataAfterUpdate.includes(data) || data.length == 0 ? "don't exist" : "Update Course Done")
    })
}