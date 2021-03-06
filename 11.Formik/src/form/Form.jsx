import React from "react";
import { Formik } from "formik";

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.email}
          />
          {props.errors.email && props.touched.email && props.errors.email}
          <input
            type="password"
            name="password"
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.password}
          />
          {props.errors.password &&
            props.touched.password &&
            props.errors.password}
          <button type="submit" disabled={props.isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
