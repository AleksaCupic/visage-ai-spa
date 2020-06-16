import React from 'react'
import styles from './LeftHeroSection.module.css'
import { MyContext } from '../../Context/Context'
import exif from 'exif-js'

const LeftHeroSection =(props)=>{

    function readFile(file) {
        return new Promise(resolve => {
          var reader = new FileReader();
          reader.onload = e => resolve(e.target.result);
          reader.readAsDataURL(file);
        });
      };
      
      function createImage(data) {
        return new Promise(resolve => {
          const img = document.createElement('img');
          img.onload = () => resolve(img);
          img.src = data;
        })
      }
      
      function rotate(type, img) {
        return new Promise(resolve => {
          const canvas = document.createElement('canvas');
      
          exif.getData(img, function () {
            var orientation = exif.getAllTags(this).Orientation;
      
            if ([5, 6, 7, 8].indexOf(orientation) > -1) {
              canvas.width = img.height;
              canvas.height = img.width;
            } else {
              canvas.width = img.width;
              canvas.height = img.height;
            }
      
            var ctx = canvas.getContext("2d");
      
            switch (orientation) {
              case 2:
                ctx.transform(-1, 0, 0, 1, img.width, 0);
                break;
              case 3:
                ctx.transform(-1, 0, 0, -1, img.width, img.height);
                break;
              case 4:
                ctx.transform(1, 0, 0, -1, 0, img.height);
                break;
              case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
              case 6:
                ctx.transform(0, 1, -1, 0, img.height, 0);
                break;
              case 7:
                ctx.transform(0, -1, -1, 0, img.height, img.width);
                break;
              case 8:
                ctx.transform(0, -1, 1, 0, 0, img.width);
                break;
              default:
                ctx.transform(1, 0, 0, 1, 0, 0);
            }
      
            ctx.drawImage(img, 0, 0, img.width, img.height);
            ctx.toBlob(resolve, type);
          });
        })
      }

    const handleFileUpload=(event, setImage)=>{
        if(!event.target.files[0]){
          return
        }
        
        readFile(event.target.files[0])
        .then(createImage)
        .then(rotate(undefined, event.target.files[0].type))
        .then(blob=>{
            setImage(blob.src)
            props.toggleDetectFace()
        })
        
    }
    
    

    return(
        <MyContext.Consumer>
            {context=>(
                <div className={` ${styles.leftDiv} productInfo col-lg-4 col-md-12 col-12`}>
                    <div className={`${styles.animateText} col-lg-12`}>
                        <header>
                            <span>
                                Happy &nbsp; Angry &nbsp; Sad &nbsp; Surpirsed
                            </span>
                            <h3>Facial Expressions Classifier - Deep Learning & CNN</h3>
                        </header>
                        <br />
                        <div className={`${styles.setPhoto} col-12`}>
        
                            <input className={styles.uploadFileInput} type="file" id="img" name="img" onChange={(event)=>handleFileUpload(event, context.setImage)} accept="image/*" />

                            <button className={styles.uploadFileBtn}>
                                Upload
                            </button>  
                            
                        </div>
                    </div>
                </div>
            )}
        </MyContext.Consumer>
    )
}

export default LeftHeroSection