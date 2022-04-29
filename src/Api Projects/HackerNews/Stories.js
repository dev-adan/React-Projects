import React from 'react';
import { useGlobalContext,removeStory } from './context';

const Stories = () => {
    const {isLoading,hits,removeStory} = useGlobalContext();
  if(isLoading){
      return <div className='loading'></div>
  }
  return <section className='stories'>
    {hits.map((story) => {
      const {objectID,title,num_comments,url,points,author} = story
      return <article key={objectID} className='story'>
        <h4 className='title'>{title}</h4>
        <p className='info'>{points} points by <span>{author} \ {num_comments}{' '}</span></p>
        <div className=''>
          <a className='read-link' href={url} target="_blank" rel="noreferrer" >read more</a>
          <button onClick={() => removeStory(objectID)} className='remove-btn'>remove</button>
          </div>
      </article>

    })}

  </section>
}

export default Stories