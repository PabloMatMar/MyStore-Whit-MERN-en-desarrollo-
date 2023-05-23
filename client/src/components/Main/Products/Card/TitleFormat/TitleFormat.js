import React, { useEffect, useState } from "react";
import minorWordsJSON from './minorWordsArg.json';

const TitleFormat = ({ title }) => {

  const [titleFormat, setTitleFormat] = useState("")
  useEffect(() => {
    const titleCase = () => {
      if (title !== undefined) {
        let minorWords = minorWordsJSON.minorWords.join(' ').toLowerCase();
        setTitleFormat(title
          .toLowerCase()
          .split(' ')
          .map((e, ind) => e
            .split('')
            .map((el, i) => {
              return ind === 0 && i === 0 ? el.toUpperCase() :
                !minorWords.split(' ').includes(e) && i === 0 ? el.toUpperCase() : el.toLowerCase();
            }).join(''))
          .join(' ')
        )
      }
    };
    titleCase();
  }, [title])
  return <>{titleFormat !== "" ? <h4>
    {titleFormat}
  </h4> : <></>}
  </>
};
export default TitleFormat;