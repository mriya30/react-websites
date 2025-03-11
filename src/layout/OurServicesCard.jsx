function OurServicesCard({image,title,paragraph,link}){
    return(
        <div className="card border-0 p-3" data-aos="fade-up" data-aos-delay style={{background:'none'}}>
            <img src={image} style={{height:'50px', width:'50px'}}/>
            <div className="card-body">
                <p className="fs-5">{title}</p>
                <p className="text-secondary">{paragraph}</p>
                <p className="text-primary">{link}</p>
            </div>
        </div>
    )
}
export default OurServicesCard