import PropTypes from 'prop-types';

export const GifItem = ({id, title, url}) => {
    const titulo= title.trim();
  return (
    <div className="card" key={id}>
        <div key={id}>                    
        <p>{titulo.toUpperCase()}</p>
        <img src={url} alt={title} />
        </div>
    </div>    
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}


/*  Tarea:
1. Añadir proptypes a GifItem ??? yarn add Pro

  a. title obligatorio
  b. url obligatorio
2. Hacer y Evaluar el snapshot

*/