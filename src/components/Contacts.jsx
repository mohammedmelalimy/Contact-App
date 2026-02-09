import { useState } from 'react';
import '../Style/Contacts.css';
import Contact from './Contact';

const Contacts = () => {

  // List of contacts
  const [contacts, setContacts] = useState([]);

  // Input fields
  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
  });

  // Search input
  const [search, setSearch] = useState("");

  // Add handler
  const addHandler = () => {
    if (!newContact.name || !newContact.phone) return;

    const contactWithId = {
      ...newContact,
      id: Date.now()
    };

    setContacts([...contacts, contactWithId]);
    setNewContact({ name: "", phone: "" });
  };

  // Filtered contacts
  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  // Delete Contact
  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <h1>Contacts App</h1>
      <div className="container">
        <div className="app">
          <div className="addContact">
            <h3>Add Contact</h3>

            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Add Name ...."
                value={newContact.name}
                onChange={(e) =>
                  setNewContact({ ...newContact, name: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Add Phone ...."
                value={newContact.phone}
                onChange={(e) =>
                  setNewContact({ ...newContact, phone: e.target.value })
                }
              />
            </form>

            <button className="add" onClick={addHandler}>
              Add
            </button>
          </div>

          <div className="searchContact">
            <h3>Search Contact</h3>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Search By Name ...."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>

        <div className="added">
          {filteredContacts.length === 0 ? (
            <p className='noContact'>No contacts yet.</p>
          ) : (
            filteredContacts.map((c) => (
              <div key={c.id} className='contact'>
                <Contact name={c.name} phone={c.phone} />
                <button onClick={() => deleteContact(c.id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Contacts;