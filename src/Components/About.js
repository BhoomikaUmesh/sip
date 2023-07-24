import React from "react";
import "./About.css"
export const About = () => {
  return (
    <>
      
        <div className="card bg-primary-subtle justify-content-left align-items-left">
          <div className="card-body">
            <h2 id="head">About Our Restaurant</h2>
            <p className="para">
            Mission: To create an environment where absolute guest satisfaction is our highest priority.

Vision: Through a shared commitment to excellence, we are dedicated to the uncompromising quality of our food, service, people and profit, while taking exceptional care of our guests and staff. We will continuously strive to surpass our own accomplishments and be recognized as a leader in our industry.
            </p>
            <form>
                <h3 className='text-center'>Any Questions...</h3>
                <div className='mb-3'>
                    <label htmlFor='text'>Name</label>
                    <input type='text' placeholder='Enter your name' className='form-control' name='text'/>
                    </div>
                    <div className='mb-3'>
                    <label htmlFor='text'>Your Consern</label>
                    <input type='text' placeholder='Enter your consern' className='form-control' name='text'/>
                </div>
                <div>
                    <input type='checkbox' className='custom-control custom-checkbox'/>
                    <lable htmlFor="checkbox" className="ms-1">Remember me</lable>
                </div>
              
            </form>
          </div>
          <div className="card-footer d-grid">
          <button type="submit" className="btn btn-primary mb-4">Submit</button>
          </div>
        </div>
    
    </>
  );
};
export default About;