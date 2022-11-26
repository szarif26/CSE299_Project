import React from "react";
import { Link } from "react-router-dom";
import classes from './Footerpage.module.css';
function Footerpage() {
  return (
 
        <div className={classes.footercontainer}>
            <section className={classes.footersub}>
                <p className={classes.footersubheading}>
                    
                </p>
                <div className={classes.inputarea}>NSU Service System
                     <form>
                        <input className={classes.footerinput} type="text" name="User ID" placeholder="Message"></input>
                       <button className={classes.footerbtn}>Send</button>
                     </form>
                </div>
            </section>  
<div className={classes.footerlinkwrapper}>
    <div className={classes.footerlinkitem}>
        <h2>About Us</h2>
        <Link className={classes.footerlinkitem} to='/'> <b>Home</b></Link>
        <Link className={classes.footerlinkitem} to='/'> <b>Address</b></Link>
        <Link className={classes.footerlinkitem} to='/'><b> Contact</b></Link>
        <Link className={classes.footerlinkitem} to='/'><b> FAQ</b></Link>
        
   </div>
   <div className={classes.footerlinkitem}>
        <h2>Social Media</h2>
        <Link className={classes.footerlinkitem} to='/'> <b>Facebook</b></Link>
        <Link className={classes.footerlinkitem} to='/'> <b> Instagram</b></Link>
        <Link className={classes.footerlinkitem} to='/'><b> Youtube</b></Link>
        
   </div>
   
   <div className={classes.footerlinkitem}>
        <h2>Services</h2>
        <Link className={classes.footerlinkitem} to='/'> <b>Kashundi</b></Link>
        <Link className={classes.footerlinkitem} to='/'> <b>Shuttle</b></Link>
        <Link className={classes.footerlinkitem} to='/'> <b>Printing</b></Link>
        <Link className={classes.footerlinkitem} to='/'> <b>Booking</b></Link>
   </div>
</div>


        </div>

    
  );
}

export default Footerpage;
