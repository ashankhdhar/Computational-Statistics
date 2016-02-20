Building an R Package
========================================================
author: 
date: 

Important Packages
========================================================

- Install **devtools** using the command 

```
install.packages("devtools")
```

-- Used for compiling and building packages

- Install **roxygen2** using the command 

-- Used for the documentation of each function

- Install the most updated or recent package

```
install_github("devtools","hadley")
```

-- Remember that Hadley W. puts all his code online

Building the package
========================================================
- Build and then configure as a package

-- Let roxygen handle everything

- Use **Build**

-- New tab in the environment

- Make a new folder in the environment called **R**

-- Folder wil contain all scipts, functions and depencies of the functions

    i.e Datasets
    
Loading the package
========================================================

- **load_all()** function 

-- A devtools function

-- Creates a file called _Description_ with skeleton

-- Fill in and load_all() again to save changes

- Error warning if something goes wrong


Documentation
========================================================

- Create documentation using roxygen

-- **@params** : inputs of your function

-- **@output** : output of your function

-- **@export** : to use in the console

- Using the **check** for proper documentation

-- Need a LaTex compiler 

- Use the **man** folder


Build and Reload
========================================================

- Build package from source 

- Load the package

- Distribute the package

-- Submitting to CRAN
