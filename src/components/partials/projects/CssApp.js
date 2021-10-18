import CssImg from './project-images/css-app.png'

const CssApp = () => {
    return (
        <div className='project-container'>
            <div className='project-header'>
                <h1> Get tips from this Css App </h1>                
            </div>
            <div className='project-body'>
                <img src={CssImg} alt='brewery app screenshot' className='projectImg'/>
                <div className='project-text'>
                    <h2>app descrip</h2>
                    <h3> links</h3>                        
                </div>
            
            </div>

        </div>
    )
}

export default CssApp;