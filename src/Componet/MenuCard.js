import React from "react";


const MenuCard = ({ menuData }) => {
    //console.log(menuData);
    return (
        <>
            <section className="main-card--cointainer">
                {menuData.map((curElem) => {
                const {id, name,category,image,description} = curElem;

                    return (
                        <>
                      
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number-circle subtle">{id}</span>
                                        <span className="card-auther subtle">{category}</span>
                                        <h2 className="card-title">{name}</h2>
                                        <span className="card-decription subtle">{description}</span>
                                        <div className="card-read">Read</div>
                                    </div>
                                    <img src={image} alt="images" className="card-media" />
                                    <span className="card-tag subtle">order Now</span>

                                </div>

                            </div>
                         
                        </>

                    )
                })}

</section>
           

        </>


    )


}
export default MenuCard;