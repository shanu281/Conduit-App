import React, {useState} from 'react'

const NewArticle = (props) => {
  const [newArticle, setNewArticle] = useState([{}])
  const [title, setTitle] = useState("")
  const [about, setAbout] = useState("")
  const [bio, setBio] = useState("")
  const [tags, setTags] = useState([])

  const handleNewArticle =(e) =>{
    e.preventDefault();
    const data = {title: title, articleAbout: about, description: bio, tagList: tags}
    setNewArticle(data)
  }
  console.log(newArticle)
  console.log(title)
  console.log(about)
  console.log(bio)
  console.log(tags)
  return (
    <div className="editor-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-10 offset-md-1 col-xs-12">
          <form onClick={handleNewArticle}>
            <fieldset>
              <fieldset className="form-group">
                <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control form-control-lg" placeholder="Article Title" />
              </fieldset>
              <fieldset className="form-group">
                <input onChange={(e) => setAbout(e.target.value)} type="text" className="form-control" placeholder="What's this article about?" />
              </fieldset>
              <fieldset className="form-group">
                <textarea onChange={(e) => setBio(e.target.value)}
                  className="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset className="form-group">
                <input  onChange={(e) => setTags(e.target.value)}type="text" className="form-control" placeholder="Enter tags" />
                <div className="tag-list"></div>
              </fieldset>
              <button onClick={props.handlePublish} className="btn btn-lg pull-xs-right btn-primary" type="button">
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NewArticle