import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  FormStyles,
  Profile,
  ErrorMessage,
  Message,
  MainTitle,
} from './contactme.styled';
import { ContactMail } from 'styled-icons/material/ContactMail';

const Form = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });

      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg },
      });
    }
  };

  const handleOnChange = e => {
    e.persist();
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/mgeodpob',
      data: inputs,
    })
      .then(res => {
        console.log(res);
        handleServerResponse(true, 'Gracias por enviar tu mensaje!');
      })
      .catch(error => {
        handleServerResponse(false, 'Lo siento ha ocurrido un error!');
      });
  };
  return (
    <>
      <MainTitle>
        <ContactMail size="60" /> Contáctame para formar parte de tu equipo!
      </MainTitle>
      <Container id="contact">
        <FormStyles method="POST" onSubmit={handleOnSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            required
            value={inputs.name}
            id="name"
            onChange={handleOnChange}
            type="text"
            name="name"
            placeholder="Nombre"
          />
          <label htmlFor="email">Correo</label>
          <input
            required
            value={inputs.email}
            id="email"
            onChange={handleOnChange}
            type="email"
            name="_replyto"
            placeholder="name@example.com"
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            required
            value={inputs.message}
            id="message"
            onChange={handleOnChange}
            name="message"
            cols="30"
            placeholder="Describe aqui tu mensaje"
            rows="10"
          ></textarea>
          <button type="submit" disabled={status.submitting}>
            {!status.submitting
              ? !status.submitted
                ? 'Envía tu mensaje'
                : 'Enviado'
              : 'Enviando, por favor espere..'}
          </button>

          {status.info.error && (
            <ErrorMessage className="error">Error: {status.info.msg}</ErrorMessage>
          )}
          {!status.info.error && status.info.msg && <Message>{status.info.msg}</Message>}
        </FormStyles>
        <Profile>
          <img src="/images/contact.png" alt="Image profile" />
          <div></div>
        </Profile>
      </Container>
    </>
  );
};

export default Form;
