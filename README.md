NewsMonkey

News monkey is a news viewing application built using ReactJS. It uses the news.api org to fetch news.

To use this app, add your api key inside the News component and change the url to :-
https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=<your api key></your>&page=1&pageSize=${this.props.pageSize}`