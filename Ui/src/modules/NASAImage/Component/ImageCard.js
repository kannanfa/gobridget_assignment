
const ImageCard = ({ href, description, title}) =>{
    
    return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                    <div class="card rounded p-2 m-1">
                        <img src={href} className="img-fluid  card-img-top card_image_fit" alt={title}/>
                        <div class="card-body">
                        <h5 class="card-title">{title}</h5>
                        <p class="card-text card_image_desc">
                            {description}
                        </p>
                        </div>
                    </div>
                </div>
}


export default ImageCard