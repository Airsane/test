const { execSync } = require('child_process');

const repoUrl = 'https://github.com/Airsane/test.git';

try {
  execSync('git checkout -b branch1');
  console.log('Branch branch1 created and checked out');

  try {
    // Write a change to a file
    execSync("echo 'This is a change in branch1' >> file.txt");
    console.log('File changed in branch1');

    try {
      execSync('git add .');
      execSync('git commit -m "Change in branch1"');
      execSync('git push -u origin branch1');
      console.log('Changes pushed to remote repository in branch1');
    } catch (e) {
      console.error('Error occurred while committing and pushing changes in branch1.');
    }

    try {
      execSync('git checkout main');
      console.log('Switched to main branch');

      try {
        // Write a different change to the same file
        execSync("echo 'This is a change in main' >> file.txt");
        console.log('File changed in main');

        try {
          execSync('git add .');
          execSync('git commit -m "Change in main"');
          execSync('git push');
          console.log('Changes pushed to remote repository in main');
        } catch (e) {
          console.error('Error occurred while committing and pushing changes in main.');
        }

        try {
          execSync('git checkout branch1');
          console.log('Switched to branch1');

          try {
            execSync('git merge main');
            console.log('main branch merged into branch1');
          } catch (e) {
            console.error('Conflict detected in Git merge. Resolve conflicts and try again.');
          }
        } catch (e) {
          console.error('Error occurred while switching to branch1.');
        }
      } catch (e) {
        console.error('Error occurred while switching to main.');
      }
    } catch (e) {
      console.error('Error occurred while committing and pushing changes in main.');
    }
  } catch (e) {
    console.error('Error occurred while changing file in branch1.');
  }
} catch (e) {
  console.error('Error occurred while creating branch1.');
}