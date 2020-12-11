import React from 'react';
import CardTemp from './CardTemp';
import './style.css';

function Cardlist({ projects }) {
  const cardComponent = projects.map((project, i) => {
  	return ( 
  	<CardTemp
  	  key={i} 
  	  icon={projects[i].icon} 
  	  title={projects[i].title} 
  	  desc={projects[i].desc} 
  	  link={projects[i].link}
      txt={projects[i].txt} />
  	);
  })

  return (
     <div className='center'>
		   {cardComponent}
     </div>
  );
}

export default Cardlist;


