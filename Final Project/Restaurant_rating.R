rest.listing <- function(city,state){
  rest.nameall<-c()
  rest.rating<-c()
  rest.price<-c()
  rest.user<-c()
  rest.category<-c()
  
  address <-paste("http://www.yelp.com/search?find_desc=Restaurants&find_loc=",tolower(city),"+",tolower(state),"&start=",0,sep="")
  main.pg<-readLines(address)
  pg.num<-main.pg[grep("page-of-pages",main.pg)+1]
  pg2.num<-as.numeric(strsplit(pg.num,split="of ")[[1]][2])
  
  for (i in 0:1){
    address <-paste("http://www.yelp.com/search?find_desc=Restaurants&find_loc=",tolower(city),"+",tolower(state),"&start=",i*10,sep="")
    
    main.pg<-readLines(address)
    
    # finding the name
    rest.name <- main.pg[grep("biz-name",main.pg)][-1]
    rest.name1 <- unlist(strsplit(rest.name,split="<span >"))[seq(from=2,to=20,by=2)]
    rest.name2 <- as.character(unlist(strsplit(rest.name1,split="</span>"))[seq(from=1,to=20,by=2)])
    rest.nameall<-c(rest.nameall,rest.name2)
    
    # finding the rating
    look.for<-grep("biz-name",main.pg)
    rest.rate4<-c()
    for (j in 2:11){
      rest.rate<-main.pg[look.for[j]+9]
      rest.rate1<-grep("star-img",rest.rate)  
      if (length(rest.rate1)>0)
      {
        rest.rate2<-unlist(strsplit(rest.rate,split="title=\""))[[2]][1]
        rest.rate3<-as.numeric(unlist(strsplit(rest.rate2,split=" star"))[[1]][1])
      } 
      else { rest.rate3 <- NA }
      rest.rate4[j-1]<-rest.rate3
    } 
    rest.rating<-c(rest.rating,rest.rate4)

  }
  
  rest.nameall<-gsub("&amp;","&",rest.nameall)
  
  rest.url<- gsub("[^[:alnum:][:space:]&]","",tolower(rest.nameall))
  rest.url2 <-gsub("\\&","and",rest.url)
  rest.url3<- gsub(" ","-",rest.url2)
  rest.url4<- paste("http://www.yelp.com/biz/",rest.url3,"-amherst",sep="")
  #return(main.pg)
  return(list(Name=rest.nameall,Rating=rest.rating))
  
}
save<-rest.listing("dickinson","nd")

rate_it <- function(city,state){
  listing<-rest.listing(city,state)
  index<-!is.na(listing$Rating)
  index<-which(index==TRUE)
  listing_noNA <-data.frame(listing$Name[index],listing$Rating[index],listing$URL[index])
  rating <- listing_noNA[with(listing_noNA, order(-listing_noNA$listing.Rating.index)),]
  rating1 <- rating[1:10,]
  colnames(rating1)<-c("Name","Rating","URL")
  rownames(rating1)<-NULL
  return(rating1)
}
