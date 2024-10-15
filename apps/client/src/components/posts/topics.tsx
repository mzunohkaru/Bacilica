'use client'

import { madimiOne } from '@/app/fonts/googleFonts'
import React from 'react'
import TopicPost from './topicPost'

export type TopicsPropType = {
  thumbnailPath: string;
  iconPath: string;
  title: string;
  content: string;
  tags: string[];
}

type PostRatioType = {
  frame: number
  image: number
  translateX: string
}

const Topics = (props: { posts: TopicsPropType[] }) => {
  const leftSlideRatio: PostRatioType = {
    frame: 60,
    image: 60,
    translateX: "-46vw",
  };
  const centerSlideRatio: PostRatioType = {
    frame: 70,
    image: 30,
    translateX: "15vw",
  };
  const rightSlideRatio: PostRatioType = {
    frame: 60,
    image: 60,
    translateX: "86vw",
  };
  const leftSlideStyle: string[] = [`w-[${leftSlideRatio.frame}vw]`, `h-[${leftSlideRatio.frame}vh]`, `translate-x-[${leftSlideRatio.translateX}]`, `-translate-y-[${(leftSlideRatio.frame - centerSlideRatio.frame) / 2}vh]`];
  const centerSlideStyle: string[] = [`w-[${centerSlideRatio.frame}vw]`, `h-[${centerSlideRatio.frame}vh]`, `translate-x-[${centerSlideRatio.translateX}]`, "center"];
  const rightSlideStyle: string[] = [`w-[${rightSlideRatio.frame}vw]`, `h-[${rightSlideRatio.frame}vh]`, `translate-x-[${rightSlideRatio.translateX}]`, `-translate-y-[${(leftSlideRatio.frame - centerSlideRatio.frame) / 2}vh]`];
  const leftElseSlideStyle: string[] = [`w-[${leftSlideRatio.frame}vw]`, `h-[${leftSlideRatio.frame}vh]`, "translate-x-[-100vw]", `-translate-y-[${(leftSlideRatio.frame - centerSlideRatio.frame) / 2}vh]`];
  const rightElseSlideStyle: string[] = [`w-[${leftSlideRatio.frame}vw]`, `h-[${leftSlideRatio.frame}vh]`, "translate-x-[100vw]", `-translate-y-[${(leftSlideRatio.frame - centerSlideRatio.frame) / 2}vh]`];
  const focusedPointStyle: string[] = ["focus", "bg-[#A60000]"];
  const normalPointStyle: string[] = ["bg-gray-500"];
  const getSlideStyle = (index: number): string[] => {
    if (index == 0)
      return (leftSlideStyle);
    else if (index == 1)
      return (centerSlideStyle);
    else if (index == 2)
      return (rightSlideStyle);
    return (rightElseSlideStyle)
  }

  const slideLeft = () => {
    const activeSlide = document.querySelector('.topics-post.center');
    if (!activeSlide)
      return;
    const nextSlide = activeSlide!.nextElementSibling;
    if (!nextSlide)
      return;
    activeSlide.classList.remove(...centerSlideStyle);
    activeSlide.classList.add(...leftSlideStyle);
    nextSlide.classList.remove(...rightSlideStyle);
    nextSlide.classList.add(...centerSlideStyle);
    const point = document.querySelector(".point.focus");
    if (!point)
      return;
    const nextPoint = point.nextElementSibling;
    if (!nextPoint)
      return;
    point.classList.remove(...focusedPointStyle);
    point.classList.add(...normalPointStyle);
    nextPoint.classList.remove(...normalPointStyle);
    nextPoint.classList.add(...focusedPointStyle);
    const previousSlide = activeSlide!.previousElementSibling;
    if (previousSlide)
    {
      previousSlide.classList.remove(...leftSlideStyle);
      previousSlide.classList.add(...leftElseSlideStyle);
    }
    const afterNextSlide = nextSlide.nextElementSibling;
    if (afterNextSlide)
    {
      afterNextSlide.classList.remove(...rightElseSlideStyle);
      afterNextSlide.classList.add(...rightSlideStyle);
    }
  }

  const slideRight = () => {
    const activeSlide = document.querySelector('.topics-post.center');
    if (!activeSlide)
      return;
    const previousSlide = activeSlide!.previousElementSibling;
    if (!previousSlide)
      return;
    activeSlide.classList.remove(...centerSlideStyle);
    activeSlide.classList.add(...rightSlideStyle);
    previousSlide.classList.remove(...leftSlideStyle);
    previousSlide.classList.add(...centerSlideStyle);
    const point = document.querySelector(".point.focus");
    if (!point)
      return;
    const previousPoint = point.previousElementSibling;
    if (!previousPoint)
      return;
    point.classList.remove(...focusedPointStyle);
    point.classList.add(...normalPointStyle);
    previousPoint.classList.remove(...normalPointStyle);
    previousPoint.classList.add(...focusedPointStyle);
    const nextSlide = activeSlide!.nextElementSibling;
    if (nextSlide)
    {
      nextSlide.classList.remove(...rightSlideStyle);
      nextSlide.classList.add(...rightElseSlideStyle);
    }
    const afterPreviousSlide = previousSlide.previousElementSibling;
    if (afterPreviousSlide)
    {
      afterPreviousSlide.classList.remove(...leftElseSlideStyle);
      afterPreviousSlide.classList.add(...leftSlideStyle);
    }
  }

  return (
    <section className='w-[100vw]'>
      <h1 className={`topics-title mb-3 underline ${madimiOne.className} px-[3vw] py-[1vh]`}>topics</h1>
      <div className='relative'>
        {
          props.posts.map((post, index) => (
            <TopicPost key={index} {...post} frameStyle={getSlideStyle(index)} />
          ))
        }
      </div>
      <div className='h-[70vh]'></div>
      <div className='m-3 flex flex-row justify-center items-center'>
        <button onClick={slideRight} className={`border-r-[length:--topics-arrow-size] border-r-white border-b-[length:--topics-arrow-size] border-b-transparent border-t-[length:--topics-arrow-size] border-t-transparent`}></button>
        <div className='space-x-3 rounded-3xl w-36 h-5 m-2 flex flex-row justify-center items-center'>
          {
            Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className={`point h-3 w-3 rounded-full ${index == 1 ? focusedPointStyle.join(' ') : normalPointStyle.join(' ')}`}></div>
            ))
          }
        </div>
        <button onClick={slideLeft} className={`border-l-[length:--topics-arrow-size] border-l-white border-b-[length:--topics-arrow-size] border-b-transparent border-t-[length:--topics-arrow-size] border-t-transparent`}></button>
      </div>
    </section>
  )
}

export default Topics
