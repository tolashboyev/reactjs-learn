import "./Testimonials.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="t-container-b">
            <Slider {...settings}>
                <div className="t-content-b">
                    <div className="t-card-b">
                        <div className="t-card-body-b t-card1-b">
                            <div className="t-star-b">⭐⭐⭐⭐⭐</div>
                            <div className="t-desc-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem facilis numquam inventore excepturi tenetur tempora sapiente, iure fugit voluptas a molestias. Sapiente hic commodi blanditiis eos ea, unde facilis alias optio officiis exercitationem facere distinctio, odio assumenda quisquam harum eaque reiciendis accusantium quae corporis ex nobis inventore, velit laudantium non. Repudiandae natus iure delectus numquam molestiae dolore tenetur nostrum.
                            </div>   
                        </div>
                        <div className="t-owner-b">
                            <div className="t-profile-b">
                                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                            </div>
                            <div className="t-profile-text-b">
                                <b>John Doe</b>
                                <p>Caption</p>    
                            </div>    
                        </div>               
                    </div>
                    <div className="t-card-b">
                        <div className="t-card-body-b t-card2-b">
                            <div className="t-star-b">⭐⭐⭐⭐⭐</div>
                            <div className="t-desc-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem facilis numquam inventore excepturi tenetur tempora sapiente, iure fugit voluptas a molestias. Sapiente hic commodi blanditiis eos ea, unde facilis alias optio officiis exercitationem facere distinctio, odio assumenda quisquam harum eaque reiciendis accusantium quae corporis ex nobis inventore, velit laudantium non. Repudiandae natus iure delectus numquam molestiae dolore tenetur nostrum.
                            </div>   
                        </div>
                        <div className="t-owner-b">
                            <div className="t-profile-b">
                                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                            </div>
                            <div className="t-profile-text-b">
                                <b>John Doe</b>
                                <p>Caption</p>    
                            </div>    
                        </div>               
                    </div>
                    <div className="t-card-b">
                        <div className="t-card-body-b t-card3-b">
                            <div className="t-star-b">⭐⭐⭐⭐⭐</div>
                            <div className="t-desc-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem facilis numquam inventore excepturi tenetur tempora sapiente, iure fugit voluptas a molestias. Sapiente hic commodi blanditiis eos ea, unde facilis alias optio officiis exercitationem facere distinctio, odio assumenda quisquam harum eaque reiciendis accusantium quae corporis ex nobis inventore, velit laudantium non. Repudiandae natus iure delectus numquam molestiae dolore tenetur nostrum.
                            </div>   
                        </div>
                        <div className="t-owner-b">
                            <div className="t-profile-b">
                                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                            </div>
                            <div className="t-profile-text-b">
                                <b>John Doe</b>
                                <p>Caption</p>    
                            </div>    
                        </div>               
                    </div>
                </div>
                <div className="t-content-b">
                    <div className="t-card-b">
                        <div className="t-card-body-b t-card1-b">
                            <div className="t-star-b">⭐⭐⭐⭐⭐</div>
                            <div className="t-desc-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem facilis numquam inventore excepturi tenetur tempora sapiente, iure fugit voluptas a molestias. Sapiente hic commodi blanditiis eos ea, unde facilis alias optio officiis exercitationem facere distinctio, odio assumenda quisquam harum eaque reiciendis accusantium quae corporis ex nobis inventore, velit laudantium non. Repudiandae natus iure delectus numquam molestiae dolore tenetur nostrum.
                            </div>   
                        </div>
                        <div className="t-owner-b">
                            <div className="t-profile-b">
                                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                            </div>
                            <div className="t-profile-text-b">
                                <b>John Doe</b>
                                <p>Caption</p>    
                            </div>    
                        </div>               
                    </div>
                    <div className="t-card-b">
                        <div className="t-card-body-b t-card2-b">
                            <div className="t-star-b">⭐⭐⭐⭐⭐</div>
                            <div className="t-desc-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem facilis numquam inventore excepturi tenetur tempora sapiente, iure fugit voluptas a molestias. Sapiente hic commodi blanditiis eos ea, unde facilis alias optio officiis exercitationem facere distinctio, odio assumenda quisquam harum eaque reiciendis accusantium quae corporis ex nobis inventore, velit laudantium non. Repudiandae natus iure delectus numquam molestiae dolore tenetur nostrum.
                            </div>   
                        </div>
                        <div className="t-owner-b">
                            <div className="t-profile-b">
                                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                            </div>
                            <div className="t-profile-text-b">
                                <b>John Doe</b>
                                <p>Caption</p>    
                            </div>    
                        </div>               
                    </div>
                    <div className="t-card-b">
                        <div className="t-card-body-b t-card3-b">
                            <div className="t-star-b">⭐⭐⭐⭐⭐</div>
                            <div className="t-desc-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem facilis numquam inventore excepturi tenetur tempora sapiente, iure fugit voluptas a molestias. Sapiente hic commodi blanditiis eos ea, unde facilis alias optio officiis exercitationem facere distinctio, odio assumenda quisquam harum eaque reiciendis accusantium quae corporis ex nobis inventore, velit laudantium non. Repudiandae natus iure delectus numquam molestiae dolore tenetur nostrum.
                            </div>   
                        </div>
                        <div className="t-owner-b">
                            <div className="t-profile-b">
                                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                            </div>
                            <div className="t-profile-text-b">
                                <b>John Doe</b>
                                <p>Caption</p>    
                            </div>    
                        </div>               
                    </div>
                </div>
                <div className="t-content-b">
                    <div className="t-card-b">
                        <div className="t-card-body-b t-card1-b">
                            <div className="t-star-b">⭐⭐⭐⭐⭐</div>
                            <div className="t-desc-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem facilis numquam inventore excepturi tenetur tempora sapiente, iure fugit voluptas a molestias. Sapiente hic commodi blanditiis eos ea, unde facilis alias optio officiis exercitationem facere distinctio, odio assumenda quisquam harum eaque reiciendis accusantium quae corporis ex nobis inventore, velit laudantium non. Repudiandae natus iure delectus numquam molestiae dolore tenetur nostrum.
                            </div>   
                        </div>
                        <div className="t-owner-b">
                            <div className="t-profile-b">
                                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                            </div>
                            <div className="t-profile-text-b">
                                <b>John Doe</b>
                                <p>Caption</p>    
                            </div>    
                        </div>               
                    </div>
                    <div className="t-card-b">
                        <div className="t-card-body-b t-card2-b">
                            <div className="t-star-b">⭐⭐⭐⭐⭐</div>
                            <div className="t-desc-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem facilis numquam inventore excepturi tenetur tempora sapiente, iure fugit voluptas a molestias. Sapiente hic commodi blanditiis eos ea, unde facilis alias optio officiis exercitationem facere distinctio, odio assumenda quisquam harum eaque reiciendis accusantium quae corporis ex nobis inventore, velit laudantium non. Repudiandae natus iure delectus numquam molestiae dolore tenetur nostrum.
                            </div>   
                        </div>
                        <div className="t-owner-b">
                            <div className="t-profile-b">
                                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                            </div>
                            <div className="t-profile-text-b">
                                <b>John Doe</b>
                                <p>Caption</p>    
                            </div>    
                        </div>               
                    </div>
                    <div className="t-card-b">
                        <div className="t-card-body-b t-card3-b">
                            <div className="t-star-b">⭐⭐⭐⭐⭐</div>
                            <div className="t-desc-b">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus autem facilis numquam inventore excepturi tenetur tempora sapiente, iure fugit voluptas a molestias. Sapiente hic commodi blanditiis eos ea, unde facilis alias optio officiis exercitationem facere distinctio, odio assumenda quisquam harum eaque reiciendis accusantium quae corporis ex nobis inventore, velit laudantium non. Repudiandae natus iure delectus numquam molestiae dolore tenetur nostrum.
                            </div>   
                        </div>
                        <div className="t-owner-b">
                            <div className="t-profile-b">
                                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg" alt="" />
                            </div>
                            <div className="t-profile-text-b">
                                <b>John Doe</b>
                                <p>Caption</p>    
                            </div>    
                        </div>               
                    </div>
                </div>
            </Slider>
      </div>
    )
}