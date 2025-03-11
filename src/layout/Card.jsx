function Card({ image, title, paragraph }) {
    return (
        <div className="card border-0 position-relative rounded-0" data-aos="fade-up" data-aos-delay style={{ background: 'none' }}>
            <img src={image} />
            <div className="position-absolute top-0 left-0">

                <ul className="list-unstyled">
                    <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                </ul>

            </div>
            <div className="card-body">
                <p className="fs-5">{title}</p>
                <p className="text-uppercase " style={{ fontSize: '12px', color: '#cccccc', letterSpacing: '1px' }}>{paragraph}</p>
            </div>
        </div>
    )
}
export default Card