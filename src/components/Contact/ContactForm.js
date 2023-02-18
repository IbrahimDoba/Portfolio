import styled from "styled-components";
import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

// Styles
const Container = styled.div`
  width:88%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const Label = styled.label`
  align-self: start;
  font-size: 1.3rem;
`;
const LabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`
const InputName = styled.input`
  align-self: flex-start;
  width: 70%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  outline: none;
`;
// const InputEmail = styled.input`
//   width: 70%;
//   padding: 10px;
//   margin-bottom: 20px;
//   font-size: 1.2rem;
//   outline: none;
// `;

const Textarea = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  outline: none;
  width: 80%;

`;
const SendBtn = styled.input`
  align-self: flex-start;
  width: 50%;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: black;
  background-color: #01bf71;
`;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qqlyllk",
        "template_hgelrwq",
        form.current,
        "3oJC33Hn2ZS3haQVb"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Thank You!')
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          console.log("failed");
        }
      );
  };
  return (
    <Container>
      <Form ref={form} onSubmit={sendEmail}>
        <LabelDiv>
        <Label>Name</Label>
        <InputName type="text" name="user_name" />
        </LabelDiv>

        <LabelDiv>
        <Label>Email</Label>
        <InputName type="email" name="user_email" />
        </LabelDiv>
        <LabelDiv>
        <Label>Message</Label>
        <Textarea rows="4" name="message" />
        </LabelDiv>
        <SendBtn type="submit" value="Send" />
      </Form>
    </Container>
  ); 
};

export default ContactForm;
