import { Button, Form, Container, Row, Col } from "reactstrap";

import { userSchemaValidation } from "../Validations/UserValidations";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { addUser, deleteUser, updateUser } from "../Features/UserSlice";

import { registerUser } from "../Features/UserSlice";

import { useNavigate } from "react-router-dom";

const Register = () => {
  //Retrieve the current value of the state and assign it to a variable.
  const userList = useSelector((state) => state.users.value);

  //Create the state variables
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const {
    register,
    handleSubmit, // Submit the form when this is called
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation), //Associate your Yup validation schema using the resolver
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission
  const onSubmit = (data) => {
    try {
      // You can handle the form submission here
      const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      console.log("Form Data", data); // You can handle the form submission here
      alert("Validation All Good!");
      //dispatch(addUser(userData)); //use the useDispatch hook to dispatch an action, passing as parameter the userData
      dispatch(registerUser(userData));
      navigate("/login");
    } catch (error) {
      console.log("Error.");
    }
  };

  const handleDelete = (email) => {
    dispatch(deleteUser(email));
  };

  const handleUpdate = (email) => {
    const userData = {
      name: name, //create an object with the values from the state variables
      email: email,
      password: password,
    };
    dispatch(updateUser(userData)); //use the useDispatch hook to dispatch an action, passing as parameter the userData
  };

  return (
    <div>
      <Container fluid>
        <Row className="formrow">
          <Col className="columndiv1" lg="6">
            <Form className="div-form" onSubmit={handleSubmit(onSubmit)}>
              <section className="form">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name..."
                    {...register("name", {
                      onChange: (e) => setname(e.target.value),
                    })}
                  />
                  <p className="error">{errors.name?.message}</p>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email..."
                    {...register("email", {
                      onChange: (e) => setemail(e.target.value),
                    })}
                  />
                  <p className="error">{errors.email?.message}</p>
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password..."
                    {...register("password", {
                      onChange: (e) => setpassword(e.target.value),
                    })}
                  />
                  <p className="error">{errors.password?.message}</p>
                </div>

                <div className="form-group">
                  <input
                    type="password"
                    id="confirmpassword"
                    className="form-control"
                    placeholder="Confirm password..."
                    {...register("confirmpassword", {
                      onChange: (e) => setconfirmpassword(e.target.value),
                    })}
                  />
                  <p className="error">{errors.confirmpassword?.message}</p>
                </div>

                <Button color="primary" className="button">
                  Register
                </Button>
              </section>
            </Form>
          </Col>

          <Col className="columndiv1" lg="6"></Col>
        </Row>

        <Row></Row>
      </Container>
    </div>
  );
};

export default Register;
