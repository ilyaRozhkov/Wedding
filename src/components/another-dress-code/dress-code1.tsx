import React, {useState,forwardRef, type SVGProps} from "react";
import './dress-code1.css';
import item1 from '../../img/dress-code/1.jpg'
import item2 from '../../img/dress-code/2.jpg'
import item3 from '../../img/dress-code/3.jpg'
import item4 from '../../img/dress-code/4.jpg'
import {AnimatePresence, motion, usePresenceData, wrap} from "framer-motion";


const animationStyle = {
    timeOutPagesHidden : {
        y: 20,
        opacity: 0
    },
    timeOutPagesVisible : custom => ({
        y:0,
        opacity: 1,
        transition: {delay : custom *0.7},
    })
}

export const DressCode1 = () =>{
    const items = [0, 1, 2, 3];
    const [selectedItem, setSelectedItem] = useState(items[0])
  const [direction, setDirection] = useState(1)

  function setSlide(newDirection: 1 | -1) {
    console.log('newDirection',newDirection)
    const nextItem = wrap(1, items.length, selectedItem + newDirection)
    console.log('nextItem',)
    setSelectedItem(nextItem)
    setDirection(newDirection)
  }

    return (
        <motion.div initial={'timeOutPagesHidden'}
        whileInView={'timeOutPagesVisible'}   viewport={{ once: true }} className='dress-code-container'>
            <motion.div custom={1} variants={animationStyle} className='dress-code-title'>Дресс-код</motion.div>
            <motion.div custom={1} variants={animationStyle} className='dress-code-text'>Мы очень ждем и с удовольствием готовимся к Нашему дню! Поддержите нас своими улыбками, а также красивыми нарядами в палитре торжества</motion.div>
            <div className='dress-code-color-container'>

            <motion.button
        initial={false}
        aria-label="Previous"
        onClick={() => setSlide(-1)}
        whileTap={{ scale: 0.9 }}
        style={button}
      ><ArrowLeft />
      </motion.button>
      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        <Slide selectedItem={selectedItem}/>
      </AnimatePresence>
      <motion.button
        initial={false}
        aria-label="Next"
        onClick={() => setSlide(1)}
        whileTap={{ scale: 0.9 }}
        style={button}
      ><ArrowRight />
      </motion.button>

            </div>
        </motion.div>
    )
}

const Slide = forwardRef(function Slide(selectedItem, ref) {
    const direction = usePresenceData()
    const itemsIMG = [item1, item2, item3, item4];
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: direction * 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.2,
            type: "spring",
            visualDuration: 0.3,
            bounce: 0.4,
          },
        }}
        exit={{ opacity: 0, x: direction * -50 }}
      >
        <img className='img-color-container' src={itemsIMG[selectedItem.selectedItem]} alt=''/>
      </motion.div>
    )
  })

  function ArrowLeft() {
    return (
        <svg {...iconsProps}>
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
      </svg>
    )
  }
  
  function ArrowRight() {
    return (
        <svg {...iconsProps}>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    )
  }

  const iconsProps: SVGProps<SVGSVGElement> = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  }
  const button: React.CSSProperties = {
    backgroundColor: "var(--hue-5)",
    width: 40,
    height: 40,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
    outlineOffset: 2,
  }