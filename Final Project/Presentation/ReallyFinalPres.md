Building an R Package
========================================================

**Emma Kearney**

**Fangzhou Liu**

**Ankita Shankhdhar**

**Hachem Saddiki**

**Mengyuan Wu**


What is a package?
=======================================================

-  May contain methods (functions), open research, data

-  Methods

  -- Facilitate the use of a new or existing statistical technique

  -- Provide tools for graphics, data exploration, complex numerical techniques, making it easier to work with big data sets.

-  Data

  -- Sharing old, new, simulated, or research data sets

  -- Many of the best packages have both methods and data

Why is it useful?
=======================================================
-  Convenience

  -- Simple way for others to use your functions

  -- Important Packages

-  Extra Testing

  -- Others may find a few bugs if you distribute it


Why build R package?
======================================================
-  Accessible

  -- Functions and objects contained in a package and installed on a machine can be easily loaded

  -- Many R users develop their own functions that they use regularly

  -- Putting code into a package can be worthwhile, even for a sole user

=================================================================


-  Reliable

  -- Documentation structure is familiar, and it is easy to edit

  -- Basic checks and tests can be automated

-  Clarity

  -- Creating a package enforces a certain degree of structure and clarity in the project

Important Packages
========================================================

- Install **devtools** using the command

```
install.packages("devtools")
```

  -- Used for compiling and building packages

- Install **roxygen2**

  -- Used for the documentation of each function among other things

- Install the most updated or recent package

```
install_github("devtools","hadley")
```

  -- Remember that Hadley W. puts all his code online

Building the package
========================================================
- Build and then configure a package

  -- Let roxygen handle everything

- Organize a package

  -- Make a new folder in the environment called **R**

  -- Folder will contain all scipts, functions and depencies of the functions

    i.e Datasets

Loading the package
========================================================

- **load_all()** function

  -- A devtools function

  -- Creates a file called _Description_ with skeleton if new package

  -- Could also use **package.skeleton()**

  -- Fill in and load_all() again to save changes

- Error warning if something goes wrong

Build and Reload
========================================================

- Build package from source

  -- **library(package_name)**

- Load the package

- Check in **packages** tab if your package is in the installed packages

- But... nothing in the help section

Documentation
========================================================

- Create documentation using roxygen (or LaTex)

- Syntax

  -- Include description of functions using comments

```
#'  Title
#'
#'  Description of the function
```

Documentation
========================================================
-- **@params** : inputs of your function

-- **@output** : output of your function

-- **@export** : to use in the console

- Build and Reload to compile (importance of exporting)


More on your package
========================================================

- Using the **check** for investigation of the package

  -- Need a LaTeX compiler (a dependency)

- If you are not sharing your package

  -- Then turn the feature off (so no manual)

  -- Configure --> Check Packages --> ** --no-manual **

  -- Example warning: if you are missing a documentation

- Use the **man** folder


NAMESPACE
=====================================================================
- The **NAMESPACE** file is a bit technical: it tells R what functions will be accessible to users
- Manages function, method, and dependency information


Devtools: a package to write packages!
========================================================================
- Several common tasks in writing a package and devtools make these tasks more user-friendly
- First: Install the package and call in your library

```
install.packages("devtools")
library("devtools")
```
- Second: Create a development environment in your R workspace

  -- Windows: Install **Rtools**

  -- Mac: Install **Xcode**

  -- Linux: Install compiler and development libraries

Devtools
=======================================================================


- Third: Use github documentations and follow instructions

-- Windows:

```
library(devtools)
build_github_devtools()
```

Then restart R

```
install.packages("devtools.zip", repos = NULL, type = "source")
```

Then remove the package after installation:

```
unlink("devtools.zip")
```
Devtools
========================================================================
  -- This process upgrades devtools to a development version, which is run through GitHub

  -- Windows cannot overwrite or update devtools while it is installed

  -- **build_github_devtools** allows the user to build a package in the development
version of devtools

- Mac and Linux:

```
devtools::install_github("hadley/devtools")
```

============================================================
Using **dev_mode** converts current environment into development environment

