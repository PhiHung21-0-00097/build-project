import React from "react";

const Map = () => {
  return (
    <section>
      <div className="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d556.4830683732798!2d106.95254772883607!3d11.818909822827806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1svi!2s!4v1718953741955!5m2!1svi!2s"
          className="w-full"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
