import playIcon from "../assets/icons/icon-play.svg";
import linkIcon from "../assets/icons/icon-new-window.svg";

function getHeadElements(word, phonetic, audio) {
  return (
    <section className="flex justify-between">
      <div>
        <h1 className="text-[64px] font-bold text-dark-500 dark:text-white">
          {word}
        </h1>
        <p className="text-[24px] text-light-purple font-light">{phonetic}</p>
      </div>
      <button disabled={audio === undefined} onClick={() => audio.play()}>
        <img src={playIcon} alt="play icon" />
      </button>
    </section>
  );
}

function getMeaning(meaning, index) {
  return (
    <section key={index}>
      <div className="flex gap-10 py-10">
        <h3 className="text-[24px] h-[26px] leading-[100%] italic font-semibold text-dark-500 dark:text-white">
          {meaning.partOfSpeech}
        </h3>
        <div className="w-full h-[1px] bg-gray-500 my-auto"></div>
      </div>
      <p className="text-[20px] text-gray-700">Meaning</p>
      <ul className="pl-12 text-[18px] py-6 custom-bullet">
        {meaning.definitions.map((definition) => {
          const key = Math.random();
          return (
            <li key={key} className="py-[6px] text-dark-500 dark:text-white">
              {definition.definition}
              {definition.example && (
                <p className="text-gray-700 pt-[6px]">"{definition.example}"</p>
              )}
            </li>
          );
        })}
      </ul>
      {meaning.synonyms.length !== 0 && (
        <p className="mt-4">
          <span className="text-[20px] text-gray-700">Synonyms</span>
          <span className="text-[20px] pl-6 text-light-purple font-semibold">
            {meaning.synonyms.join(", ")}
          </span>
        </p>
      )}
    </section>
  );
}

function getSource(url) {
  return (
    <section>
      <div className="w-full h-[1px] my-2 bg-gray-500"></div>
      <div className="flex gap-8 py-3">
        <p className="text-gray-700 text-[14px]">Source</p>
        <a className="text-dark-500 dark:text-white text-[14px]" href={url}>
          {url}
          <img
            className="inline px-2"
            src={linkIcon}
            alt="open link in blank page icon"
          />
        </a>
      </div>
    </section>
  );
}

export default function DictResult({ result }) {
  const { word, meanings, phonetic, phonetics, sourceUrls } = result[0];
  const audiofile = phonetics.find((item) => item.audio !== "");
  let audio = undefined;
  if (audiofile) {
    audio = new Audio(audiofile.audio);
  }

  return (
    <div>
      {getHeadElements(word, phonetic, audio)}
      {meanings.map((meaning, index) => getMeaning(meaning, index))}
      {getSource(sourceUrls[0])}
    </div>
  );
}
