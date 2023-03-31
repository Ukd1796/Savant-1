import React, {useEffect} from 'react'
import './FindPaper.css';
import FindInPageIcon from '@mui/icons-material/FindInPage';
const FindPaper = () => {

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
    }, []);
    
  return (
      <>
      <div className="container" data-container>
        
        <form className="form">
          <input
            className="form__input"
            type="text"
            placeholder="What are you finding today?"
            autocomplete="off"
            data-form-input
          />
          <button className="form__btn" data-form-button>
            {/* <ion-icon name="search-outline"></ion-icon> */}
          </button>
        </form>
      </div>
      
          
      </>
  )
}

export default FindPaper