import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Formik, Form, Field } from "formik";
import { object, string } from "yup";
import { Checkbox, FormControlLabel } from "@mui/material";

const SignupSchema = object().shape({
  firstName: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: string().email("Invalid email").required("Required"),
  password: string()
    .required("Please enter a password ")
    .min(8, "Password must have min 8 chars")
    .max(16, "Password must have max 16 chars")
    .matches(/\d+/, "Password must have a number")
    .matches(/[a-z]+/, "Password must have a lowercase")
    .matches(/[A-Z]+/, "Password must have an uppercase")
    .matches(/[!,?{}><%&$#£+-.]+/, " Password must have a special char"),
});

const Register = () => {
  const [check, setCheck] = useState(false);
  console.log(check);
  return (
    <>
      <Box className="register">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, formikHelpers) => {
            // same shape as initial values
            console.log(values);
            alert(`
            firstName : ${values.firstName}
            lastName : ${values.lastName}
            email : ${values.email}
            password : ${values.password}`);
            formikHelpers.resetForm();
          }}
        >
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            isValid,
            dirty,
          }) => (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
                alignItems: "center",
              }}
            >
              <Field
                name="firstName"
                type="text"
                as={TextField}
                variant="outlined"
                color="primary"
                fullWidth
                label="First Name"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.firstName}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />
              <Box height={14} />
              {/* {errors.firstName && touched.firstName ? (
                <div>{errors.firstName}</div>
              ) : null} */}

              <Field
                name="lastName"
                type="text"
                as={TextField}
                variant="outlined"
                color="primary"
                fullWidth
                label="Last Name"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.lastName}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
              <Box height={14} />
              {/* {errors.lastName && touched.lastName ? (
                <div>{errors.lastName}</div>
              ) : null} */}

              <Field
                name="email"
                type="email"
                as={TextField}
                variant="outlined"
                color="primary"
                fullWidth
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <Box height={14} />
              {/* {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null} */}

              <Field
                name="password"
                type="password"
                as={TextField}
                variant="outlined"
                color="primary"
                fullWidth
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                // value={values.password}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Box height={14} />
              {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}

              <FormControlLabel
                control={<Checkbox />}
                onClick={() => setCheck(!check)}
                label="I have read and accept the contract"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                disabled={!dirty || !isValid || !check}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default Register;
