import React from 'react'
import {MyContext} from '../../Context/Context'

const withContext=(Component)=>{
    
    return(props)=>(
        <MyContext.Consumer>
            {context=><Component {...props} context={context}/>}
        </MyContext.Consumer>
    )
}

export default withContext;