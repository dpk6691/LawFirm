import React from "react";
import Faqin from "react-faq-component";

const data = {
  rows: [
    {
      title: "How much is my case worth?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
             ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
             In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
             Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "What should I do right after car accidect",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "How much is my case worth?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
           Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
           Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
           Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
  ],
};

const styles = {
  bgColor: "transperent",
  rowTitleColor: "white",
  rowContentColor: "rgb(113 113 122)",
  rowContentPaddingBottom: "20px",
  arrowColor: "rgb(252 211 77)",
};

const config = {
  animate: true,
  //   arrowIcon: "V",
  tabFocus: true,
};

const Faq = () => {
  return (
    <div className="container pb-28 px-6 md:px-0 m-auto">
      <h2 className="text-white text-4xl pb-20">FAQ</h2>
      <div className="flex flex-col md:flex-row">
        <p className="text-zinc-500 basis-1/2">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <div className="basis-1/2">
          <h3 className="text-white text-xl pb-2">
            Do I need a personal injury report?
          </h3>
          <p className="text-zinc-500 pb-8">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </p>
          <Faqin data={data} styles={styles} config={config} />
        </div>
      </div>
    </div>
  );
};

export default Faq;
