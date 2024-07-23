'use client'
import { BodyText, Container, Title } from "@/components/atom";
import { ABOUT_PAGE_CONTENT } from "@/constants";
import { motion, useInView } from 'framer-motion';
import React from "react";

type Props = {};

const OurVision = (props: Props) => {
  const ourVisionContent = ABOUT_PAGE_CONTENT.sectionOne;
  const [progress, setProgress] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const updateCounter = () => {
    let counter = 0;
    const intervalId = setInterval(() => {
      counter = counter < 3 ? counter + 1 : 3;
      setProgress(counter);
    }, 1000);

    setTimeout(() => clearInterval(intervalId), 1000000);
  };

  React.useEffect(() => {
    if (isInView) {
      updateCounter();
    }
  }, [isInView]);

  const calculateHeight = () => {
    switch (progress) {
      case 1:
        return 0;
      case 2:
        return 20;
      case 3:
        return 60;
      default:
        return 0;
    }
  };

  const renderContent = () => (
    <>
      {progress > 0 && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="space-y-[1.6rem]"
        >
          <Title variant="lg" type="h2">
            {ourVisionContent.title}
          </Title>
          <BodyText variant="xs">{ourVisionContent.body}</BodyText>
        </motion.div>
      )}
      {
        progress > 1 && (
          <div className=" space-y-[1.6rem] md:hidden my-[4rem]">
            <Title variant="lg" type="h2">
              {ourVisionContent.articleOne.title}
            </Title>
            <BodyText variant="sm">{ourVisionContent.articleOne.body}</BodyText>
          </div>
        )
      }
      {progress > 2 && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.5 }}
          className="space-y-[1.6rem]"
        >
          <Title variant="lg" type="h3">
            {ourVisionContent.articleTwo.title}
          </Title>
          <BodyText variant="xs">{ourVisionContent.articleTwo.body}</BodyText>
        </motion.div>
      )}
    </>
  );

  const renderSecondaryContent = () => (
    progress > 1 && (
      <motion.article
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 0.7, 1], y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="space-y-[1.6rem] hidden md:block"
      >
        <Title variant="lg" type="h3">
          {ourVisionContent.articleOne.title}
        </Title>
        <BodyText variant="sm">{ourVisionContent.articleOne.body}</BodyText>
      </motion.article>
    )
  );

  const renderTimeline = () => (
    <span className="h-full max-h-[52.4rem] absolute left-1/2 top-0 hidden md:block -translate-x-1/2">
      <div className="w-full h-full flex gap-[22rem] items-center flex-col absolute left-[15px] top-0">
        {progress > 0 && (
          <div className="w-[2.8rem] h-[2.8rem] rounded-full bg-risd-blue-200 -translate-x-1/2 overflow-hidden relative before:absolute before:w-[2rem] before:h-[2rem] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-risd-blue-300 before:rounded-full" />
        )}
        {progress > 1 && (
          <div className="w-[2.8rem] h-[2.8rem] rounded-full bg-risd-blue-200 -translate-x-1/2 -translate-y-20 overflow-hidden relative before:absolute before:w-[2rem] before:h-[2rem] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-risd-blue-300 before:rounded-full" />
        )}
        {progress > 2 && (
          <div className="w-[2.8rem] h-[2.8rem] rounded-full bg-risd-blue-200 -translate-x-1/2 overflow-hidden relative before:absolute before:w-[2rem] before:h-[2rem] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:bg-risd-blue-300 before:rounded-full" />
        )}
      </div>
    </span>
  );

  return (
    <section className="pt-[4rem] bg-grey-alt-2 h-[70.4rem] mb-[10rem] md:mb-0" ref={containerRef}>
      <Container className="min-h-[61rem] grid grid-cols-1 sm:grid-cols-2 items-center relative justify-between gap-[8.2rem]">
        <article className="h-full flex flex-col justify-between col-span-2 md:col-span-1">
          {renderContent()}
        </article>

        {renderSecondaryContent()}

        <motion.span
          initial={{ height: 0 }}
          animate={{ height: `${calculateHeight()}rem` }}
          transition={{ duration: 0.3 }}
          className="h-full border-l-[2px] border-dashed max-h-[52.4rem] absolute left-1/2 top-0 hidden md:block -translate-x-1/2 border-risd-blue-200"
        />
        {renderTimeline()}
      </Container>
    </section>
  );
};

export default OurVision;
