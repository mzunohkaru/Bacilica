import React from 'react'
import { inknutAntique } from '@/app/fonts/googleFonts';

type SubjectPropType = {
  title: string;
};

const Subject = (props: SubjectPropType) => {
  return (
    <h1 className={`px-3 text-xl ${inknutAntique.className}`}>{props.title}</h1>
  )
}

export default Subject
