import { FormEvent } from 'react';

const Form = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nameInput = event.currentTarget.elements.namedItem('name') as HTMLInputElement;
    const emailInput = event.currentTarget.elements.namedItem('email') as HTMLInputElement;
    const messageInput = event.currentTarget.elements.namedItem('message') as HTMLInputElement;

    if (nameInput.value.trim() === '') {
      alert('Por favor ingresa tu nombre.');
      return;
    }

    const nameRegex = /^[A-Z][a-z]*( [A-Z][a-z]*)*$/;
    if (!nameRegex.test(nameInput.value)) {
      alert('El nombre debe comenzar con una letra mayúscula.');
      return;
    }

    if (emailInput.value.trim() === '') {
      alert('Por favor ingresa tu correo electrónico.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
      alert('Por favor ingresa un correo electrónico válido.');
      return;
    }

    if (messageInput.value.trim() === '') {
      alert('Por favor ingresa un mensaje.');
      return;
    }

    event.currentTarget.submit();
  };
  return (
    <div className=' flex flex-col items-center'>
      <p>Contact me</p>
      <form
        className="bg-blue-950 bg-opacity-75 md:bg-transparent border-2 border-blue-950 flex flex-col w-full mb:w-3/4 h-80 mb:h-2/5 rounded  hover:shadow-2xl hover:drop-shadow-2xl hover:shadow-blue-500/50"
        action="https://getform.io/f/7b823e28-38de-41fd-903a-e48c60dbf937"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label className="m-3 items cente">
          Nombre:
          <input className="ml-2  w-11/12 text-black" type="text" name="name" />
        </label>

        <label className="m-3 ">
          Correo electrónico:
          <input className="ml-2 w-11/12 text-black" type="email" name="email" />
        </label>

        <label className="m-3 h-52 flex flex-col">
          Mensaje:
          <textarea
            className="ml-2 w-11/12 resize-none text-black h-1/4 m-2"
            name="message"
            rows={10}
            placeholder="Escribe aquí tu mensaje..."
          />
          <button className="hover:shadow-md hover:border-2 hover:rounded mb-8" type="submit">Enviar</button>
        </label>
      </form>
    </div>
  );
};

export default Form;