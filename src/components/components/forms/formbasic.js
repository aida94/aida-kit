import React, { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';

class FormBasic extends Component {
  render() {   
    return (
        <Formik
            initialValues={{ 
              text: '',
              disabled: '',
              email: '', 
              password: '',
              iconLeft: '',
              iconRight: '',
              description: '',
              dropdown: '',
              // multiselect: [],
              textarea: '',
              file: '',
              checkbox: false,
              switch: false }}

            validate={(values) => {
              const errors = {};

              if (!values.text) {
                errors.text = 'Required';
              }
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.password) {
                errors.password = 'Required';
              } else if (values.password.length < 6) {
                errors.password = 'The password must be at least 6 characters';
              }  
              if (!values.checkbox) {
                errors.checkbox = 'Required';
              }            
              return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                // eslint-disable-next-line no-alert
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
        >

        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          return (
          <form onSubmit={handleSubmit}>

            <div className='row' >
                <div className="col-md-6 form-group">
                    <label htmlFor="text">Text Field</label><small className='text-danger'> * </small>
                    <input type="text" name="text" className="form-control form-control-sm" id="text" placeholder="Text Input" value={values.text} onChange={handleChange} onBlur={handleBlur}/>
                    <ErrorMessage name="text" component="div" className='text-danger'/>
                </div>
                <div className="col-md-3 form-group">
                    <label htmlFor="disabled">Disabled Field</label>
                    <input type="text" name="disabled" className="form-control form-control-sm" id="disabled" placeholder="Disabled Input" disabled/>
                </div>
            </div>

        
            <div className="row" >
                <div className="col-md-6 form-group">
                    <label htmlFor="email">E-mail</label> <small className='text-danger'> * </small>
                    <input type="email" name="email" className="form-control form-control-sm" id="email" placeholder="example@gmail.com" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                    <ErrorMessage name="email" component="div" className='text-danger'/>
                </div>
                <div className="col-md-6 form-group">
                    <label htmlFor="password">Password</label> <small className='text-danger'> * </small>
                    <input type="password" name="password" className="form-control form-control-sm" id="password" placeholder="Password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                    <ErrorMessage name="password" component="div" className='text-danger'/>
                </div>
            </div>

            <div className="row" >
                <div className="col-md-6 form-group">
                    <label htmlFor="iconLeft">Icon Left</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                        </div>
                        <input type="text" name="iconLeft" className="form-control" id="iconLeft" placeholder="Icon Left Input" value={values.iconLeft} onChange={handleChange} onBlur={handleBlur}/>
                    </div>
                </div>

                <div className="col-md-6 form-group">
                    <label htmlFor="iconRight">Icon Right</label>
                    <div className="input-group">
                        <input type="text" name="iconRight" className="form-control" id="iconRight" placeholder="Input Right Input" value={values.iconRight} onChange={handleChange} onBlur={handleBlur}/>
                        <div className="input-group-prepend">
                            <div className="input-group-text">@</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="description">Field with description</label>
                <input type="text" name="description" className="form-control form-control-sm" id="description" placeholder="Enter info" aria-describedby="textHelp" value={values.description} onChange={handleChange} onBlur={handleBlur}/>
                <small id="textHelp" className="form-text text-muted">Add some discription about text you will input.</small>
            </div>

            <div className="form-group">
                <label htmlFor="textare">Textarea</label>
                <textarea name="textarea" className="form-control form-control-sm" id="textare" rows="3" value={values.textarea} onChange={handleChange} onBlur={handleBlur}/>
            </div>

            <div className="form-group">
                <label htmlFor="dropdown">Dropdown</label>
                <select name="dropdown" className="form-control form-control-sm" id="dropdown" value={values.dropdown} onChange={handleChange} onBlur={handleBlur}>
                    <option defaultValue hidden>Choose value</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
{/* 
            <div className="form-group">
                <label htmlFor="multiselect">Multiselect</label>
                <select multiple name="multiselect" className="form-control form-control-sm" id="multiselect" value={values.multiselect} onChange={handleChange} onBlur={handleBlur}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </select>
            </div> */}

            <div className="form-group">
                <label htmlFor="addFile">Add file</label>
                <input type="file" name="file" className="form-control-file form-control-sm" id="addFile" value={values.file} onChange={handleChange} onBlur={handleBlur}/>
            </div>

            <div className="row">
                <div className="col-md-6 form-group custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="checkbox" value={values.checkbox} onChange={handleChange} onBlur={handleBlur}/>
                    <label className="custom-control-label" htmlFor="checkbox">Check me out</label> <small className='text-danger'> * </small>
                    <ErrorMessage name="checkbox" component="div" className='text-danger'/>
                </div>

                <div className="col-md-6 form-group custom-control custom-switch">
                    <input type="checkbox" className="custom-control-input" id="switch" value={values.switch} onChange={handleChange} onBlur={handleBlur}/>
                    <label className="custom-control-label" htmlFor="switch">Toggle this switch element</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                Submit
            </button>
          </form>);
        }}

      </Formik>
    );
  }
}

export default FormBasic;