- All packages will be installed to ~/R-dev

- User can still employ CRAN packages for needed tasks without muddling them in regular environment

- Create a "sandbox" while developing package

- Call dev_mode() again to exit development environment

Common Devtools Functions:
=======================================================================

**load_all()**
- Simulating the installation and reloading of your package
- All code, compiled shared objects, and documentation into their respective `R/`, `src/`, `data/` subdirectories
- load_all() ignores NAMESPACE but can include DESCRIPTION

**document()**
- Updates all documentation associated with package
- Also updates collated files and NAMESPACE

=======================================================================

**install()**
- Re-installs the package, detaches current version, then uses library() to call new version of package
- Installs your package from wherever it lives on the internet (git, github, bitbucket, gitorious, etc)

```
install_github()
install_bitbucket()
```

**test()**
- First reloads code, then tests code using **testthat**
- Good practice whether or not user is submitting package to CRAN directory

======================================================================
**build()**
- Compiles package files in source or binary code

```
build(binary= TRUE/FALSE)
```

Note:

- All functions in devtools() can take a file path as a command

  -- If user does not specify file path, devtools uses current working directory (this is recommended good practice)


Roxygen2
=====================================================================
- The infamously painstaking part of building a package is writing the documentation of your functions
- Roxygen2 simplifies this: user describes function in comments directly on the function file

  -- Roxygen2 writes Rd file using function's comments and code

  -- New Rd files sent into `man/` directory

  -- Function and its description are all on the function file

- Required to use in conjunction with devtools

===========================================================================
Roxygen2 - Example from Karl Broman's R Package Primer
```
\name{plot_crayons}
\alias{plot_crayons}
\title{Illustration of crayon colors}
\usage{
plot_crayons(method2order = c("hsv", "cluster"), cex = 0.6,
             mar = rep(0.1, 4))
}
\arguments{
\item{method2order}{method to order colors (\code{"hsv"} or \code{"cluster"})}
...}
```
- Not user-friendly to write or read this documentation
- This approach separates the function's description from the function's code


===========================================================
Same code but now using Roxygen2:
```
#' Illustration of crayon colors
#'
#' Creates a plot of the crayon colors in \code{\link{brocolors}}
#'
#' @param method2order method to order colors (\code{"hsv"} or \code{"cluster"})
#'...
```
- Text is commented out as Roxygen2 comments with `#'`
- Much cleaner! Each function is documented with simple comments preceding the function
- Documentation is filed in one place: the function file
- Roxygen2 creates NAMESPACE file for the user


====================================================================
Common commands for Roxygen2 documentation

**@examples**
- The vital step of documentation - provides example code
- Code snippet that shows user how to a certain function

**@export**
- Indicates to Roxygen2 that this function must be added to NAMESPACE file
- Allows users to access function within the package


===================================================================
Documenting and Processing using Roxygen2

**document()** from devtools
- User's package directory must be current working directory
- Call document() - can also specify file path here
- Roxygen2 processes the documentation, then adds NAMESPACE file and man/ subfile to package directory
- Rd files will be in man/ directory with all documented functions


Vignettes
============================================================
- Despite ease of Roxygen, package users will often not read lengthy documentation for a package
- Instead, package users want mini tutorials of how to utilize different functions or their practical uses
- Vignettes do just this!

  -- Provide specific examples for functions

  -- This can include discussion of a function's results
- Vignettes versus **documentation() @examples**

Vignettes
================================================================
- Vignettes easiest to write in Rmarkdown (can also use LaTeX)
- Create an .Rmd subdirectory in your package directory for all .Rmd vignette files
- Example of .Rmd header from Karl Broman's R package primer:

```
output: rmarkdown::html_vignette
vignette: >
  %\VignetteIndexEntry{Put the title of your vignette here}
  %\VignetteEngine{knitr::rmarkdown}
  \usepackage[utf8](inputenc)
```

Vignette Examples
================================================================

- Skittles Brewer (simple):
https://github.com/alyssafrazee/RSkittleBrewer/blob/master/vignettes/RSkittleBrewer.Rmd

