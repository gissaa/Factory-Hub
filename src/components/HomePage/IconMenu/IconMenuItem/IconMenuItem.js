import React from 'react'

function IconMenuItem(props) {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12">
        <div class=" fh-icon-box-2 dark-version icon-center"> <span class="fh-icon"><i class={""+props.icon+""}></i></span>
        
            <h4>{props.header}</h4>
            <div class="sub-title">{props.title}</div>
            <div class="desc">
                <p>{props.text}</p>
            </div>
        </div>
    </div>
    )
}

export default IconMenuItem
