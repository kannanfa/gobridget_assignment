import PropTypes from 'prop-types';
/**
 * ImageCard - This componet will hel us to render each image. it a styled component. 
 * @param {String} props.href - Image link from NASA API
 * @param {String} props.description - Image description fro NASA API
 * @param {String} props.title - Image title from NASA API
 * @returns Component
 */
const ImageCard = ({ href, description, title, index, currentPage}) =>{
    
    return <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12"  data-testid={`image-card-${index}-${currentPage}`}>
                    <div className="card rounded p-2 m-1">
                        <img data-testid={`image-card-image-${index}-${currentPage}`} src={href} className="img-fluid  card-img-top card_image_fit" alt={title}/>
                        <div className="card-body">
                        <h5 className="card-title"  data-testid={`image-card-title-${index}-${currentPage}`} >{title}</h5>
                        <p className="card-text card_image_desc" data-testid={`image-card-description-${index}-${currentPage}`}>
                            {description}
                        </p>
                        </div>
                    </div>
                </div>
}


// Properties send by parent component.

ImageCard.propTypes = {
    href: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    index: PropTypes.number, 
    currentPage: PropTypes.number    
  }


export default ImageCard