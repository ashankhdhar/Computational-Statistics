
get.stuff <- function(imdb.code){
  title <- c()
  rating<-c()
  User.Rating<-c()
  genre<-c()
  year<-c()
  budget<-c()
  opn<-c()
  gross<-c()
  
  for (i in 1:250){
    address <- paste("http://www.imdb.com/title/",imdb.code[i],sep="")
    page.movie <-readLines(address)
    
    # get title
    title1 <- c(page.movie[grep("<title>",page.movie)])
    title2<- unlist(strsplit(title1,split="<title>"))[seq(from=2,to=200,by=2)]
    title[i] <- gsub(" - IMDb</title>","",title2)
    
    year1 <- unlist(strsplit(title1,split="\\("))[seq(from=2,to=200,by=2)]
    year[i] <-gsub(") - IMDb</title>","",year1)
    
    # rating of movie
    rating1 <- c(page.movie[grep("contentRating",page.movie)[1]])
    rating2 <- unlist(strsplit(rating1,split="content="))[seq(from=2,to=200,by=2)]
    rating[i] <- gsub(">R","",rating2)
    # user rating
    User.Rating1 <- page.movie[grep("Users rated this",page.movie)[1]]
    User.Rating2 <- strsplit(User.Rating1,"/")[[1]][1]
    User.Rating3 <- as.numeric(strsplit(User.Rating2,"this ")[[1]][2])
    User.Rating[i] <-c(User.Rating3)
    
    # get the genre
    inds <- grep("ref_=tt_stry_gnr",page.movie)
    genre1 <- unlist(strsplit(page.movie[inds],"/genre/"))[seq(from=2,to=length(inds)*2,by=2)]
    genre2 <- unlist(strsplit(genre1,"\\?"))[seq(from=1,to=length(inds)*2,by=2)]
    genre[i] <- paste(genre2,collapse=" ")
    
    # business bidget
    address1 <- paste("http://www.imdb.com/title/",imdb.code[i],"/business",sep="")
    business.page <- readLines(address1)
    temp <- grep("Budget",business.page)
    if (length(temp)>0)
    {
      budget1 <- business.page[temp+1]
      budget2 <- strsplit(budget1," \\(")[[1]][1]
      if (grep("\\$",budget2)){
        budget3 <- gsub("\\$","",budget2)
      }
      if (grep("\\¥",budget2){
        budget3 <- gsub("\\","",budget2)
      }
      budget[i] <- as.numeric(gsub("\\,","",budget3))
    } 
    temp2 <- grep("Opening Weekend",business.page)
    if (length(temp2)>0)
    {
      opn1 <- business.page[temp2+1]
      opn2 <- strsplit(opn1," \\(")[[1]][1]
      opn3 <- gsub("\\$","",opn2)
      opn[i] <- as.numeric(gsub("\\,","",opn3))
    }
    temp3 <- grep("Gross",business.page)
    if (length(temp3)>0)
    {
      gross1 <- business.page[temp3+1]
      gross2 <- strsplit(gross1," \\(")[[1]][1]
      gross3 <- gsub("\\$","",gross2)
      gross[i] <- as.numeric(gsub("\\,","",gross3))
    } 
  }
  return (list(Title=title,Rating=rating,UserRating=User.Rating,Genre=genre,Year=year, Budget=budget, Opening.Night=opn, Gross=gross))
}
