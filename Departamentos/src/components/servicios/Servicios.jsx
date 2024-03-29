import css from "../servicios/Servicios.module.css"
import React, { Children } from 'react';


 


const Servicios = () => {
            

    return (
        <>
            <section className={css.section}>
                <div className={css.textContainer}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-bgColor mb-8" viewBox="0 0 975.036 975.036">
                        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                    <p className={css.p}>
                        Bienvenidos:
                        <br />
                        <br />
                        Somos una empresa familiar especializada en el alquiler de departamentos por día. Desde 2016, nos hemos dedicado a proporcionar un servicio directo para satisfacer las necesidades de nuestros clientes durante su estadía en nuestra ciudad.
                        <br />
                        Nos esforzamos por ofrecer un alojamiento cómodo y accesible para aquellos que buscan una opción práctica durante su viaje.
                        <br />
                        Nuestros departamentos están diseñados para ofrecer un espacio funcional donde pueda sentirse como en casa durante su estadía. Valoramos la transparencia y la comodidad en nuestro servicio, creando un ambiente acogedor para nuestros huéspedes.
                        <br />
                        <br />
                        Gracias por considerar Pacífico Rentail para su próxima visita.
                    </p>                  
                </div>
            </section>
            <div className="w-screen overflow-hidden h-[200px]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-screen " viewBox="0 0 1440 320"><path fill="#ddddd2" fillOpacity="1" d="M0,96L1440,32L1440,0L0,0Z"></path></svg>
            </div>
        </>
     );
}
 
export default Servicios;

