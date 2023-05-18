import Portafolio from "../components/Portafolio";
import Services from "../components/Services";
import Promocion from "../components/Promocion";


const Home = () => {

  return (
    <>
      <section className="mb-5" id="hero">
        <div className=" hero hero-container">
          <h1 className="display-1 bg-secondary bg-opacity-50 rounded-4">Bienvenido a ATuServicio</h1>
          <h2 className=" bg-secondary bg-opacity-50 rounded-3">
            Aqui encontraras gran variedad de oferta de servicios y no solo eso!
            Tambien podras publicarte!
          </h2>   
        </div>
      </section>
      <Services/>
      <Portafolio/>
      <Promocion/>  
   


    
            
      
      
    </>
  );
};
export default Home;
