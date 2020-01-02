import React, { useState } from 'react';
import { Container, FormStyles, Profile, ErrorMessage, Message } from './contactme.styled';
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
    const form = e.target;
    console.log(inputs);
    console.log(form.method);
    console.log(form.action);
    const opt = {
      method: form.method,
      data: inputs,
      dataType: 'json',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(form.action, opt)
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
      <h1>
        <ContactMail size="60" /> Contactame y formare parte de tu equipo!
      </h1>
      <Container>
        <FormStyles
          method="POST"
          action="//formspree.io/alirioangelarenas@gmail.com"
          onSubmit={handleOnSubmit}
        >
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
          <label htmlFor="message">Message</label>
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
                ? 'Envia tu mensaje'
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
