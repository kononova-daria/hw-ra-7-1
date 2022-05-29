import React from 'react';
import DateTimePretty from './DateTimePretty';

export default function Video(props) {
  return (
    <div className="video">en
      <iframe title={props.url} src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscre></iframe>
      <DateTimePretty date={props.date}/>
    </div>
  )
}