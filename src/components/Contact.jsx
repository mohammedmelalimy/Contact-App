import '../Style/Contact.css'
const Contact = (props) => {
  return (
    <div className="contactItem">
      <p>Name: {props.name}</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default Contact