- Corrplot package (extensive):
https://cran.r-project.org/web/packages/corrplot/vignettes/corrplot-intro.html




vignettes - Final Notes
===============================================================
- Command for PDF vignettes can be turned on in build()

- Rmarkdown compiles files with knitr

  -- Include both rmarkdown and knitr as suggested package in DESCRIPTION file

  -- To include in Description via Karl Broman:

```
Suggests: knitr, rmarkdown
VignetteBuilder: knitr
```

One more example ...
========================================================
- Let's have a look at `plyr` package, specifically the `ddply()` function.

- Typically, we just need to call the `plyr` library and we get to use the function directly.


```r
library(plyr)

data("mtcars")

ddply(mtcars, .(cyl), c("nrow", "ncol"))
```

```
  cyl nrow ncol
1   4   11   11
2   6    7   11
3   8   14   11
```

One more example (cont'd)
========================================================
- Now imagine we would like to call `ddply()` without calling the `plyr` library.
- To do so, we would have to include `ddply()` function's source code and all its helper functions.


```r
ddply <- function(.data, .variables, .fun = NULL, .progress = "none", .inform = FALSE, 
    .drop = TRUE, .parallel = FALSE, .paropts = NULL) {
    .variables <- as.quoted(.variables)
    pieces <- splitter_d(.data, .variables, drop = .drop)
    ldply(.data = pieces, .fun = .fun, ..., .progress = .progress, .inform = .inform, 
        .parallel = .parallel, .paropts = .paropts)
}
```

More code ...
========================================================

```r
ldply <- function(.data, .fun = NULL, ..., .progress = "none", .inform = FALSE, 
    .parallel = FALSE, .paropts = NULL, .id = NA) {
    if (!inherits(.data, "split")) 
        .data <- as.list(.data)
    res <- llply(.data = .data, .fun = .fun, ..., .progress = .progress, .inform = .inform, 
        .parallel = .parallel, .paropts = .paropts)
    if (identical(.id, NA)) {
        .id <- ".id"
        id_as_factor <- FALSE
    } else {
        id_as_factor <- TRUE
    }
    list_to_dataframe(res, attr(.data, "split_labels"), .id, id_as_factor)
}
```

And then some more ...
========================================================

```r
split_labels <- function(splits, drop, id = plyr::id(splits, drop = TRUE)) {
  if (length(splits) == 0) return(data.frame())

  if (drop) {
    # Need levels which occur in data
    representative <- which(!duplicated(id))[order(unique(id))]
    quickdf(lapply(splits, function(x) x[representative]))
  } else {
    unique_values <- llply(splits, ulevels)
    names(unique_values) <- names(splits)
    rev(expand.grid(rev(unique_values), stringsAsFactors = FALSE))
  }
}
```


Submit your R package to CRAN
========================================================
![alt text](figures/step1.png)

Step 2
========================================================
![alt text](figures/step2.png)


Concluding Notes
========================================================
- R packages are a great tool for re-using code and data sets.
- Creating your own R package is easy, and many tools exist to help you do it.
- Once created, you can easily add, delete and modify your package.
- In fact, creating an R package is **so** easy, R programmers gave up on using `source()`.


Concluding Notes (cont'd)
========================================================

- When programming, we often wish to call functions from a different source code into the current environment.
- Many programming languages let you do this easily.
- In Python, you can use the `import` statement to extract any or all functions from a different source code. The equivalent in R is the `source()` function.
- However, it usually requires some more complicated string matching procedures to get the functions you want.
- So it turns out creating your own package is almost always easier than getting `source()` to extract the functions you want from a different source code.


Resources:
========================================================
- Karl Broman's R Package Primer: http://kbroman.org/pkg_primer/
- Roxygen Github: https://github.com/klutometis/roxygen
- Hilary Parker's Building an R Package from Scratch Blog Post: http://hilaryparker.com/2014/04/29/writing-an-r-package-from-scratch/
- Alyssa Frazee Skittle Color Brewer Simple Package: http://alyssafrazee.com/RSkittleBrewer.html
