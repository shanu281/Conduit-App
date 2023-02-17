import React, {useState, useEffect} from 'react'


const Home = () => {
  const [articles, setArticles] = useState([])

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${users[activeUserIndex]}`)
  //     .then((res) => res.json())
  //     .then((userInfo) => {
  //       setUserInfo(userInfo);
  //     });
  //   return () => {};
  // }, [activeUserIndex]);
  // how useEffect() works
  

  useEffect(() => {
    fetch("https://api.realworld.io/api/articles?limit=10&offset=0")
    .then(res => res.json())
    .then(data => setArticles(data))
  },[])

console.log(articles )
// console.log(articles.articles[1].author.username )
  return (
    <div className="home-page">
  <div className="banner">
    <div className="container">
      <h1 className="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div className="container page">
    <div className="row">
      <div className="col-md-9">
        <div className="feed-toggle">
          <ul className="nav nav-pills outline-active">
            <li className="nav-item">
              <a className="nav-link disabled" href="">Your Feed</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="">Global Feed</a>
            </li>
          </ul>
        </div>

        <div className="article-preview">
          <div className="article-meta">
            <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a>
            <div className="info">
              <a href="" className="author">Eric Simons</a>
              <span className="date">January 20th</span>
            </div>
            <button className="btn btn-outline-primary btn-sm pull-xs-right">
              <i className="ion-heart"></i> 29
            </button>
          </div>
          <a href="" className="preview-link">
            <h1>How to build webapps that scale</h1>
            <p>This is the description for the post.</p>
            <span>Read more...</span>
          </a>
        </div>
{/*         
{
  articles.articles.map((article ,i) => {
    return(
      <div key={i} className="article-preview">
      <div className="article-meta">
        <a href="profile.html"><img src={article.author.image }/></a>
        <div className="info">
          <a href="" className="author">{article.author.username}</a>
          <span className="date">{article.createdAt}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <a href="" className="preview-link">
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </a>
    </div>
    )
  })
} */}
       
      </div>

      <div className="col-md-3">
        <div className="sidebar">
          <p>Popular Tags</p>

          <div className="tag-list">
            <a href="" className="tag-pill tag-default">programming</a>
            <a href="" className="tag-pill tag-default">javascript</a>
            <a href="" className="tag-pill tag-default">emberjs</a>
            <a href="" className="tag-pill tag-default">angularjs</a>
            <a href="" className="tag-pill tag-default">react</a>
            <a href="" className="tag-pill tag-default">mean</a>
            <a href="" className="tag-pill tag-default">node</a>
            <a href="" className="tag-pill tag-default">rails</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home




