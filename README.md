# Movie Wars Front end app
Here you can wind app on which you can see what is your favourite movie. After installing frontend, and it's backend app you will be able to choose between two movies at a time. You will do it until there will be only one movie left. YOUR FAVOURITE MOVIE.

##UPDATE GENRE CHOOSING
* Now user can choose genre of movies to compare.
* Next update - now user can choose two ways of filtering movies. **Quick search** where you can filter movies by genre and how many movies you want to compare. **Advanced search** where you can filter movies by genre, age rating, release dates, and how many movies you want to compare.


# Tech stack
Frontend of the app uses React with Redux. It communicates with backend REST API with a fetch function to get needed data.

#----------------WORKING DEMO ------------- Until end of August ----------------

##[MOVIE WARS](https://iwomi.networkmanager.pl/)

# Installing app
* You need to get all files and from github
* In console run command **"npm i"**
* on file **src/utils/config/configExample.ts** change url to your backend host, and rename file into **config.ts** 
* In console run **"npm run start"**

That's it, it should be working fine with backend app (you need to install it separately).

###IMPORTANT NOTICE
It works only with backend available under the LINKS hash 

#----------LINKS---------
I might also create a replit working app. The link will be here. Until then, you can get two apps here.
##[Frontend](https://github.com/iwomipl/Movie-Wars-Front)

##[Backend](https://github.com/iwomipl/Movie-Wars-Back)

#Planned updates
I want to add another features to frontend app, so backend would have to deal with it, those are:
* choosing from movies of one director
* choosing from movies in range of years they were released - DONE
* choosing from movies of one genre - DONE
* choosing from movies of one rating - DONE
* winning movie screen will show similar movies to the winning one by director or by genre