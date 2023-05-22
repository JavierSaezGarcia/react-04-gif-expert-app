

export const GifItem = ({id, title, url}) => {
    const titulo= title.trim();
  return (
    <div className="card" key={id}>
        <div key={id}>                    
        <p>{titulo.trim().toUpperCase()}</p>
        <img src={url} alt={title} />
        </div>
    </div>    
  )
}
