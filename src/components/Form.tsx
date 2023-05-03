const Form = () => {

  return (
<form className="bg-black flex flex-col w-3/4 h-1/4 rounded" action="https://getform.io/f/7b823e28-38de-41fd-903a-e48c60dbf937" method="POST">
  <label>Name: 
    <input className="ml-2" type="text" name="name"/>
   </label>
  <br/>
  <label>Email: 
  <input className="ml-2" type="email" name="email"/>
   </label>
  <br/>
  <label>Message: 
   <input className="ml-2" type="text" name="message"/>
  </label>
  <br/>
    
   
    <input type="hidden" name="_gotcha" className="hidden"/>
    
    <input type="hidden" name="subscribe" value="no"/>

    <button className="bg-black" type="submit">Send</button>
</form>
    )
}

export default Form
