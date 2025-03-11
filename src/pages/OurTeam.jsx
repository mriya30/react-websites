import Card from "../layout/Card";
import Data from "../layout/Data";

function OurTeam() {
    console.log(Data)
    return (
        <>
            <div className="container p-5 mt-5 icon">
                <div className="text-center mx-auto col-6">
                    <h1 className=" text-primary contact" data-aos="fade-up" data-aos-delay>Our Team</h1>
                    <p className="fs-5 text-secondary mt-3" data-aos="fade-up"
     data-aos-delay="100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.</p>
                </div>

                <div className="row">
                    {
                        Data.map((ele) => {
                            console.log(ele);
                            return (
                                <div className="col-md-6 col-lg-3 mt-5">
                                    <Card title={ele.title} paragraph={ele.paragraph} image={ele.image} ></Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default OurTeam