import image from '../assets/images.png'
const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card mb-3 d-inline-block bg-secondary text-light my-3 mx-4 py-2 px-2" style={{maxWidth:"330px"}}>
  <img src={src?src:image} style={{height:"200px", width:"300px"}} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"Description of this news is not present at the moment. Its is about something which is just happended"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default NewsItem