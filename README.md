[Description](#description)     | 
[Bash Terminal](#bash-terminal) |
[HTML Entities](#html-entities) |
[Vim](#vim) |
[Yarn](#yarn)




<img src="https://octodex.github.com/images/yaktocat.png" width="200" />

# Description
Everything `code` repo.

# BASH Terminal
* [GIT](#git)
* [cp](#cp)
* [echo](#echo)
* [find](#find)
* [man](#man)
* [more](#more)
* [ssh-keygen](#more)
* [yarn](#yarn)
* [wget & raw-git](#wget--raw-git)
* [x-clip](#x-clip)

<hr /> 

# GIT
[Commands](#commands) |
[Resolutions](#resolutions) |

## Commands
### Syncing 
  * <samp>`git pull -p` - Syncs the local repo with the remote repo</samp>
  * <samp>`git fetch -p` - Syncs the local repo with the remote repo<samp>
  * <samp>`git merge` - Merges the changes ( i think )

### Remote
  * <samp>`git remote` - Everthing for the remote git repo</samp>
  * <samp>`git remote show origin` - See the origin info for the repo</samp>
  * <samp>`git remote set-url origin git+ssh://git@github/<username>/<reponame>.git` - Set the url for origin on the git repo</samp>
  
### Checkout
  * <samp>`git checkout <branchname> .` - checkout all files </samp>
  * <samp>`git checkout <branchname> <filename>` - checkout specific file (ensure this is executed from the respective directory)
 
## Resolutions

### Setting Up the SSH key for account/project
  * Step 1 - `ssh-keygen -t rsa` - Generate a *ssh-key*
  * Step 2 - `x-clip -sel clip < ~/.ssh/id_rsa.pub` - Copy the key to clipboard
  * Step 3 - Add the key to account/repo for which the access is required

### Update repo with changes in .gitignore
1. `git rm -r --cached .` - remove all files from the git repo. Careful.  --cached is v. important
2. `git add .` - Add all files - this time as per the updated .gitignore
3. `git commit -m "Gitignore now works"` - This commit will remove all untracked files from repo.
4. `git push origin master` - if deploying to master branch...

### Commit Deleted files from local repo to remote repo
  * <samp>`git commit -a -m "<message>"` - removes any deleted files from remote repo as well.</samp> 

<hr />

## `cp`
  * <samp>`cp SOURCE DEST`</samp>
  * <samp>`cp SOURCE DIRECTORY`</samp>
  * <samp>`cp SOURCE1 SOURCE2 SOURCE3 SOURCEn DIRECTORY`</samp>
  * <samp>`cp [OPTION] SOURCE DEST`</samp>
  * <samp>`cp [OPTION] SOURCE DIRECTORY`</samp>
  * <samp>`cp -v SOURCE DEST` - **v**erbose output</samp>
  * <samp>`cp -p SOURCE DEST` - **p**reserves attributes in copied file/s</samp>
  * <samp>`cp -R * backup/` - **R**ecursive copy of all files - i.e. when copying more than one file</samp>
  * <samp>`mkdir dest/path && cp "$_"`

**Reference** :  https://www.cyberciti.biz/faq/copy-command/

<hr /> 

# `echo`
* <samp>`echo "Hello World" >> my_doc.txt` - create a file and enter the text "Hello World" in it.</samp>

<hr />

# `find`

* `find . -name "*.swp" -delete` - Find all files with extension`.swp` and `delete`

<hr />

# `man`
* <samp>`man cp` - displays the **man**ual for `cp` in the bash terminal</samp>
* <samp>`man man` - displays the **man**ual for `man` in the bash terminal</samp>

<hr />

# `more`
* <samp>`more <filename>` - displays the contents of the file in the console (helps for copying)<samp>

<hr />

# `ssh-keygen`
* <samp>`ssh-keygen -t rsa` - Generates a key and creates `~/.ssh/id_rsa.pub` file.</samp>

# `wget` / `raw git`
* <samp>`wget http://raw.github.com/:username/:reponame/:branchname/:path/:to/:filename.git` - get a single file from a repo</samp> 

<hr />

# `x-clip`
* <samp>`x-clip -sel clip > <path/to/filename.ext>` - copies content of file to `clip`board.</samp>

<hr />

# `yarn`
* `yarn add <packageName>` - will add a package and add it to "dependencies" list in `package.json`
* `yarn global <packageName>` - will add a package globally
* `yarn install` - will install all listed packages in `package.json`
<hr />

# HTML Entities
* <samp>`&#13;` - line-break in "title" string of an element</samp> 
  

</hr>
# Vim
[Commands](#vim-commands) |
[Key-Bindings](#vim-key-bindings) |

## Vim Commands



