[Description](#description)     | 
[Bash Terminal](#bash-terminal) |
[HTML Entities](#html-entities) |
[Vim](#vim) 


<img src="https://octodex.github.com/images/yaktocat.png" width="200" />

# Description
Everything `code` repo.

# BASH Terminal
* [GIT](#git)
* [cp](#cp)
* [echo](#echo)
* [more](#more)
* [ssh-keygen](#more)
* [wget & raw-git](#wget--raw-git)
* [x-clip](#x-clip)

<hr /> 

# GIT

## Syncing 
  * <samp>`git pull -p` - Syncs the local repo with the remote repo</samp>
  * <samp>`git fetch -p` - Syncs the local repo with the remote repo<samp>
  * <samp>`git merge` - Merges the changes ( i think )
  
## Remote
  * <samp>`git remote` - Everthing for the remote git repo</samp>
  * <samp>`git remote show origin` - See the origin info for the repo</samp>
  * <samp>`git remote set-url origin git+ssh://git@github/<username>/<reponame>.git` - Set the url for origin on the git repo</samp>
  
## Get Missing Files
  * <samp>`git checkout <branchname> .` - checkout all files </samp>
  * <samp>`git checkout <branchname> <filename>` - checkout specific file (ensure this is executed from the respective directory)
 
## Setting Up the SSH key for account/project
  * Step 1 - `ssh-keygen -t rsa` - Generate a *ssh-key*
  * Step 2 - `x-clip -sel clip < ~/.ssh/id_rsa.pub` - Copy the key to clipboard
  * Step 3 - Add the key to account/repo for which the access is required
  
## Commit Deleted files from local repo to remote repo
  * <samp>`git commit -a -m "<message>"` - removes any deleted files from remote repo as well.</samp> 

<hr />

# `cp`
*<samp>`cp SOURCE DEST`</samp>
*<samp>`cp SOURCE DIRECTORY`</samp>
*<samp>`cp SOURCE1 SOURCE2 SOURCE3 SOURCEn DIRECTORY`</samp>
*<samp>`cp [OPTION] SOURCE DEST`</samp>
*<samp>`cp [OPTION] SOURCE DIRECTORY`</samp>

<hr /> 

# `echo`
* <samp>`echo "Hello World" >> my_doc.txt` - create a file and enter the text "Hello World" in it.</samp>

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

</hr>

# HTML Entities
* <samp>`&#13;` - line-break in "title" string of an element</samp> 
  



