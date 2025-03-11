import OurServicesCard from "../layout/OurServicesCard";
import OurServicesData from "../layout/OurServicesData";

function OurServices() {
    // console.log(Data)
    return (
        <>
         <div className="container p-5 mt-5 ">
        <div className="text-center mx-auto col-6" data-aos="fade">
         <h1 className=" text-primary contact">Our Services</h1>
         </div>
       
        <div className="row ">
            {
                OurServicesData.map((ele)=>{
                    console.log(ele);
                    return(
                        <div className="col-md-6 col-lg-4 mt-5">
                        <OurServicesCard title={ele.title} paragraph={ele.paragraph} image={ele.image} link={ele.link}></OurServicesCard>
                    </div>
                    )  
                })
            }
            </div>
            </div>
        </>
    )
}
export default OurServices