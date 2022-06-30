import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import contact from './data/contacts.json'

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App" style={{margin:'20px'}}>
      <Header/>
     
      <Contact kontak = {contact[0]}/>
      <Contact kontak = {contact[1]}/>
      <Contact kontak = {contact[2]}/>
      <Contact kontak = {contact[3]}/>
      <Contact kontak = {contact[4]}/>
      <Contact kontak = {contact[5]}/>
      
    </div>
  );
}

export default App;
