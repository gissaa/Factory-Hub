import React from 'react'
import IconMenuItem from './IconMenuItem/IconMenuItem'
import iconMenuData from './IconMenuData'
function IconMenu() {
    return (
        <div class="whychooseus1 secpadd">
        <div class="container">
            <div class="row sidehd1">
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="fh-section-title clearfix text-left style-1">
                        <h2>Why Chossing US?</h2>
                    </div>
                </div>
                <div class="col-lg-8 col-md-8 col-sm-12">
                    <p class="hdpara">We go to great lengths to identify impressive new talent self starters with specific skill sets to produce truly amazing results.</p>
                </div>
            </div>
            <div class="row">
                {
                    iconMenuData.map((data,key)=>{
                        return(
                            <IconMenuItem key={key} icon={data.icon} title={data.title} header={data.header} text={data.text}/>
                        )
                    })
                }
                
            </div>
        </div>
    </div>
    )
}

export default IconMenu
