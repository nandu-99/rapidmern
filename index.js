#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import {execa} from 'execa';
import fs from 'fs-extra';
import path from 'path';

const createBoilerplate = async () => {
  const currentDir = process.cwd();

  console.log(chalk.blue('Welcome to RapidMERN! 🚀\n'));
  
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'Enter your project name:',
      default: 'rapidmern-project',
    },
  ]);

  const projectDir = path.join(currentDir, projectName);

  if (fs.existsSync(projectDir)) {
    console.log(chalk.red(`\nDirectory ${projectName} already exists!`));
    process.exit(1);
  }

  console.log(chalk.green(`\nCreating project directory: ${projectName}...`));
  fs.mkdirSync(projectDir);

  const __dirname = path.dirname(new URL(import.meta.url).pathname);

  console.log(chalk.green('\nSetting up the backend...'));
  fs.copySync(path.join(__dirname, 'templates', 'backend'), path.join(projectDir, 'backend'));

  console.log(chalk.green('\nSetting up the frontend...'));
  fs.copySync(path.join(__dirname, 'templates', 'frontend'), path.join(projectDir, 'frontend'));

  console.log(chalk.green('\nInstalling dependencies (this may take a few minutes)...'));

  try {
    await execa('npm', ['install'], { cwd: path.join(projectDir, 'backend'), stdio: 'inherit' });
    await execa('npm', ['install'], { cwd: path.join(projectDir, 'frontend'), stdio: 'inherit' });
  } catch (error) {
    console.log(chalk.red('\nError installing dependencies:'), error.message);
    process.exit(1);
  }

  console.log(chalk.green(`\nProject ${projectName} has been created successfully! 🎉\n`));
  console.log(chalk.blue('Next steps:'));
  console.log(chalk.cyan(`  cd ${projectName}/backend && npm start`));
  console.log(chalk.cyan(`  cd ${projectName}/frontend && npm start\n`));
};

createBoilerplate();
